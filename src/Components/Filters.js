import { useState, useContext } from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import "./Filters.css";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { storeContext } from "../Store/StoreProvider";
import TextField from "@mui/material/TextField";
import { types } from "../Store/StoreReducer";

const ITEM_HEIGHT = 44;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    },
  },
};

function getStyles(name, theme) {
  return {
    fontWeight: theme.typography.fontWeightMedium,
  };
}

const initFilters = {
  localidad: [],
  estado: [],
  tipoDePropiedad: [],
  dormitorios: [],
  moneda: "",
  maxPrice: [],
  tipoDePublicacion: [],
};

function Filters() {
  const theme = useTheme();

  const [store, dispatch] = useContext(storeContext);

  const [filtro, setFiltro] = useState(initFilters);

  const [localidades, setLocalidades] = useState([]);
  const [estado, setEstado] = useState([]);
  const [tipoDePropiedad, setTipoDePropiedad] = useState([]);
  const [dormitorios, setDormitorios] = useState([]);
  const [moneda, setMoneda] = useState("");
  const [maxPrice, setMaxPrice] = useState(0);
  const [tipoDePublicacion, setTipoDePublicacion] = useState([]);

  const handleChangeLocalidades = (event) => {
    const {
      target: { value },
    } = event;
    setLocalidades(value);
    setFiltro({ ...filtro, localidad: value });
  };

  const handleChangeEstado = (event) => {
    const {
      target: { value },
    } = event;
    setEstado(value);
    setFiltro({ ...filtro, estado: value });
  };

  const handleChangeTipoDePropiedad = (event) => {
    const {
      target: { value },
    } = event;
    setTipoDePropiedad(value);
    setFiltro({ ...filtro, tipoDePropiedad: value });
  };

  const handleChangeDormitorios = (event) => {
    const {
      target: { value },
    } = event;
    setDormitorios(value);
    setFiltro({ ...filtro, dormitorios: value });
  };

  const handleChangeMoneda = (event) => {
    const {
      target: { value },
    } = event;
    setMoneda(value);
    setFiltro({ ...filtro, moneda: value });
  };

  const handleChangeTipoDePublicacion = (event) => {
    const {
      target: { value },
    } = event;
    setTipoDePublicacion(value);
    setFiltro({ ...filtro, tipoDePublicacion: value });
  };

  const saveFilters = () => {
    console.log("filtro", filtro);

    dispatch({ type: types.setFilters, payload: filtro });
  };

  const resetFilters = () => {
    setLocalidades([]);
    setEstado([]);
    setTipoDePropiedad([]);
    setDormitorios([]);
    setMoneda("");
    setMaxPrice(0);
    setTipoDePublicacion([]);

    setFiltro(initFilters);
    dispatch({ type: types.setFilters, payload: initFilters });
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "2vh",
          width: "100vw"
        }}
      >
        {localidades?.map((item) => (
          <Chip label={item} key={item} />
        ))}
        {estado?.map((item) => (
          <Chip label={item} key={item} />
        ))}
        {tipoDePropiedad?.map((item) => (
          <Chip label={item} key={item} />
        ))}
        {dormitorios?.map((item) => (
          <Chip label={item} key={item} />
        ))}
        {moneda !== "" && <Chip label={moneda} key={moneda} />}
        {maxPrice > 0 && <Chip label={"Precio máximo: " + maxPrice} />}
        {tipoDePublicacion?.map((item) => (
          <Chip label={item} key={item} />
        ))}
      </div>
      <div className="selects">
        <FormControl className="selects">
          <Stack direction="row" spacing={2}>
            <FormControl>
              <Select
                sx={{
                  width:"15vw",
                  height: "5vh",
                  boxShadow:
                    "rgba(0, 0, 0, 0.19) 0px 5px 10px, rgba(0, 0, 0, 0.23) 0px 3px 3px",
                }}
                multiple
                displayEmpty
                onChange={handleChangeTipoDePublicacion}
                value={tipoDePublicacion}
                input={<OutlinedInput />}
                renderValue={(selected) => <em>Tipo de publicación</em>}
                MenuProps={MenuProps}
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem disabled value="" key="placeholderTipoDePublicacion">
                  <em>Tipo de publicación</em>
                </MenuItem>
                {store.tipoDePublicacion?.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl>
              <Select
                sx={{
                  width: "14vw",
                  height: "5vh",
                  boxShadow:
                    "rgba(0, 0, 0, 0.19) 0px 5px 10px, rgba(0, 0, 0, 0.23) 0px 3px 3px",
                }}
                multiple
                displayEmpty
                onChange={handleChangeTipoDePropiedad}
                value={tipoDePropiedad}
                input={<OutlinedInput />}
                renderValue={(selected) => <em>Tipo de Propiedad</em>}
                MenuProps={MenuProps}
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem disabled value="" key="placeholderTipo">
                  <em>Tipo de Propiedad</em>
                </MenuItem>
                {store.tipoDePropiedad?.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl>
              <Select
                sx={{
                  width: "11vw",
                  height: "5vh",
                  boxShadow:
                    "rgba(0, 0, 0, 0.19) 0px 5px 10px, rgba(0, 0, 0, 0.23) 0px 3px 3px",
                }}
                multiple
                displayEmpty
                onChange={handleChangeLocalidades}
                value={localidades}
                input={<OutlinedInput />}
                renderValue={(selected) => <em>Localidades</em>}
                MenuProps={MenuProps}
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem disabled value="" key="placeholderLocalidades">
                  <em>Localidades</em>
                </MenuItem>
                {store.localidades?.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl>
              <Select
                sx={{
                  width: "8vw",
                  height: "5vh",
                  boxShadow:
                    "rgba(0, 0, 0, 0.19) 0px 5px 10px, rgba(0, 0, 0, 0.23) 0px 3px 3px",
                }}
                multiple
                displayEmpty
                onChange={handleChangeEstado}
                value={estado}
                input={<OutlinedInput />}
                renderValue={(selected) => <em>Estado</em>}
                MenuProps={MenuProps}
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem disabled value="" key="placeholderEstado">
                  <em>Estado</em>
                </MenuItem>
                {store.estado?.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl>
              <Select
                sx={{
                  width: "11vw",
                  height: "5vh",
                  boxShadow:
                    "rgba(0, 0, 0, 0.19) 0px 5px 10px, rgba(0, 0, 0, 0.23) 0px 3px 3px",
                }}
                multiple
                displayEmpty
                onChange={handleChangeDormitorios}
                value={dormitorios}
                input={<OutlinedInput />}
                renderValue={(selected) => <em>Dormitorios</em>}
                MenuProps={MenuProps}
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem disabled value="" key="placeholderDormitorios">
                  <em>Dormitorios</em>
                </MenuItem>
                {store.dormitorios?.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl>
              <Select
                sx={{
                  width: "9vw",
                  height: "5vh",
                  boxShadow:
                    "rgba(0, 0, 0, 0.19) 0px 5px 10px, rgba(0, 0, 0, 0.23) 0px 3px 3px",
                }}
                displayEmpty
                onChange={handleChangeMoneda}
                value={moneda}
                input={<OutlinedInput />}
                renderValue={(selected) => <em>Moneda</em>}
                MenuProps={MenuProps}
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem disabled value="" key="placeholderMoneda">
                  <em>Moneda</em>
                </MenuItem>
                {store.moneda?.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              id="maxPrice"
              variant="outlined"
              placeholder="Precio máximo"
              type="number"
              onChange={(e) => {
                setMaxPrice(e.target.value);
                setFiltro({ ...filtro, maxPrice: e.target.value });
              }}
              style={{
                width: "10.5vw",
                height: "5vh",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                alignContent: "center",
              }}
              inputProps={{
                style: {
                  borderRadius: "5px",
                  height: "5vh",
                  boxSizing: "border-box",
                  boxShadow:
                    "rgba(0, 0, 0, 0.19) 0px 5px 10px, rgba(0, 0, 0, 0.23) 0px 3px 3px",
                },
              }}
            />
          </Stack>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "3vw",
              marginTop: "30px",
              width: "50vw",
              margin: "30px auto 0 auto"
            }}
          >
            <Button
              variant="outlined"
              onClick={saveFilters}
              sx={{
                width: "151px",
                height: "4vh",
                backgroundColor: "#1976d2",
                color: "white",
                boxShadow:
                  "rgba(0, 0, 0, 0.19) 0px 5px 10px, rgba(0, 0, 0, 0.23) 0px 3px 3px",
                "&:hover": {
                  backgroundColor: "white",
                  color: "#1976d2",
                },
              }}
            >
              Aplicar Filtros
            </Button>
            <Button
              variant="outlined"
              onClick={resetFilters}
              sx={{
                width: "151px",
                height: "4vh",
                backgroundColor: "#1976d2",
                color: "white",
                boxShadow:
                  "rgba(0, 0, 0, 0.19) 0px 5px 10px, rgba(0, 0, 0, 0.23) 0px 3px 3px",
                "&:hover": {
                  backgroundColor: "white",
                  color: "#1976d2",
                },
              }}
            >
              Borrar Filtros
            </Button>
          </div>
        </FormControl>
      </div>
    </div>
  );
}

export default Filters;
