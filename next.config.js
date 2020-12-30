require('dotenv').config();

module.exports = {
  env: {
    API_TOKEN: process.env.API_TOKEN || '',
  },
};
