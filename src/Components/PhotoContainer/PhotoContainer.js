import React from 'react';
import { withRouter } from 'react-router-dom';
import PhotoCard from '../PhotoCard/PhotoCard';
import NotFound from '../NotFound/NotFound'
import './PhotoContainer.css'

const PhotoContainer = props => {
    const results = props.data;
    let title = props.title
    const searchQuery = props.query;

    if (title !== searchQuery) {

        props.onSearch(searchQuery);
        title = searchQuery
    }

    let photos = results.map(photo =>
        <PhotoCard server={photo.server} secret={photo.secret} id={photo.id} key={photo.id} />)

    return (
        <div className="photo-container">
            {(props.loading) ? <p>loading...</p> :
                (!props.loading && (results.length < 1)) ? <NotFound /> :
                    <div> <h2>Showing your search results for <br /> <strong>{title}</strong></h2>
                        <ul> {photos}</ul>
                    </div>
            }
        </div>
    );
}

export default withRouter(PhotoContainer);