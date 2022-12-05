import React from 'react';

function Filter(props) {

    return (
        <div className={'row'}>
            <p className={'col s4 center'}>
                <label>
                    <input className='with-gap' name="type" type="radio" value={'all'}/>
                    <span>All</span>
                </label>
            </p>
            <p className={'col s4 center'}>
                <label>
                    <input className='with-gap' name="type" type="radio" value={'movie'}/>
                    <span>Movies only</span>
                </label>
            </p>
            <p className={'col s4 center'}>
                <label>
                    <input className="with-gap" name="type" type="radio" value={'series'}/>
                    <span>Series only</span>
                </label>
            </p>
        </div>)

}

export default Filter;