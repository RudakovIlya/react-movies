import React, {Component} from 'react';

class Search extends Component {

    state = {
        search: '',
        type: 'all',
    }

    onChangeInputValue = (event) => {
        this.setState({search: event.currentTarget.value})
    }

    handleFilter = (event) => {
        this.setState(
            () => ({type: event.target.value}),
            () => {
                this.props.searchMovies(this.state.search, this.state.type);
            }
        );
    };

    handleCallback = () => {
        this.props.searchMovies(this.state.search, this.state.type);
    }

    handleKey = (event) => {
        if (event.key === 'Enter') {
            this.handleCallback()
        }
    };

    render() {
        const {search, type} = this.state
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
                    <button className="btn search-btn blue lighten-1" onClick={this.handleCallback}>Search
                    </button>
                </div>
                <div className={'row'}>
                    <p className={'col s4 center'}>
                        <label>
                            <input checked={type === 'all'} className='with-gap' name="type" type="radio" value={'all'}
                                   onChange={this.handleFilter}/>
                            <span>All</span>
                        </label>
                    </p>
                    <p className={'col s4 center'}>
                        <label>
                            <input checked={type === 'movie'} className='with-gap' name="type" type="radio"
                                   value={'movie'} onChange={this.handleFilter}/>
                            <span>Movies only</span>
                        </label>
                    </p>
                    <p className={'col s4 center'}>
                        <label>
                            <input checked={type === 'series'} className="with-gap" name="type" type="radio"
                                   value={'series'} onChange={this.handleFilter}/>
                            <span>Series only</span>
                        </label>
                    </p>
                </div>
            </div>
        )
    }

}

export default Search;