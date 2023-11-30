import * as React from "react";
import Box from "@mui/material/Box";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import CustomSelectCheckmarks from "./CustomSelectCheckmarks";
import Carrousel from "./Carrousel";
import Button from "@mui/material/Button";
import "./MainPage.css";
import Autocomp from "./Autocomp";
import { useState } from "react";
import { Link } from "react-router-dom";
import { filterParams, storeContext } from "../Store/StoreProvider";
import Footer from "./Footer";
import { useDispatch } from 'react-redux';
import { types } from "../Store/StoreReducer";



function MainPage() {

  const [store, dispatch] = React.useContext(storeContext);

  const [seleccion, setSeleccion] = React.useState("venta");
  const[localidades, setLocalidades] = useState({});
  const[tipo_propiedad, setTipo_propiedad] = useState({});

 
  /////////////// Al precionar el boton: ////////////////////////////////////////////////////
  const handleBuscar=()=>{
    // guarda la informacion en filtros
    const filtros ={
      TipoDePublicacion: tipo_propiedad,
      localidad: [localidades],
      tipo: seleccion,
     
   }
   console.log("guardado 22",filtros)

   // envia la informacion a traves de un dispatch
   dispatch(
     { 
       type: types.setFilters, 
       payload: filtros
     });
  
  }
////////////////////////////////////////////////////////////////////////////////////////////
  const options_default = [
    "Casa",
    "Apartamento",
    "Terreno",
    "Local Comercial",
    "Oficina",
    "Chacra o Campo",
    "Garage o Cochera",
  ];

  const handleChange = (event, value) => {
    setSeleccion(value);
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
              <ToggleButton value="Alquiler temporal">
                Alquiler Temporal
              </ToggleButton>
            </ToggleButtonGroup>

            <div className="contenedorBusqueda">
              <CustomSelectCheckmarks TipoDePropiedad={setTipo_propiedad} options={options_default} />
              <Autocomp settlocalidad={setLocalidades} /> 
              <Link to={"/resultados"}>
                <Button type="submit" variant="contained" onClick={handleBuscar}>
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
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default MainPage;
