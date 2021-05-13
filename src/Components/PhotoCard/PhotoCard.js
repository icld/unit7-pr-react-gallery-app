import React from 'react';

import './PhotoCard.css'

const PhotoCard = (props) => {

    return (

        <li>
            <img src={`https://live.staticflickr.com/${props.server}/${props.id}_${props.secret}_z.jpg`} alt="" />
        </li>

    )

}


export default PhotoCard;