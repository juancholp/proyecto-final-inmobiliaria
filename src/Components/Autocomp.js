import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { storeContext } from "../Store/StoreProvider";
import { useState } from "react";
export default function ComboBox() {
  const [selectedDepartment, setSelectedDepartment] = React.useState(null);

  const handleDepartmentChange = (value) => {
    console.log("valor = ", value);
    const newValue = value;
    setSelectedDepartment(newValue);
    setFiltros({ ...filtros, localidad: newValue });
  };
  const [filtros, setFiltros] = useState({
    localidad: [],
    estado: [],
    tipo: [],
    dormitorios: [],
    moneda: [],
    maxPrice: 0,
    comodidad: [],
    TipoDePublicacion: [],
  });

  const saveFilters = () => {
    dispatch({ type: "setFilters", payload: filtros });
  };
  const [store, dispatch] = React.useContext(storeContext);
  React.useEffect(() => {
    saveFilters();
  }, [selectedDepartment]);
  return (
    <Autocomplete
      style={{ backgroundColor: "white" }}
      disablePortal
      id="combo-box-demo"
      options={Departamentos}
      sx={{ width: 300 }}
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
