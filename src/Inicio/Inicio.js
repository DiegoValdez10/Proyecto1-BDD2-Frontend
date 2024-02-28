import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import flor1 from '../images/flor1.png';
import flor2 from '../images/flor2.jpg';
import flor3 from '../images/flor3.jpg';
import flor4 from '../images/flor4.png';
import flor5 from '../images/flor5.png';
import flor6 from '../images/flor6.png';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginTop: '20px', marginLeft: '100px' }}>
      <div>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="180"
              image={flor1}
              alt="flor1"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Cesta de lirios blancos
              </Typography>
              <Typography variant="body2" color="text.secondary">

              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>

      <div>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="180"
              image={flor2}
              alt="flor2"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Arreglo de orquídeas exóticas
              </Typography>
              <Typography variant="body2" color="text.secondary">

              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>

      <div>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="180"
              image={flor3}
              alt="flor3"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Centro de mesa con lilas
              </Typography>
              <Typography variant="body2" color="text.secondary">
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>

      <div>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="180"
              image={flor4}
              alt="flor4"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Arreglo de flores secas
              </Typography>
              <Typography variant="body2" color="text.secondary">
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>

      <div>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="180"
              image={flor5}
              alt="flor5"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Centro de mesa con hortensias
              </Typography>
              <Typography variant="body2" color="text.secondary">
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>

      <div>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="180"
              image={flor6}
              alt="flor6"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Canasta de flores de verano
              </Typography>
              <Typography variant="body2" color="text.secondary">
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
}
