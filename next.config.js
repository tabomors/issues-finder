require('dotenv').config();

module.exports = {
  async rewrites() {
    return [
      { source: '/api/graphql', destination: 'https://api.github.com/graphql' },
    ];
  },
  env: {
    SERVER_URL: process.env.SERVER || 'http://localhost:3000',
    API_TOKEN: process.env.API_TOKEN || ''
  },
};
