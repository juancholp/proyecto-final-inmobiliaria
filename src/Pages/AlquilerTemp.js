import React from "react";
import { storeContext } from "../Store/StoreProvider";
import { useContext } from "react";
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

const AlquilerTemp = () => {
  const [store, dispatch] = useContext(storeContext);

  let filtered = store.propiedades.filter((prop) => {
    return prop.tipoVenta === "Alquiler Temporal";
  });

  return (
    <>
      <Container maxWidth="xxl">
        <Box m={2} pt={3}>
          <ThemeProvider theme={theme}>
            <Typography textAlign="center" mb={6} fontSize={"2.5rem"} color="#1976d2" fontFamily={"Lato"} fontWeight={"600"}>
              Alquileres Temporales
            </Typography>

            <RenderResults results={filtered} />
          </ThemeProvider>
        </Box>
      </Container>
    </>
  );
};

export default AlquilerTemp;