import React from "react";
import { storeContext } from "../Store/StoreProvider";
import { useEffect, useState, useContext } from "react";
import RenderResults from "../Components/Results/RenderResults";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";

let theme = createTheme();
theme = responsiveFontSizes(theme);

const Alquiler = () => {
  const [store, dispatch] = useContext(storeContext);
  const [filteredResults, setFilteredResults] = useState([]);
  // let filtered = store.propiedades.filter((prop) => {
    
  //   console.log("store prop", store.propiedades, "prop", prop.tipoDePublicacion)
  //   return prop.tipoDePublicacion === "Alquiler";
  // });
  useEffect(() => {
    const filterResults = filter(store.propiedades);
    if (filterResults.length > 0) {
      setFilteredResults(filterResults);
    } else {
      setFilteredResults(store.propiedades);
    }

  },[store.filters,store.propiedades]);
  
  const filter = () => {

    return store.propiedades.filter((result) => {

      const {
        localidad,
        estado,
        TipoDePublicacion = "Alquiler",
        tipo,
        dormitorios,
        moneda,
      } = store.filters;

      return (
        (!localidad || result.ubicacion.includes(localidad)) &&
        (!estado || estado.includes(result.estado)) &&
        (!TipoDePublicacion || result.TipoDePublicacion === "Alquiler") &&
        (!tipo || tipo.includes(result.tipoDePropiedad)) &&
        (!dormitorios || dormitorios.includes(result.dormitorio)) &&
        (!moneda || moneda.includes(result.tipoMoneda))
      );
    });
  };

  return (
    <>
      <Container maxWidth="xxl">
        <Box m={2} pt={3}>
          <ThemeProvider theme={theme}>
            <Typography textAlign="center" mb={6} fontSize={"3rem"} color="#1976d2" fontFamily={"Lato"} fontWeight={"400"}>
              Alquiler de Propiedades
            </Typography>

            <RenderResults results={filteredResults} />
          </ThemeProvider>
        </Box>
      </Container>
    </>
  );
};

export default Alquiler;