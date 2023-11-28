import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./PublicarForm.css";
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
    tipoDePublicacion: "",
    ubicacion: [""],
    comodidad: [],
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
    gastoscomunes: "",
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
      formData.imgsrc = Array.isArray(textFieldImagenesData) ? textFieldImagenesData.map((item) => item.value) : "";
      dispatch({type: types.setProperty, payload: formData });
      console.log("propiedades", ListadoPropiedades)
      openSnackbar("Datos guardados");
    } catch(e) {
      console.log("error", e);
      openSnackbar("No se pudo guardar");
    }
  };

  
  return (
    <div className="publicarFormContainer">
      <Typography mb="1rem" variant="h4" fontFamily="Lato">
        Publicar Propiedad
      </Typography>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "20ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <div className="Select">
            {/* Select List de tipo de publicacion */}
            <SelectList
              className="selectList"
              tipo={store?.tipoDePublicacion}
              titulo={"Tipo De Publicacion"}
              onChange={(value) => handleSelectChange(value, "tipoDePublicacion")}
            />
            {/* Select List de tipo de propiedad */}
            <SelectList
              className="selectList"
              tipo={store?.tipoDePropiedad}
              titulo={"Tipo De Propiedad"}
              onChange={(value) => handleSelectChange(value, "tipoDePropiedad")}
            />
            {/* Select List de tipo de moneda */}
            <SelectList
              className="selectList"
              tipo={store?.moneda}
              titulo={"Tipo De Precio"}
              onChange={(value) => handleSelectChange(value, "tipoMoneda")}
            />
            {/* Select List de tipo de estado de la propiedad */}
            <SelectList
              className="selectList"
              tipo={store?.estado}
              titulo={"Estados de Propiedad"}
              onChange={(value) => handleSelectChange(value, "estado")}
            />
          </div>
          <div className="Select">
            {/* Select List de baños */}
            <SelectList
              className="selectList"
              tipo={store?.baños}
              titulo={"Cantidad De Baños"}
              onChange={(value) => handleSelectChange(value, "baños")}
            />
            {/* Select List de Dormitorios */}
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
            <InputLabel htmlFor="outlined-adornment-amount">Precio</InputLabel>
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
          <Typography mb="1rem" variant="h6" fontFamily="Lato">
            Comodidades
          </Typography>
          <div>
            <ChipComodides informacion={store?.comodidad} formData={formData} />
          </div>
          <Typography mb="1rem" variant="h6" fontFamily="Lato">
            Imagenes
          </Typography>
          <TextFieldImagenes
            textFieldImagenesData={textFieldImagenesData}
            setTextFieldImagenesData={setTextFieldImagenesData}
          />
        </div>
        <div className="bobyboton">
          <TextField
            id="standard-multiline"
            label="Descripcion"
            multiline
            rows={6}
            variant="standard"
            sx={{ width: "60%" }}
            onChange={(e) => handleInputChange(e, "descripcion")}
          />
          <Button
            variant="contained"
            className="boton"
            onClick={handleSave}
            color="success"
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
  );
}
