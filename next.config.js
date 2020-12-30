require('dotenv').config();

module.exports = {
  async rewrites() {
    return [
      { source: '/api/graphql', destination: 'https://api.github.com/graphql' },
    ];
  },
  env: {
    SERVER_URL: process.env.SERVER || '',
    API_TOKEN: process.env.API_TOKEN || '',
  },
};
