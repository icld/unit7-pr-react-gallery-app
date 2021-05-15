import React, { Component } from 'react';
import axios from 'axios';

import apiKey from '../config';

const PhotoContext = React.createContext();

export class Provider extends Component {

    state = {
        photos: []
    }

    componentDidMount() {
        this.performSearch();

    }

    performSearch = (query = 'ufo') => {
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