import React from 'react';
import './header.styles.scss';
import {Link} from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils';



const Header = ({currentUser}) => (
    <div className = 'header-container'>
        <Link className='home' exact to='/'>
            HOME
        </Link>
        <div className = 'options'>
        {
            currentUser ?
            <div className='option' onClick={()=>auth.signOut()}>
                SIGN OUT
            </div>

            :
            <Link className='option' to='/signin'>
                SIGN IN
            </Link>
        }
            <div className = 'option'>
                CART           
            </div>
        </div>
    </div>
)

export default Header;