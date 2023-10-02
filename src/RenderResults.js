import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import "./Card.css"
const RenderResults = ({ results }) => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <div >
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

          {results.map((result) => (
            
            <Grid item xs={2} sm={4} md={4} >
              <Item>


                <Card sx={{ maxWidth: 345 }} className='card'>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"

                      image={result.imgsrc} alt="Inmueble"

                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Lizard
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <p key={result.id}>
                          USD {result.price} - {result.dorms} dormitorioss - {result.banos}{" "}
                          baños - {result.mcuadrados} m2
                        </p>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Item>
            </Grid>

          ))}
        </Grid>
      </Box>
    </div >
  )
}

export default RenderResults;