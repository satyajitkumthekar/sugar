import React from 'react';
import './item-display.styles.scss';

const ItemDisplay = ({imageUrl, type, price}) => (

    <div className='item-card'>

        <img className='subitem-image' src={`${imageUrl}`}/>
        
        <div className='text-content'>
            <span className='type'>{type.toUpperCase()}</span>
            <span className='type'> {price}</span>
        </div>

        

    </div>
)

export default ItemDisplay