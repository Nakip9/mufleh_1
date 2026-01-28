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
  'Access-Control-Allow-Methods': 'PUT, OPTIONS',
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

  // Only allow PUT requests
  if (req.method !== 'PUT') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Parse request body
    const { 
      id, 
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
    if (!id) {
      return res.status(400).json({ error: 'Entry ID is required' });
    }

    const validStatuses = ['pending', 'in_embassy', 'ready', 'in_aden'];
    if (status && !validStatuses.includes(status)) {
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

    // Build update object
    const updateData = {
      updated_at: new Date().toISOString(),
    };

    if (status) {
      updateData.status = status;
    }

    if (admin_notes !== undefined) {
      updateData.admin_notes = admin_notes ? admin_notes.trim() : null;
    }

    if (first_name !== undefined) {
      updateData.first_name = first_name ? first_name.trim() : null;
    }

    if (last_name !== undefined) {
      updateData.last_name = last_name ? last_name.trim() : null;
    }

    if (visa_type !== undefined) {
      updateData.visa_type = visa_type ? visa_type.trim() : null;
    }

    if (passport_received_date !== undefined) {
      updateData.passport_received_date = passport_received_date || null;
    }

    if (embassy_submit_date !== undefined) {
      updateData.embassy_submit_date = embassy_submit_date || null;
    }

    if (expected_exit_date !== undefined) {
      updateData.expected_exit_date = expected_exit_date || null;
    }

    // Update database
    const { data, error } = await supabase
      .from('visa_status')
      .update(updateData)
      .eq('id', id)
      .select()
      .single();

    if (error) {
      if (error.code === 'PGRST116') {
        return res.status(404).json({ error: 'Entry not found' });
      }

      console.error('Database error:', error);
      return res.status(500).json({ error: 'Failed to update entry' });
    }

    // Return success
    return res.status(200).json({
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

