import * as React from "react";
import Box from "@mui/material/Box";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import TipoDePropiedad from "./TipoDePropiedad";
import Carrousel from "./Carrousel";
import Button from "@mui/material/Button";
import { useState } from "react";
import Departamentos from "./Departamentos";
import { storeContext } from "../Store/StoreProvider";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import { SearchResult } from "./Results/SearchResult";
import "./MainPage.css";
import { types } from "../Store/StoreReducer";

function MainPage() {
  const [store, dispatch] = React.useContext(storeContext);
  const [localidades, setLocalidades] = useState();
  const [tipoDePublicacion, setTipoDePublicacion] = useState();
  const [tipoDePropiedad, setTipoDePropiedad] = useState();
  const filtros = {
    localidad: localidades,
    tipoDePublicacion: tipoDePublicacion,
    tipo: tipoDePropiedad,
  };

  const handleChange = (event, value) => {
    setTipoDePublicacion(value);
  };

  const handleclick = () => {
    dispatch({ type: types.setFilters, payload: filtros });
  };

  return (
    <div className="App">
      <div className="SearchBackground">
        <div className="Search">
          <Box>
            <ToggleButtonGroup
              color="primary"
              value={tipoDePublicacion}
              exclusive
              onChange={handleChange}
              aria-label="Platform"
              id="opciones"
              sx={{
                borderRadius: "15px",
                overflow: "hidden",
                margin: 0,
                "& .MuiToggleButton-root": {
                  padding: "0.7rem 1.5rem",
                  minWidth: 0,
                  width: "auto",
                  "& .MuiButton-label": {
                    width: "100%",
                  },
                },
              }}
            >
              <ToggleButton
                value="Venta"
                sx={{ fontFamily: "Lato", fontSize: "1rem" }}
              >
                Venta
              </ToggleButton>
              <ToggleButton
                value="Alquiler"
                sx={{ fontFamily: "Lato", fontSize: "1rem" }}
              >
                Alquiler
              </ToggleButton>
              <ToggleButton
                value="AlquierTemp"
                sx={{ fontFamily: "Lato", fontSize: "1rem" }}
              >
                Alquiler Temporal
              </ToggleButton>
            </ToggleButtonGroup>

            <div className="contenedorBusqueda">
              <TipoDePropiedad actionOnClick={setTipoDePropiedad} />
              <Departamentos actionOnClick={setLocalidades} />
              <Link to={"/resultados"}>
                <Button
                  type="submit"
                  variant="contained"
                  onClick={handleclick}
                  sx={{
                    width: "5vw",
                    height: "4vh",
                    fontFamily: "Lato",
                    fontSize: "1.2rem",
                    borderRadius: "10px",
                  }}
                >
                  <Typography>Buscar</Typography>
                </Button>
              </Link>
            </div>
          </Box>
        </div>
      </div>
      <div className="contenedorSecundario">
      <Box
        sx={{
          backgroundColor: "rgba(25,118,210, 1)",
          borderRadius: "25px",
          width: "30vw",
          margin: "8vh 35vw",
          textAlign: "center",
          boxShadow:
            "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
        }}
      >
        <Typography
          sx={{ fontSize: "2vw", fontFamily: "Lato", color: "white" }}
        >
          Propiedades Destacadas
        </Typography>
      </Box>
      <div className="carrousel-container">
        <Carrousel />
      </div>
      </div>
    </div>
  );
}

export default MainPage;
