import { FC, useContext } from "react";
import { SearchContext } from "../context/SearchContext";
import {
  Card,
  CardBody,
  CardHeader,
  Image,
  Heading,
  Stack,
  Text,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";

type SearchResltProps = {
  fullSearch: (query: string, page?: number) => void;
};

const SearchResults: FC<SearchResltProps> = ({ fullSearch }) => {
  const { results } = useContext(SearchContext);

  const onPageChange = (page: number) => {
    fullSearch(results.query, page);
  }

  return (
    <>
      {results.list?.length > 0 && (
        <Stack spacing={2}>
          {results.list.map((r, k) => (
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

      {results.total > results.list?.length && (
        <Paggination
          total={results.total}
          page={results.page}
          perPage={6}
          onPageChange={onPageChange}
        />
      )}
    </>
  );
};

type PagginationProps = {
  total: number;
  page: number;
  perPage: number;
  onPageChange: (page: number) => void;
};

const Paggination: FC<PagginationProps> = ({
  total,
  page,
  perPage,
  onPageChange,
}) => {
  const pageCount = Math.ceil(total / perPage);

  return (
    <ButtonGroup size="sm">
      <span>{total}</span>
      {Array(pageCount)
        .fill("_")
        .map((i, k) => (
          <Button
            key={k}
            variant={page === k + 1 ? "solid" : "outline"}
            onClick={() => onPageChange(k + 1)}
          >
            {k + 1}
          </Button>
        ))}
    </ButtonGroup>
  );
};

export default SearchResults;
