/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import { storeContext } from "../Store/StoreProvider";

function CarrouselV5(props) {
  const [store, dispatch] = React.useContext(storeContext);
  const arrayProp = store?.propiedades;

  function tomarDatosStore() {
    const primerosCincoDatos = [];

    for (let i = 0; i < 6 && i < arrayProp.length; i++) {
      const dato = arrayProp[i];
      primerosCincoDatos.push(dato);
    }

    return primerosCincoDatos;
  }

  const datosDelCarrousel = tomarDatosStore();

  return (
    <Carousel>
      {datosDelCarrousel.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <Paper>
      <h2>
        {props.item.precio} {props.item.tipoMoneda}
      </h2>
      <img src={props.item.imgsrc} width="auto" height="256"></img>
      <p>{props.item.descripcion}</p>
    </Paper>
  );
}

export default CarrouselV5;
