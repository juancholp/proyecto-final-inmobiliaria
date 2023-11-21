import * as React from "react";
import Box from "@mui/material/Box";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import CustomSelectCheckmarks from "./CustomSelectCheckmarks";
import Carrousel from "./Carrousel";
import Button from "@mui/material/Button";
import { useState, useEffect, useContext } from "react";
import Autocomp from "../Components/Autocomp"
import { storeContext } from "../Store/StoreProvider";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import SearchResult from "./Results/SearchResult";
import "./styles/MainPage.css"


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
    console.log("hola",seleccion)
  };
  
  const handleclick = () => {
    
    dispatch({ type: "setFilters", payload: filtros });
    <SearchResult />;
  };
  return (
    <div className="App">
      <div className="SearchBackground">
        <div className="Search">
          <Box>
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
              <Autocomp setLocalidades={setLocalidades}/>
              <Link to={"/resultados"}>
                <Button type="submit" onClick={handleclick} variant="contained">
                  Buscar
                </Button>
              </Link>
            </div>
          </Box>
        </div>
      </div>
      <div className="carrousel-container">
        <Carrousel />
      </div>
    </div>
  );
}

export default MainPage;
