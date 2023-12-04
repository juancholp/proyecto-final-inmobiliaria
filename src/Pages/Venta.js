import React from "react";
import DetallePropiedad from "../Components/feature_propertyDetails/IndexDetallesPropiedad";
import { Container, Typography } from "@mui/material";
import RenderResults from "../Components/Results/RenderResults";
import { useFilter } from "../Hooks/useFilter";
import { storeContext } from "../Store/StoreProvider";
import { useContext, useEffect } from "react";
const Venta = () => {
  const [store, dispatch] = React.useContext(storeContext);
  useEffect(() => {
    document.title = "Blue Paradise | Venta";
  }, []);

  const [filteredResults] = useFilter(store.propiedades, {
    tipoVenta: "Venta",
  });
  return (
    <div>
      <Container
        sx={{
          mt: 4,
          mb: 4,
          p: 2,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        maxWidth="xxl"
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Propiedades en Venta :
        </Typography>
        <RenderResults results={filteredResults} />
      </Container>
    </div>
  );
};

export default Venta;
