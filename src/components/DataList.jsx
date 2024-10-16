import { useState, useEffect } from "react";
import fetchCsvData from "../services/dataService";

const DataList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchCsvData().then((data) => setData(data));
  }, []);

  const primeroArticulos = data.slice(0, 10);

  return (
    <div>
      <ul>
        {primeroArticulos.map((row, index) => (
          <li key={index}>{row.DESCRIPCION}</li>
        ))}
      </ul>
    </div>
  );
};

export default DataList;
