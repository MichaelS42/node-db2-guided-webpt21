const knex = require('knex');
const env = process.env.NODE_ENV || 'development';

const db = knex({
  client: 'sqlite3',
  connection: {
    filename: './data/produce.db3'
  },
  useNullAsDefault: true
});
