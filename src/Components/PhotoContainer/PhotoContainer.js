import React from 'react';

import PhotoCard from '../PhotoCard/PhotoCard';
import NotFound from '../NotFound/NotFound'
import './PhotoContainer.css'

const PhotoContainer = props => {




    const results = props.data;
    let photos;
    let title = props.title
    const searchQuery = props.query

    if (title !== searchQuery) {
        props.onSearch(searchQuery);
        title = searchQuery
    }


    if (title !== searchQuery && props.loading) {
        photos = <p>loading...</p>
    } else if (results.length > 0) {
        photos = results.map(photo =>
            <PhotoCard server={photo.server} secret={photo.secret} id={photo.id} key={photo.id} />
        )
    } else
        photos = <NotFound />

    return (
        <div className="photo-container">
            <h2>Show your search results for <br /> <strong>{title}</strong></h2>
            <ul>
                {photos}
            </ul>
        </div>
    )

}

export default PhotoContainer;