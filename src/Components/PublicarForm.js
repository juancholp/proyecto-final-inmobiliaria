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
      className="publicarFormContainer"
      style={{
        backgroundColor: "#1976d2",
        color: "white",
        padding: "30px",
        margin: "1rem auto 0 auto",
        borderRadius: "15px",
        width: "90%",
        height: "78vh",
        border: "3px inset white",
        boxShadow:
          "rgba(0, 0, 0, 0.19) 0px 5px 10px, rgba(0, 0, 0, 0.23) 0px 3px 3px",
        fontSize: "3rem",
        display: "flex",
        flexWrap: "wrap",
        fontSize: "2rem",
      }}
    >
      <Typography
        padding="1rem"
        backgroundColor="white"
        variant="h2"
        fontFamily="Lato"
        color="#1976d2"
        textAlign="center"
        border="2px inset white"
        width="25%"
        height="7%"
        margin="0 auto 1rem auto"
        borderRadius="15px"
        boxShadow="rgba(0, 0, 0, 0.19) 0px 5px 10px, rgba(0, 0, 0, 0.23) 0px 3px 3px"
      >
        Publicar Propiedad
      </Typography>
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap", // Permite envolver en varias líneas
          alignItems: "center",
          justifyContent: "flex-start",
          "& .MuiTextField-root": { m: 1, width: "200px" },
        }}
        noValidate
        autoComplete="off"
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "8px",
          width: "98%",
          height: "80%",
          margin: "0 auto",
        }}
      >
        <div>
          <div
            className="Select"
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
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
              onChange={(value) => handleSelectChange(value, "tipoDePropiedad")}
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
            mb="1rem"
            variant="h6"
            fontFamily="Lato"
            style={{ color: "#1976d2" }}
          >
            Comodidades
          </Typography>
          <div>
            <ChipComodides informacion={store?.comodidad} formData={formData} />
          </div>
          <Typography
            mb="1rem"
            variant="h6"
            fontFamily="Lato"
            style={{ color: "#1976d2" }}
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
            sx={{ width: "80%", display: "flex", flexDirection: "row" }}
            onChange={(e) => handleInputChange(e, "descripcion")}
            style={{ backgroundColor: "white", margin: "8px" }}
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
  );
}
