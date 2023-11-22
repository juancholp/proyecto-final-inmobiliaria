import { useEffect, useState, useContext } from "react";
import IconDetalle from "./IconDetalle.js";
import { useParams, useNavigate } from "react-router-dom";
import "./Styles/DestalleDePropiedad.css";
import { storeContext } from "../../Store/StoreProvider.js";
import React from "react";
import "./Styles/imagen.css";
import { Container, Box, Typography, Button } from "@mui/material";
import HotelIcon from "@mui/icons-material/Hotel";
import BathtubIcon from "@mui/icons-material/Bathtub";
import SquareFootIcon from "@mui/icons-material/SquareFoot";

function DetallePropiedad(props) {
  const navigate = useNavigate();
  const { id } = useParams();
  const propertyId = parseInt(id);
  const [store, dispatch] = useContext(storeContext);
  const [property, setProperty] = useState({});
  useEffect(() => {
    const result = store.propiedades.find(
      (property) => property.id === propertyId
    );
    setProperty(result);
    console.log(property);
  }, [store.propiedades, id]);
  useEffect(() => {
    document.title = "Blue Paradiese | " + property.title;
  }, [property]);
  const handleReturn = () => {
    navigate(-1);
  };

  return (
    <Container
      className="DetallePropiedad"
      sx={{
        flexWrap: "wrap",
        display: "flex",

        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      {property && (
        <Box maxWidth={"xxl"} sx={{ margin: "0 auto", shadow: 2 }}>
          <Button
            sx={{ float: "right", mt: 2, mr: 1 }}
            variant="outlined"
            onClick={() => handleReturn()}
          >
            Volver
          </Button>
          <Typography
            sx={{
              mb: 1.5,
              mt: 1,
              textAlign: "center",
              fontSize: 30,
              float: "top",
            }}
            type="h1"
          >
            {property.title}
          </Typography>

          <Container
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignContent: "flex-end",
              alignItems: "flex-start",
              flexWrap: "wrap",
              gap: 1,

              margin: "0 auto",
            }}
          >
            <img
              width="350px"
              height="300px"
              src={property.imgsrc}
              alt="inmueble"
            />
            <Container
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "fit-content",
                gap: 1,
              }}
            >
              <Typography type="h2" sx={{ mb: 1.5, mt: 1, fontSize: 20 }}>
                {property.precio} {property.tipoMoneda}
              </Typography>
              <Typography type="h3 " sx={{ mb: 1.5, mt: 1, fontSize: 15 }}>
                <HotelIcon /> {property.dormitorio}
              </Typography>

              <Typography type="h3 " sx={{ mb: 1.5, mt: 1, fontSize: 15 }}>
                <BathtubIcon /> {property.banos} Baños
              </Typography>

              <Typography type="h3 " sx={{ mb: 1.5, mt: 1, fontSize: 15 }}>
                <SquareFootIcon /> {property.m2Terreno} m²
              </Typography>
              <Button elevation={3} variant="contained">
                {" "}
                Contactar
              </Button>
            </Container>
          </Container>

          <Typography type="h2" sx={{ mb: 1.5, mt: 1, fontSize: 20 }}>
            {property.descripcion}
          </Typography>
          <Typography type="h3 " sx={{ mb: 1.5, mt: 1, fontSize: 15 }}>
            Comodidades :
          </Typography>
          <ul>
            {property.comodidades &&
              property.comodidades.map((comodidad) => (
                <li key={comodidad}>{comodidad}</li>
              ))}
          </ul>
        </Box>
      )}
    </Container>
  );
}
export default DetallePropiedad;
