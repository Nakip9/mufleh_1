# Table of Contents
- check-visa-status.js
- admin/delete-entry.js
- admin/create-entry.js
- admin/list-entries.js
- admin/update-status.js

## File: check-visa-status.js

- Extension: .js
- Language: javascript
- Size: 2723 bytes
- Created: 2025-12-29 17:35:57
- Modified: 2025-12-29 17:35:57

### Code

```javascript
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables');
}

const supabase = createClient(supabaseUrl, supabaseKey);

// CORS headers helper
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export default async function handler(req, res) {
  // Set CORS headers for all responses
  Object.keys(corsHeaders).forEach(key => {
    res.setHeader(key, corsHeaders[key]);
  });

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Get passport number from query string
    const passportNumber = req.query?.passport_number;

    if (!passportNumber || passportNumber.trim() === '') {
      return res.status(400).json({ error: 'Passport number is required' });
    }

    // Sanitize input (basic validation)
    const sanitizedPassport = passportNumber.trim().toUpperCase();

    // Query database
    const { data, error } = await supabase
      .from('visa_status')
      .select('id, passport_number, status, created_at, updated_at, admin_notes, first_name, last_name, visa_type, passport_received_date, embassy_submit_date, expected_exit_date')
      .eq('passport_number', sanitizedPassport)
      .single();

    if (error) {
      // If no record found, return not found status
      if (error.code === 'PGRST116') {
        return res.status(404).json({
          found: false,
          message: 'Passport number not found in our system',
        });
      }

      // Other database errors
      console.error('Database error:', error);
      return res.status(500).json({ error: 'Database error occurred' });
    }

    // Return the status
    return res.status(200).json({
      found: true,
      passport_number: data.passport_number,
      status: data.status,
      updated_at: data.updated_at,
      admin_notes: data.admin_notes || null,
      first_name: data.first_name || null,
      last_name: data.last_name || null,
      visa_type: data.visa_type || null,
      passport_received_date: data.passport_received_date || null,
      embassy_submit_date: data.embassy_submit_date || null,
      expected_exit_date: data.expected_exit_date || null,
    });
  } catch (error) {
    console.error('Unexpected error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}


```

## File: admin/delete-entry.js

- Extension: .js
- Language: javascript
- Size: 1904 bytes
- Created: 2025-12-27 17:37:59
- Modified: 2025-12-11 17:37:58

### Code

```javascript
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables');
}

const supabase = createClient(supabaseUrl, supabaseKey);

// CORS headers helper
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export default async function handler(req, res) {
  // Set CORS headers for all responses
  Object.keys(corsHeaders).forEach(key => {
    res.setHeader(key, corsHeaders[key]);
  });

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow DELETE requests
  if (req.method !== 'DELETE') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Get ID from query string or body
    const id = req.query?.id || req.body?.id;

    if (!id) {
      return res.status(400).json({ error: 'Entry ID is required' });
    }

    // Delete from database
    const { data, error } = await supabase
      .from('visa_status')
      .delete()
      .eq('id', id)
      .select()
      .single();

    if (error) {
      if (error.code === 'PGRST116') {
        return res.status(404).json({ error: 'Entry not found' });
      }

      console.error('Database error:', error);
      return res.status(500).json({ error: 'Failed to delete entry' });
    }

    // Return success
    return res.status(200).json({
      success: true,
      message: 'Entry deleted successfully',
      data: {
        id: data.id,
        passport_number: data.passport_number,
      },
    });
  } catch (error) {
    console.error('Unexpected error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}


```

## File: admin/create-entry.js

- Extension: .js
- Language: javascript
- Size: 3977 bytes
- Created: 2025-12-29 12:27:29
- Modified: 2025-12-29 12:27:29

### Code

