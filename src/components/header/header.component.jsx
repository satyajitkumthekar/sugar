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
            hidden:true
        }
    }
    render(){
        
        return(
            <div className = 'header-container'>
        <Link className='home' exact to='/'>
            SUGAR
        </Link>
        <div className = 'options'>
        {
            this.props.currentUser ?
            <div className='option' onClick={()=>auth.signOut()}>
                SIGN OUT
            </div>

            :
            <Link className='option' to='/signin'>
                SIGN IN
            </Link>
        }
            <div className = 'lol' onClick={this.state.hidden = !this.state.hidden}>
              <div  > <Carticon/></div>
                  
            </div>
        </div>
        {this.state.hidden? null : <CartDropdown />}
    </div>
        )
    }
}

export default Header;
