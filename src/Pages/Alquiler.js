import React, { useEffect } from "react";
import DetallePropiedad from "../Components/feature_propertyDetails/IndexDetallesPropiedad";
import { Container, Typography } from "@mui/material";
import RenderResults from "../Components/Results/RenderResults";
import { useFilter } from "../Hooks/useFilter";
import { storeContext } from "../Store/StoreProvider";
import { useContext } from "react";
const Alquiler = () => {
  const [store, dispatch] = React.useContext(storeContext);

  useEffect(() => {
    document.title = "Blue Paradise | Alquiler";
  }, []);

  const [filteredResults] = useFilter(store.propiedades, {
    tipoVenta: "Alquiler",
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
          Propiedades en Alquiler :
        </Typography>
        {filteredResults && <RenderResults results={filteredResults} />}
      </Container>
    </div>
  );
};

export default Alquiler;
