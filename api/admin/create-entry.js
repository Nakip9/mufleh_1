import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables');
}

const supabase = createClient(supabaseUrl, supabaseKey);

// CORS headers helper
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export default async function handler(req, res) {
  // Set CORS headers for all responses
  Object.keys(corsHeaders).forEach(key => {
    res.setHeader(key, corsHeaders[key]);
  });

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Parse request body
    const { 
      passport_number, 
      status, 
      admin_notes, 
      first_name, 
      last_name,
      visa_type,
      passport_received_date,
      embassy_submit_date,
      expected_exit_date
    } = req.body;

    // Validation
    if (!passport_number || passport_number.trim() === '') {
      return res.status(400).json({ error: 'Passport number is required' });
    }

    const validStatuses = ['pending', 'in_embassy', 'ready', 'in_aden'];
    const entryStatus = status || 'pending';

    if (!validStatuses.includes(entryStatus)) {
      return res.status(400).json({
        error: 'Invalid status. Must be: pending, in_embassy, ready, or in_aden',
      });
    }

    // Validate visa type if provided
    const validVisaTypes = ['زيارة', 'عمل', 'عمرة', 'أخرى'];
    if (visa_type && !validVisaTypes.includes(visa_type)) {
      return res.status(400).json({
        error: 'Invalid visa type. Must be: زيارة, عمل, عمرة, or أخرى',
      });
    }

    // Sanitize input
    const sanitizedPassport = passport_number.trim().toUpperCase();
    const sanitizedNotes = admin_notes ? admin_notes.trim() : null;
    const sanitizedFirstName = first_name ? first_name.trim() : null;
    const sanitizedLastName = last_name ? last_name.trim() : null;
    const sanitizedVisaType = visa_type ? visa_type.trim() : null;

    // Insert into database
    const { data, error } = await supabase
      .from('visa_status')
      .insert({
        passport_number: sanitizedPassport,
        status: entryStatus,
        admin_notes: sanitizedNotes,
        first_name: sanitizedFirstName,
        last_name: sanitizedLastName,
        visa_type: sanitizedVisaType,
        passport_received_date: passport_received_date || null,
        embassy_submit_date: embassy_submit_date || null,
        expected_exit_date: expected_exit_date || null,
      })
      .select()
      .single();

    if (error) {
      // Check if passport number already exists
      if (error.code === '23505') {
        return res.status(409).json({
          error: 'Passport number already exists in the system',
        });
      }

      console.error('Database error:', error);
      return res.status(500).json({ error: 'Failed to create entry' });
    }

    // Return success
    return res.status(201).json({
      success: true,
      data: {
        id: data.id,
        passport_number: data.passport_number,
        status: data.status,
        admin_notes: data.admin_notes,
        first_name: data.first_name,
        last_name: data.last_name,
        visa_type: data.visa_type,
        passport_received_date: data.passport_received_date,
        embassy_submit_date: data.embassy_submit_date,
        expected_exit_date: data.expected_exit_date,
        created_at: data.created_at,
        updated_at: data.updated_at,
      },
    });
  } catch (error) {
    console.error('Unexpected error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

