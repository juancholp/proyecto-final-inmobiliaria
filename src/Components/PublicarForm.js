import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import SelectList from "./Elemetos_De_Formulario/SelectListFormulario";
import Button from "@mui/material/Button";
import TextFieldImagenes from "./Elemetos_De_Formulario/TextFieldImagenes";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import ChipComodides from "./Elemetos_De_Formulario/ChipComodides";
import { storeContext } from "../Store/StoreProvider";
import OutlinedInput from "@mui/material/OutlinedInput";
import { types } from "../Store/StoreReducer";
import { ListadoPropiedades } from "../Store/Data";

export default function PublicarForm() {
  const [formData, setFormData] = useState({
    id: 1,
    title: "",
    tipoMoneda: "",
    precio: "",
    disposicion: "",
    tipoDePublicacion: [],
    ubicacion: [""],
    comodidades: [],
    descripcion: "",
    aceptaMascotasOptions: "",
    zona: "",
    garaje: "",
    m2Edificados: "",
    m2Terreno: "",
    tipoDePropiedad: "",
    baños: "",
    dormitorios: "",
    anioConstruccion: "",
    estado: "",
    imgsrc: [""],
  });
  const [store, dispatch] = React.useContext(storeContext);

  const [textFieldImagenesData, setTextFieldImagenesData] = useState([]);

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleInputChange = (e, fieldName) => {
    const value = e.target.value;
    setFormData({
      ...formData,
      [fieldName]: value,
    });
  };

  const handleSelectChange = (value, fieldName) => {
    setFormData({
      ...formData,
      [fieldName]: value,
    });
  };

  const openSnackbar = (message) => {
    setSnackbarMessage(message);
    setSnackbarOpen(true);
  };

  const handleSave = () => {
    try {
      formData.id = Date.now();
      formData.imgsrc = Array.isArray(textFieldImagenesData)
        ? textFieldImagenesData.map((item) => item.value)
        : "";
      dispatch({ type: types.setProperty, payload: formData });
      console.log("propiedades", ListadoPropiedades);
      openSnackbar("Datos guardados");
    } catch (e) {
      console.log("error", e);
      openSnackbar("No se pudo guardar");
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#1976d2",
        margin: "0",
        padding: "2rem",
        height: "100%",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          border: "2px inset #1976d2",
          borderRadius: "10px",
          width: "98%",
          margin: "0 auto 2.78rem auto",
          paddingTop: "2rem",
        }}
      >
        <Typography
          padding="0.2rem 0.2rem 0.5rem 0.2rem"
          backgroundColor="#1976d2"
          fontWeight="300"
          variant="h4"
          fontFamily="Lato"
          color="white"
          textAlign="center"
          border="1px inset white"
          width="27%"
          height="4%"
          margin="0 auto 1rem auto"
          borderRadius="10px"
          boxShadow="rgba(0, 0, 0, 0.19) 0px 5px 10px, rgba(0, 0, 0, 0.23) 0px 3px 3px"
        >
          Publicar Propiedad
        </Typography>
        <Box
          component="form"
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "20px",
            padding: "20px",
            borderRadius: "8px",
            width: "98%",
            height: "100%",
            margin: "0 auto",
          }}
        >
          <div>
            <div className="Select">
              <SelectList
                className="selectList"
                tipo={store?.tipoDePublicacion}
                titulo={"Tipo De Publicacion"}
                onChange={(value) =>
                  handleSelectChange(value, "tipoDePublicacion")
                }
              />
              <SelectList
                className="selectList"
                tipo={store?.tipoDePropiedad}
                titulo={"Tipo De Propiedad"}
                onChange={(value) =>
                  handleSelectChange(value, "tipoDePropiedad")
                }
              />
              <SelectList
                className="selectList"
                tipo={store?.moneda}
                titulo={"Tipo De Precio"}
                onChange={(value) => handleSelectChange(value, "tipoMoneda")}
              />
              <SelectList
                className="selectList"
                tipo={store?.estado}
                titulo={"Estados de Propiedad"}
                onChange={(value) => handleSelectChange(value, "estado")}
              />
            </div>
            <div className="Select">
              <SelectList
                className="selectList"
                tipo={store?.baños}
                titulo={"Cantidad De Baños"}
                onChange={(value) => handleSelectChange(value, "baños")}
              />
              <SelectList
                className="selectList"
                tipo={store?.dormitorios}
                titulo={"Cantidad De Dormitorios"}
                onChange={(value) => handleSelectChange(value, "dormitorios")}
              />
              <SelectList
                className="selectList"
                tipo={store?.localidades}
                titulo={"Localidad"}
                onChange={(value) => handleSelectChange(value, "zona")}
              />
            </div>
            <FormControl sx={{ m: 1 }}>
              <InputLabel
                htmlFor="outlined-adornment-amount"
                style={{ color: "#1976d2" }}
              >
                Precio
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
                startAdornment={
                  <InputAdornment position="start">$</InputAdornment>
                }
                label="Amount"
                onChange={(e) => handleInputChange(e, "precio")}
              />
            </FormControl>
            {store?.atributos.map((item, index) => (
              <TextField
                id={item}
                key={index}
                type={store.atributos[index]}
                label={item}
                variant="standard"
                onChange={(e) =>
                  handleInputChange(e, store?.nombreAtributosGuardado[index])
                }
                style={{ backgroundColor: "white", margin: "8px" }}
              />
            ))}
            <div className="Select">
              <SelectList
                className="selectList"
                tipo={store?.opcion}
                titulo={"Acepta Mascotas"}
                onChange={(value) =>
                  handleSelectChange(value, "aceptaMascotasOptions")
                }
              />
              <SelectList
                className="selectList"
                tipo={store?.opcion}
                titulo={"Garage"}
                onChange={(value) => handleSelectChange(value, "garaje")}
              />
            </div>
          </div>
          <div>
            <Typography
              marginTop="1.4rem"
              variant="h6"
              fontFamily="Lato"
              style={{ color: "gray" }}
            >
              Comodidades
            </Typography>
            <div>
              <ChipComodides
                informacion={store?.comodidad}
                formData={formData}
              />
            </div>
            <Typography
              mb="1rem"
              variant="h6"
              fontFamily="Lato"
              style={{ color: "gray" }}
            >
              Imagenes
            </Typography>
            <TextFieldImagenes
              textFieldImagenesData={textFieldImagenesData}
              setTextFieldImagenesData={setTextFieldImagenesData}
            />
          </div>
          <div>
            <TextField
              id="standard-multiline"
              label="Descripcion"
              multiline
              rows={6}
              variant="standard"
              sx={{ '& > :not(style)': { width: '30ch' } }}
              onChange={(e) => handleInputChange(e, "descripcion")}
              style={{ backgroundColor: "white", margin: "8px", color: "#1976d2" }}
            />
            <Button
              variant="contained"
              className="boton"
              onClick={handleSave}
              style={{
                backgroundColor: "#1976d2",
                color: "white",
                margin: "8px",
                width: "200px",
              }}
            >
              Guardar
            </Button>
          </div>
          <Snackbar
            open={snackbarOpen}
            autoHideDuration={3000}
            onClose={() => setSnackbarOpen(false)}
          >
            <MuiAlert elevation={6} variant="filled" severity="success">
              {snackbarMessage}
            </MuiAlert>
          </Snackbar>
        </Box>
      </div>
    </div>
  );
}
