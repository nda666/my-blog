// ~/graphql/client.ts

import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "https://graphql.contentful.com/content/v1/spaces/7fc3ers47p34/environments/master",
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer UNXDOA-QfI8GIFlGkMDYN7Z84Kwq3_u591zx8IR6xec`,
    },
  };
});

const graphqlClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  ssrMode: true,
});

export default graphqlClient;
