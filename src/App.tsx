import React, { useContext, useEffect, useMemo, useState } from "react";
import "./App.css";
import SearchBox from "./components/SearchBox";
import { Container, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import SearchResults from "./components/SearchResults";
import { SearchContext } from "./context/SearchContext";

const App = () => {
  const [data, setData] = useState<Country[]>([]);
  // const [results, setResults] = useState<{
  //   query: strinig;
  //   list: Country[];
  //   page: number;
  //   total: number;
  // }>({
  //   list: [],
  //   page: 1,
  //   total: 0,
  // });

  const { results, setResults } = useContext(SearchContext);

  useEffect(() => {
    const getCountries = async () => {
      const response = await fetch(
        `https://restcountries.com/v3/all?fields=name,flags`
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

  const fullSearch = useMemo(
    () => (query: string, page?: number) => {
      if (query === "") return [];
      page = page || 1;

      const perPage = 6;

      const allResults = data
        .filter((c) => {
          return c.name.common.toLowerCase().includes(query.toLowerCase());
        })
        .map((c) => c);

      console.log(
        "debug slice",
        (page - 1) * perPage,
        perPage,
        allResults.slice((page - 1) * perPage, page * perPage)
      );

      setResults({
        query: query,
        list: allResults.slice((page - 1) * perPage, page * perPage),
        page: page,
        total: allResults.length,
      });
    },
    [data]
  );

  const onPageChange = (page: number) => {
    fullSearch("ra", page);
  };

  return (
    <Stack spacing={8}>
      <SearchBox quickSearch={quickSearch} fullSearch={fullSearch} />
      <SearchResults fullSearch={fullSearch} />
    </Stack>
  );
};

export default App;
