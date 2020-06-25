import React from 'react';
import './App.css';
import Country from './Country';

class App extends React.Component {
  async componentDidMount() {
    const response = await fetch('https://restcountries.eu/rest/v2/all');
    const countries = await response.json();
    this.setState( {countries: countries} )
    console.log(this.state)
  }

  render() {
    const countries = this.state?.countries;
    return (
      <div className="App">
        <p>250 Countries with their Flags!</p>
      {countries && 
      countries.map((country, index) => {
        return (
        <Country key={index}
        name={country.name}
        flag={country.flag}
        />
      );
      })}
      </div>
    );
  }
}

export default App;



  // fetch('https://restcountries.eu/rest/v2/all')
  // .then((response) => {
  //   return response.json();
  // })
  // .then((data) => {
  //   console.log(data)
// })