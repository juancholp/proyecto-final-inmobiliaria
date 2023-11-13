import * as React from "react";
import { useEffect } from "react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import DetallePropiedad from "../feature_propertyDetails/IndexDetallesPropiedad";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import FormMessage from "../FormMessage";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const RenderResults = (props) => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    margin: 20,
    minWidth: 300,
    border: "1px solid #ccc",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    display: "flex", 
    flexDirection: "row",
    alignItems: "center", 
  }));

  const [results, setResults] = React.useState([]);
  useEffect(() => {
    setResults(props.results);
  }, [props.results]);

  const handleClickOpen = () => {
    return <DetallePropiedad />;
  };

  return (
    <div>
      {!results ? (
        <p>No hay resultados</p>
      ) : (
        <Container maxWidth="xxl">
          {results &&
            results.map((result) => (
              <Grid
                key={result.id}
                item
                xs={8}
                sx={{
                  flex: "1 0 auto",
                  flexWrap: "wrap",
                }}
              >
                <Item sx={{boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",}}>
                  <CardMedia
                    component="img"
                    sx={{
                      width: "20vw",
                      height: "25vh",
                      justifyContent: "center",
                      textAlign: "center",
                      alignItems: "center",
                      boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
                    }}
                    image={null}
                    alt="Inmueble"
                    src={result.imgsrc[0]}
                  />

                  <CardContent
                    sx={{
                      flex: "1 0 auto",
                      margin: "2",
                      textAlign: "center",
                      width: "35vw",
                    }}
                  >
                    <Typography component="div" variant="h5">
                      USD {result.precio}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                    >
                      {result.ubicacion[0] + result.ubicacion[1]}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {result.disposicion} - {result.dormitorios} dormitorios -{" "}
                      {result.banos > 1 ? "baños" : "baño"} - {result.m2terreno} m2
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Tipo de venta: {result.tipoVenta}
                    </Typography>
                    <br />
                    <Typography variant="body2" color="text.secondary">
                      {result.descripcion}
                    </Typography>
                  </CardContent>

                  <CardContent
                    sx={{
                      flex: "1 0 auto",
                      justifyContent: "center",
                      textAlign: "center",
                      width: "20vw",
                    }}
                  >
                    
                    <Box
                      sx={{
                        marginTop: 3,
                      }}
                    >
                      <Box>
                      <FormMessage />
                      </Box>
                      <Box
                        sx={{
                          marginTop: 3,
                        }}
                      >
                        <Link to={`/PublicarPropiedad`}>
                          <Button variant="outlined" sx={{boxShadow: "rgba(0, 0, 0, 0.19) 0px 5px 10px, rgba(0, 0, 0, 0.23) 0px 3px 3px"}}>Ver Inmueble</Button>
                        </Link>
                      </Box>
                    </Box>
                  </CardContent>
                </Item>
              </Grid>
            ))}
        </Container>
      )}
    </div>
  );
};

export default RenderResults;
