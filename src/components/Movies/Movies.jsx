import React from 'react';
import Movie from "./Movie/Movie";

const Movies = (props) => {
    const {movies = []} = props;
    const movieItem = movies.length ? movies.map((movie) => {
        return (
            <Movie key={movie.imdbID} {...movie}/>
        )
    }) : <h4>Nothing found...</h4>
    return (
        <div className="movies">
            {movieItem}
        </div>
    );
};

export default Movies;
