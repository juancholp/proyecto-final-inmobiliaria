import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useContext } from "react";
import { storeContext } from "../Store/StoreProvider";
import { useParams } from "react-router-dom";
import Chip from "@mui/material/Chip";

import Stack from "@mui/material/Stack";

const defaultTheme = createTheme();

export default function MostrarPublicacion() {
  const { id } = useParams();

  const [store, dispatch] = useContext(storeContext);
  let seleccionado = store.propiedades.filter((prop) => prop.id == id);

  function formatearPrecio(precio) {
    return precio.toLocaleString("es-ES");
  }
  return (
    <Box>
      <ThemeProvider theme={defaultTheme}>
        <Box sx={{ height: "100vh",  }}>
          <CssBaseline />
          <Box container alignItems="center">
            <Box sx={{ m: "3vh auto", width: "100%" }}>
              <Typography
                textAlign="center"
                mb={6}
                fontSize="4rem"
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
              backgroundSize: "cover",
              height: "60%",
              width: "60%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              m: "5vh auto",
            }}
          ></Box>
          <Box
            sx={{
              mt: "3vh",
              textAlign: "center",
            }}
          >
            <Typography variant="h3" component="div" fontWeight="300">
              {seleccionado[0].ubicacion}
            </Typography>
            <Box
              item
              sx={{
                m: "2vh auto",
                boxShadow:
                    "rgba(0, 0, 0, 0.19) 0px 5px 10px, rgba(0, 0, 0, 0.23) 0px 3px 3px",
                maxWidth: 300,
                height: "5rem",
                padding: "1rem",
                border: "2px inset #1976d2",
                borderRadius: "15px"
              }}
            >
              {seleccionado[0] && (
                <Typography variant="h4" component="div" sx={{color: "#1976d2", fontWeight: "bold"}}>
                  {seleccionado[0].tipoMoneda}{" "}
                  {formatearPrecio(seleccionado[0].precio)}
                </Typography>
              )}
            </Box>
            <Box
              sx={{
                m: "0 auto",
                width: "100%",
                maxWidth: 900,
                boxShadow:
                    "rgba(0, 0, 0, 0.19) 0px 5px 10px, rgba(0, 0, 0, 0.23) 0px 3px 3px",
                padding: "3rem",
                maxHeight: 700,
              }}
            >
              <Box>
                {seleccionado.map((item, index) => (
                  <Typography key={index} variant="h3">
                    {item.tipoDePublicacion} - {item.estado}
                  </Typography>
                ))}
                {seleccionado[0].descripcion && (
                  <Typography variant="h5" sx={{ textAlign: "left", mt: 2 }}>
                    {seleccionado[0].descripcion}
                  </Typography>
                )}
              </Box>
              <Box sx={{ m: "5vh 0 3vh 0", height: "55vh" }}>
                {seleccionado[0].dormitorios && (
                  <Typography variant="h5" sx={{ textAlign: "left" }}>
                    {seleccionado[0].dormitorios} dormitorios
                  </Typography>
                )}
                {seleccionado[0].baños && (
                  <Typography variant="h5" sx={{ textAlign: "left" }}>
                    {seleccionado[0].baños} baños
                  </Typography>
                )}
                {seleccionado[0].m2Edificados && (
                  <Typography variant="h5" sx={{ textAlign: "left" }}>
                    {seleccionado[0].m2Edificados} m² construidos
                  </Typography>
                )}
                {seleccionado[0].m2Terreno && (
                  <Typography variant="h5" sx={{ textAlign: "left" }}>
                    {seleccionado[0].m2Terreno} m² de terreno
                  </Typography>
                )}
                {seleccionado[0].anioConstruccion && (
                  <Typography variant="h5" sx={{ textAlign: "left" }}>
                    Año de construccion: {seleccionado[0].anioConstruccion}
                  </Typography>
                )}
                {seleccionado[0].garaje && (
                  <Typography variant="h5" sx={{ textAlign: "left" }}>
                    Garage: {seleccionado[0].garaje}
                  </Typography>
                )}
                {seleccionado[0].aceptaMascotasOptions && (
                  <Typography variant="h5" sx={{ textAlign: "left" }}>
                    Acepta Mascotas: {seleccionado[0].aceptaMascotasOptions}
                  </Typography>
                )}
                <Typography variant="h5" sx={{ textAlign: "left" }}>
                  Codigo de la publicacion: {seleccionado[0].id}
                </Typography>
                <Typography sx={{ m: "5vh 0 3vh 0" }} variant="h3">
                  Características Destacadas:
                </Typography>
                <Stack
                  sx={{ m: "2vh auto 15vh auto", justifyContent: "center" }}
                  direction="row"
                  spacing={2}
                  variant="h5"
                >
                  {seleccionado[0].comodidades.map((comodidad) => {
                    return <Chip label={comodidad} sx={{ fontSize: "1rem", mb: "10vh" }} />;
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
