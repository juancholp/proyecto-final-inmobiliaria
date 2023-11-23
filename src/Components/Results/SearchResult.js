import { useEffect, useState, useContext } from 'react'
import RenderResults from './RenderResults'
import {
  Box,
  Stack,
  Divider,
  Button,
  Container,
  Grid,
  Typography,
} from '@mui/material'
import MapIcon from '@mui/icons-material/Map'
import { FilterAlt } from '@mui/icons-material'
import './SearchResult.css'
import { storeContext } from '../../Store/StoreProvider'
import Filters from '../Filters'

const SearchResult = () => {
  const [store, dispatch] = useContext(storeContext)

  const [results, setResults] = useState(store.propiedades)

  //falta razonar
  useEffect(() => {
    updateFilters()
  }, [store.filtros])

  //falta razonar
  const updateFilters = () => {
    //actualizar results con esos filtros
    let tempResults = results
    tempResults = results.filter(() => {
      results.forEach((e) => {
        //pensar, mucho
      })
      //pensar, mucho
    })
    setResults(tempResults)
  }

  return (
    <div className='SearchResult'>
      <Container maxWidth='md'>
        <Box boxShadow={2}>
          <div className='info'>
            <Grid
              container
              direction='row'
              justifyContent='space-between'
              alignItems='stretch'
            >
              <Stack
                direction='column'
                justifyContent='flex-start'
                alignItems='flex-start'
                divider={<Divider orientation='horizontal' flexItem />}
                spacing={1}
              >
                <Typography
                  component={'h1'}
                  variant='body1'
                  color='text.primary'
                >
                  Venta de casas y apartamentos en {store.filters[0]}.
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  Estás en: {store.tipodepropiedad}, {store.tipoDeVenta}
                </Typography>
                <Typography variant='body2' color='text.primary'>
                  Mostrando {results.length} resultados.
                </Typography>
              </Stack>
              <Stack
                direction='row'
                justifyContent='flex-start'
                alignItems='flex-start'
                spacing={2}
              >
                <Button variant='outlined' size='small' startIcon={<MapIcon />}>
                  Ver mapa
                </Button>
                <Button
                  variant='outlined'
                  size='small'
                  startIcon={<FilterAlt />}
                >
                  Popularidad
                </Button>
              </Stack>
            </Grid>
          </div>
        </Box>
      </Container>
      <Container maxWidth='md'>
        <Box boxShadow={2} padding={2}>
          <Filters />
        </Box>
      </Container>

      <Container className='resultados' maxWidth='lg'>
        <Box
          boxShadow={2}
          padding={2}
          sx={{
            width: '70%',
            height: 'fit-content',
            margin: 'auto',
            padding: '10px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <main className='results'>
            <div>
              {results.length === 0 && <h1>No hay resultados.</h1>}
              {results.length > 0 && <RenderResults results={results} />}
            </div>
          </main>
        </Box>
      </Container>
    </div>
  )
}

export default SearchResult
