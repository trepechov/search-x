import React from 'react';
import './App.css';
import SearchBox from "./components/SearchBox";
import {Container, Flex, Heading, Stack, Text} from "@chakra-ui/react";
import SearchResults from "./components/SearchResults";

const App = () => {
  return (
    <Flex flexDirection="column" minHeight="100vh">
      <Container as="header" p={4}>
        <Heading textAlign="center">X Search</Heading>
      </Container>
      <Container as="main" display="flex" flexDirection="column" justifyContent="center" flex={1}>
        <Stack spacing={8}>
          <SearchBox/>
          <SearchResults/>
        </Stack>
      </Container>
      <Container as="footer" p={1}>
        <Text textAlign="center" size="sm">Copyright 2023</Text>
      </Container>
    </Flex>
  );
}

export default App;
