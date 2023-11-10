import { Stack } from "@chakra-ui/react";
import SearchBox from "./components/SearchBox";
import ResultsList from "./components/ResultsList";

const App = () => {
  return (
    <Stack spacing={8}>
      <SearchBox />
      <ResultsList />
    </Stack>
  );
};

export default App;
