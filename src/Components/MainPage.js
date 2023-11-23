import Box from '@mui/material/Box'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import CustomSelectCheckmarks from './CustomSelectCheckmarks'
import Carrousel from './Carrousel'
import Button from '@mui/material/Button'
import './MainPage.css'
import Autocomp from './Autocomp'
import { Link } from 'react-router-dom'
import { useState, useContext } from 'react'
import { storeContext } from '../Store/StoreProvider'
import { types } from '../Store/StoreReducer'

function MainPage() {
  const [store, dispatch] = useContext(storeContext)

  const [tipo, setTipo] = useState([])
  const [tipoPropiedad, setTipoPropiedad] = useState([])
  const [localidad, setLocalidad] = useState([])

  const handleChangeTipo = (event, value) => {
    setTipo(value)
  }

  const handleClick = () => {
    const initFiltersMain = {
      tipo: tipo,
      tipoPropiedad: tipoPropiedad,
      localidad: localidad,
    }
    dispatch({ type: types.setFilters, payload: initFiltersMain })
  }

  return (
    <div className='App'>
      <div className='SearchBackground'>
        <div className='Search'>
          <Box>
            <ToggleButtonGroup
              color='primary'
              value={tipo}
              exclusive
              onChange={handleChangeTipo}
              aria-label='Platform'
              id='opciones'
            >
              <ToggleButton value='Venta'>Venta</ToggleButton>
              <ToggleButton value='Alquiler'>Alquiler</ToggleButton>
              <ToggleButton value='Alquiler temporal'>
                Alquiler Temporal
              </ToggleButton>
            </ToggleButtonGroup>

            <div className='contenedorBusqueda'>
              <CustomSelectCheckmarks
                options={store.ListadoTipoDePublicacion}
                actionOnClick={setTipoPropiedad}
              />
              <Autocomp actionOnClick={setLocalidad} />

              <Button type='submit' variant='contained' onClick={handleClick}>
                <Link to={'/resultados'}>Buscar</Link>
              </Button>
            </div>
          </Box>
        </div>
      </div>
      <div className='carrousel-container'>
        <Carrousel />
      </div>
    </div>
  )
}

export default MainPage
