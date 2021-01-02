import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Header extends Component {
    static propTypes = {
        prop: PropTypes.func
    }

    render() {
        return (
            <div className="header">
                <h1 className="header--title">
                    Where in the world?
            </h1>
                <button className="header--toggleNight">
                    Dark Mode
                </button>
            </div>
        )
    }
}
