import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class SearchBar extends Component {
    static propTypes = {
        prop: PropTypes.func
    }

    render() {
        return (
            <form onSubmit={this.props.onSubmitText} className="search">
                <label htmlFor="name" className="label--name">
                    <input onChange={this.props.onChangeText} type="text" name="name" id="" className="search--name" placeholder="Search for a country..."/>
                </label>
              
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
        )
    }
}
