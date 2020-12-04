module.exports = {
  client: {
    includes: ['./graphql/**/*.graphql'],
    excludes: ['**/.git/**'],
    service: {
      name: 'backend',
      clientSchemaDirectives: ['client'],
      localSchemaFile: './schema.github.json',
    },
  },
};
