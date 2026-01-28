# API Reference Documentation

Complete API reference for the passport status check system.

---

## Base URL

All API endpoints are available at:
```
https://your-project.vercel.app/api
```

For local development:
```
http://localhost:5173/api
```

---

## Public Endpoints

### Check Visa Status

Check the status of a passport number.

**Endpoint:** `GET /api/check-visa-status`

**Query Parameters:**
- `passport_number` (required): The passport number to check

**Example Request:**
```
GET /api/check-visa-status?passport_number=TEST123
```

**Success Response (200):**
```json
{
  "found": true,
  "passport_number": "TEST123",
  "status": "ready",
  "updated_at": "2025-12-10T12:00:00Z",
  "admin_notes": "Ready for pickup"
}
```

**Not Found Response (404):**
```json
{
  "found": false,
  "message": "Passport number not found in our system"
}
```

**Error Response (400):**
```json
{
  "error": "Passport number is required"
}
```

**Error Response (500):**
```json
{
  "error": "Database error occurred"
}
```

---

## Admin Endpoints

All admin endpoints require proper authentication (currently using private URL access).

### Create Entry

Create a new passport entry.

**Endpoint:** `POST /api/admin/create-entry`

**Request Body:**
```json
{
  "passport_number": "ABC123",
  "status": "pending",
  "admin_notes": "Optional notes"
}
```

**Status Values:**
- `pending` - Application is pending
- `processing` - Application is being processed
- `ready` - Visa is ready
- `rejected` - Application was rejected

**Success Response (201):**
```json
{
  "success": true,
  "data": {
    "id": "uuid-here",
    "passport_number": "ABC123",
    "status": "pending",
    "admin_notes": "Optional notes",
    "created_at": "2025-12-10T12:00:00Z"
  }
}
```

**Error Response (409):**
```json
{
  "error": "Passport number already exists in the system"
}
```

---

### Update Status

Update an existing passport entry.

**Endpoint:** `PUT /api/admin/update-status`

**Request Body:**
```json
{
  "id": "uuid-here",
  "status": "ready",
  "admin_notes": "Updated notes"
}
```

**Success Response (200):**
```json
{
  "success": true,
  "data": {
    "id": "uuid-here",
    "passport_number": "ABC123",
    "status": "ready",
    "admin_notes": "Updated notes",
    "updated_at": "2025-12-10T13:00:00Z"
  }
}
```

**Error Response (404):**
```json
{
  "error": "Entry not found"
}
```

---

### List Entries

Get a paginated list of all passport entries.

**Endpoint:** `GET /api/admin/list-entries`

**Query Parameters:**
- `page` (optional): Page number (default: 1)
- `limit` (optional): Items per page (default: 50, max: 100)
- `status` (optional): Filter by status (`pending`, `processing`, `ready`, `rejected`)
- `search` (optional): Search in passport number

**Example Request:**
```
GET /api/admin/list-entries?page=1&limit=50&status=ready&search=TEST
```

**Success Response (200):**
```json
{
  "success": true,
  "data": [
    {
      "id": "uuid-1",
      "passport_number": "TEST123",
      "status": "ready",
      "created_at": "2025-12-10T12:00:00Z",
      "updated_at": "2025-12-10T13:00:00Z",
      "admin_notes": "Notes here"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 50,
    "total": 100,
    "totalPages": 2
  }
}
```

---

### Delete Entry

Delete a passport entry.

**Endpoint:** `DELETE /api/admin/delete-entry`

**Query Parameters:**
- `id` (required): Entry ID to delete

**Example Request:**
```
DELETE /api/admin/delete-entry?id=uuid-here
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Entry deleted successfully",
  "data": {
    "id": "uuid-here",
    "passport_number": "ABC123"
  }
}
```

**Error Response (404):**
```json
{
  "error": "Entry not found"
}
```

---

## Error Codes

| Status Code | Meaning |
|------------|---------|
| 200 | Success |
| 201 | Created |
| 400 | Bad Request (invalid input) |
| 404 | Not Found |
| 405 | Method Not Allowed |
| 409 | Conflict (duplicate entry) |
| 500 | Internal Server Error |

---

## CORS

All endpoints support CORS and accept requests from any origin.

**Headers:**
- `Access-Control-Allow-Origin: *`
- `Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS`
- `Access-Control-Allow-Headers: Content-Type`

---

## Rate Limiting

Currently no rate limiting is implemented. Consider adding rate limiting for production use.

---

## Authentication

Admin endpoints are currently protected by private URL access (`/admin` route). Consider adding proper authentication for production.

---

## Environment Variables

Required environment variables:
- `SUPABASE_URL`: Supabase project URL
- `SUPABASE_SERVICE_KEY`: Supabase service role key

Set these in Vercel dashboard: Settings → Environment Variables


