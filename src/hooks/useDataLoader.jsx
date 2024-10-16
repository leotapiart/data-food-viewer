import { useEffect, useState } from "react";
import fetchCsvData from "../services/dataService";

const useDataLoader = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchCsvData()
      .then((data) => setData(data))
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  return { data, loading, error };
};

export default useDataLoader;
