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

      dataFiltrada = dataFiltrada.filter((item) => {
        if (localidad && typeof localidad != "string" && localidad.length > 0) {
        localidad.map((itemLocalidad) => {
          return item?.ubicacion?.includes(itemLocalidad)
        })
        } else if (localidad && typeof localidad == "string") {
          return item?.ubicacion?.includes(localidad)
        }
      });
      
      if (estado && estado.length > 0) {
        
        dataFiltrada = dataFiltrada.filter((item) =>
          estado.map((itemEstado) => {
            return item?.estado?.includes(itemEstado)
          })
          
        );
      }

      if (tipoDePropiedad && tipoDePropiedad.length > 0) {
        dataFiltrada = dataFiltrada.filter((item) =>
          tipoDePropiedad.map((itemTipoDePropiedad) =>{
            return item?.tipoDePropiedad?.includes(itemTipoDePropiedad)
          })
        );
      }

      if (dormitorios && dormitorios.length > 0) {
        dataFiltrada = dataFiltrada.filter((item) =>
          dormitorios.map((itemDormitorios) => {
            return item?.dormitorios?.includes(itemDormitorios)
          })
        );
      }

      if (moneda && moneda.length > 0) {
        dataFiltrada = dataFiltrada.filter((item) =>
          moneda.map((itemMoneda) => {
            return item?.moneda?.includes(itemMoneda)
          })
        );
      }

      if (maxPrice && maxPrice.length > 0) {
        dataFiltrada = dataFiltrada.filter(
          (item) => parseFloat(item.maxPrice) <= parseFloat(maxPrice)
        );
      }

      if (tipoDePublicacion && tipoDePublicacion.length > 0) {
        dataFiltrada = dataFiltrada.filter((item) =>
          item?.tipoDePublicacion === tipoDePublicacion
        );
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
