import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";
import useDB from "../hooks/useDB";

export interface ISearchContext {
  searchResults: Results;
  setResults: Dispatch<SetStateAction<Results>>;
  data: Country[];
}

export const SearchContext = createContext<ISearchContext>({
  searchResults: {} as Results,
  setResults: () => {},
  data: [],
});

export const SearchContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [searchResults, setResults] = useState<Results>({} as Results);
  const { data } = useDB();
  const value = { searchResults, setResults, data };

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};
