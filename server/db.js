// Import the postgres Pool to connect to the database
import pg from 'pg';

// Will need to change this for production
export const pool = new pg.Pool({
  user: 'ray',
  password: 'PGDB1rll!',
  host: 'localhost',
  port: 5432,
  database: 'emoji_tracker_db',
});
