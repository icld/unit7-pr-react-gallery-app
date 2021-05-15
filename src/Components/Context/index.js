import React, { Component } from 'react';
import axios from 'axios';

import apiKey from '../config';

const PhotoContext = React.createContext();

export class Provider extends Component {

    state = {
        photos: [],
        cats: [],
        dogs: [],
        buzzards: [],
        computers: []
        // loading: true
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

            <PhotoContext.Provider value={{
                photos: this.state.photos,
                actions: {
                    performSearch: this.performSearch,
                }
            }}>
                {this.props.children}
            </PhotoContext.Provider>
        )
    }

}

export const Consumer = PhotoContext.Consumer