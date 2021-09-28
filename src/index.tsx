import { ChakraProvider } from "@chakra-ui/react";
import * as React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ListOfCards } from "./Screens/ListOfCards";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={ListOfCards} />
      </Switch>
    </BrowserRouter>
  );
}

const rootElement = document.getElementById("root");
render(
  <ChakraProvider>
    <App />
  </ChakraProvider>,
  rootElement
);
