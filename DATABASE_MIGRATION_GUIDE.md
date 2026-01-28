# Database Migration Guide - Adding New Columns

This guide will walk you through adding the new visa-related columns to your Supabase database.

## 📋 New Columns Added

| Column Name              | Type      | Description                           | Required |
| ------------------------ | --------- | ------------------------------------- | -------- |
| `created_at`             | timestamp | Auto-set when record is created       | Yes      |
| `updated_at`             | timestamp | Auto-updated when record is modified  | Yes      |
| `visa_type`              | text      | Type of visa (زيارة, عمل, عمرة, أخرى) | No       |
| `passport_received_date` | date      | Date agency received the passport     | No       |
| `embassy_submit_date`    | date      | Date passport will be sent to embassy | No       |
| `expected_exit_date`     | date      | Expected date to exit from embassy    | No       |

## 🚀 Step-by-Step Migration Process

### **Step 1: Backup Your Current Data (IMPORTANT!)**

Before making any changes, backup your existing data:

1. Go to your Supabase dashboard
2. Navigate to **Table Editor** → `visa_status`
3. Click the **Export** button (top right)
4. Download as CSV
5. Save this file in a safe location

### **Step 2: Run the Migration SQL**

1. In Supabase dashboard, click **SQL Editor** in the left sidebar
2. Click **New Query**
3. Copy and paste the following SQL:

```sql
-- Add the new columns to visa_status table
ALTER TABLE visa_status
ADD COLUMN IF NOT EXISTS created_at timestamp DEFAULT now(),
ADD COLUMN IF NOT EXISTS updated_at timestamp DEFAULT now(),
ADD COLUMN IF NOT EXISTS visa_type text CHECK (visa_type IN ('زيارة', 'عمل', 'عمرة', 'أخرى')),
ADD COLUMN IF NOT EXISTS passport_received_date date,
ADD COLUMN IF NOT EXISTS embassy_submit_date date,
ADD COLUMN IF NOT EXISTS expected_exit_date date;

-- Create or replace the trigger function for auto-updating updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Drop the trigger if it exists, then recreate it
DROP TRIGGER IF EXISTS update_visa_status_updated_at ON visa_status;

CREATE TRIGGER update_visa_status_updated_at
    BEFORE UPDATE ON visa_status
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Add comments to document the new columns
COMMENT ON COLUMN visa_status.visa_type IS 'Type of visa: زيارة (visit), عمل (work), عمرة (umrah), أخرى (other)';
COMMENT ON COLUMN visa_status.passport_received_date IS 'Date when agency received the passport';
COMMENT ON COLUMN visa_status.embassy_submit_date IS 'Date when passport will be sent to embassy';
COMMENT ON COLUMN visa_status.expected_exit_date IS 'Expected date to exit from embassy';
```

4. Click **Run** to execute the migration
5. You should see "Success. No rows returned"

### **Step 3: Verify the Migration**

1. Go to **Table Editor** → `visa_status`
2. Check that all new columns appear:

   - ✅ `created_at`
   - ✅ `updated_at`
   - ✅ `visa_type`
   - ✅ `passport_received_date`
   - ✅ `embassy_submit_date`
   - ✅ `expected_exit_date`

3. Click **Insert row** to test adding a new entry with the new fields

### **Step 4: Test the Updated API**

The API has been updated to support the new fields. Test it:

#### **Create Entry Test:**

```bash
curl -X POST https://your-site.vercel.app/api/admin/create-entry \
  -H "Content-Type: application/json" \
  -d '{
    "passport_number": "TEST123",
    "status": "pending",
    "first_name": "أحمد",
    "last_name": "محمد",
    "visa_type": "عمل",
    "passport_received_date": "2025-12-29",
    "embassy_submit_date": "2026-01-05",
    "expected_exit_date": "2026-01-15",
    "admin_notes": "Test entry with new fields"
  }'
```

### **Step 5: Update Your Frontend Admin Panel**

The admin panel needs to be updated to show and edit these new fields. See the next section for frontend updates.

---

## 🎨 Visa Type Options (Arabic)

The `visa_type` field accepts only these values:

| Arabic | English Translation |
| ------ | ------------------- |
| زيارة  | Visit               |
| عمل    | Work                |
| عمرة   | Umrah               |
| أخرى   | Other               |

---

## 🔄 How to Reset/Restart Your Database

If you need to completely reset your database:

### **Option 1: Delete All Data (Keep Structure)**

```sql
-- Delete all rows from the table
DELETE FROM visa_status;

-- Reset the sequence if needed
-- (This ensures IDs start from 1 again)
ALTER SEQUENCE visa_status_id_seq RESTART WITH 1;
```

### **Option 2: Drop and Recreate Table (Complete Reset)**

> ⚠️ **WARNING**: This will delete ALL data permanently!

```sql
-- Drop the table completely
DROP TABLE IF EXISTS visa_status CASCADE;

-- Recreate the table with all columns
CREATE TABLE visa_status (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    passport_number text UNIQUE NOT NULL,
    status text NOT NULL DEFAULT 'pending',
    admin_notes text,
    first_name text,
    last_name text,
    visa_type text CHECK (visa_type IN ('زيارة', 'عمل', 'عمرة', 'أخرى')),
    passport_received_date date,
    embassy_submit_date date,
    expected_exit_date date,
    created_at timestamp NOT NULL DEFAULT now(),
    updated_at timestamp NOT NULL DEFAULT now()
);

-- Recreate the trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_visa_status_updated_at
    BEFORE UPDATE ON visa_status
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Add indexes for better performance
CREATE INDEX idx_visa_status_passport ON visa_status(passport_number);
CREATE INDEX idx_visa_status_status ON visa_status(status);
CREATE INDEX idx_visa_status_updated_at ON visa_status(updated_at DESC);
```

---

## ✅ Post-Migration Checklist

- [ ] Backup completed
- [ ] Migration SQL executed successfully
- [ ] New columns visible in Table Editor
- [ ] Test entry created with new fields
- [ ] API endpoints tested (create, update, list)
- [ ] Frontend admin panel updated
- [ ] Deployed to Vercel
- [ ] Tested in production

---

## 🆘 Troubleshooting

### Issue: "Column already exists" error

**Solution**: The migration uses `ADD COLUMN IF NOT EXISTS`, so this shouldn't happen. If it does, the column was already added.

### Issue: "Check constraint violated" for visa_type

**Solution**: Make sure you're using one of the exact Arabic values: `زيارة`, `عمل`, `عمرة`, or `أخرى`

### Issue: Date format errors

**Solution**: Use ISO format `YYYY-MM-DD` for all dates (e.g., `2025-12-29`)

### Issue: updated_at not auto-updating

**Solution**: Make sure the trigger was created successfully. Re-run the trigger creation SQL.

---

## 📞 Support

If you encounter any issues:

1. Check the Supabase logs in the dashboard
2. Check your browser console for errors
3. Verify environment variables are set correctly
4. Ensure you're using the latest code from the repository
