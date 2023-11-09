import React, { useEffect, useMemo, useState } from "react";
import "./App.css";
import SearchBox from "./components/SearchBox";
import { Container, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import SearchResults from "./components/SearchResults";

const App = () => {
  const [data, setData] = useState<Country[]>([]);
  const [results, setResults] = useState<string[]>([]);

  useEffect(() => {
    const getCountries = async () => {
      const response = await fetch(
        `https://restcountries.com/v3/all?fields=name,flags,cca2`
      );
      const data = await response.json();

      setData(data);
    };

    getCountries();
  }, [setData]);

  const quickSearch = useMemo(
    () => (query: string) => {
      if (query === "") return [];

      return data
        .filter((c) => {
          return c.name.common.toLowerCase().includes(query.toLowerCase());
        })
        .slice(0, 6)
        .map((c) => c.name.common);
    },
    [data]
  );

  //TODO Extend Full Search methods
  const fullSearch = useMemo(
    () => (query: string) => {
      const resultsList = quickSearch(query);
      setResults(resultsList);
    },
    [data, quickSearch]
  );

  return (
    <Flex flexDirection="column" minHeight="100vh">
      <Container as="header" p={4}>
        <Heading textAlign="center">X Search</Heading>
      </Container>
      <Container
        as="main"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        flex={1}
      >
        <Stack spacing={8}>
          <SearchBox quickSearch={quickSearch} fullSearch={fullSearch} />
          <SearchResults results={results} />
        </Stack>
      </Container>
      <Container
        as="footer"
        p={1}
        display="flex"
        justifyContent="space-between"
      >
        <Text>DB count:{data.length}</Text>
        <Text size="sm">Copyright 2023</Text>
      </Container>
    </Flex>
  );
};

export default App;
