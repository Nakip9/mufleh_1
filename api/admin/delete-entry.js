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
  'Access-Control-Allow-Methods': 'DELETE, OPTIONS',
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

  // Only allow DELETE requests
  if (req.method !== 'DELETE') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Get ID from query string or body
    const id = req.query?.id || req.body?.id;

    if (!id) {
      return res.status(400).json({ error: 'Entry ID is required' });
    }

    // Delete from database
    const { data, error } = await supabase
      .from('visa_status')
      .delete()
      .eq('id', id)
      .select()
      .single();

    if (error) {
      if (error.code === 'PGRST116') {
        return res.status(404).json({ error: 'Entry not found' });
      }

      console.error('Database error:', error);
      return res.status(500).json({ error: 'Failed to delete entry' });
    }

    // Return success
    return res.status(200).json({
      success: true,
      message: 'Entry deleted successfully',
      data: {
        id: data.id,
        passport_number: data.passport_number,
      },
    });
  } catch (error) {
    console.error('Unexpected error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

