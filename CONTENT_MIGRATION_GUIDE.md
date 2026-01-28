# Content Management System Migration Guide

This guide sets up the database table required to make your website content editable from the Admin Panel.

## 📋 New Table: `site_content`

We will create a key-value store table to hold different sections of your website data (e.g., 'company_info', 'destinations', 'testimonials').

| Column Name  | Type      | Description                                      |
| ------------ | --------- | ------------------------------------------------ |
| `key`        | text      | Unique identifier for the content section (PK)   |
| `content`    | jsonb     | The actual data in JSON format                   |
| `updated_at` | timestamp | Last modification time                           |

## 🚀 Step-by-Step Migration

1.  Go to your **Supabase Dashboard**.
2.  Click **SQL Editor** in the left sidebar.
3.  Click **New Query**.
4.  Copy and paste the following SQL code:

```sql
-- Create the site_content table
CREATE TABLE IF NOT EXISTS site_content (
    key text PRIMARY KEY,
    content jsonb NOT NULL,
    updated_at timestamp WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable Row Level Security (RLS) - Optional but recommended
-- ALTER TABLE site_content ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public read access
-- CREATE POLICY "Allow public read access" ON site_content FOR SELECT USING (true);

-- Create a function to automatically update the 'updated_at' column
CREATE OR REPLACE FUNCTION update_content_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create the trigger
DROP TRIGGER IF EXISTS update_site_content_updated_at ON site_content;
CREATE TRIGGER update_site_content_updated_at
    BEFORE UPDATE ON site_content
    FOR EACH ROW
    EXECUTE FUNCTION update_content_updated_at();

-- Seed initial empty rows so the admin panel has something to update
-- (We use 'ON CONFLICT DO NOTHING' to avoid errors if run multiple times)
INSERT INTO site_content (key, content) VALUES
('company_info', '{}'),
('contact_info', '{}'),
('social_links', '{}'),
('destinations', '[]'),
('testimonials', '[]'),
('faqs', '[]'),
('services', '[]')
ON CONFLICT (key) DO NOTHING;
```

5.  Click **Run**.

## ✅ Verification
1.  Go to the **Table Editor**.
2.  Open the `site_content` table.
3.  You should see rows for `company_info`, `destinations`, etc.
