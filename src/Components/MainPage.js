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
          <Box>
            <ToggleButtonGroup
              color="primary"
              value={seleccion}
              exclusive
              onChange={handleChange}
              aria-label="Platform"
              id="opciones"
              sx={{
                borderRadius: "15px", 
                overflow: "hidden",
              }}   
            >
              <ToggleButton value="Venta" sx={{ width: "7vw", fontFamily: "Lato", fontSize: "1.2rem"}}>Venta</ToggleButton>
              <ToggleButton value="Alquiler" sx={{ width: "7vw", fontFamily: "Lato", fontSize: "1.2rem"}}>Alquiler</ToggleButton>
              <ToggleButton value="AlquierTemp" sx={{ width: "10vw", fontFamily: "Lato", fontSize: "1.2rem"}}>Alquiler Temporal</ToggleButton>
            </ToggleButtonGroup>

            <div className="contenedorBusqueda">
              <CustomSelectCheckmarks options={setTipo} />
              <Autocomp options={setLocalidades} />
              <Link to={"/resultados"}>
                <Button type="submit" variant="contained" onClick={handleclick} sx={{width: "4vw", height: "3.5vh", fontFamily:"Lato", fontSize: "1.2rem", borderRadius: "10px"}}>
                  Buscar
                </Button>
              </Link>
            </div>
          </Box>
        </div>
      </div>
      <Box sx={{
        backgroundColor: "rgba(25,118,210, 1)",
        borderRadius: "25px",
        width: "30vw",
        margin: "8vh 35vw",
        textAlign: "center",
        boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
        }}>
      <Typography sx={{fontSize: "2vw", fontFamily: "Lato", color: "white"}}>
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
