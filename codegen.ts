import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  generates: {
    'src/types/graphqlTypes.ts': {
      schema: ['./schema.docs.graphql'],
      plugins: ['typescript'],
    },
    'src/types/': {
      documents: './src/**/*.graphql',
      schema: ['./schema.docs.graphql'],
      preset: 'near-operation-file',
      config: {
        fetcher: {
          endpoint: 'endpointUrl',
        },
        addInfiniteQuery: true
      },
      presetConfig: {
        extension: '.generated.tsx',
        baseTypesPath: 'graphqlTypes.ts',
      },
      plugins: [
        'typescript-operations',
        'typescript-react-query',
        {
          add: {
            content: "const endpointUrl = '/api/graphql';",
          },
        },
      ],
    },
  },
};

export default config
