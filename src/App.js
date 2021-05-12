import React, { Component } from 'react';
import axios from 'axios';

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
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=ce995fe467446380dae75989cbd87258&tags=cats&per_page=24&format=json&nojsoncallback=1
  `)
      .then(response => {
        this.setState({ photos: response.data.photos })
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  render() {
    return (
      <div className="container" >
        <SearchForm />
        <MainNav />
        <PhotoContainer />
      </div>
    );
  }
}


