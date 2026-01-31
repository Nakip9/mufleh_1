import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

export default async function handler(req, res) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const { title, description, type, image_url, price } = req.body;

    if (!title || !type || !image_url) {
      return res.status(400).json({ error: 'Title, Type and Image URL are required' });
    }

    const { data, error } = await supabase
      .from('offers_gallery')
      .insert([{ title, description, type, image_url, price }])
      .select();

    if (error) throw error;

    return res.status(200).json({ success: true, data });

  } catch (error) {
    console.error('Error creating offer:', error);
    return res.status(500).json({ error: 'Failed to create entry' });
  }
}
