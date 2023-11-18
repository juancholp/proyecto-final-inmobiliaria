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
        comodidad,
        tipoDePublicacion,
      } = filtro;

      let dataFiltrada = propiedades;

      if (localidad) {
        dataFiltrada = dataFiltrada.filter((item) =>
          item.ubicacion.includes(localidad)
        );
      }

      if (estado) {
        dataFiltrada = dataFiltrada.filter((item) =>
          item.estado.includes(estado)
        );
      }

      if (tipoDePropiedad) {
        dataFiltrada = dataFiltrada.filter((item) =>
          item.tipoDePropiedad.includes(tipoDePropiedad)
        );
      }

      if (dormitorios) {
        dataFiltrada = dataFiltrada.filter((item) =>
          item.dormitorios.includes(dormitorios)
        );
      }

      if (moneda) {
        dataFiltrada = dataFiltrada.filter((item) =>
          item.moneda.includes(moneda)
        );
      }

      if (maxPrice) {
        dataFiltrada = dataFiltrada.filter(
          (item) => parseFloat(item.maxPrice) <= parseFloat(maxPrice)
        );
      }

      if (comodidad) {
        dataFiltrada = dataFiltrada.filter((item) =>
          item.comodidad.includes(comodidad)
        );
      }

      if (tipoDePublicacion) {
        dataFiltrada = dataFiltrada.filter((item) =>
          item.tipoDePublicacion === tipoDePublicacion
        );
      }

      setResults(dataFiltrada);
      
    }

    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, [filtro, propiedades]);

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
