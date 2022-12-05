import React, {Component} from 'react';
import Movies from "../../components/Movies/Movies";
import Preloader from "../../components/Preloader/Preloader";
import Search from "../../components/Search/Search";


class Main extends Component {

    state = {
        movies: []
    }

    componentDidMount() {
        fetch('http://www.omdbapi.com/?apikey=1780b93d&s=matrix')
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search}))
    }

    searchMovies = (str) => {
        fetch(`http://www.omdbapi.com/?apikey=1780b93d&s=${str}`)
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search}))
    }

    render() {
        const {movies} = this.state;
        return (
            <main className={'container content'}>
                <Search searchMovies={this.searchMovies}/>
                {movies.length ? <Movies movies={movies}/> : <Preloader/>}
            </main>
        );
    }


};

export default Main;