import React from 'react';
import CustomButton from '../custom-button/custom-button.comopnent';
import './cart-dropdown.styles.scss';

const CartDropdown = ({show}) =>(
    <div className ={`${!show ? 'show-component': ''}cart-dropdown`}>
        <div className = 'cart-items'></div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)

export default CartDropdown;