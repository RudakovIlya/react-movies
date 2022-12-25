import React from 'react';
import Movie from "./Movie/Movie";
import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";

const Movies = (props) => {
    const { movies = [], isLoading } = props;
    return (
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 8, md: 12 }}>
            {(isLoading ? Array.from(new Array(6)) : movies).map((movie, index) => {
                return movie ? <Movie key={movie.imdbID} {...movie} /> :
                    <Grid key={index} item xs={1} sm={4} md={4} height={'100%'}><Skeleton variant="rectangular"
                        height={550} />
                    </Grid>
            })}
        </Grid>

    );
};

export default Movies;