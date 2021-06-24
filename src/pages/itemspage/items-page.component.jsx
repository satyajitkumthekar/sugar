import React from 'react';
import './items-page.styles.scss';
import DATA from '../../components/data/data';
import ItemDisplay from './item-display.component';


class Itemspage extends React.Component{
    constructor(){
        super();
        this.state={data : DATA
        }

         this.fooditem = items =>( items.find( item=> item.itemname === this.props.match.params.pagename));
        
    }

    render(){
        const {type, price, imageUrl} = this.state.data
       
        return(
            <div>  
                {
                    this.fooditem(this.state.data).subitems.map(
                    (subitem)=> <div className = 'food-item-card'>
                    <ItemDisplay imageUrl={subitem.imageUrl} type={subitem.type} price={subitem.price}/>
                        </div>
                    )   
                }
            </div>          
        )
    }
}
export default Itemspage;