```javascript
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables');
}

const supabase = createClient(supabaseUrl, supabaseKey);

// CORS headers helper
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export default async function handler(req, res) {
  // Set CORS headers for all responses
  Object.keys(corsHeaders).forEach(key => {
    res.setHeader(key, corsHeaders[key]);
  });

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Parse request body
    const { 
      passport_number, 
      status, 
      admin_notes, 
      first_name, 
      last_name,
      visa_type,
      passport_received_date,
      embassy_submit_date,
      expected_exit_date
    } = req.body;

    // Validation
    if (!passport_number || passport_number.trim() === '') {
      return res.status(400).json({ error: 'Passport number is required' });
    }

    const validStatuses = ['pending', 'in_embassy', 'ready', 'rejected'];
    const entryStatus = status || 'pending';

    if (!validStatuses.includes(entryStatus)) {
      return res.status(400).json({
        error: 'Invalid status. Must be: pending, in_embassy, ready, or rejected',
      });
    }

    // Validate visa type if provided
    const validVisaTypes = ['زيارة', 'عمل', 'عمرة', 'أخرى'];
    if (visa_type && !validVisaTypes.includes(visa_type)) {
      return res.status(400).json({
        error: 'Invalid visa type. Must be: زيارة, عمل, عمرة, or أخرى',
      });
    }

    // Sanitize input
    const sanitizedPassport = passport_number.trim().toUpperCase();
    const sanitizedNotes = admin_notes ? admin_notes.trim() : null;
    const sanitizedFirstName = first_name ? first_name.trim() : null;
    const sanitizedLastName = last_name ? last_name.trim() : null;
    const sanitizedVisaType = visa_type ? visa_type.trim() : null;

    // Insert into database
    const { data, error } = await supabase
      .from('visa_status')
      .insert({
        passport_number: sanitizedPassport,
        status: entryStatus,
        admin_notes: sanitizedNotes,
        first_name: sanitizedFirstName,
        last_name: sanitizedLastName,
        visa_type: sanitizedVisaType,
        passport_received_date: passport_received_date || null,
        embassy_submit_date: embassy_submit_date || null,
        expected_exit_date: expected_exit_date || null,
      })
      .select()
      .single();

    if (error) {
      // Check if passport number already exists
      if (error.code === '23505') {
        return res.status(409).json({
          error: 'Passport number already exists in the system',
        });
      }

      console.error('Database error:', error);
      return res.status(500).json({ error: 'Failed to create entry' });
    }

    // Return success
    return res.status(201).json({
      success: true,
      data: {
        id: data.id,
        passport_number: data.passport_number,
        status: data.status,
        admin_notes: data.admin_notes,
        first_name: data.first_name,
        last_name: data.last_name,
        visa_type: data.visa_type,
        passport_received_date: data.passport_received_date,
        embassy_submit_date: data.embassy_submit_date,
        expected_exit_date: data.expected_exit_date,
        created_at: data.created_at,
        updated_at: data.updated_at,
      },
    });
  } catch (error) {
    console.error('Unexpected error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}


```

## File: admin/list-entries.js

- Extension: .js
- Language: javascript
- Size: 2763 bytes
- Created: 2025-12-29 12:27:29
- Modified: 2025-12-29 12:27:29

### Code

```javascript
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables');
}

const supabase = createClient(supabaseUrl, supabaseKey);

// CORS headers helper
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export default async function handler(req, res) {
  // Set CORS headers for all responses
  Object.keys(corsHeaders).forEach(key => {
    res.setHeader(key, corsHeaders[key]);
  });

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Get query parameters for pagination and filtering
    const page = parseInt(req.query?.page || '1', 10);
    const limit = parseInt(req.query?.limit || '50', 10);
    const statusFilter = req.query?.status;
    const search = req.query?.search;

    // Validate pagination
    const pageNum = Math.max(1, page);
    const limitNum = Math.min(100, Math.max(1, limit)); // Max 100 per page
    const offset = (pageNum - 1) * limitNum;

    // Build query
    let query = supabase
      .from('visa_status')
      .select('id, passport_number, status, created_at, updated_at, admin_notes, first_name, last_name, visa_type, passport_received_date, embassy_submit_date, expected_exit_date', {
        count: 'exact',
      })
      .order('updated_at', { ascending: false });

    // Apply status filter
    if (statusFilter && ['pending', 'in_embassy', 'ready', 'rejected'].includes(statusFilter)) {
      query = query.eq('status', statusFilter);
    }

    // Apply search filter (search in passport number)
    if (search && search.trim() !== '') {
      query = query.ilike('passport_number', `%${search.trim()}%`);
    }

    // Apply pagination
    query = query.range(offset, offset + limitNum - 1);

    // Execute query
    const { data, error, count } = await query;

    if (error) {
      console.error('Database error:', error);
      return res.status(500).json({ error: 'Failed to fetch entries' });
    }

    // Return results
    return res.status(200).json({
      success: true,
      data: data || [],
      pagination: {
        page: pageNum,
        limit: limitNum,
        total: count || 0,
        totalPages: Math.ceil((count || 0) / limitNum),
      },
    });
  } catch (error) {
    console.error('Unexpected error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}


```

