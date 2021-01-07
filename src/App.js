import React, { Component } from 'react';
import axios from 'axios';
import Country from './Country';
import Header from './Header';
import SearchBar from './SearchBar';
import CountryPage from './CountryPage';

class App extends Component {
  state = {
    data: [],
    dataClick: [],
    inputText: '',
  }


  componentDidMount() {
    axios.get('https://restcountries.eu/rest/v2/all')
      .then(res => {
        this.setState({
          data: res.data,
        })
      })
  }

  handleClick = (event) => { //redirection boutton border a debugg (certains noms composés ne marchent pas)
    axios.get(`https://restcountries.eu/rest/v2/name/${event.target.id}?fullText=true`)
      .then(res => {
        const countryData = [res.data[0].flag, res.data[0].name, res.data[0].nativeName, res.data[0].population, res.data[0].region, res.data[0].subregion, res.data[0].capital, res.data[0].topLevelDomain[0], res.data[0].currencies, res.data[0].languages, res.data[0].borders];
        this.setState({
          dataClick: countryData,
        })
      })
  }

  handleBack = () => {
    
    this.setState({
      dataClick: [],
      inputText: '',
    })
  }

  handleChangeSelect = (event) => {
    if (event.target.value === "") {
      axios.get(`https://restcountries.eu/rest/v2/region/${event.target.value}`) //${event.target.id}
        .then(res => {
          this.setState({
            data: res.data,
          })
        })
    } else {
      axios.get(`https://restcountries.eu/rest/v2/all`) //${event.target.id}
        .then(res => {
          this.setState({
            data: res.data,
          })
        })
    }
  }

  getInputComponent = (input, callback) => {
    this.setState({
      inputText: input,
    })
    callback(); //a fix
  }


  handleSubmitText = () => {
    // event.preventDefault(); passé par une fonction intermediaire dans SearchBar.js
    axios.get(`https://restcountries.eu/rest/v2/name/${this.state.inputText}?fullText=true`)
      .then(res => {
        const countryData = [res.data[0].flag, res.data[0].name, res.data[0].nativeName, res.data[0].population, res.data[0].region, res.data[0].subregion, res.data[0].capital, res.data[0].topLevelDomain[0], res.data[0].currencies, res.data[0].languages, res.data[0].borders];
        this.setState({
          dataClick: countryData,
        })
      })
      .catch(error => {
      })
    }

  render() {

    // recup des données a partir de data (reponse de l'api)
    const homeData = this.state.data.map(function (data) {
      return [data.name, data.region, data.population, data.capital, data.flag]
    });

    if (this.state.dataClick.length > 0) {
      return (
        <div className="App">
          <Header />

          <CountryPage onClickBorder={this.handleClick.bind(this)} onClickBack={this.handleBack.bind(this)} data={this.state.dataClick} />
        </div>
      )
    } if (Object.keys(this.state.data).length !== 0) {
      return (
        <div className="App">
          <Header />

          <SearchBar onChange={this.handleChangeSelect.bind(this)} onSubmitText={this.handleSubmitText.bind(this)} getInputComponent={this.getInputComponent.bind(this)}/>

          <Country onClick={this.handleClick.bind(this)} data={homeData} />

        </div>
      )
    } else {
      return (
        <div className="App">
          Loading...
        </div>
      )
    }
  };
}

export default App;
