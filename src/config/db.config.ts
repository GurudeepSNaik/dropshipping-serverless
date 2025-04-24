import dotenv from 'dotenv';
dotenv.config();

// export const dbConfig = {
//   host: process.env.PG_HOST,
//   port: parseInt(process.env.PG_PORT || '5432'),
//   user: process.env.PG_USER,
//   password: process.env.PG_PASSWORD,
//   database: process.env.PG_DB,
// };

export const DB_CONFIG_MAP: Record<string, { host: string; user: string; password: string; database: string }> = {
  // Example configurations - replace with real ones
  'Teradek': {
    host: 'xtuple-db-1.example.com',
    user: 'xtuple_user',
    password: 'securepassword',
    database: 'teradek',
  },
  'Small HD': {
    host: 'xtuple-db-2.example.com',
    user: 'xtuple_user',
    password: 'securepassword',
    database: 'smallhd',
  },
  'Wooden Camera': {
    host: 'xtuple-db-2.example.com',
    user: 'xtuple_user',
    password: 'securepassword',
    database: 'woodencamera',
  },
};
