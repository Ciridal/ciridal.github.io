import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdFingerprint } from 'react-icons/md';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Button } from '../Button';


function Navbar() {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        }
        else {
            setButton(true);
        }
    };
    
    window.addEventListener('resize', showButton);

    return (
        <>
            <div className='navbar'>
                <div className='navbar-container container'>
                    <Link to='/' className='navbar-logo'>
                        <MdFingerprint className='navbar-icon' />
                        My Portfolio
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/home' className='nav-links'>
                                Home
                        </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/pictures' className='nav-links'>
                                Pictures
                        </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/tictactoe' className='nav-links'>
                                Game
                        </Link>
                        </li>
                        <li className="nav-btn">
                            {button ? (
                                <Link to= '/sign-up' className='btn-link'>
                                    <Button buttonStyle='btn--outline'> Click Me </Button>
                                </Link>
                            ) : (
                                    <Link to='/sign-up' className='btn-link'>
                                        <Button buttonStyle='btn--outline'
                                            buttonSize='btn--mobile'>
                                            Click Me
                                        </Button>
                                    </Link>
                                )}
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Navbar;