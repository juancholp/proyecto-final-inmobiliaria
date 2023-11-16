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

  
  const filter = (results) => {
    const filterResults = results.filter((result) => {
      if (store.filters.localidad) {
        if (store.filters.localidad === result.ubicacion) {
          return true;
        }
      }
      if (store.filters.estado) {
        store.filters.estado.map((estado) => {
          if (result.estado === estado) {
            return true;
          }
        });
      }
      if (store.filters.TipoDePublicacion) {
        if (store.filters.TipoDePublicacion === result.tipoVenta) {
          return true;
        }
      }
      if (store.filters.tipo) {
        store.filters.tipo.map((tipo) => {
          if (result.tipoDePropiedad === tipo) {
            return true;
          }
        });
      }
      if (store.filters.dormitorios) {
        store.filters.dormitorios.map((dormitorio) => {
          if (result.dormitorio === dormitorio) {
            return true;
          }
        });
      }
      if (store.filters.moneda) {
        store.filters.moneda.map((moneda) => {
          if (result.tipoMoneda === moneda) {
            return true;
          }
        });
      }
    });
    return filterResults;
  };

  useEffect(() => {
    const filterResults = filter(results);
    setFilteredResults(filterResults);
  }, [results]);
  useEffect(() => {
    setResults(store.propiedades);
  }, [store.propiedades]);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
    setTimeout(() => {}, 2000);
  }, []);

  useEffect(() => {
    if (filteredResults.length > 0) {
      setNumOfResults(filteredResults.length);
    } else {
      setNumOfResults(0);
    }
  }, [filteredResults]);

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
              Venta de casas y apartamentos en {store.filters.localidad}.
            </Typography>
            <Typography variant="body2" color="text.primary">
              Mostrando {numOfResults} resultados.
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
                {filteredResults.length > 0 && (
                  <RenderResults results={filteredResults} />
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
