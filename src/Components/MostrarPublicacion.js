import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState, useContext } from "react";
import { storeContext } from "../Store/StoreProvider";
import { useParams } from "react-router-dom";
import { Container } from "@mui/material";
import Chip from "@mui/material/Chip";

import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

const defaultTheme = createTheme();

export default function MostrarPublicacion() {
  const { id } = useParams();

  const [store, dispatch] = useContext(storeContext);
  let filtered = store.propiedades.filter((prop) => prop.id == id);
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Box sx={{ mt: "5%" }}>
      <ThemeProvider theme={defaultTheme}>
        <Box sx={{ height: "100vh" }}>
          <CssBaseline />
          <Box
            sx={{
              backgroundImage: `url("${filtered[0].imgsrc[1]}")`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              height: "60%", 
              width: "100%", 
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
          </Box>
          
            <Box
              sx={{
                my: 8,
                mx: 4,
                textAlign: "center",
              }}
            >
              <Typography gutterBottom variant="h4" component="div">
                {filtered[0].ubicacion}
              </Typography>

              <Box
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                }}
              >
                <Box sx={{ my: 3, mx: 2 }}>
                  <Grid container alignItems="center">
                    <Grid item xs>
                      <Typography gutterBottom variant="h4" component="div">
                        {filtered[0].title}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography gutterBottom variant="h6" component="div">
                        {filtered[0].precio}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Typography color="text.secondary" variant="body2">
                    {filtered[0].descripcion}
                  </Typography>
                </Box>
                <Divider variant="middle" />
                <Box sx={{ m: 2 }}>
                  <Typography gutterBottom variant="h6">
                    {filtered[0].dormitorio}
                  </Typography>
                  <Typography gutterBottom variant="h6">
                    {filtered[0].banos} baños
                  </Typography>
                  <Typography gutterBottom variant="body1">
                    Comodidades:
                  </Typography>
                  <Stack direction="row" spacing={1}>
                    {filtered[0].comodidades.map((comodidad) => {
                      return <Chip label={comodidad} />;
                    })}
                  </Stack>
                </Box>
              </Box>
              <Typography component="h1" variant="h5"></Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 1 }}
              >
                <Typography component="h1" variant="h5">
                  {filtered.banos}
                </Typography>
              </Box>
            </Box>
          </Box>
        
      </ThemeProvider>
    </Box>
  );
}