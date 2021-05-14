import React from 'react';
import {
    NavLink,
    Route,

} from 'react-router-dom';

// import PhotoContainer from '../PhotoContainer/PhotoContainer';
import './MainNav.css'


const MainNav = ({ match }) => (
    <div>
        <nav class="main-nav">
            <ul>
                <li><NavLink to='/cats'>Cats</NavLink></li>
                <li><NavLink to='/dogs'>Dogs</NavLink></li>
                <li><NavLink to='/computers'>Computers</NavLink></li>
                <li><NavLink to='/buzzards'>Buzzards</NavLink></li>
            </ul>

        </nav>
    </div>
)

export default MainNav;