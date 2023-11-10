import { FC, FormEvent, useContext, useState } from "react";
import {
  Box,
  Button,
  Card,
  Input,
  InputGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import { SearchContext } from "../context/SearchContext";
import useSearchMethods from "../hooks/useSearchMethods";

const boldString = (str: string, substr: string) => {
  var strRegExp = new RegExp(substr, "ig");
  return str.replace(strRegExp, (match) => "<b>" + match + "</b>");
};

const SearchBox: FC = () => {
  const { quickSearch, fullSearch } = useSearchMethods();
  const { setResults, data } = useContext(SearchContext);

  const [searchQuery, setSearchQuery] = useState<string>("");
  const [autocompleteList, setAutocompleteList] = useState<string[]>([]);

  const handleSearchQueryChange = (searchQuery: string) => {
    setSearchQuery(searchQuery);
    const searchResult = quickSearch(searchQuery, data);
    setAutocompleteList(searchResult);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setAutocompleteList([]);
    const results = fullSearch(searchQuery, data);
    setResults(results);
  };

  const handleAutocompleteClick = (complition: string) => {
    setSearchQuery(complition);
    setAutocompleteList([]);

    const results = fullSearch(complition, data);
    setResults(results);
  };

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <InputGroup position="relative" zIndex={999}>
          <Input
            value={searchQuery}
            type="search"
            placeholder="Search..."
            mr={1}
            onChange={(e) => handleSearchQueryChange(e.target.value)}
          />
          <Button type="submit">Search</Button>
          {autocompleteList.length && (
            <Card
              variant="elevated"
              w="full"
              position="absolute"
              p={2}
              top={12}
              zIndex={999}
            >
              <Stack spacing={0}>
                {autocompleteList.map((complition, k) => (
                  <Text
                    p={2}
                    key={k}
                    borderRadius={4}
                    cursor="pointer"
                    _hover={{ bg: "black.100" }}
                    onClick={() => handleAutocompleteClick(complition)}
                    dangerouslySetInnerHTML={{
                      __html: boldString(complition, searchQuery),
                    }}
                  />
                ))}
              </Stack>
            </Card>
          )}
        </InputGroup>
      </form>
    </Box>
  );
};

export default SearchBox;
