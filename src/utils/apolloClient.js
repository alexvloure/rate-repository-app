import { ApolloClient, InMemoryCache } from '@apollo/client';

const createApolloClient = () =>
  new ApolloClient({
    uri: 'http://192.168.0.223:4000/graphql',
    cache: new InMemoryCache(),
  });

export default createApolloClient;
