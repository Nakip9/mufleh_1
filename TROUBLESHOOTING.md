# Troubleshooting Guide

Common issues and solutions for the passport status check system on Vercel.

---

## Build Issues

### Build Fails with "Command not found"

**Symptoms:**
- Deployment shows "Build Failed"
- Error: "npm: command not found" or similar

**Solution:**
1. Check `package.json` exists in root directory
2. Verify `vercel.json` has correct build command
3. Ensure Node.js version is compatible (18+)

**Fix:**
- Update `vercel.json`:
  ```json
  {
    "buildCommand": "npm run build"
  }
  ```

---

### Build Fails with Module Not Found

**Symptoms:**
- Error: "Cannot find module '@supabase/supabase-js'"
- Missing dependencies errors

**Solution:**
1. Check `package.json` has all dependencies
2. Verify `node_modules` is not in `.gitignore` incorrectly
3. Ensure dependencies are listed in `dependencies` (not `devDependencies`)

**Fix:**
```bash
npm install
git add package.json package-lock.json
git commit -m "Add dependencies"
git push
```

---

### Build Succeeds but Site Shows 404

**Symptoms:**
- Build completes successfully
- Site shows 404 or blank page
- Routes don't work

**Solution:**
1. Check `vercel.json` has rewrites configured
2. Verify `outputDirectory` is `dist`
3. Check `index.html` exists in `dist` folder

**Fix:**
Update `vercel.json`:
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

---

## API Issues

### API Routes Return 500 Error

**Symptoms:**
- Passport check doesn't work
- Browser console shows 500 errors
- Admin panel shows errors

**Diagnosis Steps:**

1. **Check Environment Variables**
   - Go to Vercel Dashboard → Your Project → Settings → Environment Variables
   - Verify `SUPABASE_URL` exists and is correct
   - Verify `SUPABASE_SERVICE_KEY` exists and is correct
   - Check that variables are set for all environments (Production, Preview, Development)

2. **Check Function Logs**
   - Go to Deployments tab
   - Click on latest deployment
   - Click "Functions" tab
   - Look for error messages
   - Check for "Missing Supabase environment variables" error

3. **Verify Supabase Connection**
   - Check Supabase URL format: `https://xxxxx.supabase.co`
   - Verify service key is `service_role` key (not `anon` key)
   - Check Supabase project is active (not paused)

**Solutions:**

**If variables are missing:**
1. Add environment variables in Vercel
2. Redeploy the project
3. Wait for deployment to complete

**If variables are incorrect:**
1. Update environment variables with correct values
2. Remove any extra spaces
3. Redeploy

**If Supabase connection fails:**
1. Verify Supabase project is active
2. Check service role key is correct
3. Test connection from Supabase dashboard

---

### API Routes Return 404

**Symptoms:**
- API calls return 404 Not Found
- "Function not found" errors

**Diagnosis:**

1. **Check API Files Exist**
   - Verify `api/` folder exists in project root
   - Check files are in correct location:
     - `api/check-visa-status.js`
     - `api/admin/create-entry.js`
     - `api/admin/update-status.js`
     - `api/admin/list-entries.js`
     - `api/admin/delete-entry.js`

2. **Check File Names**
   - Must be exact: `check-visa-status.js` (with hyphens)
   - Case-sensitive
   - No typos

3. **Check File Structure**
   - Admin routes should be in `api/admin/` subfolder
   - Not in `api/` root

**Solutions:**

**If files are missing:**
1. Create `api/` directory
2. Add all API route files
3. Commit and push to GitHub
4. Vercel will auto-deploy

**If file names are wrong:**
1. Rename files to match exact endpoint names
2. Commit and push
3. Redeploy

---

### CORS Errors

**Symptoms:**
- Browser console shows CORS errors
- "Access-Control-Allow-Origin" errors
- API calls blocked by browser

**Solution:**
- CORS is already handled in API routes
- If issues persist, check API route files have CORS headers
- Verify `corsHeaders` object is included in responses

---

## Database Issues

### "Table does not exist" Error

**Symptoms:**
- API returns: "relation 'visa_status' does not exist"
- Database errors in logs

**Solution:**
1. Go to Supabase Dashboard
2. Check Table Editor
3. Verify `visa_status` table exists
4. Check table name is exactly `visa_status` (case-sensitive, no spaces)

**Fix:**
- Create table if missing
- Use exact name: `visa_status`
- Add all required columns

---

### "Permission denied" Error

**Symptoms:**
- API returns permission errors
- Cannot read/write to database

