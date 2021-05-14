import React from 'react';

import PhotoCard from '../PhotoCard/PhotoCard';
import NotFound from '../NotFound/NotFound'
import './PhotoContainer.css'

const PhotoContainer = props => {

    const results = props.data;
    let photos;
    const title = props.title


    if (results.length > 0) {
        photos = results.map(photo =>
            <PhotoCard server={photo.server} secret={photo.secret} id={photo.id} key={photo.id} />
        )
    } else photos = <NotFound />

    return (
        <div className="photo-container">
            <h2>{title}</h2>
            <ul>
                {photos}
            </ul>
        </div>
    )

}

export default PhotoContainer;