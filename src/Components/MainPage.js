import * as React from "react";
import Box from "@mui/material/Box";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import TextField from "@mui/material/TextField";
import CustomSelectCheckmarks from "./CustomSelectCheckmarks";
import Carrousel from "./Carrousel";
import Button from "@mui/material/Button";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa6";
import "./MainPage.css";

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

  const handleChange = (event, newSeleccion) => {
    setSeleccion(newSeleccion);
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
              <ToggleButton value="venta">Venta</ToggleButton>
              <ToggleButton value="alquiler">Alquiler</ToggleButton>
              <ToggleButton value="alquilertemporal">
                Alquiler Temporal
              </ToggleButton>
            </ToggleButtonGroup>

            <div className="contenedorBusqueda">
              <CustomSelectCheckmarks options={options_default} />
              <TextField id="search" label="Localidad" variant="outlined" />
              <Button variant="contained">Buscar</Button>
            </div>
          </Box>
        </div>
      </div>
      <div className="carrousel-container">
        <Carrousel />
      </div>
      <footer>
        <div id="footer">
          <div className="about">
            <h4>
              <a href="#">Sobre Nosotros</a>
            </h4>
            <h4>
              <a href="#">Terminos y Condiciones</a>
            </h4>
          </div>
          <div className="tipos">
            <h4>
              <a href="#">Alquiler</a>
            </h4>
            <h4>
              <a href="#">Alquiler Temporal</a>
            </h4>
            <h4>
              <a href="#">Ventas</a>
            </h4>
          </div>
          <div className="socials">
            <h4>
              <FaYoutube /> <a href="#">Youtube</a>
            </h4>
            <h4>
              <FaFacebook /> <a href="#">Facebook</a>
            </h4>
            <h4>
              <FaTwitter /> <a href="#">Twitter</a>
            </h4>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default MainPage;
