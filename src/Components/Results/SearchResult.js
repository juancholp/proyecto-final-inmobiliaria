import React, { useEffect, useState, useContext } from "react";
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
import RenderResults from "./RenderResults";

const SearchResult = () => {
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState([]);
  const [store, dispatch] = useContext(storeContext);

  const filtro = store.filters;
  const propiedades = store.propiedades;

  useEffect(() => {
    if (filtro == null) {
      setResults(propiedades);
    } else {
      const {
        localidad,
        estado,
        tipoDePropiedad,
        dormitorios,
        moneda,
        maxPrice,
        tipoDePublicacion,
      } = filtro;

      let dataFiltrada = propiedades;
      
      // anda
      if (tipoDePublicacion && Array.isArray(tipoDePublicacion) && tipoDePublicacion.length > 0) {
        dataFiltrada = dataFiltrada.filter((item) => tipoDePublicacion.some((itemTipoDePublicacion) => 
          item?.tipoDePublicacion?.includes(itemTipoDePublicacion)))
      } else if (tipoDePublicacion && typeof tipoDePublicacion === "string") {
        dataFiltrada = dataFiltrada.filter((item) => 
        item?.tipoDePublicacion?.includes(tipoDePublicacion))
      }
      // anda
      if (localidad && Array.isArray(localidad) && localidad.length > 0) {
        dataFiltrada = dataFiltrada.filter((item) => localidad.some((itemLocalidad) => 
          item?.ubicacion?.includes(itemLocalidad)))
      } else if (localidad && typeof localidad === "string") {
        dataFiltrada = dataFiltrada.filter((item) => 
          item?.ubicacion?.includes(localidad))
      }
      // anda
      if (estado && Array.isArray(estado) && estado.length > 0) {
        dataFiltrada = dataFiltrada.filter((item) => estado.some((itemEstado) => 
          item?.estado?.includes(itemEstado)))
      } else if (estado && typeof estado === "string") {
        dataFiltrada = dataFiltrada.filter((item) => 
          item?.estado?.includes(estado))
      }
      // anda
      if (tipoDePropiedad && Array.isArray(tipoDePropiedad) && tipoDePropiedad.length > 0) {
        dataFiltrada = dataFiltrada.filter((item) => tipoDePropiedad.some((itemTipoDePropiedad) =>
          item?.tipoDePropiedad?.includes(itemTipoDePropiedad)))
      } else if (tipoDePropiedad && typeof tipoDePropiedad === "string") {
        dataFiltrada = dataFiltrada.filter((item) =>
          item?.tipoDePropiedad?.includes(tipoDePropiedad))
      }
      // anda
      if (dormitorios && dormitorios.length > 0) {
        dataFiltrada = dataFiltrada.filter((item) =>
          dormitorios.includes(item?.dormitorios)
        );
      } else if (dormitorios && typeof dormitorios === "string") {
        dataFiltrada = dataFiltrada.filter((item) => item?.dormitorios === dormitorios);
      }
      // anda
      if (moneda) {
        dataFiltrada = dataFiltrada.filter((item) => {
          if (moneda === "Pesos") {
            return item?.tipoMoneda === "$"
          } else if (moneda === "Dolares") {
            return item?.tipoMoneda === "U$D"
          }
        });        
      }
      // anda
      if (maxPrice && maxPrice.length > 0) {
        console.log("precio maximo", maxPrice)
        dataFiltrada = dataFiltrada.filter((item) =>  
          parseFloat(item?.precio) <= parseFloat(maxPrice));
      }
      

      setResults(dataFiltrada);
      
    }

    console.log("filtro aplicado", filtro)
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, [filtro, propiedades]);
  console.log("resultados", results)
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
              {store.filters?.tipoDePublicacion} de {store.filters?.tipoDePropiedad} en {store.filters?.localidad}.
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
                {results.length > 0 ? (
                  <RenderResults results={results} />
                ) : (
                  <p>No se encontraron resultados para tu busqueda</p>
                )}
              </div>
            )}{" "}
          </main>
        </Box>
      </Container>
    </div>
  );
};

export default SearchResult;
