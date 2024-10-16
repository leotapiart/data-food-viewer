import { csv } from "d3-fetch";

const csvUrl =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSAb2wRvGjuGMF8KosaymlHaYX9tY0hnNaBmW98d809oAGSaBLyDNd31Wt_HTxGhGC-Ls14g_hyy2Ma/pub?output=csv";

const fetchCsvData = async () => {
  return csv(csvUrl)
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log("No se pudo conectar con la base de datos: ", error);
      throw error;
    });
};

export default fetchCsvData;
/*
const fetchCsvData = async () => {
    const csvUrl = "";
    
    try {
        const data = await csv(csvUrl);
        const primerosArticulos = data.slice(0, 10).map(row => row.ARTICULO);
        console.log("Datos:", primerosArticulos);
        return primerosArticulos;
    } catch (error) {
        console.error("Error al obtener los datos:", error);
        throw error;
    }
};

*/
