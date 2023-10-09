import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Button, Stack } from '@mui/material';
export default function CardProperty() {
  const theme = useTheme();

  return (
    <Card sx={{ display: 'flex',
    justifyContent : "center",
    alignItems : "center",
    width : "80%",
    height : "250px" }}>
        <CardMedia
        component="img"
        sx={{ width: 200,
        height : 200 }}
        image="https://www.elcato.org/sites/default/files/images/stories/51.jpg"
        alt="Propiedad"
      />
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
