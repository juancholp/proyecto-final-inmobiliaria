import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";

import { useContext } from "react";
import { storeContext } from "../Store/StoreProvider";


const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: "30vh",
      width: 250,
    },
  },
};

export default function CustomSelectCheckmarks(props) {
  const [optionName, setOptionName] = React.useState([]);
  const [store, dispatch] = useContext(storeContext);
  const handleChange = (event) => {
    const value = event.target.value

    setOptionName(
      typeof value === "string" ? value.split(",") : value
    );

    props.actionOnClick(value);
  };

  return (
    <div>
      <FormControl sx={{ width: "15vw" }}>
        <InputLabel id="checkmarks">Tipo de Propiedad</InputLabel>
        <Select
          labelId="checkmarks"
          id="checkmarks"
          multiple
          value={optionName}
          onChange={handleChange}
          input={<OutlinedInput label="Tipo de Propiedad" />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
          sx={{borderRadius:"10px", overflow: "hidden"}}
        >
          {store.tipoDePropiedad.map((option) => (
            <MenuItem key={option} value={option}>
              <Checkbox checked={optionName.indexOf(option) > -1} />
              <ListItemText primary={option} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}