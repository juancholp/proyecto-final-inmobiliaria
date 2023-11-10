import * as React from "react";
import { useEffect } from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const RenderResults = (props) => {
  const [results, setResults] = React.useState([]);
  useEffect(() => {
    setResults(props.results);
  }, [props.results]);

  return (
    <div>
      {!results ? (
        <p>No hay resultados</p>
      ) : (
        <Grid container spacing={2}>
          {results &&
            results.map((result) => (
              <Grid key={result.id} item xs={12}>
                <Paper elevation={3}>
                  <Box display="flex" alignItems="center" p={2}>
                    <div style={{width: "200px", height: "200px", marginRight: "10px"}}>
                    <img
                      src={result.imgsrc}
                      alt="Inmueble"
                      style={{ width: "200px", height: "200px", marginRight: "20px" }}
                    />
                    </div>
                    <div style={{ flex: 2 }}> 
                      <Typography variant="h5">USD {result.precio}</Typography>
                      <Typography variant="subtitle1" color="textSecondary">
                        {result.ubicacion[0] + ", " + result.ubicacion[1]}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {result.disposicion} - {result.dormitorios} dormitorios -{" "}
                        {result.banos > 1 ? "baños" : "baño"} - {result.m2terreno} m2
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        Tipo de venta: {result.tipoVenta}
                      </Typography>
                    </div>
                    <div style={{ marginLeft: "20px", flex: 2 }}> 
                      <Typography variant="body2" color="textSecondary">
                        {result.descripcion}
                      </Typography>
                    </div>
                  </Box>
                </Paper>
              </Grid>
            ))}
        </Grid>
      )}
    </div>
  );
};

export default RenderResults;