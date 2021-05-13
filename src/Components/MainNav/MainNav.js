import React from 'react';
import { NavLink } from 'react-router-dom';

import './MainNav.css'

const MainNav = () => (
    <nav class="main-nav">
        <ul>
            <li><NavLink to='/cats'>Cats</NavLink></li>
            <li><NavLink to='/dogs'>Dogs</NavLink></li>
            <li><NavLink to='/computers'>Computers</NavLink></li>
        </ul>
    </nav>
)

export default MainNav;