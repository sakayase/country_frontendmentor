import React, { Component } from 'react'
import PropTypes from 'prop-types'
import countries from "i18n-iso-countries"; // converti un code ISO de pays en nom de pays complet

export default class CountryPage extends Component {
    static propTypes = {
        prop: PropTypes.func
    }

    render() {
        console.log(this.props.data);
        const currencies = this.props.data[8].map(curr => {
            if (this.props.data[8].length > 1) {
                return `${curr.name}, `
            }
            else {
                return `${curr.name}`
            }
            
        })

        const languages = this.props.data[9].map(lang => {
            if (this.props.data[9].length > 1) {
                return `${lang.name}, `
            }
            else {
                return `${lang.name}`
            }
        })

        countries.registerLocale(require("i18n-iso-countries/langs/en.json")); //necessaire pour faire fonctionner i18n-iso-countries sous react / angular
        const bordersJSX = this.props.data[10].map(border =>{
            const countryName = countries.getName(`${border}`, "en");
            return <button id={countryName} onClick={this.props.onClickBorder} className="page--button-border">{countryName}</button>
        })
        
        

        return (
            <div>
                <button onClick={this.props.onClickBack} className="page--back-button">Back</button>
                
                <img className="page--flag" src={this.props.data[0]} alt={`Flag of ${this.props.data[1]}`}/>
                <h2 className="page--name">{this.props.data[1]}</h2>
                
                <div className="page--main-info">
                    <p className="page--native"><span>Native Name: </span>{this.props.data[2]}</p>
                    <p className="page--population"><span>Population: </span>{this.props.data[3]}</p>
                    <p className="page--region"><span>Region: </span>{this.props.data[4]}</p>
                    <p className="page--sub-region"><span>Sub Region: </span>{this.props.data[5]}</p>
                    <p className="page--capital"><span>Capital: </span>{this.props.data[6]}</p>
                </div>

                <div className="page--second-info">
                    <p className="page--domain"><span>Top Level Domain: </span>{this.props.data[7]}</p>
                    <p className="page--currencies"><span>Currencies: </span>{currencies}</p>
                    <p className="page--languages"><span>Languages: </span>{languages}</p>
                </div>

                <div className="page--borders">
                    <h3 className="page--title-border">Border Countries:</h3>
                    {bordersJSX}
                </div>
            </div>
        )
    }
}