## File: admin/update-status.js

- Extension: .js
- Language: javascript
- Size: 3995 bytes
- Created: 2025-12-29 12:27:29
- Modified: 2025-12-29 12:27:29

### Code

```javascript
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables');
}

const supabase = createClient(supabaseUrl, supabaseKey);

// CORS headers helper
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'PUT, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export default async function handler(req, res) {
  // Set CORS headers for all responses
  Object.keys(corsHeaders).forEach(key => {
    res.setHeader(key, corsHeaders[key]);
  });

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow PUT requests
  if (req.method !== 'PUT') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Parse request body
    const { 
      id, 
      status, 
      admin_notes, 
      first_name, 
      last_name,
      visa_type,
      passport_received_date,
      embassy_submit_date,
      expected_exit_date
    } = req.body;

    // Validation
    if (!id) {
      return res.status(400).json({ error: 'Entry ID is required' });
    }

    const validStatuses = ['pending', 'in_embassy', 'ready', 'rejected'];
    if (status && !validStatuses.includes(status)) {
      return res.status(400).json({
        error: 'Invalid status. Must be: pending, in_embassy, ready, or rejected',
      });
    }

    // Validate visa type if provided
    const validVisaTypes = ['زيارة', 'عمل', 'عمرة', 'أخرى'];
    if (visa_type && !validVisaTypes.includes(visa_type)) {
      return res.status(400).json({
        error: 'Invalid visa type. Must be: زيارة, عمل, عمرة, or أخرى',
      });
    }

    // Build update object
    const updateData = {
      updated_at: new Date().toISOString(),
    };

    if (status) {
      updateData.status = status;
    }

    if (admin_notes !== undefined) {
      updateData.admin_notes = admin_notes ? admin_notes.trim() : null;
    }

    if (first_name !== undefined) {
      updateData.first_name = first_name ? first_name.trim() : null;
    }

    if (last_name !== undefined) {
      updateData.last_name = last_name ? last_name.trim() : null;
    }

    if (visa_type !== undefined) {
      updateData.visa_type = visa_type ? visa_type.trim() : null;
    }

    if (passport_received_date !== undefined) {
      updateData.passport_received_date = passport_received_date || null;
    }

    if (embassy_submit_date !== undefined) {
      updateData.embassy_submit_date = embassy_submit_date || null;
    }

    if (expected_exit_date !== undefined) {
      updateData.expected_exit_date = expected_exit_date || null;
    }

    // Update database
    const { data, error } = await supabase
      .from('visa_status')
      .update(updateData)
      .eq('id', id)
      .select()
      .single();

    if (error) {
      if (error.code === 'PGRST116') {
        return res.status(404).json({ error: 'Entry not found' });
      }

      console.error('Database error:', error);
      return res.status(500).json({ error: 'Failed to update entry' });
    }

    // Return success
    return res.status(200).json({
      success: true,
      data: {
        id: data.id,
        passport_number: data.passport_number,
        status: data.status,
        admin_notes: data.admin_notes,
        first_name: data.first_name,
        last_name: data.last_name,
        visa_type: data.visa_type,
        passport_received_date: data.passport_received_date,
        embassy_submit_date: data.embassy_submit_date,
        expected_exit_date: data.expected_exit_date,
        created_at: data.created_at,
        updated_at: data.updated_at,
      },
    });
  } catch (error) {
    console.error('Unexpected error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}


```

