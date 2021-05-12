import React, { Component } from 'react';


// App Components
import MainNav from './Components/MainNav/MainNav';
import SearchForm from './Components/SearchForm/SearchForm'


export default class App extends Component {
  render() {
    return (
      <div className="App" >

        <SearchForm />
        <MainNav />

      </div>
    );
  }
}


