import { useEffect, useState } from "react";
import fetchCsvData from "../services/dataService";

const useDataHeaders = () => {
  const [headers, setHeaders] = useState([]);

  useEffect(() => {
    fetchCsvData().then((data) => {
      if (data.length > 0) {
        setHeaders(Object.keys(data[0]));
      }
    });
  }, []);
  return headers;
};

export default useDataHeaders;
