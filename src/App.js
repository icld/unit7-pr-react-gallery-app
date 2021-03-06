import React, { Component } from "react";
import axios from "axios";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import apiKey from "./Components/config.js";

// App Components
import MainNav from "./Components/MainNav/MainNav";
import SearchForm from "./Components/SearchForm/SearchForm";
import Home from "./Components/Home/Home";
import PhotoContainer from "./Components/PhotoContainer/PhotoContainer";
import FourOhFour from "./Components/FourOhFour/FourOhFour.js";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      cats: [],
      dogs: [],
      buzzards: [],
      computers: [],
      query: "",
      loading: true,
    };
  }

  componentDidMount() {
    this.performSearch();
    this.getCats();
    this.getBuzzards();
    this.getDogs();
    this.getComputers();
    this.setState(Object.assign({ loading: true }));
  }

  getCats = () => {
    axios
      .get(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=cats&per_page=24&format=json&nojsoncallback=1
  `
      )
      .then((response) => {
        this.setState({
          cats: response.data.photos.photo,
          query: "cats",
        });
      });
  };

  getComputers = () => {
    axios
      .get(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=computers&per_page=24&format=json&nojsoncallback=1
  `
      )
      .then((response) => {
        this.setState({
          computers: response.data.photos.photo,
          query: "computers",
        });
      });
  };
  getBuzzards = () => {
    axios
      .get(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=buzzards&per_page=24&format=json&nojsoncallback=1
  `
      )
      .then((response) => {
        this.setState({
          buzzards: response.data.photos.photo,
          query: "buzzards",
        });
      });
  };

  getDogs = () => {
    axios
      .get(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=dogs&per_page=24&format=json&nojsoncallback=1
  `
      )
      .then((response) => {
        this.setState({
          dogs: response.data.photos.photo,
          query: "dogs",
        });
      });
  };

  performSearch = (query = "funny cats") => {
    axios
      .get(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1
  `
      )
      .then((response) => {
        this.setState({
          photos: response.data.photos.photo,
          query: query,
          loading: false,
        });
      })
      .catch((error) => {
        console.log("Error fetching and parsing data", error);
      });
  };

  handlePerformSearch = (props) => {
    this.performSearch(props.match.params.searchText);
  };

  handleChange = () => {
    this.setState({ loading: true });
  };

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <SearchForm
            onSearch={this.performSearch}
            isLoading={this.state.loading}
            change={this.handleChange}
          />
          <MainNav />

          <Switch>
            <Route
              path="/search/:searchText"
              render={(props) => (
                <PhotoContainer
                  onSearch={this.performSearch}
                  isLoading={this.state.loading}
                  title={this.state.query}
                  query={props.match.params.searchText}
                  data={this.state.photos}
                />
              )}
            />
            <Route
              exact
              path="/cats"
              render={(props) => (
                <PhotoContainer
                  onSearch={this.performSearch}
                  isLoading={this.state.loading}
                  title="cats"
                  query={"cats"}
                  data={this.state.cats}
                />
              )}
            />
            <Route
              exact
              path="/dogs"
              render={(props) => (
                <PhotoContainer
                  onSearch={this.performSearch}
                  isLoading={this.state.loading}
                  title="dogs"
                  query={"dogs"}
                  data={this.state.dogs}
                />
              )}
            />
            <Route
              exact
              path="/buzzards"
              render={(props) => (
                <PhotoContainer
                  onSearch={this.performSearch}
                  isLoading={this.state.loading}
                  title="buzzards"
                  query={"buzzards"}
                  data={this.state.buzzards}
                />
              )}
            />
            <Route
              exact
              path="/computers"
              render={(props) => (
                <PhotoContainer
                  onSearch={this.performSearch}
                  isLoading={this.state.loading}
                  title="computers"
                  query={"computers"}
                  data={this.state.computers}
                />
              )}
            />
            <Route
              exact
              path="/"
              render={(props) => (
                <Home
                  onSearch={this.performSearch}
                  isLoading={this.state.loading}
                  title="dogs"
                  query={"dogs"}
                  data={this.state.dogs}
                />
              )}
            />
            <Route component={FourOhFour} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
