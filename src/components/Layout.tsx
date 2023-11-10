import { FC, ReactNode } from "react";
import { Container, Flex, Heading, Text } from "@chakra-ui/react";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
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
        {children}
      </Container>
      <Container
        as="footer"
        p={1}
        display="flex"
        justifyContent="space-between"
      >
        <Text>DB count:data.length</Text>
        <Text size="sm">Copyright 2023</Text>
      </Container>
    </Flex>
  );
};

export default Layout;
