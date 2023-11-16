import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useContext } from "react";
import { storeContext } from "../Store/StoreProvider";



export default function CustomAutoComplete(props) {
  const [selectedDepartment, setSelectedDepartment] = React.useState(null);
  const [store, dispatch] = useContext(storeContext);

  const handleDepartmentChange = (value) => {
    const newValue = value;
    props.actionOnClick(value)
  };

  return (
    <Autocomplete
      style={{ backgroundColor: "white" }}
      disablePortal
      id="combo-box-demo"
      options={Departamentos}
      sx={{ width: "15vw", borderRadius:"10px", overflow: "hidden" }}
      value={selectedDepartment}
      onChange={(e) => handleDepartmentChange(e.target.textContent)}
      getOptionLabel={(option) => option.label}
      renderInput={(params) => <TextField {...params} label="Departamento" />}
    />
  );
}


const Departamentos = [
  { label: "Maldonado" },
  { label: "Rivera" },
  { label: "Montevideo" },
  { label: "Durazno" },
  { label: "Tacuarembó" },
  { label: "Treinta y Tres" },
  { label: "Florida" },
  { label: "Lavalleja" },
  { label: "Paysandú" },
  { label: "Canelones" },
  { label: "San José" },
  { label: "Rio Negro" },
  { label: "Colonia" },
  { label: "Salto" },
  { label: "Artigas" },
  { label: "Rocha" },
  { label: "Soriano" },
  { label: "Cerro Largo" },
  { label: "Flores" },
];