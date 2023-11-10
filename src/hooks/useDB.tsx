import { useEffect, useState } from "react";
import { API_URL } from "../constants";

const useDB = () => {
  const [data, setData] = useState<Country[]>([]);

  useEffect(() => {
    const getCountries = async () => {
      const response = await fetch(`${API_URL}/all?fields=name,flags`);
      const data = await response.json();

      setData(data);
    };

    getCountries();
  }, [setData]);

  return { data };
};

export default useDB;
