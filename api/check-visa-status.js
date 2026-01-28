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
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
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

  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Get passport number from query string
    const passportNumber = req.query?.passport_number;

    if (!passportNumber || passportNumber.trim() === '') {
      return res.status(400).json({ error: 'Passport number is required' });
    }

    // Sanitize input (basic validation)
    const sanitizedPassport = passportNumber.trim().toUpperCase();

    // Query database
    const { data, error } = await supabase
      .from('visa_status')
      .select('id, passport_number, status, created_at, updated_at, admin_notes, first_name, last_name, visa_type, passport_received_date, embassy_submit_date, expected_exit_date')
      .eq('passport_number', sanitizedPassport)
      .single();

    if (error) {
      // If no record found, return not found status
      if (error.code === 'PGRST116') {
        return res.status(404).json({
          found: false,
          message: 'Passport number not found in our system',
        });
      }

      // Other database errors
      console.error('Database error:', error);
      return res.status(500).json({ error: 'Database error occurred' });
    }

    // Return the status
    return res.status(200).json({
      found: true,
      passport_number: data.passport_number,
      status: data.status,
      updated_at: data.updated_at,
      admin_notes: data.admin_notes || null,
      first_name: data.first_name || null,
      last_name: data.last_name || null,
      visa_type: data.visa_type || null,
      passport_received_date: data.passport_received_date || null,
      embassy_submit_date: data.embassy_submit_date || null,
      expected_exit_date: data.expected_exit_date || null,
    });
  } catch (error) {
    console.error('Unexpected error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

