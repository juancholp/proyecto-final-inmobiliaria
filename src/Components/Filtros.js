import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { storeContext } from "../Store/StoreProvider";
import { useContext, useEffect, useState } from "react";
import { Container } from "@mui/material";

export default function Filtros() {
  const [store, dispatch] = useContext(storeContext);
  const [departamento, setDepartamento] = useState("");
  const [tipoDePublicacion, setTipoDePublicacion] = useState("");
  const [tipoDePropiedad, setTipoDePropiedad] = useState("");
  const [dormitorio, setDormitorio] = useState("");
  const [banos, setBanos] = useState("");
  useEffect(() => {
    store.filters.ubicacion
      ? setDepartamento(store.filters.ubicacion)
      : setDepartamento("");
    store.filters.tipoVenta
      ? setTipoDePublicacion(store.filters.tipoVenta)
      : setTipoDePublicacion("");
    store.filters.tipoDePropiedad
      ? setTipoDePropiedad(store.filters.tipoDePropiedad)
      : setTipoDePropiedad("");
  }, []);
  useEffect(() => {
    dispatch({
      type: "setFilters",
      payload: {
        ...store.filters,
        ubicacion: departamento,
        tipoVenta: tipoDePublicacion,
        tipoDePropiedad: tipoDePropiedad,
        dormitorio: dormitorio,
        banos: banos,
      },
    });
  }, [departamento, tipoDePublicacion, tipoDePropiedad, dormitorio, banos]);

  const handleChangeDormitorio = (event) => {
    setDormitorio(event.target.value);
  };
  const handleChangeDepartamento = (event) => {
    setDepartamento(event.target.value);
  };
  const handleChangeTipoDePublicacion = (event) => {
    setTipoDePublicacion(event.target.value);
  };
  const handleChangeTipoDePropiedad = (event) => {
    setTipoDePropiedad(event.target.value);
  };
  const handleChangebanos = (event) => {
    setBanos(event.target.value);
  };

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "10px",
      }}
    >
      <FormControl sx={{ m: 1, minWidth: 100, width: "fit-content" }}>
        <InputLabel id="departamento">Departamento</InputLabel>
        <Select
          labelId="departamento"
          id="departamento"
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
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120, width: "fit-content" }}>
        <InputLabel id="demo-simple-select-helper-label">
          Tipo de Publicacion
        </InputLabel>
        <Select
          labelId="tipoDePublicacion"
          id="tipoDePublicacion"
          value={tipoDePublicacion}
          label="Tipo de Publicacion"
          onChange={handleChangeTipoDePublicacion}
        >
          <MenuItem value="">
            <em>Todos</em>
          </MenuItem>
          {store.publicacion.map((publicacion) => (
            <MenuItem value={publicacion}>{publicacion}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120, width: "fit-content" }}>
        <InputLabel id="tipoDePropiedad">Tipo de Propiedad</InputLabel>
        <Select
          labelId="tipoDePropiedad"
          id="tipoDePropiedad"
          value={tipoDePropiedad}
          label="Tipo de Publicacion"
          onChange={handleChangeTipoDePropiedad}
        >
          <MenuItem value="">
            <em>Todos</em>
          </MenuItem>
          {store.tipoPropiedad.map((propiedad) => (
            <MenuItem value={propiedad}>{propiedad}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120, width: "fit-content" }}>
        <InputLabel id="Dormitorios">Dormitorios</InputLabel>
        <Select
          labelId="Dormitorios"
          id="Dormitorios"
          value={dormitorio}
          label="Tipo de Publicacion"
          onChange={handleChangeDormitorio}
        >
          <MenuItem value="">
            <em>Todos</em>
          </MenuItem>
          {store.dormitorios.map((dormitorio) => (
            <MenuItem value={dormitorio}>{dormitorio}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120, width: "fit-content" }}>
        <InputLabel id="banos">Baños</InputLabel>
        <Select
          labelId="banos"
          id="banos"
          value={banos}
          label="Baños"
          onChange={handleChangebanos}
        >
          <MenuItem value="">
            <em>Todos</em>
          </MenuItem>
          {store.baños.map((baño) => (
            <MenuItem value={baño}>{baño}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Container>
  );
}
