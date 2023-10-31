import * as React from "react";
import Box from "@mui/material/Box";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import TextField from "@mui/material/TextField";
import CustomSelectCheckmarks from "./CustomSelectCheckmarks";
import Carrousel from "./Carrousel";
import Button from "@mui/material/Button";
import "./MainPage.css";
import Autocomp from "./Autocomp";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { filterParams } from "../Store/StoreProvider";

function MainPage() {
  const [seleccion, setSeleccion] = React.useState("venta");
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();
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
  const handleTextFieldChange = (event) => {
    const newText = event.target.value;
    setSearchText(newText);
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
              <CustomSelectCheckmarks options={options_default} />
              <Autocomp />
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
    </div>
  );
}

export default MainPage;
