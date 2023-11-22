import { Box, Container } from "@mui/material";
import "./DetallesPropiedad.css";
import { storeContext } from "../Store/StoreProvider";
import { useContext, useEffect, useState } from "react";

const DetallesPropiedades = (props) => {
  const [store, dispatch] = useContext(storeContext);
  const [result, setResult] = useState({});

  useEffect(() => {
    const result = store.propiedades.find((property) => property.id === 0);
    setResult(result);
  }, []);

  useEffect(() => {
    const result = store.propiedades.find(
      (property) => property.id === props.id
    );
    setResult(result);

    props.setView(true);
    props.setShowResults(false);
  }, [props.id]);
  console.log(props.id);

  const handleReturn = () => {
    props.setView(false);
    props.setShowResults(true);
  };

  return (
    <div>
      {result && (
        <Container
          maxWidth="xxl"
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "20px",
            padding: "20px",
          }}
        >
          <h1>Detalles de la propiedad</h1>
          <Box
            boxSizing="border-box"
            borderRadius={2}
            bgcolor="background.paper"
            color="text.primary"
            display="flex"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            p={2}
          >
            <button onClick={() => handleReturn()}>Volver</button>
            <aside>
              <img src={result.imgsrc[0]} alt="imagen" />
              <p>Localidad : {result.ubicacion}</p>
              <p>Zona {result.zona}</p>
              <p>Dormitorios : {result.dormitorios}</p>
              <p>Baños : {result.banos}</p>
              <p>Metros cuadrados : {result.m2Terreno}</p>
              <p>Precio : {result.precio} USD</p>
            </aside>
          </Box>
          <Box boxSizing="border-box" p={2}>
            <section>
              <p>{result.title}</p>
              <p>{result.description}</p>
              <p>Características : </p>
              {result.comodidad &&
                result.comodidad.map((caracteristica) => (
                  <p key={caracteristica}>{caracteristica}</p>
                ))}
            </section>
          </Box>
        </Container>
      )}
    </div>
  );
};

export default DetallesPropiedades;
