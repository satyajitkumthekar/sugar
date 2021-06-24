import React from 'react';
import './items-page.styles.scss';
import DATA from '../../components/data/data';


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
                    ( )=> <div className = 'fooditemcard'>
                    <img className='subitemimage'src={`${imageUrl}`}/>
                    <span className='price'> {price}</span>
                    <span className='type'>{type}</span>
                     </div>
                    )   
}
            </div>
        )
    }
}
export default Itemspage;