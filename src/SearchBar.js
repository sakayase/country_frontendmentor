import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class SearchBar extends Component {
    static propTypes = {
        prop: PropTypes.func
    }

    state = {
        inputText: '',
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.getInputComponent(this.state.inputText, this.props.onSubmitText());     // OK, mais maintenant pb de synchro, faut faire entrée deux fois car premiere fois il prend pas en compte le nouvel input
    }

    handleChangeText = (event) => {
        this.setState({
            inputText: event.target.value,
        })
      }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} className="search">
                    <label htmlFor="name" className="label--name">
                        <input onChange={this.handleChangeText} type="text" name="name" id="" className="search--name" placeholder="Search for a country..." value={this.state.inputText}/>
                    </label>
                </form>
                <form className="search">
                    <label htmlFor="filter" className="label--filter">    
                        <select onChange={this.props.onChange} name="filter" id="" className="search--filter">
                            <option value="" className="filter--nofilter">Filter by Region</option>
                            <option value="Africa" className="filter--continent">Africa</option>
                            <option value="Americas" className="filter--continent">Americas</option>
                            <option value="Asia" className="filter--continent">Asia</option>
                            <option value="Europe" className="filter--continent">Europe</option>
                            <option value="Oceania" className="filter--continent">Oceania</option>
                        </select>
                    </label>
                </form>
            </div>
        )
    }
}
