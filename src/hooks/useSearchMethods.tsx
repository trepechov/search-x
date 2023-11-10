import { useMemo } from "react";
import { AUTOCOMPLITE_LIMIT, RESULTS_PER_PAGE } from "../constants";

const useSearchMethods = () => {
  const quickSearch = useMemo(
    () => (query: string, data: Country[]) => {
      if (query === "") return [];

      return data
        .filter((c) => {
          return c.name.common.toLowerCase().includes(query.toLowerCase());
        })
        .slice(0, AUTOCOMPLITE_LIMIT)
        .map((c) => c.name.common);
    },
    []
  );

  const fullSearch = useMemo(
    () => (query: string, data: Country[], page?: number) => {
      // if (query === "") return [];
      page = page || 1;

      const resultsList = data
        .filter((c) => {
          return c.name.common.toLowerCase().includes(query.toLowerCase());
        })
        .map((c) => c);

      return {
        query: query,
        list: resultsList.slice(
          (page - 1) * RESULTS_PER_PAGE,
          page * RESULTS_PER_PAGE - 1
        ),
        page: page,
        total: resultsList.length,
      };
    },
    []
  );

  return { quickSearch, fullSearch };
};

export default useSearchMethods;
