import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
} from "@apollo/client";

export const client = new ApolloClient({
  link: new HttpLink({
    uri:
      process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT ||
      "https://graphql-api-brown.vercel.app/api/graphql",
  }),
  cache: new InMemoryCache(),
});
