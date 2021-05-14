import React, { Component } from 'react';
import PhotoCard from '../PhotoCard/PhotoCard';

const PhotoContext = React.createContext();

export class Provider extends Component {

    state = {}
    render() {
        return (

            <PhotoContext.Provider value{{
                photos: this.state.photos
            }}>

            </PhotoContext.Provider>
        )
    }

}

export const Consumer = PhotoContext.Consumer