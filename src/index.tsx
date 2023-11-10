import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { SearchContextProvider } from "./context/SearchContext";
import App from "./App";
import Layout from "./components/Layout";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <ChakraProvider>
    <SearchContextProvider>
      <Layout>
        <App />
      </Layout>
    </SearchContextProvider>
  </ChakraProvider>
);
