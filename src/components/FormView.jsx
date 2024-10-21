import { useState } from "react";
import useDataLoader from "../hooks/useDataLoader";

const FormView = () => {
  const [sku, setSku] = useState("");
  const [description, setDescription] = useState("");
  const { data } = useDataLoader();

  const handleSearch = () => {
    const searchedProduct = data.find(
      (product) => product.ARTICULO.toLowerCase() === sku.toLowerCase()
    );
    if (searchedProduct) {
      setDescription(searchedProduct.DESCRIPCION);
      console.log(description);
    } else setDescription("Producto no encontrado");
  };

  const handleOnChange = (e) => {
    setSku(e.target.value);
  };

  return (
    <div className="max-w-md mx-auto w-[30vw]">
      <h2 className="text-2xl font-bold mb-4">Buscar Producto</h2>
      <div className="mb-4 ">
        <label
          htmlFor="sku"
          className="block text-sm font-medium text-gray-700 "
        >
          SKU
        </label>
        <input
          type="text"
          value={sku}
          id="sku"
          onChange={handleOnChange}
          className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <button
        onClick={handleSearch}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        BUSCAR
      </button>
      <div className="container mx-auto p-4">
        <h3>Descripcion</h3>
        {description && <p>{description}</p>}
      </div>
    </div>
  );
};

export default FormView;
