import * as React from "react";
import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Button } from "@mui/material";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Link, useNavigate } from "react-router-dom";
import { makeStyles } from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
  },
}));

const RenderResults = (props) => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  const classes = useStyles();
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  const [results, setResults] = React.useState([]);

  useEffect(() => {
    setResults(props.results);
  }, [props.results]);
  const handleResize = () => {
    setIsMobile(window.innerWidth < 600);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      {" "}
      {results.length === 0 ? (
        <p>No hay resultados</p>
      ) : (
        <Container
          container
          maxWidth="xxl"
          sx={{
            margin: "10px",

            width: "100%",
          }}
        >
          {results &&
            results.map((result) => (
              <Card
                onClick={() => {
                  navigate(`/detalles/${result.id}`);
                }}
                className={classes.container}
                key={result.id}
                sx={{
                  display: "flex",
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "10px",
                  marginTop: "10px",
                  height: "fit-content",
                  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                  borderRadius: "10px",
                  padding: "10px",
                  cursor: "pointer",
                }}
              >
                <CardMedia
                  component="img"
                  sx={{ width: 151, height: 151 }}
                  image={result.imgsrc[0]}
                  alt="Inmueble"
                />
                <Box
                  className={classes.container}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <CardContent sx={{}}>
                    <Typography component="div" variant="h5">
                      USD {result.precio}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                    >
                      {result.ubicacion[0] + ", " + result.ubicacion[1]}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {result.disposicion} - {result.dormitorio} -{" "}
                      {result.banos} baños
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Tipo de venta : {result.tipoVenta}
                    </Typography>
                  </CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {result.descripcion}
                  </Typography>
                  <Link to={`/detalles/${result.id}`}>
                    <Button variant="contained">Ver</Button>
                  </Link>
                </Box>
              </Card>
            ))}
        </Container>
      )}
    </div>
  );
};

export default RenderResults;
