import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Country extends Component {
    static propTypes = {
        prop: PropTypes.func
    }

    

    render() {
        const countryJSX = this.props.data.map(country => {
            return (
                <div id={country[0]} onClick={this.props.onClick} className="country">
                    <img id={country[0]} className="country--flag" src={country[4]} alt={`Flag of ${country[0]}`}/>
                    <h2 id={country[0]} className="country--name">{country[0]}</h2>
                    <p id={country[0]} className="country--pop"><span id={country[0]} className="country--legend">Population:</span> {country[2]}</p>
                    <p id={country[0]} className="country--region"><span id={country[0]} className="country--legend">Region:</span> {country[1]}</p>
                    <p id={country[0]} className="country--capital"><span id={country[0]} className="country--legend">Capital:</span> {country[3]}</p>
                </div>
            )
        })

        return (
            <div className="mosaique">
                {countryJSX}
            </div>
        )
    }
}


