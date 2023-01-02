import {FC, memo} from 'react';
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CardActions from '@mui/material/CardActions'
import Button from "@mui/material/Button";
import {Image} from 'antd'
import {NavLink} from "react-router-dom";

export type MovieType = {
    imdbID: string
    Title: string
    Year: string
    Type: string
    Poster: string
}

type MoviePropsType = {
    movie: MovieType
}

const Movie: FC<MoviePropsType> = memo(({movie}) => {

    const {Title: title, Year: year, imdbID: id, Type: type, Poster: poster} = movie

    return (
        <Grid id={id} item xs={1} sm={4} md={4} height={'100%'}>
            <Paper elevation={2}>
                <Card>
                    {poster === 'N/A' ?
                        <CardMedia
                            component="img"
                            image={`https://via.placeholder.com/300x400?text=${title}`}
                            alt={title}
                        />

                        :
                        <Image
                            width={'100%'}
                            src={poster}
                            alt={title}
                        />
                    }
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Year: {year}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Type: {type}
                        </Typography>
                        <CardActions>
                            <Button size="small">
                                <NavLink to={`/${type}/${id}`}>Learn More</NavLink>
                            </Button>
                        </CardActions>
                    </CardContent>
                </Card>
            </Paper>
        </Grid>
    );
});

export default Movie;