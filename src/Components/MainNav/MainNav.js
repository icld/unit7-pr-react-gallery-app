import React from 'react';
import {
    NavLink,


} from 'react-router-dom';

// import PhotoContainer from '../PhotoContainer/PhotoContainer';
import './MainNav.css'



const MainNav = (props) => (
    <div>
        <nav className="main-nav">
            <ul>
                <li><NavLink className='nav-button cats' to='/cats' onClick={() => console.log('cats')}>Cats</NavLink></li>
                <li><NavLink className='nav-button cats' to='/dogs'>Dogs</NavLink></li>
                <li><NavLink className='nav-button cats' to='/computers'>Computers</NavLink></li>
                <li><NavLink className='nav-button cats' to='/buzzards'>Buzzards</NavLink></li>
            </ul>

        </nav>
    </div>
)


export default MainNav;