import React from 'react';
import './items-page.styles.scss';
import DATA from '../../components/data/data';
import CustomButton from '../../components/custom-button/custom-button.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { div } from 'prelude-ls';


class Itemspage extends React.Component{
    constructor(){
        super();
        this.state={data : DATA,
            cart:[],
            visible:false
        }

         this.foodItem = items =>( items.find( item=> item.itemname === this.props.match.params.pagename));

         this.addToCart = item => {this.setState({cart:[...this.state.cart, item]})};
        
    }

    render(){
        const {type, price, imageUrl, subitems} = this.state.data
       
        return(
            <div className = 'food-item-card'>  
                {
                    this.foodItem(this.state.data).subitems.map(
                    (subitem)=> 
                    <div className='card'>

                     <div className='image' style={{backgroundImage:`url(${subitem.imageUrl})`}}>

                     </div>
                     <div className='text-content'>
                        <span className='type'>{subitem.type}</span>
                        <span className='type'> {subitem.price}</span>
                     </div>
                     <CustomButton inverted={true} onClick = {(subitems)=>this.addToCart(subitems)}>Add to Cart</CustomButton>

                     {
                         this.state.visible ? <CartDropdown cartitems = {this.state.cart}/> : null
                     }
                     {console.log(this.state.cart)}
                     

                    </div>
                    )   
                }
            </div>          
        )
    }
}
export default Itemspage;
