import React, { useEffect, useState } from "react";
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

export default function PublicarForm() {
  const [nextId, setNextId] = useState(21);
  const [formData, setFormData] = useState({
    id: nextId,
    title: "",
    tipoMoneda: "U$D",
    precio: 1100,
    disposicion: "",
    tipoVenta: "",
    ubicacion: [""],
    comodidades: [""],
    descripcion: "",
    aceptaMascotasOptions: "",
    zona: "",
    garaje: "",
    m2Edificados: 120,
    m2Terreno: 0,
    tipoDePropiedad: "",
    banos: "",
    dormitorio: "",
    anioConstruccion: 2012,
    estado: "",
    imgsrc: [""],
  });
  const [store, dispatch] = React.useContext(storeContext);
  const [textFieldImagenesData, setTextFieldImagenesData] = useState([]);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  useEffect(() => {
    document.title = "Blue Paradiese | Publicar Propiedad";
  }, []);
  useEffect(() => {
    setNextId(store.propiedades.length + 1);
    console.log(nextId);
  }, [store.propiedades]);

  const dispatchForm = () => {
    dispatch({
      type: "setProperty",
      payload: {
        id: formData.id,
        title: formData.title,
        tipoMoneda: formData.tipoMoneda,
        precio: formData.precio,
        disposicion: formData.disposicion,
        tipoVenta: formData.tipoVenta,
        ubicacion: formData.ubicacion,
        comodidades: formData.comodidades,
        descripcion: formData.descripcion,
        aceptaMascotasOptions: formData.aceptaMascotasOptions,
        zona: formData.zona,
        garaje: formData.garaje,
        m2Edificados: formData.m2Edificados,
        m2Terreno: formData.m2Terreno,
        tipoDePropiedad: formData.tipoDePropiedad,
        banos: formData.banos,
        dormitorio: formData.dormitorio,
        anioConstruccion: formData.anioConstruccion,
        estado: formData.estado,
        imgsrc: formData.imgsrc,
      },
    });
    openSnackbar("Propiedad Publicada");
    console.log(store.propiedades);
  };
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
    const combinedData = {
      ...formData,
      imgsrc: textFieldImagenesData.map((item) => item.value),
    };
    console.log(combinedData);
    openSnackbar("Datos guardados");
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
              tipo={store?.publicacion}
              titulo={"Tipo De Publicacion"}
              onChange={(value) => handleSelectChange(value, "tipoVenta")}
            />
            {/* Select List de tipo de propiedad */}
            <SelectList
              className="selectList"
              tipo={store?.tipoPropiedad}
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
              onChange={(value) => handleSelectChange(value, "banos")}
            />
            {/* Select List de Dormitorio */}
            <SelectList
              className="selectList"
              tipo={store?.dormitorios}
              titulo={"Cantidad De Dormitorio"}
              onChange={(value) => handleSelectChange(value, "dormitorio")}
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
          <FormControl sx={{ m: 1 }}>
            <InputLabel htmlFor="outlined-adornment-amount">
              Gastos Comunes
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
              label="Amount"
            />
          </FormControl>
          {store?.atributos.map((item, index) => (
            <TextField
              id={item}
              key={index}
              type="text"
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
            onClick={() => dispatchForm()}
            color="success"
          >
            Publicar
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
