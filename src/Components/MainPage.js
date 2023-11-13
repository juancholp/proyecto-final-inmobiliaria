import * as React from "react";
import Box from "@mui/material/Box";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import CustomSelectCheckmarks from "./CustomSelectCheckmarks";
import Carrousel from "./Carrousel";
import Button from "@mui/material/Button";
import { useState, useContext } from "react";
import Autocomp from "../Components/Autocomp"
import { storeContext } from "../Store/StoreProvider";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import SearchResult from "./Results/SearchResult";
import "./MainPage.css"


function MainPage() {
  const [seleccion, setSeleccion] = React.useState("venta");
  const [store, dispatch] = React.useContext(storeContext);
  const [localidades, setLocalidades] = useState();
  const [tipopublicacion, setTipopublicacion] = useState();
  const [tipo, setTipo] = useState();
  const filtros = {
    localidad: localidades,
    TipoDePublicacion: tipopublicacion,
    tipo: tipo,
  };
  

  const handleChange = (event, value) => {
    setSeleccion(value);
    setTipopublicacion(value);
  };
  
  const handleclick = () => {
    dispatch({ type: "setFilters", payload: filtros });
    <SearchResult />;
  };

  

  return (
    <div className="App">
      <div className="SearchBackground">
        <div className="Search">
          <Box >
            <ToggleButtonGroup
              color="primary"
              value={seleccion}
              exclusive
              onChange={handleChange}
              aria-label="Platform"
              id="opciones"
            >
              <ToggleButton value="Venta">Venta</ToggleButton>
              <ToggleButton value="Alquiler">Alquiler</ToggleButton>
            </ToggleButtonGroup>

            <div className="contenedorBusqueda">
              <CustomSelectCheckmarks options={setTipo} />
              <Autocomp options={setLocalidades} />
              <Link to={"/resultados"}>
                <Button type="submit" variant="contained" onClick={handleclick}>
                  Buscar
                </Button>
              </Link>
            </div>
          </Box>
        </div>
      </div>
      <Box sx={{
        backgroundColor: "rgba(25,113,194, 1)",
        borderRadius: "30px",
        width: "35vw",
        margin: "8vh 31vw",
        textAlign: "center",
        boxShadow: "7px 7px lightblue"
        }}>
      <Typography sx={{fontSize: "3vw", fontFamily: "Lato", color: "white"}}>
        Propiedades Destacadas
      </Typography>
      </Box>
      <div className="carrousel-container">
        <Carrousel />
      </div>
      
    </div>
  );
}

export default MainPage;
