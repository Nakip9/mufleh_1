# Vercel Quick Start Guide

Fast deployment guide for experienced users.

---

## Prerequisites

- ✅ GitHub account
- ✅ Vercel account
- ✅ Supabase account and project
- ✅ Code pushed to GitHub

---

## Deployment Steps

### 1. Connect to Vercel

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click **"Add New..."** → **"Import Git Repository"**
3. Connect GitHub (if first time)
4. Select your repository
5. Click **"Import"**

### 2. Configure Project

**Settings:**
- Framework: **Vite** (auto-detected)
- Build Command: `npm run build`
- Output Directory: `dist`
- Root Directory: `.`

Click **"Deploy"**

### 3. Add Environment Variables

**After deployment:**
1. Go to **Settings** → **Environment Variables**
2. Add:
   - `SUPABASE_URL` = `https://tqnalzuyvprpkpbzylvc.supabase.co`
   - `SUPABASE_SERVICE_KEY` = (your service role key)
3. Select all environments (Production, Preview, Development)
4. **Redeploy** from Deployments tab

### 4. Set Up Database

1. Go to Supabase Dashboard
2. Create table `visa_status` with columns:
   - `id` (uuid, primary key)
   - `passport_number` (text, unique)
   - `status` (text, default: 'pending')
   - `created_at` (timestamp)
   - `updated_at` (timestamp)
   - `admin_notes` (text, nullable)

### 5. Test

1. Visit your site: `https://your-project.vercel.app`
2. Test passport check form
3. Test admin panel: `/admin`

---

## API Endpoints

- **Public**: `GET /api/check-visa-status?passport_number=XXX`
- **Admin**: 
  - `POST /api/admin/create-entry`
  - `PUT /api/admin/update-status`
  - `GET /api/admin/list-entries`
  - `DELETE /api/admin/delete-entry`

---

## Troubleshooting

- **Build fails**: Check `vercel.json` and `package.json`
- **API 500 errors**: Verify environment variables
- **404 errors**: Check API routes exist in `api/` folder
- **Database errors**: Verify table exists and variables are correct

For detailed help, see `VERCEL_DEPLOYMENT_GUIDE.md`

---

**Done! Your site is live on Vercel.** 🚀


