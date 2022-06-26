import { ApolloClient, DefaultOptions, InMemoryCache } from '@apollo/client';

const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
};

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4ro7vfd1b8901yxc8ay032m/master',
  cache: new InMemoryCache(),
  defaultOptions: defaultOptions,
});
