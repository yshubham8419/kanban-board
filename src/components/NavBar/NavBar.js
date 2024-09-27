import React from 'react';
import './NavBar.css';
import { ReactComponent as DisplayIcon } from '../../assets/icons/Display.svg';
import { ReactComponent as DownIcon } from '../../assets/icons/down.svg';

const NavBar = ({toggleMenu}) => {
    return (
        <nav className="navbar">
            <div className="button" onClick={toggleMenu}>
                <DisplayIcon/>
                <span className='display-text'>Display</span>
                <DownIcon/>
            </div>
        </nav>
    );
}

export default NavBar;
