import { useEffect, useState, useContext } from "react";
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
import RenderResults from "./RenderResults";
import { storeContext } from "../../Store/StoreProvider";
import Filters from "../Filters";

const SearchResult = () => {
  const [numOfResults, setNumOfResults] = useState(0);
  const [loading, setLoading] = useState(true);
  const [filteredResults, setFilteredResults] = useState([]);
  const [store, dispatch] = useContext(storeContext);
  const [textoResultado, settextoResultado] = useState([])
  useEffect(() => {

    if (store.filters.localidad) {
      settextoResultado(store.filters.TipoDePublicacion + " de " + store.filters.tipo + " en " + store.filters.localidad)

    }
    else (
      settextoResultado("Mostrando todos Propiedades")

    )
  })
  useEffect(() => {
    const filterResults = filter();
    if (filterResults.length > 0) {
      setFilteredResults(filterResults);
    } else {
      setFilteredResults(store.propiedades);
    }

  }, [store.filters, store.propiedades]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    if (filteredResults.length > 0) {
      setNumOfResults(filteredResults.length);
    } else {
      setNumOfResults(0);
    }
  }, [filteredResults]);

  const filter = () => {

    return store.propiedades.filter((result) => {

      const {
        localidad,
        estado,
        TipoDePublicacion,
        tipo,
        dormitorios,
        moneda,
      } = store.filters;

      return (
        (!localidad || result.ubicacion.includes(localidad)) &&
        (!estado || estado.includes(result.estado)) &&
        (!TipoDePublicacion || result.tipoVenta === TipoDePublicacion) &&
        (!tipo || tipo.includes(result.tipoDePropiedad)) &&
        (!dormitorios || dormitorios.includes(result.dormitorio)) &&
        (!moneda || moneda.includes(result.tipoMoneda))
      );
    });
  };

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
              {textoResultado}

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
      {/* <Box marginTop={4}>
        <Filters />
      </Box> */}
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

            )}
          </main>
        </Box>

      </Container>
    </div>
  );
};

export default SearchResult;
