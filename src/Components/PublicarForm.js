import React, { useState, useContext, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./styles/PublicarForm.css";
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
  const [formData, setFormData] = useState({
    id:22,
    title: "",
    tipoMoneda: "",
    precio: "",
    disposicion: "",
    tipoVenta: "",
    ubicacion: [],
    comodidad: [],
    descripcion: "",
    aceptaMascotasOptions: "",
    zona: "",
    garaje: "",
    m2Edificados: "",
    m2Terreno: "",
    tipoDePropiedad: "",
    banos: "",
    dormitorio: "",
    anioConstruccion: "",
    estado: "",
    gastoscomunes: "",
    imgsrc: [""],
  });

  const [store, dispatch] = useContext(storeContext);
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
  useEffect(() => {
    console.log("base de store", store.propiedades)
  });
  

  const handleSave = () => {
    const combinedData = { ...formData, imgsrc: textFieldImagenesData.map(item => item.value) };
    console.log("Array de prueba", casa);
    openSnackbar('Datos guardados');
    dispatch({ type: "setProperty", payload: casa });
    console.log("actualizacion de store", store.propiedades)
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
            <SelectList
              className="selectList"
              tipo={store?.localidades}
              titulo={"Ubicacion"}
              onChange={(value) => handleSelectChange(value, "ubicacion")}
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
              type='number'
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
              type='number'
              onChange={(e) => handleInputChange(e, "gastoscomunes")}
            />
          </FormControl>
          {store?.atributos.map((item, index) => (
            <TextField
              id={item}
              key={index}
              type={store.typesAtributos[index]}
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
const casa = {
  id: 22,
  title: 'prueba',
  tipoMoneda: 'U$D',
  precio: 1200,
  disposicion: 'Frente al mar',
  tipoVenta: 'Alquiler',
  ubicacion: ['Punta del Este', 'Artigas'],
  comodidades: ['Piscina', 'Cocina Equipada', 'Vista al mar', 'Jardín'],
  descripcion: 'Espectacular casa frente al mar en Punta del Este',
  aceptaMascotasOptions: 'Sí',
  zona: 'Punta Ballena',
  garaje: 'Sí',
  m2Edificados: 400,
  m2Terreno: 1000,
  tipoDePropiedad: 'Casa',
  banos: 4,
  dormitorio: 5,
  anioConstruccion: 2015,
  estado: 'Excelente estado',
  imgsrc: [
    'https://th.bing.com/th/id/OIP.4LrWM2SoZ_6mUiEsJUv4aQHaEK?pid=ImgDet&rs=1',
    'https://th.bing.com/th/id/OIP.4LrWM2SoZ_6mUiEsJUv4aQHaEK?pid=ImgDet&rs=1',
    'https://th.bing.com/th/id/OIP.4LrWM2SoZ_6mUiEsJUv4aQHaEK?pid=ImgDet&rs=1',
  ],
}