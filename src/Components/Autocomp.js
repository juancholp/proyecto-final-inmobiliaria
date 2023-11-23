import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import { useState, useContext } from 'react'
import { storeContext } from '../Store/StoreProvider'

export default function ComboBox(props) {
  const [store, dispatch] = useContext(storeContext)

  const [local, setLocal] = useState([])

  const handleDepartmentChange = (value) => {
    props.actionOnClick(value)
    setLocal(value)
  }

  return (
    <Autocomplete
      style={{ backgroundColor: 'white' }}
      disablePortal
      id='combo-box-demo'
      options={store.localidades}
      sx={{ width: 300 }}
      value={local}
      onChange={(e) => handleDepartmentChange(e.target.textContent)}
      getOptionLabel={(option) => option.toString()}
      renderInput={(params) => <TextField {...params} label='Departamento' />}
    />
  )
}
