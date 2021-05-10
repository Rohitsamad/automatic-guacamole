import React, {  useState } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

function Navbar({handleLogout}) {
    const [click, setClick] = useState(false);
    

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    
    

    

    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    BEATME <i className='fab fa-typo3' />
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/leaderboard' className='nav-links' onClick={closeMobileMenu}>
                            Fixture
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/organization' className='nav-links' onClick={closeMobileMenu}>
                            Tournament
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/login' className='nav-links' onClick={closeMobileMenu}>
                            Challenges
                        </Link>
                    </li>
                    
                    <li className='nav-item'>
                    <button onClick={handleLogout} >Logout</button>
                    </li>
                </ul>
                
            </div>
        </nav>
        </>
    )    
}

export default Navbar;