import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component{
  state = {
    data: []
  }


  componentDidMount() {
    axios.get('https://restcountries.eu/rest/v2/all')
      .then(res => {
        this.setState({
          data: res.data,
        })
      })
  }

  render() {
    console.log(this.state.data);
  
    // recup des données a partir de data (reponse de l'api)
    const homeData = this.state.data.map(function(data){
      return [data.name, data.region, data.population, data.capital, data.flag]
    });
    console.log(homeData);



    if (Object.keys(this.state.data).length !== 0){
      return (
        <div className="App">
          <div className="header">
            <h1 className="header--title">
              Where in the world?
            </h1>
            <button className="header--toggleNight">
              Dark Mode
            </button>
          </div>

          <div className="searchBar">
            <form>
              <input type="text" name="name" id="" className="search--name"/>
              <select name="filter" id="" className="search--filter">
                <option value="Africa" className="filter--continent">Africa</option>
                <option value="America" className="filter--continent">America</option>
                <option value="Asia" className="filter--continent">Asia</option>
                <option value="Europe" className="filter--continent">Europe</option>
                <option value="Oceania" className="filter--continent">Oceania</option>
              </select>
            </form>
          </div>

          <div className="mosaique">
              <div className="mosaique--country">
                <img className="country--flag" src={homeData[0][4]} alt={`Flag of ${homeData[0][0]}`}/>
                <h2 className="country--name">{homeData[0][0]}</h2>
                <p className="country--pop">Population = {homeData[0][2]}</p>
                <p className="country--region">Region: {homeData[0][1]}</p>
                <p className="country--capital">Capital: {homeData[0][3]}</p>
              </div>
          </div>
        </div>    
      )
    } else {
      return (
        <div>
          Loading...
        </div>
      )
    }
  };
}

export default App;
