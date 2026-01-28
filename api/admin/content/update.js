import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables');
}

const supabase = createClient(supabaseUrl, supabaseKey);

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export default async function handler(req, res) {
  Object.keys(corsHeaders).forEach(key => {
    res.setHeader(key, corsHeaders[key]);
  });

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { key, content } = req.body;

    if (!key || !content) {
      return res.status(400).json({ error: 'Key and content are required' });
    }

    const { data, error } = await supabase
      .from('site_content')
      .upsert({ key, content, updated_at: new Date().toISOString() })
      .select();

    if (error) {
      console.error('Database error:', error);
      return res.status(500).json({ error: 'Failed to update content' });
    }

    return res.status(200).json({
      success: true,
      data: data[0],
    });
  } catch (error) {
    console.error('Unexpected error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
