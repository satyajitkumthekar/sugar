import React from 'react';
import './items-page.styles.scss';
import DATA from '../../components/data/data';
import CustomButton from '../../components/custom-button/custom-button.component';
import { div } from 'prelude-ls';
import {CartDropdown} from '../../components/cart-dropdown/cart-dropdown.component'

class Itemspage extends React.Component{
    constructor(){
        super();
        this.state={data : DATA,
            cart:[],
            visible:false
        }

         this.foodItem = items =>( items.find( item=> item.itemname === this.props.match.params.pagename));

         
        
    }

    addToCart = subitem => {
        <CartDropdown props={subitem}/>
        console.log(subitem);
    }



    render(){


       
       
       
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
                     <CustomButton inverted={true} onClick = {()=>this.addToCart(subitem)}>Add to Cart</CustomButton>

                     
                     
                     
                     {console.log(this.state.cart)}
                    
                    </div>
                    )
                    
                }
            </div>          
        )
    }
}
export default Itemspage;
