import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "./Card.css";
const RenderResults = ({ results }) => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <div>
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          direction="column"
          justifyContent="flex-start"
          alignItems="stretch"
        >
          {results.map((result) => (
            <Grid item xs={8}>
              <Item>
                <Card sx={{ display: "flex" }}>
                  <CardMedia
                    component="img"
                    sx={{ width: 151 }}
                    image={result.imgsrc}
                    alt="Inmueble"
                  />
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <CardContent sx={{ flex: "1 0 auto" }}>
                      <Typography component="div" variant="h5">
                        USD {result.price}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        component="div"
                      >
                        {result.localidad}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <p key={result.id}>
                          {result.direccion} - {result.dorms} dormitorioss -{" "}
                          {result.banos} baño - {result.mcuadrados} m2
                        </p>
                      </Typography>
                    </CardContent>
                    <Typography variant="body2" color="text.secondary">
                      {result.descripcion}
                    </Typography>
                  </Box>
                </Card>
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default RenderResults;