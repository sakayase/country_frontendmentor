import React, { Component } from 'react';
import axios from 'axios';
import Country from './Country';
import Header from './Header';
import SearchBar from './SearchBar';

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
          <Header/>

          <SearchBar/>

          <Country data={homeData}/>
          
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
