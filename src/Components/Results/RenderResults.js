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
import "./SearchResult.css";
import { storeContext } from "../../Store/StoreProvider";

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
  const [store] = React.useContext(storeContext);
  const [results, setResults] = React.useState([]);
  useEffect(() => {
    console.log("results", props.results)
    setResults(props.results);
  }, [props.results]);

  const handleClickOpen = () => {
    return <DetallePropiedad />;
  };

  function formatearPrecio(precio) {
    return precio.toLocaleString('es-ES');
  }
  
  return (
    <div id="resultContainer">
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
                <Item
                  sx={{
                    boxShadow:
                      "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      width: "20vw",
                      height: "25vh",
                      justifyContent: "center",
                      textAlign: "center",
                      alignItems: "center",
                      boxShadow:
                        "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
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
                    <Typography component="div" variant="h3">
                      {result.tipoMoneda} {formatearPrecio(result.precio)}
                    </Typography>
                    <Typography
                      sx={{ fontSize: "1.7rem" }}
                      variant="h4"
                      color="text.secondary"
                    >
                      {result.ubicacion[0] + result.ubicacion[1]}
                    </Typography>
                    <Typography
                      sx={{ fontSize: "1.3rem" }}
                      variant="subtitle1"
                      color="text.secondary"
                    >
                      {result.disposicion} - {result.dormitorios} dormitorios -{" "}
                      {result.baños} baños - {result.m2Edificados} m²
                    </Typography>
                    <Typography sx={{ fontSize: "1.3rem" }} variant="subtitle1" color="text.secondary">
                      {result.tipoDePublicacion}
                    </Typography>
                    <br />
                    <Typography sx={{ fontSize: "1.2rem" }} variant="subtitle1" color="text.secondary">
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
                        <Link to={`/ResultadoPublicacion/${result.id}`}>
                          <Button
                            variant="outlined"
                            sx={{
                              minWidth: "10vw",
                              backgroundColor: "#1976d2",
                              color: "white",
                              boxShadow:
                                "rgba(0, 0, 0, 0.19) 0px 5px 10px, rgba(0, 0, 0, 0.23) 0px 3px 3px",
                              "&:hover": {
                                backgroundColor: "white",
                                color: "#1976d2",
                              },
                            }}
                          >
                            Ver Inmueble
                          </Button>
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
