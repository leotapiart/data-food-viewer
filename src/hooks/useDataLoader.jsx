import { useEffect, useState } from "react";
import fetchCsvData from "../services/dataService";

const useDataLoader = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCsvData()
      .then((data) => setData(data))
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  return { data, error };
};

export default useDataLoader;
