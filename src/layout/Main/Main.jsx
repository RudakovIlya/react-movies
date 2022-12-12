import React, { useEffect, useState } from 'react';
import Movies from "../../components/Movies/Movies";
import Search from "../../components/Search/Search";
const API_KEY = process.env.REACT_APP_API_KEY;

const Main = () => {

    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    const searchMovies = (str, type) => {
        setIsLoading(true);
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${str.trim()}${type !== 'all' ? `&type=${type}` : ''}`)
            .then(response => response.json())
            .then(data => {
                setIsLoading(false)
                setMovies(data.Search);

            })
            .catch((err) => {
                console.error(err);
                setIsLoading(false)
            });
    }

    useEffect(() => {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
            .then(response => response.json())
            .then(data => {
                setMovies(data.Search);
                setIsLoading(false)
            })
            .catch((err) => {
                console.error(err);
                setIsLoading(false);
            });
    }, [])

    return (
        <>
            <Search searchMovies={searchMovies} />
            {<Movies movies={movies} isLoading={isLoading} />}
        </ >
    );

}

export default Main;