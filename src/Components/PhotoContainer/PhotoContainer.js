import React, { Component } from 'react';

import PhotoCard from '../PhotoCard/PhotoCard'
import './PhotoContainer.css'

class PhotoContainer extends Component {
    render() {
        return (
            <div className="photo-container">
                <h2>Results</h2>
                <ul>
                    <PhotoCard />
                </ul>

            </div>
        )
    }
}

export default PhotoContainer;