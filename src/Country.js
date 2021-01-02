import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Country extends Component {
    static propTypes = {
        prop: PropTypes.func
    }

    render() {
        const countryJSX = this.props.data.map(country => {
            return (
                <div className="country">
                    <img className="country--flag" src={country[4]} alt={`Flag of ${country[0]}`}/>
                    <h2 className="country--name">{country[0]}</h2>
                    <p className="country--pop"><span className="country--legend">Population:</span> {country[2]}</p>
                    <p className="country--region"><span className="country--legend">Region:</span> {country[1]}</p>
                    <p className="country--capital"><span className="country--legend">Capital:</span> {country[3]}</p>
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
