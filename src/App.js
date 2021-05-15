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
import NotFound from './Components/NotFound/NotFound.js';



export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      cats: [],
      dogs: [],
      buzzards: [],
      computers: []
      // loading: true
    }
  }

  componentDidMount() {
    this.performSearch();
    this.getCats();
    this.getBuzzards();
    this.getDogs()
    this.getComputers()
  }

  getCats = () => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=cats&per_page=24&format=json&nojsoncallback=1
  `)
      .then(response => {
        this.setState({
          cats: response.data.photos.photo
        })
      })
  }

  getComputers = () => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=computers&per_page=24&format=json&nojsoncallback=1
  `)
      .then(response => {
        this.setState({
          computers: response.data.photos.photo
        })
      })
  }
  getBuzzards = () => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=buzzards&per_page=24&format=json&nojsoncallback=1
  `)
      .then(response => {
        this.setState({
          buzzards: response.data.photos.photo
        })
      })
  }

  getDogs = () => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=dogs&per_page=24&format=json&nojsoncallback=1
  `)
      .then(response => {
        this.setState({
          dogs: response.data.photos.photo
        })
      })
  }

  performSearch = (query = 'funny cats') => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1
  `)
      .then(response => {
        this.setState({
          photos: response.data.photos.photo
        })
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
          <Switch>

            <Route exact path='/' render={() => <PhotoContainer title='Search something' data={this.state.photos} />} />
            <Route path='/search/:query' render={() => <PhotoContainer data={this.state.photos} />} />
            <Route exact path='/cats' render={() => <PhotoContainer title='cats' data={this.state.cats} />} />
            <Route exact path='/dogs' render={() => <PhotoContainer title='dogs' data={this.state.dogs} />} />
            <Route exact path='/buzzards' render={() => <PhotoContainer title='buzzards' data={this.state.buzzards} />} />
            <Route exact path='/computers' render={() => <PhotoContainer title='computers' data={this.state.computers} />} />
            <Route component={NotFound} />

          </Switch>
          {/* <PhotoContainer data={this.state.photos} /> */}
        </div>

      </BrowserRouter>

    );
  }
}


