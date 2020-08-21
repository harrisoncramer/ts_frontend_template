import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

const httpLink = createHttpLink({ uri: "https://crwn-clothing.com" });
const cache = new InMemoryCache();

const client = new ApolloClient({
  link: httpLink,
  cache,
  connectToDevTools: true,
});

export default client;
