import React from 'react';
import { Grid, Paper, Card, CardMedia, CardContent, Typography } from "@mui/material";
const Movie = (props) => {
    const { Title: title, Year: year, imdbId: id, Type: type, Poster: poster } = props
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
                        <CardMedia
                            component="img"
                            image={poster}
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
                    </CardContent>
                </Card>
            </Paper>
        </Grid>
    );
};

export default Movie;