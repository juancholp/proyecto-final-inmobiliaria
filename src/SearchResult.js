import { useEffect } from "react";
import { useState } from "react";
import datos from "./Data/Results";
import RenderResults from "./RenderResults";



const SearchResult = () => {
  const [results, setResults] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [localidad, setLocalidad] = useState("");
  const [numOfResults, setNumOfResults] = useState(0);
    const [loading, setLoading] = useState(true);
  const [resultsPerPage, setResultsPerPage] = useState(5);
  const [thisPage, setThisPage] = useState(1);
  
  useEffect(() => {
    setThisPage(1);
    setResultsPerPage(5);
  },[]);
  useEffect(() => {
      setTimeout(() => {
        setLoading(false)
      }, 500);
       
      const slice = datos.slice((thisPage - 1), resultsPerPage);
      setResults(slice);
      setLocalidad("Montevideo");
      setNumOfResults(slice.length);
      setTotalResults(datos.length);
  }, [thisPage]);
 

  return (
    <div className="SearchResult">
      <div className="info">
      <h4>Venta de casas y apartamentos en {localidad}</h4>
      <p>Estás en: info casas, venta, apartamentos</p>
      </div>
      <main className="results">
      {loading && <p>Cargando...</p>}
      { !loading && <div><p>
        Mostrando {numOfResults} de {totalResults}
      </p>
        <RenderResults results={results} /></div>
        } </main>
      <button>Siguiente Pagina</button>
    </div>
  );
};

export default SearchResult;
