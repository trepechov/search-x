import { FC, ReactNode, useContext } from "react";
import { Container, Flex, Heading, Text } from "@chakra-ui/react";
import { SearchContext } from "../context/SearchContext";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  const { data } = useContext(SearchContext);
  return (
    <Flex flexDirection="column" minHeight="100vh">
      <Container as="header" p={4}>
        <Heading textAlign="center">Search X</Heading>
      </Container>
      <Container
        as="main"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        flex={1}
      >
        {children}
      </Container>
      <Container
        as="footer"
        p={1}
        display="flex"
        justifyContent="space-between"
      >
        <Text>DB records: {data.length}</Text>
        <Text size="sm">Copyright 2023</Text>
      </Container>
    </Flex>
  );
};

export default Layout;
