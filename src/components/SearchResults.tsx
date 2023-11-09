import {FC} from "react";
import {Card, CardBody, CardHeader, Heading, Stack, Text} from "@chakra-ui/react";

const SearchResults: FC = () => {
  return (
    <Stack spacing={2}>
      {Array(5).fill('_').map((i, k) => (
        <Card key={k} variant="outline">
          <CardHeader p={3} pb={0}>
            <Heading size='md'> Result title</Heading>
          </CardHeader>
          <CardBody p={3} pt={0}>
            <Text>variant = Result value</Text>
          </CardBody>
        </Card>
      ))}
    </Stack>
  )
}

export default SearchResults;