**Solution:**
1. Check you're using `SUPABASE_SERVICE_KEY` (not `SUPABASE_ANON_KEY`)
2. Verify service role key is correct
3. Check Row Level Security (RLS) is disabled or configured correctly

**Fix:**
- Use service_role key in environment variables
- Service role bypasses RLS
- Anon key has limited permissions

---

### Database Connection Timeout

**Symptoms:**
- Slow API responses
- Timeout errors
- Connection errors

**Solution:**
1. Check Supabase project status (not paused)
2. Verify network connectivity
3. Check Supabase region matches your users' location

**Fix:**
- Ensure Supabase project is active
- Consider upgrading Supabase plan if on free tier with limits
- Check Supabase dashboard for any service issues

---

## Frontend Issues

### Passport Check Form Doesn't Work

**Symptoms:**
- Form submits but nothing happens
- No response shown
- Loading state never ends

**Diagnosis:**
1. Open browser DevTools (F12)
2. Go to Network tab
3. Submit form
4. Check for failed requests
5. Look at Console tab for errors

**Common Issues:**

**API endpoint wrong:**
- Check frontend code uses `/api/check-visa-status`
- Not `/.netlify/functions/check-visa-status`

**CORS issues:**
- Check browser console for CORS errors
- Verify API routes return CORS headers

**Network errors:**
- Check internet connection
- Verify Vercel deployment is live
- Check API route is accessible

**Fix:**
- Update API endpoints in frontend code
- Verify API routes are deployed
- Check environment variables

---

### Admin Panel Doesn't Load

**Symptoms:**
- `/admin` route shows blank page
- Errors in console
- Cannot access admin features

**Diagnosis:**
1. Check route exists in `App.jsx`
2. Verify admin components exist
3. Check browser console for errors
4. Verify API endpoints are correct

**Fix:**
- Ensure `/admin` route is in `App.jsx`
- Check admin components are imported correctly
- Verify API endpoints use `/api/admin/` prefix

---

## Deployment Issues

### Changes Not Appearing

**Symptoms:**
- Updated code but site shows old version
- Changes not reflected after deployment

**Solution:**
1. **Clear Browser Cache**
   - Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
   - Or clear browser cache completely

2. **Check Deployment Status**
   - Go to Vercel Dashboard → Deployments
   - Verify latest deployment is successful
   - Check deployment includes your changes

3. **Verify Git Push**
   - Check GitHub repository has latest code
   - Verify Vercel is connected to correct branch
   - Check Vercel is set to auto-deploy

**Fix:**
- Clear browser cache
- Wait for deployment to complete
- Verify code is pushed to GitHub

---

### Auto-Deploy Not Working

**Symptoms:**
- Pushed to GitHub but Vercel doesn't deploy
- No automatic deployments

**Solution:**
1. Check Vercel GitHub integration
2. Verify repository is connected
3. Check deployment settings
4. Verify GitHub webhook is active

**Fix:**
- Reconnect GitHub repository in Vercel
- Check GitHub repository settings → Webhooks
- Verify Vercel webhook is active

---

## Performance Issues

### Slow API Responses

**Symptoms:**
- API calls take long time
- Timeout errors
- Slow page loads

**Solution:**
1. Check Supabase project region
2. Verify database indexes exist
3. Check for N+1 query problems
4. Monitor Supabase usage

**Fix:**
- Add database indexes on frequently queried columns
- Optimize queries
- Consider upgrading Supabase plan

---

## Getting Help

If you're still experiencing issues:

1. **Check Logs**
   - Vercel Dashboard → Deployments → Function Logs
   - Browser Console (F12)
   - Supabase Dashboard → Logs

2. **Verify Configuration**
   - `vercel.json` is correct
   - `package.json` has all dependencies
   - Environment variables are set

3. **Test Locally**
   - Run `npm run dev`
   - Test API routes locally
   - Verify everything works before deploying

4. **Review Documentation**
   - `VERCEL_DEPLOYMENT_GUIDE.md` for setup
   - `API_REFERENCE.md` for API details
   - `SUPABASE_SETUP.md` for database setup

---

## Common Error Messages

| Error Message | Cause | Solution |
|--------------|-------|----------|
| "Missing Supabase environment variables" | Env vars not set | Add in Vercel dashboard |
| "Table does not exist" | Database table missing | Create table in Supabase |
| "Permission denied" | Wrong API key | Use service_role key |
| "Function not found" | API route missing | Check `api/` folder exists |
| "Build failed" | Build command error | Check `vercel.json` |
| "404 Not Found" | Route not configured | Check rewrites in `vercel.json` |

---

**Still having issues?** Review the detailed deployment guide or check Vercel/Supabase documentation.


