import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';
import DATA from '../data/data';

const CartDropdown =({type, price, imageUrl}) => (  
        
        
        <div className ={'cart-dropdown'}>
            <div className = 'cart-items'>{type}</div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    
    
    
)

export default CartDropdown;