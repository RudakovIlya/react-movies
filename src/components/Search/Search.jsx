import React, {Component} from 'react';

class Search extends Component {
    state = {
        search: ''
    }

    handleKey = (event) => {
        if (event.key === 'Enter') {
            this.props.searchMovies(this.state.search)
        }
    }

    onChangeSearchHandler = (event) => {
        this.setState({search: event.currentTarget.value})
    }

    onClickHandler = () => {
        this.props.searchMovies(this.state.search)
    }

    render() {
        const {search} = this.state
        return (
            <div className="row">
                <div className="input-field">
                    <input
                        value={search}
                        name={'search'}
                        placeholder={'search'}
                        id={"email_inline"}
                        type={"search"}
                        className={"validate"}
                        onChange={this.onChangeSearchHandler}
                        onKeyDown={this.handleKey}
                    />
                    <button className="btn search-btn blue lighten-1" onClick={this.onClickHandler}>Search</button>

                </div>
            </div>
        )
    }
}

export default Search;