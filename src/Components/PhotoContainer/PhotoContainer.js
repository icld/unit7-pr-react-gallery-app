import React from 'react';

import PhotoCard from '../PhotoCard/PhotoCard';
import NotFound from '../NotFound/NotFound'
import './PhotoContainer.css'
import { Consumer } from '../Context';

const PhotoContainer = () => {

    return (
        <Consumer>
            {({ photos }) => {
                const results = photos;
                let photoss;
                const title = photos.title


                if (results.length > 0) {
                    photoss = results.map(photo =>
                        <PhotoCard server={photo.server} secret={photo.secret} id={photo.id} key={photo.id} />
                    )
                } else photos = <NotFound />

                return (
                    <div className="photo-container">
                        <h2>{title}</h2>
                        <ul>
                            {photoss}
                        </ul>
                    </div>
                )
            }

            }

        </Consumer>
    )






}

export default PhotoContainer;