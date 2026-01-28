# Alnajm Alazrak Travel & Tourism - Passport Status Check System

A modern travel agency website with integrated passport/visa status checking system.

## Features

✅ **Public Passport Check**
- Users can check visa status by entering passport number
- Real-time status display (Ready, Processing, Pending, Rejected)
- Beautiful, responsive UI with Arabic content
- Input validation and error handling

✅ **Admin Panel**
- Accessible at `/admin` route
- Add, edit, delete passport entries
- Search and filter functionality
- Status management

✅ **Backend API**
- Vercel serverless API routes
- Secure Supabase database integration
- Input validation and sanitization
- CORS handling

## Tech Stack

- **Frontend**: React 19 + Vite
- **Backend**: Vercel API Routes (Serverless Functions)
- **Database**: Supabase (PostgreSQL)
- **Deployment**: Vercel
- **Styling**: CSS with CSS Variables

## Quick Start

### Prerequisites

- Node.js 18+
- Git
- Vercel account
- Supabase account

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

### Deploy to Vercel

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will auto-detect settings

3. **Add Environment Variables**
   - `SUPABASE_URL`: Your Supabase project URL
   - `SUPABASE_SERVICE_KEY`: Your Supabase service role key

4. **Set Up Database**
   - Create `visa_status` table in Supabase
   - See `SUPABASE_SETUP.md` for details

**For detailed instructions, see:** `VERCEL_DEPLOYMENT_GUIDE.md`

## Documentation

- **`VERCEL_DEPLOYMENT_GUIDE.md`** - Complete deployment guide with detailed steps
- **`VERCEL_QUICK_START.md`** - Quick reference for experienced users
- **`API_REFERENCE.md`** - Complete API documentation
- **`TROUBLESHOOTING.md`** - Common issues and solutions
- **`SUPABASE_SETUP.md`** - Database setup instructions

## Project Structure

```
project/
├── api/                          # Vercel API routes
│   ├── check-visa-status.js      # Public API
│   └── admin/                    # Admin APIs
│       ├── create-entry.js
│       ├── update-status.js
│       ├── list-entries.js
│       └── delete-entry.js
├── src/                          # React source code
│   ├── components/
│   │   ├── sections/
│   │   │   └── PassportCheck/   # Public check component (Arabic UI)
│   │   └── admin/                # Admin components
│   └── pages/
│       └── Admin.jsx             # Admin page
├── public/                       # Static files
├── vercel.json                   # Vercel configuration
└── package.json
```

## API Endpoints

### Public
- `GET /api/check-visa-status?passport_number=XXX` - Check passport status

### Admin
- `POST /api/admin/create-entry` - Create new entry
- `PUT /api/admin/update-status` - Update entry
- `GET /api/admin/list-entries` - List all entries
- `DELETE /api/admin/delete-entry` - Delete entry

See `API_REFERENCE.md` for complete API documentation.

## Environment Variables

Required environment variables (set in Vercel):

- `SUPABASE_URL` - Supabase project URL
- `SUPABASE_SERVICE_KEY` - Supabase service role key

## Database Schema

**Table: `visa_status`**

| Column | Type | Description |
|--------|------|-------------|
| id | uuid | Primary key |
| passport_number | text | Unique passport number |
| status | text | Status: pending, processing, ready, rejected |
| created_at | timestamp | Creation timestamp |
| updated_at | timestamp | Last update timestamp |
| admin_notes | text | Optional admin notes |

## Development

```bash
# Start dev server
npm run dev

# Build
npm run build

# Preview build
npm run preview

# Lint
npm run lint
```

## License

Private project - Alnajm Alazrak Travel & Tourism

## Support

For deployment help, see:
- `VERCEL_DEPLOYMENT_GUIDE.md` - Step-by-step deployment
- `TROUBLESHOOTING.md` - Common issues and solutions
