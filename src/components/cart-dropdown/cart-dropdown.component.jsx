import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';
import DATA from '../data/data';




export class CartDropdown extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            items:[]
        }
        console.log('constructor')
        console.log(this.props)
        const temp = this.props
    }

    
componentDidMount = () => {
    console.log('mount')
}
    addItem = () => {
        this.setState({items:[...this.state.items,this.temp]})
        this.temp=null;
        console.log('hi')


    }



    render() {
        console.log('hii')
        console.log(this.props)
        if (this.temp!=null)
        {
            this.addItem()
            console.log('if statement')
        
        }
        return(
           

            <div className ={'cart-dropdown'}>
            <div className = 'cart-items'>{this.state.items.map(item => <div>{item.type}</div>)}</div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
            
        </div>    

        )
    }


}


