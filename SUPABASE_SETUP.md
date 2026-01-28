# Supabase Database Setup Guide

Complete step-by-step guide to set up your Supabase database for the passport status check system.

**What is Supabase?**
- Supabase is a free PostgreSQL database service
- It provides a database, API, and authentication
- Free tier includes 500MB storage and 50K monthly active users
- Perfect for your needs (<30 users/month)

## Step 1: Create Supabase Account

1. Go to [https://supabase.com](https://supabase.com)
2. Click "Start your project" or "Sign up"
3. Sign up with GitHub, Google, or email
4. Verify your email if required

## Step 2: Create a New Project

1. Click "New Project" in the Supabase dashboard
2. Fill in the project details:
   - **Name**: `alnajm-visa-status` (or your preferred name)
   - **Database Password**: Create a strong password (save it securely)
   - **Region**: Choose the region closest to your users
3. Click "Create new project"
4. Wait for the project to be set up (~2 minutes)

## Step 3: Create the Database Table

1. In the Supabase dashboard, click on **"Table Editor"** in the left sidebar
2. Click **"New Table"**
3. Configure the table:
   - **Name**: `visa_status`
   - **Description**: "Stores passport numbers and visa statuses"
4. Add the following columns:

   | Column Name | Type | Default Value | Nullable | Unique |
   |------------|------|---------------|----------|--------|
   | id | uuid | `gen_random_uuid()` | No | Yes (Primary Key) |
   | passport_number | text | - | No | Yes |
   | status | text | `'pending'` | No | No |
   | created_at | timestamp | `now()` | No | No |
   | updated_at | timestamp | `now()` | No | No |
   | admin_notes | text | - | Yes | No |
   | first_name | text | - | Yes | No |
   | last_name | text | - | Yes | No |

5. Click **"Save"** to create the table

## Step 4: Create Updated_at Trigger (Optional but Recommended)

To automatically update the `updated_at` timestamp when a row is modified:

1. Go to **"SQL Editor"** in the left sidebar
2. Click **"New Query"**
3. Paste this SQL:

```sql
-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger to automatically update updated_at
CREATE TRIGGER update_visa_status_updated_at
    BEFORE UPDATE ON visa_status
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();
```

4. Click **"Run"** to execute the query

## Step 5: Set Up Row Level Security (RLS)

Since we're using Netlify Functions with service_role key, we can disable RLS for simplicity:

1. Go to **"Table Editor"**
2. Click on the `visa_status` table
3. Click on **"Policies"** tab
4. For now, you can leave RLS disabled (we're securing via Netlify Functions)

**Note**: For production, consider enabling RLS with appropriate policies.

## Step 6: Get API Credentials

1. Go to **"Settings"** (gear icon) in the left sidebar
2. Click on **"API"**
3. Copy the following values:
   - **Project URL**: `https://xxxxx.supabase.co`
   - **service_role key**: (Keep this SECRET - used in Netlify Functions)
   - **anon public key**: (Optional - for client-side if needed)

## Step 7: Add Environment Variables to Netlify

1. Go to your Netlify dashboard
2. Select your site
3. Go to **"Site settings"** → **"Environment variables"**
4. Click **"Add variable"** and add:

   - **Key**: `SUPABASE_URL`
   - **Value**: Your Supabase Project URL (from Step 6)

5. Click **"Add variable"** again and add:

   - **Key**: `SUPABASE_SERVICE_KEY`
   - **Value**: Your service_role key (from Step 6)
   - **Sensitive**: Check this box to hide the value

6. Click **"Save"**

## Step 8: Test the Setup

1. In Supabase dashboard, go to **"Table Editor"**
2. Click on `visa_status` table
3. Click **"Insert row"** to manually add a test entry:
   - passport_number: `TEST123`
   - status: `ready`
   - admin_notes: `Test entry`
4. Click **"Save"**
5. Test the public check form on your website with passport number `TEST123`

## Troubleshooting

### Issue: Functions can't connect to Supabase
- **Solution**: Verify environment variables are set correctly in Netlify
- Check that `SUPABASE_URL` and `SUPABASE_SERVICE_KEY` are correct
- Redeploy your site after adding environment variables

### Issue: "Table does not exist" error
- **Solution**: Verify the table name is exactly `visa_status` (case-sensitive)
- Check that you're in the correct project

### Issue: "Permission denied" error
- **Solution**: Ensure you're using the `service_role` key, not the `anon` key
- The service_role key bypasses RLS

## Next Steps

After completing this setup:
1. Deploy your site to Netlify
2. Test the passport check functionality
3. Access the admin panel at `/admin` to manage entries
4. Add your first passport entries through the admin panel
5. If upgrading, run this SQL:
   ```sql
   ALTER TABLE visa_status 
   ADD COLUMN first_name text,
   ADD COLUMN last_name text;
   ```

## Security Notes

- **Never commit** your Supabase service_role key to Git
- Always use environment variables for sensitive data
- Consider enabling RLS in production for additional security
- Regularly rotate your database password
- Monitor your Supabase usage in the dashboard

## Support

If you encounter issues:
1. Check Supabase dashboard logs
2. Check Netlify function logs
3. Verify all environment variables are set correctly
4. Ensure your Netlify Functions are deployed correctly

