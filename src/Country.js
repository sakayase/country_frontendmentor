import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Country extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div className="mosaique--country">
              <img className="country--flag" src={homeData[0][4]} alt={`Flag of ${homeData[0][0]}`}/>
              <h2 className="country--name">{homeData[0][0]}</h2>
              <p className="country--pop">Population = {homeData[0][2]}</p>
              <p className="country--region">Region: {homeData[0][1]}</p>
              <p className="country--capital">Capital: {homeData[0][3]}</p>
            </div>
        )
    }
}
