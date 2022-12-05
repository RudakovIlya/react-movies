import React, {Component} from 'react';


class Search extends Component {

    state = {
        search: '',
    }

    onChangeInputValue = (event) => {
        this.setState({search: event.currentTarget.value})
    }

    callback = () => {
        this.props.searchMovies(this.state.search)
    }

    handleKey = (event) => {
        if (event.key === 'Enter') {
            this.callback()
        }
    };


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
                        onChange={this.onChangeInputValue}
                        onKeyDown={this.handleKey}
                    />
                    <button className="btn search-btn blue lighten-1" onClick={this.callback}>Search
                    </button>
                </div>
            </div>
        )
    }

}

export default Search;