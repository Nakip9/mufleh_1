# Services Database Migration Guide

This guide describes how to set up the database to manage "Services" dynamically from the Admin Panel.

## 📋 New Table: `services`

We need to create a new table called `services` to store the content that is currently hardcoded in `src/data/services.js`.

| Column Name            | Type      | Description                                      | Required |
| ---------------------- | --------- | ------------------------------------------------ | -------- |
| `id`                   | uuid      | Unique identifier (auto-generated)               | Yes      |
| `title`                | text      | Service title (e.g., "تفاويض العمالة")          | Yes      |
| `tagline`              | text      | Short tagline/subtitle                           | No       |
| `description`          | text      | Short description                                | No       |
| `detailed_description` | text      | Full detailed description                        | No       |
| `icon`                 | text      | Icon name (from React Icons or similar)          | No       |
| `features`             | jsonb     | List of features (array of strings)              | No       |
| `category`             | text      | Category (e.g., "visa", "hajj")                  | No       |
| `created_at`           | timestamp | Auto-set when record is created                  | Yes      |
| `updated_at`           | timestamp | Auto-updated when record is modified             | Yes      |

## 🚀 Step-by-Step Migration Process

### **Step 1: Run the Migration SQL**

1. Go to your Supabase dashboard.
2. Click **SQL Editor** in the left sidebar.
3. Click **New Query**.
4. Copy and paste the following SQL:

```sql
-- Create the services table
CREATE TABLE IF NOT EXISTS services (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    title text NOT NULL,
    tagline text,
    description text,
    detailed_description text,
    icon text,
    features jsonb DEFAULT '[]'::jsonb,
    category text,
    created_at timestamp WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at timestamp WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable Row Level Security (RLS) - Optional but recommended
-- ALTER TABLE services ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public read access (if RLS is enabled)
-- CREATE POLICY "Allow public read access" ON services FOR SELECT USING (true);

-- Create trigger to update updated_at column
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

DROP TRIGGER IF EXISTS update_services_updated_at ON services;

CREATE TRIGGER update_services_updated_at
    BEFORE UPDATE ON services
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Index for faster category filtering
CREATE INDEX IF NOT EXISTS idx_services_category ON services(category);
```

5. Click **Run** to execute the migration.

### **Step 2: Seed Initial Data (Optional)**

If you want to populate the database with the existing services from `src/data/services.js`, you can run the following SQL. 
*Note: This is a simplified version. You might need to adjust the text if it contains special characters.*

```sql
INSERT INTO services (title, tagline, description, detailed_description, icon, features, category) VALUES
(
    'تفاويض العمالة (مساند)',
    'توثيق واعتماد التفاويض الرسمية',
    'توثيق واعتماد تفاويض التأشيرات عبر منصة مساند بكل سهولة وسرعة.',
    'بصفتنا مكتباً معتمداً، نضمن لك إنهاء جميع إجراءات تفاويض العمالة عبر منصة مساند وتسهيل عملية الربط مع مكاتب الاستقدام الخارجية.',
    'FiFileText',
    '["توثيق فوري", "ربط آلي بمساند", "دعم فني", "إصدار التفاويض الإلكترونية", "متابعة حالة الطلب"]'::jsonb,
    'musaned'
),
(
    'تأشيرات الزيارة العائلية',
    'تخليص تأشيرات الزيارة للأقارب',
    'تسهيل استخراج تأشيرات الزيارة للأقارب من الدرجة الأولى لجمع شمل العائلة.',
    'نتولى كافة إجراءات استخراج تأشيرات الزيارة العائلية للأقارب من الدرجة الأولى (الزوجة، الأبناء، والوالدين)، مع مراجعة دقيقة.',
    'FiUsers',
    '["مراجعة المستندات", "إنجاز سريع", "نسبة قبول عالية", "تجهيز ملف الطلب", "استشارات نظامية مجانية"]'::jsonb,
    'visa'
);
-- You can add more rows here following the same pattern
```

### **Step 3: Verify**

1. Go to **Table Editor** -> `services`.
2. Confirm the table exists and columns are correct.
