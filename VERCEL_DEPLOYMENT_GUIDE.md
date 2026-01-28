# Vercel Deployment Guide - Complete Step-by-Step Instructions

Complete illustrated guide for deploying your passport status check system to Vercel.

---

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Step 1: Create Vercel Account](#step-1-create-vercel-account)
3. [Step 2: Prepare Your Project](#step-2-prepare-your-project)
4. [Step 3: Deploy to Vercel](#step-3-deploy-to-vercel)
5. [Step 4: Configure Environment Variables](#step-4-configure-environment-variables)
6. [Step 5: Set Up Database](#step-5-set-up-database)
7. [Step 6: Test Your Deployment](#step-6-test-your-deployment)
8. [Troubleshooting](#troubleshooting)

---

## Prerequisites

Before starting, ensure you have:

- ✅ **GitHub account** (free - [github.com](https://github.com))
- ✅ **Vercel account** (free - we'll create it in Step 1)
- ✅ **Supabase account** (already set up)
- ✅ **Node.js installed** (version 18 or higher)
- ✅ **Git installed** on your computer

**Why these are needed:**
- **GitHub**: Vercel works best with Git repositories for automatic deployments
- **Vercel**: Hosting platform for your application
- **Supabase**: Database for storing passport data
- **Node.js**: Required to build and run the project

---

## Step 1: Create Vercel Account

### Visual Guide: Account Creation

**Location:** [https://vercel.com](https://vercel.com)

**What you'll see:**
- Vercel homepage with a prominent "Sign Up" button in the top right corner
- Multiple sign-up options available

### Detailed Steps:

1. **Navigate to Vercel**
   - Open your web browser
   - Go to: `https://vercel.com`
   - You'll see the Vercel homepage

2. **Click Sign Up**
   - Look for the **"Sign Up"** button in the top right corner of the page
   - It's usually next to a "Log In" button
   - Click on it

3. **Choose Sign-Up Method**
   You'll see three options:
   
   **Option A: Sign up with GitHub (Recommended)**
   - Click the **"Continue with GitHub"** button
   - This is the easiest method and recommended for developers
   - You'll be redirected to GitHub to authorize
   - Click **"Authorize Vercel"** on the GitHub page
   - Your Vercel account will be created automatically
   
   **Option B: Sign up with GitLab**
   - Similar to GitHub, click **"Continue with GitLab"**
   - Authorize the connection
   
   **Option C: Sign up with Email**
   - Click **"Sign up with Email"**
   - Enter your email address
   - Create a password
   - Verify your email address

4. **Complete Setup**
   - After signing up, you'll be taken to the Vercel dashboard
   - You might see a welcome screen or onboarding flow
   - Follow any prompts to complete your profile (optional)

**What you'll see after signup:**
- Vercel dashboard with a sidebar on the left
- "Add New..." button or "Import Project" button
- Empty project list (if this is your first project)

**Free Tier Benefits:**
- ✅ Unlimited personal projects
- ✅ 100GB bandwidth per month
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Preview deployments for every commit
- ✅ Perfect for your needs (<30 users/month)

---

## Step 2: Prepare Your Project

### Option A: Using GitHub (Recommended)

**Why GitHub?**
- Automatic deployments on every push
- Preview deployments for pull requests
- Easy collaboration
- Version control

#### 2.1: Create GitHub Repository

**Visual Guide:**
- GitHub homepage: [https://github.com](https://github.com)
- Look for a **"+"** icon in the top right corner
- Click it to see a dropdown menu

**Steps:**

1. **Go to GitHub**
   - Navigate to [https://github.com](https://github.com)
   - Log in to your account

2. **Create New Repository**
   - Click the **"+"** icon in the top right corner
   - Select **"New repository"** from the dropdown menu
   - You'll see a "Create a new repository" page

3. **Configure Repository**
   - **Repository name**: Enter a name (e.g., `alnajm-visa-status`)
   - **Description**: Optional - "Passport status check system"
   - **Visibility**: Choose **"Public"** (required for free Vercel)
   - **DO NOT** check "Initialize with README" (we already have files)
   - **DO NOT** add .gitignore or license (we have them)

4. **Create Repository**
   - Click the green **"Create repository"** button at the bottom
   - You'll see a page with setup instructions

#### 2.2: Push Your Code to GitHub

**Visual Guide:**
- You'll see a page with commands like "git init", "git add", etc.
- These are instructions for pushing your code

**Steps (in your terminal):**

```bash
# Navigate to your project directory
cd /home/eissa/Desktop/ubutnu_github_najm_1

# Initialize git (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit - Vercel migration"

# Add GitHub repository as remote
# Replace YOUR_USERNAME and YOUR_REPO_NAME with your actual values
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**What happens:**
- Your code is uploaded to GitHub
- You can see it in your GitHub repository
- Files are now version controlled

### Option B: Using Vercel CLI (Alternative)

**When to use:**
- If you don't want to use GitHub
- For quick testing
- For one-time deployments

**Steps:**

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```
   - This opens a browser window
   - Authorize Vercel CLI

3. **Deploy**
   ```bash
   vercel
   ```
   - Follow the prompts
   - Answer questions about your project

---

## Step 3: Deploy to Vercel

### Visual Guide: Importing Project

**Location:** Vercel Dashboard
- After logging in, you'll see the main dashboard
- Look for **"Add New..."** button or **"Import Project"** button
- Usually in the top right or center of the page

### Detailed Steps:

1. **Open Vercel Dashboard**
   - Go to [https://vercel.com/dashboard](https://vercel.com/dashboard)
   - You should see your dashboard with projects list

2. **Start Import Process**
   - Click the **"Add New..."** button (top right)
   - Or click **"Import Project"** button (if visible)
   - A modal or new page will appear

3. **Connect GitHub (if using GitHub)**
   - You'll see options to connect Git providers
   - Click **"Import Git Repository"**
   - If this is your first time, you'll need to install Vercel GitHub App
   - Click **"Install"** and authorize
   - Select your repository from the list
   - Click **"Import"**

4. **Configure Project Settings**

   **What you'll see:**
   - A configuration page with project settings
   - Fields for project name, framework, build settings

   **Configure these settings:**

   **Project Name:**
   - Auto-filled from repository name
   - You can change it if needed
   - Example: `alnajm-visa-status`

   **Framework Preset:**
   - Vercel should auto-detect "Vite"
   - If not, select **"Vite"** from the dropdown

   **Root Directory:**
   - Leave as **"."** (current directory)
   - Unless your project is in a subfolder

   **Build Command:**
   - Should show: `npm run build`
   - If empty, enter: `npm run build`

   **Output Directory:**
   - Should show: `dist`
   - If empty, enter: `dist`

   **Install Command:**
   - Should show: `npm install`
   - Leave as is

5. **Environment Variables (Skip for Now)**
   - You'll see a section for "Environment Variables"
   - **Skip this step** - we'll add them after deployment
   - Click **"Skip"** or **"Deploy"** button

6. **Deploy**
   - Click the **"Deploy"** button (usually large and prominent)
   - You'll see a deployment progress screen

**What happens during deployment:**
- Vercel installs dependencies (`npm install`)
- Builds your project (`npm run build`)
- Deploys to their CDN
- Provides you with a URL

**Deployment Progress Indicators:**
- "Installing dependencies..." (green checkmark when done)
- "Building..." (green checkmark when done)
- "Deploying..." (green checkmark when done)
- "Ready" - Your site is live!

**After Deployment:**
- You'll see a success message
- A URL like: `https://your-project-name.vercel.app`
- Click the URL to visit your site

---

## Step 4: Configure Environment Variables

**Why needed:**
- Your API routes need Supabase credentials
- These are stored securely in Vercel
- Never commit them to Git

### Visual Guide: Environment Variables

**Location:** Vercel Dashboard → Your Project → Settings

**Navigation Path:**
1. Dashboard → Click on your project name
2. Click **"Settings"** tab (top navigation)
3. Click **"Environment Variables"** (left sidebar)

### Detailed Steps:

1. **Navigate to Project Settings**
   - In Vercel dashboard, click on your project name
   - You'll see project overview page
   - Click **"Settings"** tab at the top

2. **Open Environment Variables**
   - In the left sidebar, find **"Environment Variables"**
   - Click on it
   - You'll see a page with a table/list of variables

3. **Add First Variable: SUPABASE_URL**

   **What you'll see:**
   - A form or button to add new variable
   - Fields for: Key, Value, Environment

   **Steps:**
   - Click **"Add New"** or **"Add Environment Variable"** button
   - **Key field**: Type `SUPABASE_URL`
   - **Value field**: Enter `https://tqnalzuyvprpkpbzylvc.supabase.co`
   - **Environment**: Select **"Production"**, **"Preview"**, and **"Development"** (check all three)
   - Click **"Save"** or **"Add"**

4. **Add Second Variable: SUPABASE_SERVICE_KEY**

   **Steps:**
   - Click **"Add New"** again
   - **Key field**: Type `SUPABASE_SERVICE_KEY`
   - **Value field**: Enter your service role key:
     ```
     eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRxbmFsenV5dnBycGtwYnp5bHZjIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NTM2NjQ3MCwiZXhwIjoyMDgwOTQyNDcwfQ.R9MmoIKNL7ceGq-Kz7morECNOeZN6iqBwu5LHmcgU9c
     ```
   - **Environment**: Select all three (Production, Preview, Development)
   - **Important**: This is a secret key - be careful not to share it
   - Click **"Save"**

5. **Verify Variables**
   - You should see both variables in the list
   - `SUPABASE_URL` should be visible
   - `SUPABASE_SERVICE_KEY` should show as dots (••••••••) for security

6. **Redeploy**
   - After adding variables, you need to redeploy
   - Go to **"Deployments"** tab (top navigation)
   - Find your latest deployment
   - Click the **"..."** (three dots) menu
   - Select **"Redeploy"**
   - Confirm the redeployment
   - Wait for it to complete

**Why redeploy?**
- Environment variables are only available during build/deployment
- Redeploying makes them available to your API routes

---

## Step 5: Set Up Database

**Note:** If you already set up Supabase from previous instructions, you can skip this step.

### Quick Reference:

1. **Go to Supabase Dashboard**
   - [https://supabase.com/dashboard](https://supabase.com/dashboard)
   - Select your project

2. **Create Table**
   - Click **"Table Editor"** (left sidebar)
   - Click **"New Table"**
   - Name: `visa_status`

3. **Add Columns**
   - `id` (uuid, primary key, default: `gen_random_uuid()`)
   - `passport_number` (text, unique)
   - `status` (text, default: `'pending'`)
   - `created_at` (timestamp, default: `now()`)
   - `updated_at` (timestamp, default: `now()`)
   - `admin_notes` (text, nullable)

4. **Save Table**

**For detailed instructions, see:** `SUPABASE_SETUP.md`

---

## Step 6: Test Your Deployment

### Test 1: Homepage

**Steps:**
1. Open your Vercel URL (e.g., `https://your-project.vercel.app`)
2. Scroll down to find the passport check section
3. **What to look for:**
   - Section title: **"التحقق من حالة التأشيرة"** (in Arabic)
   - Input field with placeholder: **"أدخل رقم جواز سفرك"**
   - Button: **"التحقق من الحالة"**
   - All text should be in Arabic

### Test 2: Add Test Data

**Steps:**
1. Go to Supabase Dashboard
2. Table Editor → `visa_status` table
3. Click **"Insert row"** button
4. Fill in:
   - `passport_number`: `TEST123`
   - `status`: Select `ready` from dropdown
   - `admin_notes`: `Test entry` (optional)
5. Click **"Save"**

### Test 3: Public Check Form

**Steps:**
1. On your website, enter `TEST123` in the passport field
2. Click **"التحقق من الحالة"** button
3. **Expected result:**
   - Should show: **"جاهزة"** (Ready status)
   - Green/teal colored status card
   - Message in Arabic

### Test 4: Admin Panel

**Steps:**
1. Go to: `https://your-project.vercel.app/admin`
2. **What to look for:**
   - Admin panel loads
   - Form to add entries
   - Table showing entries (if any)

3. **Test Adding Entry:**
   - Fill passport number: `TEST456`
   - Select status: `processing`
   - Click **"Add Entry"**
   - Entry should appear in table

4. **Test Editing:**
   - Click **"Edit"** on any entry
   - Change status
   - Click **"Update Entry"**
   - Verify changes saved

---

## Troubleshooting

### Problem: Build Fails

**Symptoms:**
- Deployment shows "Build Failed"
- Error messages in build logs

**Solutions:**
1. **Check Build Logs**
   - Go to Deployments tab
   - Click on failed deployment
   - Scroll to see error messages

2. **Common Issues:**
   - **Missing dependencies**: Check `package.json` has all required packages
   - **Build command wrong**: Verify it's `npm run build`
   - **Output directory wrong**: Should be `dist`

3. **Fix:**
   - Update `vercel.json` if needed
   - Check `package.json` scripts
   - Redeploy

### Problem: API Routes Return 500 Error

**Symptoms:**
- Passport check doesn't work
- Admin panel shows errors
- Browser console shows 500 errors

**Solutions:**
1. **Check Environment Variables**
   - Go to Settings → Environment Variables
   - Verify both variables exist
   - Check values are correct (no extra spaces)

2. **Check Function Logs**
   - Go to Deployments tab
   - Click on deployment
   - Click "Functions" tab
   - Check for error messages

3. **Verify Supabase Connection**
   - Check Supabase URL is correct
   - Verify service key is correct (not anon key)
   - Check Supabase project is active

4. **Redeploy**
   - After fixing variables, redeploy
   - Wait for deployment to complete

### Problem: "Function not found" or 404

**Symptoms:**
- API calls return 404
- Routes don't work

**Solutions:**
1. **Check API Routes Exist**
   - Verify `api/` folder exists in your project
   - Check files are in correct location:
     - `api/check-visa-status.js`
     - `api/admin/create-entry.js`
     - etc.

2. **Check File Names**
   - Must be exact: `check-visa-status.js` (not `check_visa_status.js`)
   - Case-sensitive

3. **Redeploy**
   - Push changes to GitHub
   - Vercel will auto-deploy
   - Or manually redeploy

### Problem: Database Errors

**Symptoms:**
- "Table does not exist" errors
- "Permission denied" errors

**Solutions:**
1. **Verify Table Exists**
   - Go to Supabase → Table Editor
   - Check `visa_status` table exists
   - Verify table name is exactly `visa_status` (case-sensitive)

2. **Check Table Structure**
   - Verify all columns exist
   - Check column names match exactly
   - Verify data types

3. **Check Environment Variables**
   - Verify `SUPABASE_URL` is correct
   - Verify `SUPABASE_SERVICE_KEY` is service_role key (not anon key)

---

## Quick Reference

### Important URLs
- **Vercel Dashboard**: [https://vercel.com/dashboard](https://vercel.com/dashboard)
- **Supabase Dashboard**: [https://supabase.com/dashboard](https://supabase.com/dashboard)
- **Your Site**: `https://your-project.vercel.app`
- **Admin Panel**: `https://your-project.vercel.app/admin`

### Environment Variables
- `SUPABASE_URL`: `https://tqnalzuyvprpkpbzylvc.supabase.co`
- `SUPABASE_SERVICE_KEY`: (your service role key)

### API Endpoints
- Public: `/api/check-visa-status?passport_number=XXX`
- Admin: `/api/admin/create-entry`, `/api/admin/update-status`, etc.

### Build Commands
- Build: `npm run build`
- Dev: `npm run dev`
- Preview: `npm run preview`

---

## Next Steps

After successful deployment:
1. ✅ Test all functionality
2. ✅ Add real passport entries
3. ✅ Monitor usage in Vercel dashboard
4. ✅ Set up custom domain (optional)
5. ✅ Consider adding authentication for admin panel

**Your system is now live on Vercel! 🚀**


