import React from 'react';
import Movie from "./Movie/Movie";

const Movies = (props) => {
    const {movies} = props;
    const movieItem = movies.map((movie) => {
        return (
            <Movie key={movie.imdbID} {...movie}/>
        )
    })

    return (
        <div className="movies">
            {movieItem}
        </div>
    );
};

export default Movies;