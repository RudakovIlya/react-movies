import {useCallback, useEffect, useState} from 'react';
import Movies from "../../components/Movies/Movies";
import Search from "../../components/Search/Search";
import {MovieType} from "../../components/Movies/Movie/Movie";
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

const Main = () => {

    const [movies, setMovies] = useState<MovieType[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const searchMovies = useCallback((str: string, type: string) => {
        setIsLoading(true);
        axios(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${str.trim()}${type !== 'all' ? `&type=${type}` : ''}`)
            .then(response => {
                setIsLoading(false)
                setMovies(response.data.Search);

            })
            .catch(() => {
                setIsLoading(false)
            });
    }, [])

    useEffect(() => {
        axios(`https://www.omdbapi.com/?apikey=${API_KEY}&s=marvel`)
            .then(response => {
                setMovies(response.data.Search);
                setIsLoading(false)
            })
            .catch(() => {
                setIsLoading(false);
            });
    }, [])

    return (
        <>
            <Search searchMovies={searchMovies}/>
            {<Movies movies={movies} isLoading={isLoading}/>}
        </>
    );

}

export default Main