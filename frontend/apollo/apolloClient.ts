'use client'
import { API_URL } from "@/environments";
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({
    uri: API_URL,
    credentials: "include",
  }),
  cache: new InMemoryCache(),
});

export default client;
