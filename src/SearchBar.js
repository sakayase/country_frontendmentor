import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class SearchBar extends Component {
    static propTypes = {
        prop: PropTypes.func
    }

    render() {
        return (
            <form className="search">
                <label htmlFor="name" className="label--name">
                    <input type="text" name="name" id="" className="search--name" placeholder="Search for a country..."/>
                </label>
              
                <label htmlFor="filter" className="label--filter">    
                    <select name="filter" id="" className="search--filter">
                        <option value="Africa" className="filter--continent">Africa</option>
                        <option value="America" className="filter--continent">America</option>
                        <option value="Asia" className="filter--continent">Asia</option>
                        <option value="Europe" className="filter--continent">Europe</option>
                        <option value="Oceania" className="filter--continent">Oceania</option>
                    </select>
                </label>
            </form>
        )
    }
}
