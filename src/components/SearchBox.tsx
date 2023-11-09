import {FC} from "react";
import {Box, Button, Card, Input, InputGroup, Stack, Text} from "@chakra-ui/react";

const SearchBox: FC = () => {
  return (
    <Box>
      <form>
        <InputGroup position="relative" zIndex={999}>
          <Input type='search' placeholder='Search...' mr={1}/>
          <Button type="submit">Search</Button>
          <Card variant="elevated" w="full" position="absolute" p={2} top={12} zIndex={999}>
            <Stack spacing={0}>
              {Array(5).fill("_").map((i, k) =>
                <Text p={2} borderRadius={4} _hover={{bg: "teal.100"}}>Result 1</Text>
              )}
            </Stack>
          </Card>
        </InputGroup>
      </form>
    </Box>
  )
}

export default SearchBox;