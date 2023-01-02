import {FC, memo} from 'react';
import Movie, {MovieType} from "./Movie/Movie";
import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";

type MoviesPropsType = {
    movies: MovieType[]
    isLoading: boolean
}

const Movies: FC<MoviesPropsType> = memo(({movies, isLoading}) => {

    return (
        <Grid container spacing={{xs: 2, md: 3}} columns={{xs: 1, sm: 8, md: 12}}>
            {(isLoading ? Array.from(new Array(6)) : movies).map((movie, index: number) => {
                return movie ? <Movie key={movie.imdbID} movie={movie}/> :
                    <Grid key={index} item xs={1} sm={4} md={4} height={'100%'}><Skeleton variant="rectangular"
                                                                                          height={550}/>
                    </Grid>
            })}
        </Grid>
    );
});

export default Movies;