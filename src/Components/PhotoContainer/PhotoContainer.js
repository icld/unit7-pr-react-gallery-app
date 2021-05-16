import React from 'react';

import PhotoCard from '../PhotoCard/PhotoCard';
import NotFound from '../NotFound/NotFound'
import './PhotoContainer.css'


const PhotoContainer = () => {

    return (

        {(props) => {
    const results = photos;
    let photos;
    const title = photos.title


    if (results.length > 0) {
        photos = results.map(photo =>
            <PhotoCard server={photo.server} secret={photo.secret} id={photo.id} key={photo.id} />
        )
    } else photos = <NotFound />

    return (
        <div className="photo-container">
            <h2>Show your search results for <br /> <strong>{title}</strong></h2>
            <ul>
                {photos\s}
                        </ul>
        </div>
    )
}

            }

        </Consumer >
    )






}

export default PhotoContainer;