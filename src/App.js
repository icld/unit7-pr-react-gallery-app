import React, { Component } from 'react';
import axios from 'axios';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import apiKey from './Components/config.js'

// App Components
import MainNav from './Components/MainNav/MainNav';
import SearchForm from './Components/SearchForm/SearchForm';
import PhotoContainer from './Components/PhotoContainer/PhotoContainer';



export default class App extends Component {

  constructor() {
    super();
    this.state = {
      photos: [],
      // loading: true
    }
  }

  componentDidMount() {
    this.performSearch()
  }

  performSearch = (query = 'cats') => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1
  `)
      .then(response => {
        this.setState({ photos: response.data.photos.photo })
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });

  }

  render() {
    return (
      <BrowserRouter>

        <div className="container" >
          <SearchForm onSearch={this.performSearch} />
          <MainNav />
          <PhotoContainer data={this.state.photos} />
        </div>

      </BrowserRouter>

    );
  }
}


