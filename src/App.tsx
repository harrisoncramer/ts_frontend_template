import React, { useEffect } from "react";
import { AppRouter } from "./routers";
import ReactGA from "react-ga";
import { ApolloProvider } from "@apollo/client";
import client from "./graphql/client";

function App() {
  useEffect(() => {
    // Use Google Analytics
    ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS as string);
    ReactGA.pageview("/");
  }, []);

  return (
    <ApolloProvider client={client}>
      <AppRouter />;
    </ApolloProvider>
  );
}

export default App;
