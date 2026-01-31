import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY;

// Mock data to return if DB is not set up or table is missing
const MOCK_OFFERS = [
  {
    id: 1,
    title: "عرض شهر العسل - المالديف",
    description: "استمتع بإقامة فاخرة لمدة 5 أيام في منتجع فوق الماء مع وجبات كاملة.",
    type: "offer",
    image_url: "/beach.jpg",
    price: "4500 ر.س",
    created_at: new Date().toISOString()
  },
  {
    id: 2,
    title: "رحلة إسطنبول التاريخية",
    description: "جولة سياحية شاملة لزيارة المعالم التاريخية والبوسفور.",
    type: "offer",
    image_url: "/istanbul.jpeg",
    price: "2000 ر.س",
    created_at: new Date().toISOString()
  },
  {
    id: 3,
    title: "فندق برج الساعة",
    description: "صور من إقامتنا المميزة لعملائنا في مكة المكرمة.",
    type: "gallery",
    image_url: "/hero_makkah_background_1764893075599.jpg",
    price: null,
    created_at: new Date().toISOString()
  },
  {
    id: 4,
    title: "مجموعة سياحية في لندن",
    description: "لقطات من رحلتنا الجماعية الأخيرة إلى لندن.",
    type: "gallery",
    image_url: "/london.jpeg",
    price: null,
    created_at: new Date().toISOString()
  },
   {
    id: 5,
    title: "عرض دبي للتسوق",
    description: "تذكرة طيران + فيزا + فندق 4 نجوم لمدة 4 ليالي.",
    type: "offer",
    image_url: "/dubai.jpg",
    price: "1800 ر.س",
    created_at: new Date().toISOString()
  }
];

export default async function handler(req, res) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  // If Supabase is not configured, return mock data immediately
  if (!supabaseUrl || !supabaseKey) {
    console.warn('Supabase not configured, returning mock offers.');
    return res.status(200).json({ success: true, data: MOCK_OFFERS, source: 'mock' });
  }

  const supabase = createClient(supabaseUrl, supabaseKey);

  try {
    const { data, error } = await supabase
      .from('offers_gallery')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      // If table doesn't exist (Postgres error 42P01), return mock data
      if (error.code === '42P01') {
        console.warn('Table offers_gallery not found, returning mock data.');
        return res.status(200).json({ success: true, data: MOCK_OFFERS, source: 'mock_fallback' });
      }
      throw error;
    }

    return res.status(200).json({ success: true, data: data, source: 'database' });

  } catch (err) {
    console.error('Error fetching offers:', err);
    // Fallback on error to ensure page works
    return res.status(200).json({ success: true, data: MOCK_OFFERS, source: 'error_fallback' });
  }
}
