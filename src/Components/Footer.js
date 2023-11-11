import * as React from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import './Footer.css'
import { Link } from 'react-router-dom'

const Item = styled(Paper)(({ theme }) => ({
  textAlign: 'center',
}))

export default function StickyFooter() {
  return (
    <Box className='footer' sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs sx={{ boxShadow: 'none' }}>
          <Item id='footer' sx={{ boxShadow: 'none' }}>
            <Link
              to={'/About-us'}
              style={{ color: 'white', textDecoration: 'none' }}
            >
              {'Sobre Nosotros'}
            </Link>
          </Item>
          <Item id='footer' sx={{ boxShadow: 'none' }}>
            <Link
              to={'/T&C'}
              style={{ color: 'white', textDecoration: 'none' }}
            >
              {'Términos y condiciones'}
            </Link>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item id='footer' sx={{ boxShadow: 'none' }}>
            <Link
              to={'/Venta'}
              style={{ color: 'white', textDecoration: 'none' }}
            >
              {'Ventas'}
            </Link>
          </Item>
          <Item id='footer' sx={{ boxShadow: 'none' }}>
            <Link
              to={'/Alquiler'}
              style={{ color: 'white', textDecoration: 'none' }}
            >
              {'Alquiler'}
            </Link>
          </Item>
          <Item id='footer' sx={{ boxShadow: 'none' }}>
            <Link
              to={'/Alquiler-temporal'}
              style={{ color: 'white', textDecoration: 'none' }}
            >
              {'Alquiler Temporal'}
            </Link>
          </Item>
        </Grid>
        <Grid item xs>
          <Item id='footer' sx={{ boxShadow: 'none' }}>
            <Link
              to={'http://youtube.com'}
              style={{ color: 'white', textDecoration: 'none' }}
            >
              {'YouTube'}
            </Link>
          </Item>
          <Item id='footer' sx={{ boxShadow: 'none' }}>
            <Link
              to={'http://fb.com'}
              style={{ color: 'white', textDecoration: 'none' }}
            >
              {'Facebook'}
            </Link>
          </Item>
          <Item id='footer' sx={{ boxShadow: 'none' }}>
            <Link
              to={'http://x.com'}
              style={{ color: 'white', textDecoration: 'none' }}
            >
              {'𝕏'}
            </Link>
          </Item>
        </Grid>
      </Grid>
    </Box>
  )
}
