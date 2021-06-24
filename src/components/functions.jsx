{
    this.fooditem(this.state.data).subitems.map(
       ( )=> <div className = 'fooditemcard'>
       <img className='subitemimage'src={`${imageUrl}`}/>
       <span className='price'> {price}</span>
       <span className='type'>{type}</span>
        </div>
       )   
   }