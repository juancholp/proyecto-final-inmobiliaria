import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import RenderResults from "./RenderResults";
import {Box,Stack,Divider,Button,Container,Grid,Typography,} from "@mui/material";
import MapIcon from "@mui/icons-material/Map";
import { FilterAlt } from "@mui/icons-material";
import "./SearchResult.css";
import { storeContext, } from "../../Store/StoreProvider";
import Filters from "../Filters";
import { keys } from "@material-ui/core/styles/createBreakpoints";

// Componente SearchResult para manejar la búsqueda y visualización de resultados
//COMPONENTE SEARCHRESULT:
const SearchResult = () => {
  // Estados para controlar la cantidad de resultados, carga y los resultados
  const [numOfResults, setNumOfResults] = useState(0);
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState([]);
  // Uso del contexto para acceder a la tienda (store) y dispatch
  const [store, dispatch] = useContext(storeContext);

  
  const filter = () => {
    // Obtener los filtros del estado
    const filters = store.filters;

    // Obtener la lista completa de propiedades desde el estado
    const allProperties = store.propiedades;

    // Aplicar filtros según las condiciones necesarias
    const filteredProperties = allProperties.filter((property) => {
      // Ejemplo de condiciones de filtrado
      // Puedes ajustar estas condiciones según tus necesidades específicas
      const tipoDePropiedadMatch = filters.tipoDePropiedad
        ? property.tipoDePropiedad === filters.tipoDePropiedad
        : true;

      const tipoDeVentaMatch = filters.tipoDeVenta
        ? property.tipoDeVenta === filters.tipoDeVenta
        : true;

      const localidadMatch = filters.localidad
        ? property.localidad === filters.localidad
        : true;

      // Combina las condiciones según tus necesidades (AND, OR, etc.)
      return tipoDePropiedadMatch && tipoDeVentaMatch && localidadMatch;
    });

    return filteredProperties;
  };

  //const filterResults = filter();
  const filtro = store.filters
  const propiedades = store.propiedades
  const ListadoPropiedadess = store.ListadoPropiedades
  const filtered = [];
/////MODIFICAR PARA QUE ANDE 
// Función para aplicar filtros a las propiedades
// const applyFilters = () => {
//   // Filtrado de propiedades basado en la ubicación
//   const filtered = store.propiedades.filter(x => store.filters.localidad.map(item => item === x.ubicacion));
//   // La lógica de filtrado debe ser completada y ajustada según las necesidades
// };

// const applyFilters = () => {
//   // Filtrado de propiedades basado en la ubicación
//   const filtered = store.propiedades.filter(property => store.filters.localidad.includes(property.ubicacion)
//   );

//   // Actualizar los estados con los resultados filtrados y el número de resultados
//   setResults(filtered);
//   setNumOfResults(filtered.length);
// };


// filtro = {
//   nombre: "sebastian",
//   edad: "17",
//   apellido:"cuneo"
// }



// 1 Tenemos que ver que valores tenesmo en filtro
//   Pasamos el objeto a un array de keys
//   recorremos ese array y verificamos sus valores en el objeto


//   keys = [nombre, edad, apellido]

const applyFilters = () => {
  const keys = Object.keys(filtro)
  
  keys.forEach(item =>{
    if(filtro[item] && filtro[item].length > 0){
      /*
      //propiedades.filter()
      const filtered = propiedades.filter(x => propiedades.map(item => item ==x.ubicacion))
      console.log(filtered);
      //filtrar un arrray de objetos en linea 97
      */
      const filtered = propiedades.filter(x => {
        // Utilizamos some para verificar si la ubicacion de x coincide con la ubicacion de alguna propiedad
        return propiedades.some(item => item.ubicacion === x.ubicacion);
      });
    }else{
      console.log("error, no hay filtors aplicados");
    }

  })

  setResults(filtered);
  setNumOfResults(filtered.length);
};

  
/////////////////////////

// Efecto para aplicar los filtros cuando cambian los filtros en el contexto
  useEffect(()=>{
    //applyFilters()
  },[store.filters])

 // Efecto para simular la carga de datos
  useEffect(() => {
   // applyFilters()
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    setTimeout(() => {}, 1500);
  }, []);

  // Renderización del componente
  return (
    <div className="SearchResult">
      <Container maxWidth="md">
        <Box boxShadow={2}>
          <div className="info">
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="stretch"
            >
              <Stack
                direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                divider={<Divider orientation="horizontal" flexItem />}
                spacing={1}
              >
                <Typography
                  component={"h1"}
                  variant="body1"
                  color="text.primary"
                >
                  Venta de casas y apartamentos en: {store.filters.localidad}.
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Estás en: {store.filters.tipo}{", "}
                   {/* {store.filters.TipoDePublicacion}  */}
                   {/* No anda la linea anterior */}
                </Typography>
                <Typography variant="body2" color="text.primary">
                  Mostrando {numOfResults} resultados.
                </Typography>
              </Stack>
              <Stack
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={2}
              >
                <Button variant="outlined" size="small" startIcon={<MapIcon />}>
                  Ver mapa
                </Button>
                <Button
                  variant="outlined"
                  size="small"
                  startIcon={<FilterAlt />}
                >
                  Popularidad
                </Button>
              </Stack>
            </Grid>
          </div>
        </Box>
      </Container>
      <Filters />
      <Container className="resultados" maxWidth="lg">
        <Box
          boxShadow={2}
          padding={2}
          sx={{
            width: "70%",
            height: "fit-content",
            margin: "auto",
            padding: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          { <main className="results">
            {loading && <p>Cargando...</p>}
            {!loading && (
              <div>
                
                {results.length > 0 && (
                  <RenderResults results={results} />
                )}
              </div>
            )}{" "}
          </main> }
        </Box>
      </Container>
    </div>
  );
};

export default SearchResult;
