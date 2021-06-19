import React from 'react';
import './header.styles.scss';
import {Link} from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils';
import Carticon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';


class Header extends React.Component {
    constructor(){
        super();
        this.state={
            clicked:false
        }
    }
    render(){
        {currentUser = this.props;}
        return(
            <div className = 'header-container'>
        <Link className='home' exact to='/'>
            SUGAR
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
               <Carticon onClick={()=>this.state.clicked = !this.state.clicked}/>         
            </div>
        </div>
        <CartDropdown show={this.state.clicked}/>
    </div>
        )
    }
}

export default Header;
