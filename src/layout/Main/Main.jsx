import React, {Component} from 'react';
import Movies from "../../components/Movies/Movies";
import Preloader from "../../components/Preloader/Preloader";
import Search from "../../components/Search/Search";

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends Component {

    state = {
        movies: [],
        isLoading: true
    }

    componentDidMount() {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search, isLoading: false}))
            .catch((err) => {
                console.error(err);
                this.setState({loading: false});
            });
    }

    searchMovies = (str, type) => {
        this.setState({loading: true});
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search, isLoading: false}))
            .catch((err) => {
                console.error(err);
                this.setState({loading: false});
            });
    }

    render() {
        const {movies, isLoading} = this.state;
        return (
            <main className={'container content'}>
                <Search searchMovies={this.searchMovies}/>
                {isLoading ? <Preloader/> : <Movies movies={movies}/>}
            </main>
        );
    }

};

export default Main;