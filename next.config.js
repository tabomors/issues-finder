require('dotenv').config();

const prod = process.env.NODE_ENV === 'production';

module.exports = {
  env: {
    SERVER_URL: prod ? process.env.SERVER : 'http://localhost:3000'
  }
};
