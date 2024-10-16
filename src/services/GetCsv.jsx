import { csv } from 'd3-fetch';

const GetCsv = () => {

    const csvUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSAb2wRvGjuGMF8KosaymlHaYX9tY0hnNaBmW98d809oAGSaBLyDNd31Wt_HTxGhGC-Ls14g_hyy2Ma/pub?output=csv"

    return csv(csvUrl).then(data => {
        const primerosArticulos = data.slice(0, 10).map(row => row.ARTICULO);
        console.log("Datos:", primerosArticulos)
    }).catch((error) => {
        console.error("Error al obtener los gifs:", error);
    });
}

export default GetCsv