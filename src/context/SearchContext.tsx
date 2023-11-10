import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

export interface ISearchContext {
  results: Results;
  setResults: Dispatch<SetStateAction<Results>>;
}

export const SearchContext = createContext<ISearchContext>({
  results: {} as Results,
  setResults: () => {},
});

export const SearchContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [results, setResults] = useState<Results>({} as Results);
  const value = { results, setResults };

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};
