type Country = {
  name: {
    common: string;
    official: string;
  };
  flags: string[2];
};

type Results = {
  query: string;
  list: Country[];
  total: number;
  page: number;
};
