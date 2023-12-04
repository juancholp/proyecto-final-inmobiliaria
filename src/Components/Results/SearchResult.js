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
  Grid,
  Typography,
} from "@mui/material";
import MapIcon from "@mui/icons-material/Map";
import { FilterAlt } from "@mui/icons-material";
import "./SearchResult.css";
import { storeContext } from "../../Store/StoreProvider";
import Filtros from "../Filtros";
import { useFilter } from "../../Hooks/useFilter";

const SearchResult = () => {
  const [numOfResults, setNumOfResults] = useState(0);
  const [loading, setLoading] = useState(true);
  const [store, dispatch] = useContext(storeContext);
  const [filteredResults] = useFilter(store.propiedades, store.filters);

  useEffect(() => {
    document.title = `Blue Paradiese | ${numOfResults} resultados`;
  });
  useEffect(() => {
    console.log(store.filters);
  }, [store.filters]);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    setTimeout(() => {}, 1500);
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
      <Container maxWidth="md" direction="column">
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
                  {store.propiedades.length === filteredResults.length
                    ? "Estas viendo todos los resultados"
                    : "Viendo resultados en : " +
                      store.filters.ubicacion +
                      " - " +
                      store.filters.tipoVenta}
                </Typography>

                <Typography variant="body2" color="text.primary">
                  Mostrando {numOfResults} resultados.
                </Typography>
              </Stack>
            </Grid>
          </div>
        </Box>
      </Container>
      <Filtros />
      <Container
        sx={{
          mt: 4,
          mb: 4,
          p: 2,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        maxWidth="xxl"
      >
        <main className="results">
          {loading && <p>Cargando...</p>}
          {!loading && <RenderResults results={filteredResults} />}
        </main>
      </Container>
    </div>
  );
};

export default SearchResult;
