const Header = ({ view, setView }) => {
  const handleChange = (tipo) => {
    setView(tipo);
  };

  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-white text-xl font-bold">Producto App</h1>
        <div>
          <button
            onClick={() => handleChange("table")}
            className={`mx-2 px-4 py-2 rounded ${
              view === "table"
                ? "bg-white text-blue-600"
                : "bg-blue-500 text-white"
            }`}
          >
            Tabla
          </button>
          <button
            onClick={() => handleChange("form")}
            className={`mx-2 px-4 py-2 rounded ${
              view === "form"
                ? "bg-white text-blue-600"
                : "bg-blue-500 text-white"
            }`}
          >
            Formulario
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
