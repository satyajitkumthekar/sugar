import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';
import DATA from '../data/data';

class CartDropdown extends React.Component {

    constructor(){
        super();
        this.state={
            data:DATA
        }
       
    }
    

    render()
    {return(
        <div className ={'cart-dropdown'}>
            <div className = 'cart-items'></div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    )
    
    }
}

export default CartDropdown;