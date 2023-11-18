import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { storeContext } from "../Store/StoreProvider";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function Carrousel() {
  const [store, dispatch] = React.useContext(storeContext);
  const arrayProp = store?.propiedades;

  function tomarDatosStore() {
    const primerosCincoDatos = [];

    for (let i = 0; i < 6 && i < arrayProp.length; i++) {
      const dato = arrayProp[i];
      primerosCincoDatos.push(dato);
    }

    return primerosCincoDatos;
  }

  const datosDelCarrousel = tomarDatosStore();

  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = datosDelCarrousel.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxHeight: "40vh", maxWidth: "50vw", flexGrow: 1, position: "relative", margin: "0 20vw 25vh 20vw" }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {datosDelCarrousel.map((step, index) => (
          <div key={index}>
            {Math.abs(activeStep - index) <= 2 ? (
              <div
                style={{
                  position: "relative",
                  borderRadius: "10px",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    height: "60vh",
                    display: "block",
                    maxWidth: "50vw",
                    width: "100%",
                    position: "relative",
                    zIndex: 0,
                    backgroundImage: `url(${step.imgsrc[0]})`,
                    backgroundSize: "cover",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    display: "flex",
                    justifyContent: "flex-end",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    height: "11vh",
                    width: "99%",
                    bottom: 0,
                    backgroundColor: "rgba(0, 0, 0, 0.4)",
                    color: "#fff",
                    padding: "10px",
                    zIndex: 1,
                  }}
                >
                  <div 
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      height: "10vh",
                      marginBottom: "10px"
                    }}
                  >
                  <p 
                    style={{
                      fontSize: "3rem",
                      margin: 0,
                    }}>
                    {step.tipoVenta}
                  </p>
                  <p
                    style={{
                      fontSize: "3rem",
                      marginTop: "0px",
                      marginBottom: "10px",
                    }}
                  >
                    {step.tipoMoneda} {step.precio}
                  </p>
                  <p
                    style={{
                      fontSize: "1.5rem",
                      marginBottom: "0px",
                      marginTop: "0px",
                    }}
                  >
                    {step.descripcion}
                  </p>
                  <p style={{ fontSize: "1.5rem", margin: "0.5rem 0"}}>{step.ubicacion} </p>
                  <Link
                    href={step.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: "1.5rem",
                      position: "absolute",
                      right: "10px",
                      bottom: "14px",
                      color: "white",
                      textDecoration: "none",
                    }}
                  >
                    Más información
                  </Link>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>

      {/* Botones fuera del contenedor de la imagen */}
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="large"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
            style={{
              position: "absolute",
              top: "50%",
              right: "10px",
              zIndex: 2,
              
            }}
          >
            {theme.direction === "rtl" ? (
              <ArrowBackIosIcon style={{ fontSize: 50 }} />
            ) : (
              <ArrowForwardIosIcon style={{ fontSize: 50 }} />
            )}
          </Button>
        }
        backButton={
          <Button
            size="large"
            onClick={handleBack}
            disabled={activeStep === 0}
            style={{
              position: "absolute",
              top: "50%",
              left: "10px",
              zIndex: 2,
            }}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight style={{ fontSize: 50 }} />
            ) : (
              <ArrowBackIosIcon style={{ fontSize: 50 }} />
            )}
          </Button>
        }
      />
    </Box>
  );
}

export default Carrousel;
