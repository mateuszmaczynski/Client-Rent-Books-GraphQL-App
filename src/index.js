import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client";
import { CSSReset, ChakraProvider, theme } from "@chakra-ui/react"
import App from "./App";

const GRAPHQL_ENDPOINT = "https://rent-books-graphql-app.herokuapp.com";

const cache = new InMemoryCache({
  addTypename: false,
  resultCaching: false
});
const client = new ApolloClient({
  uri: GRAPHQL_ENDPOINT,
  cache
});

const rootElement = document.getElementById("root");
ReactDOM.render(
  <ApolloProvider client={client}>
    <ChakraProvider theme={theme}>
      <CSSReset />
      <App />
    </ChakraProvider>
  </ApolloProvider>,
  rootElement
);
