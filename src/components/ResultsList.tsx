import { FC, useContext } from "react";
import { SearchContext } from "../context/SearchContext";
import useSearchMethods from "../hooks/useSearchMethods";
import {
  Card,
  CardBody,
  CardHeader,
  Image,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import Paggination from "./Paggination";

const ResultsList: FC = () => {
  const { searchResults, data, setResults } = useContext(SearchContext);
  const { fullSearch } = useSearchMethods();

  const onPageChange = (page: number) => {
    const results = fullSearch(searchResults.query, data, page);
    setResults(results);
  };

  return (
    <>
      {searchResults.list?.length > 0 && (
        <Stack spacing={2}>
          {searchResults.list.map((r, k) => (
            <Card key={k} variant="outline">
              <CardHeader p={3} pb={0}>
                <Heading size="md">{r.name.common}</Heading>
              </CardHeader>
              <CardBody
                p={3}
                pt={0}
                display="flex"
                justifyContent="space-between"
              >
                <Text>{r.name.official}</Text>
                <Image
                  src={r.flags[0]}
                  alt={r.name.common}
                  boxSize={12}
                  boxShadow="lg"
                  borderRadius="base"
                  mt={-5}
                />
              </CardBody>
            </Card>
          ))}
        </Stack>
      )}

      {searchResults.list?.length === 0 && searchResults.query !== "" && (
        <Text align="center" fontStyle="italic">
          No results
        </Text>
      )}

      {searchResults.total > searchResults.list?.length && (
        <Paggination
          total={searchResults.total}
          page={searchResults.page}
          onPageChange={onPageChange}
        />
      )}
    </>
  );
};

export default ResultsList;
