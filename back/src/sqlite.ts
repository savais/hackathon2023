import { Database } from 'sqlite3';

// Open a SQLite database, stored in the file db.sqlite
const db = new Database('db/database2.db');

// Fetch a random integer between -99 and +99
db.get(
  'SELECT RANDOM() % 100 as result',
  (_, res) => console.log(res)
);