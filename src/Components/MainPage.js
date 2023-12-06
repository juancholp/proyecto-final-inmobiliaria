import * as React from "react";
import Box from "@mui/material/Box";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import TipoDePropiedad from "./TipoDePropiedad";
import Carrousel from "./Carrousel";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import Departamentos from "./Departamentos";
import { storeContext } from "../Store/StoreProvider";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import "./MainPage.css";
import { types } from "../Store/StoreReducer";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import Divider from '@mui/material/Divider';
import Backdrop from '@mui/material/Backdrop';


function MainPage() {
  const [store, dispatch] = React.useContext(storeContext);
  const [localidades, setLocalidades] = useState();
  const [tipoDePublicacion, setTipoDePublicacion] = useState();
  const [tipoDePropiedad, setTipoDePropiedad] = useState();
  const [open, setOpen] = useState(true);
  const [isBlurred, setIsBlurred] = useState(true);

  const filtros = {
    localidad: localidades,
    tipoDePublicacion: tipoDePublicacion,
    tipoDePropiedad: tipoDePropiedad,
  };

  const handleClose = () => {
    setOpen(false)
    setIsBlurred(false)
  };

  const handleChange = (event, value) => {
    setTipoDePublicacion(value);
  };

  const handleclick = () => {
    const filtersToSend = {
      localidad: filtros.localidad || [],
      tipoDePublicacion: filtros.tipoDePublicacion || [],
      tipoDePropiedad: filtros.tipoDePropiedad || [],
    };
  
    dispatch({ type: types.setFilters, payload: filtersToSend });
  };

  return (
    <div className={`App ${isBlurred ? 'blurred' : ''}`}>
      <Dialog open={open} onClose={handleClose} BackdropComponent={Backdrop} sx={{textAlign: "center"}}>
        <DialogTitle sx={{fontSize:"2.3rem", color: "white", backgroundColor: "#1976d2", marginBottom: "1.7rem"}}>Bienvenidos!</DialogTitle>
        <p style={{fontSize:"1.1rem", marginTop:"0"}}>Nuestro horario de atencion es</p>
        <p style={{fontSize:"1.1rem", margin: 0, marginBottom: "1rem"}}>de Lunes a Viernes de 10:00 a 18:00</p>
        <p style={{fontSize:"1.1rem", margin: 0, marginBottom: "1.7rem"}}>y Sabados de 10:00 a 14:00</p>
        <Divider orientation="horizontal" variant="middle" />
        <p style={{marginTop:"1rem", fontSize: "1.3rem", fontWeight: "bold", color: "#1976d2"}}>Por cualquier consulta contactanos!</p>
      </Dialog>
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
                borderRadius: "5px",
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
                value="Alquiler Temporal"
                sx={{ fontFamily: "Lato", fontSize: "1rem" }}
              >
                Alquiler Temporal
              </ToggleButton>
            </ToggleButtonGroup>

            <div className="contenedorBusqueda">
              <TipoDePropiedad actionOnClick={setTipoDePropiedad} />
              <Departamentos actionOnClick={setLocalidades} />
              <Link to={"/resultados"} padding="5px">
                <Button
                  type="submit"
                  variant="contained"
                  onClick={handleclick}
                  sx={{
                    width: "6vw",
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
      <Typography mt={15}>
          -
      </Typography>
    </div>
    
  );
}

export default MainPage;
