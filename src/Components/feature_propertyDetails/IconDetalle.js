import React from "react";
import HotelIcon from "@mui/icons-material/Hotel";
import BathtubIcon from "@mui/icons-material/Bathtub";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import "./Styles/DestalleDePropiedad.css";
import { Container } from "@mui/material";

const IconDetalle = ({ bano, dormitorio, m2Terreno }) => {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignContent: "flex-end",
        gap: 1,
        flexDirection: "column",
      }}
    >
      <div className="iconTextContainer">
        <HotelIcon />
        <p>ㅤ{dormitorio} Dorm</p>
      </div>
      <div className="iconTextContainer">
        <BathtubIcon />
        <p>ㅤ{bano} Baños</p>
      </div>
      <div className="iconTextContainer">
        <SquareFootIcon />
        <p>{m2Terreno} m²</p>
      </div>
    </Container>
  );
};

export default IconDetalle;
