import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Button, Stack } from '@mui/material';
import Carrousel from './Carrousel';
export default function CardProperty() {
  const theme = useTheme();

  const imagenes = [
    {
      label: 'San Francisco – Oakland Bay Bridge, United States',
      imgPath:
        'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
      label: 'Bird',
      imgPath:
        'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
      label: 'Bali, Indonesia',
      imgPath:
        'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
    },
    {
      label: 'Goč, Serbia',
      imgPath:
        'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
    },
  ];
 
  return (
    <Card sx={
        { display: 'flex',
    justifyContent : "center",
    alignItems : "center",
    width : "80%",
    height : "250px" }}>
        
         <Carrousel lista={imagenes} />
        
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
          $S 315.000
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
          3 Dor. 3 Baños. 129mt
          </Typography>
          <Typography variant="subtitle2" color="text.secondary" component="div">
          A pasos de la rambla, excelente planta muy amplia y
                      luminosa. 5to piso. Living comedor con grandes ventanales
                      a la calle, amplio hall de distribución con un gran mueble
                      para guardado, tres amplios dormitorios con placard, uno
                      al frente y los otros dos al contra frente muy
                      despejado.Dos baños completos hechos a nuevo. Cocina con
                      gran cantidad de placares, terraza lavadero y servicio
                      completo.- Calefacción por losa y portero. Garaje, para un
                      auto. lugar fijo .- Gastos comunes en Verano $ 25.000 en
                      Invierno 29.000.- Fondo de reserva U$S 30.-
          </Typography>
          <Typography>
          Pocitos. Montevideo</Typography>
          <Stack
  direction="column"
  justifyContent="center"
  alignItems="flex-end"
  spacing={2}
><Button variant="contained">Contained</Button></Stack>
          </CardContent>
          
      </Box>
      
    </Card>
  );
}
