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

type SearchBoxProps = {
  quickSearch: (query: string) => string[];
  fullSearch: (query: string) => void;
};

const boldString = (str: string, substr: string) => {
  var strRegExp = new RegExp(substr, "ig");
  return str.replace(strRegExp, (match) => "<b>" + match + "</b>");
};

const SearchBox: FC<SearchBoxProps> = ({ quickSearch, fullSearch }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [autocompleteList, setAutocompleteList] = useState<string[]>([]);
  const { results } = useContext(SearchContext);

  const handleSearchQueryChange = (searchQuery: string) => {
    setSearchQuery(searchQuery);
    const searchResult = quickSearch(searchQuery);
    setAutocompleteList(searchResult);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setAutocompleteList([]);
    fullSearch(searchQuery);
  };

  const handleAutocompleteClick = (complition: string) => {
    setSearchQuery(complition);
    setAutocompleteList([]);
    fullSearch(complition);
  };

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        SP: {JSON.stringify(results)}
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
