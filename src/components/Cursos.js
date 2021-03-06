import React from 'react';
import Carousel from 'react-elastic-carousel';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

class Cursos extends React.Component {
  constructor(props) {
    super(props)
    this.breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 }
    ]
  }
  render() {
    return (
        <div className="carousel">
        <Carousel breakPoints={this.breakPoints}>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="300"
                        src={process.env.PUBLIC_URL + '/assets/cocinaIcon.jpg'}
                        alt="Gastronomia"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Gastronomia
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Elaboración de platillos a través técnicas culinarias tradicionales 
                            y contemporáneas aplicadas de forma inocua con presentaciones estéticas.
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="300"
                        src={process.env.PUBLIC_URL + '/assets/programacionIcon.jpg'}
                        alt="Programacion"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Fundamentos de Programacion
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Técnicas de programación para cómputo de alto desempeño y 
                            diseño de interfaces de hardware y software responsivas.
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="300"
                        src={process.env.PUBLIC_URL + '/assets/englishIcon.png'}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Idiomas
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Aprende alemán, chino, francés, inglés, italiano, 
                            japonés, portugués y ruso.
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Carousel>
        </div>
    )
  }
}

export default Cursos;
