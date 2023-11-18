import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import RenderResults from "./RenderResults";
import {
  Box,
  Stack,
  Divider,
  Button,
  Container,
  Typography,
} from "@mui/material";
import MapIcon from "@mui/icons-material/Map";
import { FilterAlt } from "@mui/icons-material";
import { storeContext } from "../../Store/StoreProvider";
import Filters from "../Filters";


const SearchResult = () => {
  const [numOfResults, setNumOfResults] = useState(0);
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [store, dispatch] = useContext(storeContext);

  const filtro = store.filters;
  const propiedades = store.propiedades;


  useEffect(() => {
    console.log("filtros", filtro)

    if (filtro == null) {
      setResults(propiedades)
    }

    const keys = Object.keys(filtro)
    if(keys.length > 0){
     const { 
    localidad,
     estado,
     tipoDePropiedad,
     dormitorios,
     moneda,
     maxPrice,
     comodidad,
     tipoDePublicacion} = filtro
     
     let dataFiltrada = []
     if(localidad){
      dataFiltrada = propiedades.filter(item => item.ubicacion.includes(filtro.localidad))
     }
    if(estado){
      dataFiltrada = propiedades.filter(item => item.estado.includes(filtro.estado))
    }
    if(tipoDePropiedad){
      dataFiltrada = propiedades.filter(item => item.tipoDePropiedad.includes(filtro.tipoDePropiedad))
    }
    if(dormitorios){
      dataFiltrada = propiedades.filter(item => item.dormitorios.includes(filtro.dormitorios))
    }
    if(moneda){
      dataFiltrada = propiedades.filter(item => item.moneda.includes(filtro.moneda))
    }
    if(maxPrice){
      dataFiltrada = propiedades.filter(item => item.maxPrice.includes(filtro.maxPrice))
    }
    if(comodidad){
      dataFiltrada = propiedades.filter(item => item.comodidad.includes(filtro.comodidad))
    }
    if(tipoDePublicacion){
      dataFiltrada = propiedades.filter(item => item.tipoDePublicacion.includes(filtro.tipoDePublicacion))
    }
     setResults(dataFiltrada)
     console.log("data filtrada", dataFiltrada)
    }

    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
      <div className="SearchResult">
      <Container maxWidth="xxl">
        <div className="info">
          <Stack
            direction="column"
            divider={<Divider orientation="horizontal" flexItem />}
            spacing={1}
            textAlign={"center"}
            justifyContent={"center"}
            marginTop={4}
          >
            <Typography
              component={"h1"}
              variant="body1"
              color="text.primary"
              alignContent={"center"}
              textAlign={"center"}
            >
              Venta de casas y apartamentos en {store.filters?.localidad}.
            </Typography>
            <Typography variant="body2" color="text.primary">
              Mostrando {results.length} resultados.
            </Typography>
          </Stack>
          <Stack
            direction="row"
            spacing={{ xs: 1, sm: 1 }}
            gap={{ xs: 1, sm: 1 }}
            columns={{ xs: 1, sm: 1, md: 1 }}
            textAlign={"center"}
            justifyContent={"center"}
            display={"Flex"}
            flexWrap={"wrap"}
            alignItems="flex-start"
          >
            <Button variant="outlined" size="small" startIcon={<MapIcon />}>
              Ver mapa
            </Button>
            <Button variant="outlined" size="small" startIcon={<FilterAlt />}>
              Popularidad
            </Button>
          </Stack>
        </div>
      </Container>
      <Box marginTop={4}>
        <Filters />
      </Box>
      <Container maxWidth="xxl">
        <Box
          boxShadow={2}
          padding={2}
          sx={{
            width: "100%",
            height: "fit-content",
            margin: "auto",

            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <main className="results">
            {loading && <p>Cargando...</p>}
            {!loading && (
              <div>
                {results.length > 0 && (
                  <RenderResults results={results} />
                )}
              </div>
            )}{" "}
          </main>
        </Box>
      </Container>
    </div>
    )
};

export default SearchResult;
