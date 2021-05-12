import React, { Component } from 'react';


// App Components
import MainNav from './Components/MainNav/MainNav';
import SearchForm from './Components/SearchForm/SearchForm';
import PhotoContainer from './Components/PhotoContainer/PhotoContainer'


export default class App extends Component {
  render() {
    return (
      <div className="App" >

        <SearchForm />
        <MainNav />
        <PhotoContainer />

      </div>
    );
  }
}


