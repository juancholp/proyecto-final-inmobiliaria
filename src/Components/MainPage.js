import * as React from "react";
import { useState, useContext } from "react";
import Box from "@mui/material/Box";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import CustomSelectCheckmarks from "./CustomSelectCheckmarks";
import Carrousel from "./Carrousel";
import Button from "@mui/material/Button";
import "./MainPage.css";
import Autocomp from "./Autocomp";
import { Link } from "react-router-dom";
import { filterParams } from "../Store/StoreProvider";
import { Typography } from "@mui/material";
import { storeContext } from "../Store/StoreProvider";

function MainPage() {
  const [seleccion, setSeleccion] = React.useState("venta");
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
    filterParams.tipodeventa = value;
  };

  const initFilters = {
    localidad: [],
    tipo: [],
    TipoDePublicacion: [],
  }

  function Filters() {

    const [store, dispatch] = useContext(storeContext);

    const [filtro, setFiltro] = useContext(initFilters);

    const [localidades, setLocalidades] = useState([]);
    const [tipo, setTipo] = useState([]);
    const [ListadoTipoDePublicacion, setListadoTipoDePublicacion] = useState([]);

    const handleChangeListadoTipoDePublicacion = (event) => {
      const {
        target: { value },
      } = event
      setListadoTipoDePublicacion(value)
      setFiltro({ ...filtro, ListadoTipoDePublicacion: value })
    }

    const handleChangeTipo = (event) => {
      const {
        target: { value },
      } = event
      setTipo(value)
      setFiltro({ ...filtro, tipo: value })
    }

    const handleChangeLocalidades = (event) => {
      const {
        target: { value },
      } = event
      setLocalidades(value)
      setFiltro({ ...filtro, localidad: value })
    }

    const saveFilters = () => {
      dispatch({ type: 'setFilters', payload: filtro })
    }

  }

  

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
              <CustomSelectCheckmarks options={options_default} />
              <Autocomp />
              <Link to={"/resultados"}>
                <Button type="submit" variant="contained" onClick={saveFilters}>
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
