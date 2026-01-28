# 🚀 Ultimate Guide: Deploying Your Website to Vercel (Step-by-Step)

This guide takes you from zero to a fully working, live website with a database and admin panel.

---

## 🛠️ Phase 1: Database Setup (Supabase)

Before deploying, we need a place to store your data (passports, content, etc.).

1.  **Create Account:**
    *   Go to **[supabase.com](https://supabase.com)** and sign up (use GitHub if possible).

2.  **Create Project:**
    *   Click **"New Project"**.
    *   **Name:** `alnajm-website`
    *   **Database Password:** **IMPORTANT!** Click "Generate a password" and **COPY IT** to a safe place immediately.
    *   **Region:** Choose `Middle East (Bahrain)` or `Europe (Frankfurt)`.
    *   Click **"Create new project"** and wait ~2 minutes.

3.  **Run the Magic SQL Code:**
    *   In Supabase, look at the left sidebar and click **"SQL Editor"** (icon: `>_`).
    *   Click **"New Query"**.
    *   **Copy the code below** and paste it into the box:

```sql
-- 1. Create the content table (for Services, Destinations, etc.)
CREATE TABLE IF NOT EXISTS site_content (
    key text PRIMARY KEY,
    content jsonb NOT NULL,
    updated_at timestamp WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Create the visa status table (for Passport checking)
CREATE TABLE IF NOT EXISTS visa_status (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    passport_number text UNIQUE NOT NULL,
    status text NOT NULL DEFAULT 'pending',
    admin_notes text,
    first_name text,
    last_name text,
    visa_type text,
    passport_received_date date,
    embassy_submit_date date,
    expected_exit_date date,
    created_at timestamp DEFAULT now(),
    updated_at timestamp DEFAULT now()
);

-- 3. Set up auto-updating timestamps
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_site_content_updated_at
    BEFORE UPDATE ON site_content
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_visa_status_updated_at
    BEFORE UPDATE ON visa_status
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- 4. Fill with default empty data
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

    *   Click **"Run"** (bottom right). It should say "Success".

4.  **Get Your Keys:**
    *   Click the **Settings icon (⚙️)** at the bottom left.
    *   Click **"API"**.
    *   **COPY** the `Project URL`.
    *   **COPY** the `service_role` key (reveal it first). **Keep this secret!**

---

## 🚀 Phase 2: Deploy to Vercel

Now we put your code on the internet.

1.  **Create Vercel Account:**
    *   Go to **[vercel.com](https://vercel.com)** and sign up with GitHub.

2.  **Import Project:**
    *   Click **"Add New..."** -> **"Project"**.
    *   Select your GitHub repository (`vercel_najm_1_trial` or whatever you named it).
    *   Click **"Import"**.

3.  **Configure Project:**
    *   **Framework Preset:** It should auto-detect `Vite`. If not, select it.
    *   **Root Directory:** `./` (Leave default).
    *   **Build Command:** `npm run build` (Leave default).
    *   **Output Directory:** `dist` (Leave default).

4.  **Add Environment Variables (Crucial!):**
    *   Expand the **"Environment Variables"** section.
    *   Add the following (using the values you copied from Supabase):
        *   **Key:** `SUPABASE_URL`
        *   **Value:** `[Paste your Project URL]`
        *   Click **Add**.
        *   **Key:** `SUPABASE_SERVICE_KEY`
        *   **Value:** `[Paste your service_role Key]`
        *   Click **Add**.

5.  **Deploy:**
    *   Click **"Deploy"**.
    *   Wait a minute. You should see confetti! 🎉

---

## 🚦 Phase 3: Final Checks & First Run

1.  **Visit Your Live Site:**
    *   Vercel will give you a domain (e.g., `alnajm-travel.vercel.app`). Click it.

2.  **Access the Admin Panel:**
    *   Go to `https://your-site.vercel.app/admin`.
    *   You should see the dashboard.

3.  **Initialize Content:**
    *   Go to the **"إدارة المحتوى" (Content Management)** tab.
    *   It might look empty initially.
    *   Fill in the "Company Info" (Name, Slogan) and click **"Save Changes"**.
    *   Go back to your homepage. Refresh. The new name should appear!

4.  **Test Passport Check:**
    *   Go to "Visa Status" tab in Admin.
    *   Add a test passport: `TEST-123`.
    *   Go to the Homepage.
    *   Enter `TEST-123` in the search box. It should show the status!

---

## 🆘 Troubleshooting

*   **"API Error" or "Failed to fetch":**
    *   You probably missed an Environment Variable.
    *   Go to Vercel -> Project Settings -> Environment Variables.
    *   Check if `SUPABASE_URL` and `SUPABASE_SERVICE_KEY` are correct.
    *   **IMPORTANT:** After changing variables, go to "Deployments" and **Redeploy** the latest commit.

*   **"Table does not exist":**
    *   You didn't run the SQL code in Supabase. Go back to Phase 1, Step 3.

*   **Changes not showing on site:**
    *   Try refreshing the page (Ctrl+R).
    *   Ensure you clicked "Save Changes" in the Admin Panel.