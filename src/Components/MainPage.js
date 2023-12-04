import * as React from "react";
import Box from "@mui/material/Box";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import CustomSelectCheckmarks from "./CustomSelectCheckmarks";
import Carrousel from "./Carrousel";
import Button from "@mui/material/Button";
import "./MainPage.css";

import { useState } from "react";
import { Link } from "react-router-dom";
import { storeContext } from "../Store/StoreProvider";
import Footer from "./Footer";
import { useEffect, useContext } from "react";

import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

function MainPage() {
  const [seleccion, setSeleccion] = useState({
    TipoDePublicacion: "Venta",
    localidad: "",
    tipoPropiedad: [""],
  });

  const [store, dispatch] = useContext(storeContext);
  const options_default = [
    "Casa",
    "Apartamento",
    "Terreno",
    "Local Comercial",
    "Oficina",
    "Chacra o Campo",
    "Garage o Cochera",
  ];

  useEffect(() => {
    document.title = "Blue Paradise | Bienvenidos";
  });

  const handleChange = (event, value) => {
    setSeleccion({ ...seleccion, TipoDePublicacion: value });
  };

  const handleChangeDepartamento = (event) => {
    setSeleccion({ ...seleccion, localidad: event.target.value });
  };

  const saveFilters = () => {
    dispatch({
      type: "setFilters",
      payload: {
        ...store.filters,
        tipoDePropiedad: seleccion.tipoPropiedad,
        ubicacion: seleccion.localidad,
        tipoVenta: seleccion.TipoDePublicacion,
      },
    });
  };
  useEffect(() => {
    saveFilters();
  }, [seleccion]);
  return (
    <div className="App">
      <div className="SearchBackground">
        <div className="Search">
          <Box sx={{}}>
            <ToggleButtonGroup
              color="primary"
              value={seleccion.TipoDePublicacion}
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
              <CustomSelectCheckmarks
                setSeleccion={setSeleccion}
                options={options_default}
                seleccion={seleccion.tipoPropiedad}
              />
              <FormControl
                variant="contained"
                sx={{
                  m: 1,
                  minWidth: 150,
                  width: "fit-content",
                  bgcolor: "white",
                  borderRadius: "10px",
                }}
              >
                <InputLabel id="departamento">Departamento</InputLabel>
                <Select
                  variant="filled"
                  labelId="departamento"
                  id="departamento"
                  value={seleccion.localidad}
                  label="Departamento"
                  onChange={handleChangeDepartamento}
                >
                  <MenuItem value="">
                    <em>Todos</em>
                  </MenuItem>
                  {store.localidades.map((localidad) => (
                    <MenuItem value={localidad}>{localidad}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              <Link to={"/resultados"}>
                <Button type="submit" variant="contained">
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
