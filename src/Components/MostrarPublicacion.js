import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState, useContext } from "react";
import { storeContext } from "../Store/StoreProvider";
import { useParams } from "react-router-dom";
import Chip from "@mui/material/Chip";

import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

const defaultTheme = createTheme();

export default function MostrarPublicacion() {
  const { id } = useParams();

  const [store, dispatch] = useContext(storeContext);
  let seleccionado = store.propiedades.filter((prop) => prop.id == id);

  return (
    <Box>
      <ThemeProvider theme={defaultTheme}>
        <Box sx={{ height: "100vh" }}>
          <CssBaseline />
          <Box container alignItems="center">
            <Box sx={{ m: "3vh auto", width: "40%" }}>
              <Typography
                textAlign="center"
                mb={6}
                fontSize="3rem"
                color="#1976d2"
                fontFamily="Lato"
                fontWeight="400"
              >
                {seleccionado[0].title}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              boxShadow:
                "rgba(0, 0, 0, 0.19) 0px 5px 10px, rgba(0, 0, 0, 0.23) 0px 3px 3px",
              backgroundImage: `url("${seleccionado[0].imgsrc[0]}")`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              height: "60%",
              width: "60%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              m: "0 auto",
            }}
          ></Box>
          <Box
            sx={{
              mt: "3vh",
              textAlign: "center",
            }}
          >
            <Typography variant="h3" component="div">
              {seleccionado[0].ubicacion}
            </Typography>
            <Box item>
              {seleccionado[0] && (
                <Typography variant="h6" component="div">
                  {seleccionado[0].tipoMoneda} {seleccionado[0].precio}
                </Typography>
              )}
            </Box>
            <Box
              sx={{
                m: "0 auto",
                width: "100%",
                maxWidth: 700,
              }}
            >
              <Box>
                <Typography variant="h5">
                  {seleccionado[0].descripcion}
                </Typography>
              </Box>
              <Divider variant="middle" />
              <Box sx={{ m: 2 }}>
                <Typography variant="h5">
                  {seleccionado[0].dormitorios} dormitorios
                </Typography>
                <Typography variant="h5">
                  {seleccionado[0].baños} baños
                </Typography>
                <Typography sx={{ mt: "2vh" }} variant="h5">
                  Comodidades:
                </Typography>
                <Stack
                  sx={{ m: "2vh auto", justifyContent: "center" }}
                  direction="row"
                  spacing={2}
                  variant="h5"
                >
                  {seleccionado[0].comodidades.map((comodidad) => {
                    return <Chip label={comodidad} />;
                  })}
                </Stack>
              </Box>
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </Box>
  );
}
