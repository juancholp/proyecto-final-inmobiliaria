import * as React from "react";
import Box from "@mui/material/Box";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import CustomSelectCheckmarks from "./CustomSelectCheckmarks";
import Carrousel from "./Carrousel";
import Button from "@mui/material/Button";
import "./MainPage.css";
import Autocomp from "./Autocomp";
import { Link } from "react-router-dom";
import { filterParams,storeContext } from "../Store/StoreProvider";



function MainPage() {
  const [seleccion, setSeleccion] = React.useState("venta");
  const [optionsTipoDePropiedad,setOptionsTiposDePropiedad] = React.useState([])
  const [store] = React.useContext(storeContext);
  React.useEffect(() => {
    setOptionsTiposDePropiedad(store.tipoPropiedad);
  }, [store.tipoPropiedad]);
  const handleChange = (event, value) => {
    setSeleccion(value);
    filterParams.tipodeventa = value;
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
              <CustomSelectCheckmarks options={optionsTipoDePropiedad} />
              <Autocomp />
              <Link to={"/resultados"}>
                <Button type="submit"  variant="contained">
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
