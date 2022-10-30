import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { ImagesearchRoller } from '@mui/icons-material';


export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea sx={{ p: 1 }}>
        <CardMedia
          component="img"
          height="140"
          image='{/assets/images/dogo_argentino.jpg}'
          alt="Cane Corso"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Dogo Argentino
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Blanco de pelo corto.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActionArea sx={{ p: 1 }}>
        <CardMedia
          component="img"
          height="140"
          image= "/images/cane_corso.jpg"
          alt="Dogo Argentino"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Cane Corso
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Negro de pelo corto.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
