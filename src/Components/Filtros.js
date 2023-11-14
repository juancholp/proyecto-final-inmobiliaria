import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { storeContext } from "../Store/StoreProvider";
import { useContext, useEffect, useState } from "react";

export default function Filtros() {
  const [store, dispatch] = useContext(storeContext);
  const [departamento, setDepartamento] = useState("");
  useEffect(() => {
    store.filters.localidad
      ? setDepartamento(store.filters.localidad)
      : setDepartamento("");
  }, []);

  const handleChangeDepartamento = (event) => {
    setDepartamento(event.target.value);
    dispatch({
      type: store.types.setFilters,
      payload: {
        ...store.filters,
        localidad: event.target.value,
      },
    });
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={departamento}
          label="Departamento"
          onChange={handleChangeDepartamento}
        >
          <MenuItem value="">
            <em>Todos</em>
          </MenuItem>
          {store.localidades.map((localidad) => (
            <MenuItem value={localidad}>{localidad}</MenuItem>
          ))}
        </Select>
        <FormHelperText>With label + helper text</FormHelperText>
      </FormControl>
    </div>
  );
}
