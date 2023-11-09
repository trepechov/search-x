import { FC } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";

type SearchResltProps = {
  results: string[];
};

const SearchResults: FC<SearchResltProps> = ({ results }) => {
  return (
    <>
      {results.length > 0 && (
        <Stack spacing={2}>
          {results.map((r, k) => (
            <Card key={k} variant="outline">
              <CardHeader p={3} pb={0}>
                <Heading size="md">{r}</Heading>
              </CardHeader>
              <CardBody p={3} pt={0}>
                <Text>{r}</Text>
              </CardBody>
            </Card>
          ))}
        </Stack>
      )}
    </>
  );
};

export default SearchResults;
