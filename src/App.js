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





const App = () => {



  return (
    <BrowserRouter>

      <div className="container" >
        <SearchForm onSearch={this.performSearch} />
        <MainNav />
        <Switch>

          <Route exact path='/' render={() => <PhotoContainer title='Search something' data={this.state.photos} />} />
          <Route path='/search/:query' render={() => <PhotoContainer />} />
          <Route exact path='/cats' render={() => <PhotoContainer />} />
          <Route exact path='/dogs' render={() => <PhotoContainer />} />
          <Route exact path='/buzzards' render={() => <PhotoContainer />} />
          <Route exact path='/computers' render={() => <PhotoContainer />} />
          <Route component={NotFound} />

        </Switch>
        {/* <PhotoContainer data={this.state.photos} /> */}
      </div>

    </BrowserRouter>

  );

}

export default App;
