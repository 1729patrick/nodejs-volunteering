if (process.env.NODE_ENV === 'test') {
  require('dotenv').config('../../.env.test');
}

const config = {
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    user: 'postgres',
    password: process.env.PASSWORD,
    database: process.env.DB_NAME,
  },
};

export default config;
