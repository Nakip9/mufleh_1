# Passport Status Check System

A complete passport status checking system integrated into your travel agency website.

## Features

✅ **Public Passport Check**
- Users can enter their passport number on the homepage
- Real-time status checking (Ready, Processing, Pending, Rejected)
- Beautiful, responsive UI with status indicators
- Error handling and validation

✅ **Admin Panel**
- Accessible at `/admin` route
- Add new passport entries
- Update visa statuses
- Search and filter entries
- Delete entries
- View all entries in a table format

✅ **Backend API**
- Serverless Netlify Functions
- Secure database connection via Supabase
- Input validation and sanitization
- CORS handling
- Error handling

## Quick Start

### 1. Set Up Supabase

Follow the detailed guide in `SUPABASE_SETUP.md` to:
- Create a Supabase account
- Create the database table
- Get your API credentials

### 2. Configure Netlify

1. Add environment variables in Netlify dashboard:
   - `SUPABASE_URL`: Your Supabase project URL
   - `SUPABASE_SERVICE_KEY`: Your Supabase service_role key

2. Deploy your site (see `DEPLOYMENT_GUIDE.md`)

### 3. Test the System

1. Add a test entry via Supabase dashboard or admin panel
2. Test the public check form on your homepage
3. Access admin panel at `/admin`

## File Structure

```
project/
├── netlify/
│   └── functions/
│       ├── check-visa-status.js          # Public API: Check passport status
│       ├── admin-create-entry.js         # Admin API: Create entry
│       ├── admin-update-status.js        # Admin API: Update entry
│       ├── admin-list-entries.js         # Admin API: List all entries
│       └── admin-delete-entry.js         # Admin API: Delete entry
├── src/
│   ├── components/
│   │   └── sections/
│   │       └── PassportCheck/            # Public check component
│   │           ├── index.jsx
│   │           ├── PassportCheck.css
│   │           └── StatusResult.jsx
│   │   └── admin/                        # Admin components
│   │       ├── PassportTable.jsx
│   │       ├── AddEntryForm.jsx
│   │       ├── EditEntryModal.jsx
│   │       └── Admin.css
│   └── pages/
│       ├── Admin.jsx                     # Admin page
│       └── Admin.css
├── SUPABASE_SETUP.md                     # Supabase setup guide
└── DEPLOYMENT_GUIDE.md                  # Deployment instructions
```

## API Endpoints

All endpoints are Netlify Functions accessible at `/.netlify/functions/[function-name]`

### Public Endpoints

- **GET** `/.netlify/functions/check-visa-status?passport_number=XXX`
  - Returns visa status for a passport number

### Admin Endpoints

- **POST** `/.netlify/functions/admin-create-entry`
  - Body: `{ passport_number, status, admin_notes }`
  - Creates a new entry

- **PUT** `/.netlify/functions/admin-update-status`
  - Body: `{ id, status, admin_notes }`
  - Updates an existing entry

- **GET** `/.netlify/functions/admin-list-entries?page=1&limit=50&status=ready&search=XXX`
  - Returns paginated list of entries

- **DELETE** `/.netlify/functions/admin-delete-entry?id=XXX`
  - Deletes an entry

## Status Values

- `pending`: Application is pending
- `processing`: Application is being processed
- `ready`: Visa is ready
- `rejected`: Application was rejected

## Security Features

- ✅ Input validation and sanitization
- ✅ SQL injection protection (via Supabase client)
- ✅ CORS handling
- ✅ Environment variables for sensitive data
- ✅ Error boundaries
- ✅ Rate limiting (via Netlify Functions limits)

## Usage

### For Users

1. Visit the homepage
2. Find the "Check Your Visa Status" section
3. Enter passport number
4. Click "Check Status"
5. View the status result

### For Admins

1. Visit `/admin` route
2. Use "Add New Passport Entry" form to add entries
3. Use the table to view all entries
4. Click "Edit" to update status
5. Use search and filter to find specific entries
6. Click "Delete" to remove entries (with confirmation)

## Troubleshooting

### Passport check not working
- Verify Supabase environment variables are set
- Check Netlify function logs
- Verify database table exists

### Admin panel not loading
- Check browser console for errors
- Verify all functions are deployed
- Check Netlify function logs

### Database errors
- Verify Supabase credentials
- Check table structure matches schema
- Verify RLS policies (if enabled)

## Cost

**100% Free** for your use case (<30 users/month):
- Netlify: Free tier (100GB bandwidth/month)
- Supabase: Free tier (500MB database, 50K MAU)

## Support

For issues:
1. Check `SUPABASE_SETUP.md` for database setup
2. Check `DEPLOYMENT_GUIDE.md` for deployment issues
3. Review Netlify function logs
4. Check Supabase dashboard

## Next Steps

After setup:
1. ✅ Add real passport entries
2. ✅ Test with real users
3. ⚠️ Consider adding authentication for admin panel
4. ⚠️ Set up monitoring and alerts
5. ⚠️ Consider adding email notifications

