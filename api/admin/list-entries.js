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
    // Get query parameters for pagination and filtering
    const page = parseInt(req.query?.page || '1', 10);
    const limit = parseInt(req.query?.limit || '50', 10);
    const statusFilter = req.query?.status;
    const search = req.query?.search;

    // Validate pagination
    const pageNum = Math.max(1, page);
    const limitNum = Math.min(100, Math.max(1, limit)); // Max 100 per page
    const offset = (pageNum - 1) * limitNum;

    // Build query
    let query = supabase
      .from('visa_status')
      .select('id, passport_number, status, created_at, updated_at, admin_notes, first_name, last_name, visa_type, passport_received_date, embassy_submit_date, expected_exit_date', {
        count: 'exact',
      })
      .order('updated_at', { ascending: false });

    // Apply status filter
    if (statusFilter && ['pending', 'in_embassy', 'ready', 'in_aden'].includes(statusFilter)) {
      query = query.eq('status', statusFilter);
    }

    // Apply search filter (search in passport number)
    if (search && search.trim() !== '') {
      query = query.ilike('passport_number', `%${search.trim()}%`);
    }

    // Apply pagination
    query = query.range(offset, offset + limitNum - 1);

    // Execute query
    const { data, error, count } = await query;

    if (error) {
      console.error('Database error:', error);
      return res.status(500).json({ error: 'Failed to fetch entries' });
    }

    // Return results
    return res.status(200).json({
      success: true,
      data: data || [],
      pagination: {
        page: pageNum,
        limit: limitNum,
        total: count || 0,
        totalPages: Math.ceil((count || 0) / limitNum),
      },
    });
  } catch (error) {
    console.error('Unexpected error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

