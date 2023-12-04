import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function StickyFooter() {
  return (
    <Box className="footer" sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs>
          <Typography>
            <Link to="#">Sobre Nosotros</Link>
          </Typography>
          <Typography>
            <Link to="#">Terminos y condiciones</Link>
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography>
            <Link to="#">Ventas</Link>
          </Typography>
          <Typography>
            <Link to="#">Alquiler</Link>
          </Typography>
          <Typography>
            <Link to="#">Alquiler Temporal</Link>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
