import { useEffect, useState } from "react";
import useDataLoader from "../hooks/useDataLoader";
import useDataHeaders from "../hooks/useDataHeaders";

const DataList = () => {
  const { data, error } = useDataLoader();
  const headers = useDataHeaders();
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);

  const handleOnChange = (e) => setSearchTerm(e.target.value);

  useEffect(() => {
    if (searchTerm.length >= 3) {
      const handler = setTimeout(() => {
        setDebouncedSearchTerm(searchTerm);
      }, 300);
      return () => {
        clearTimeout(handler);
      };
    } else {
      setDebouncedSearchTerm("");
    }
  }, [searchTerm]);

  const filteredData =
    debouncedSearchTerm.length >= 3
      ? data.filter(
          (row) =>
            row.ARTICULO.toLowerCase().includes(
              debouncedSearchTerm.toLowerCase()
            ) ||
            row.DESCRIPCION.toLowerCase().includes(
              debouncedSearchTerm.toLowerCase()
            )
        )
      : data.slice(0, 50);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Tabla de Productos</h1>
      <input
        type="text"
        placeholder="Buscar por SKU o Descripción"
        className="w-full p-2 mb-4 border border-gray-300 rounded "
        value={searchTerm}
        onChange={handleOnChange}
      />

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className=" bg-gray-500 ">
              {/* ENCABEZADO DE LA TABLA */}
              {headers.map((header, index) => (
                <th
                  key={index}
                  className="px-4 py-2 text-left text-xs font-medium text-gray-50 uppercase tracking-wider w-32"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* CONTENIDO DE LA TABLA */}
            {filteredData.map((item, index) => (
              <tr
                key={index}
                className={index % 2 == 0 ? "bg-gray-50" : "bg-white"}
              >
                {headers.map((header, cellIndex) => (
                  <td
                    key={cellIndex}
                    className="px-4 py-2 whitespace-nowrap text-sm text-gray-900 w-32"
                  >
                    {item[header]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataList;
