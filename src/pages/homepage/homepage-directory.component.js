import react from 'react';
import './homepage-directory.styles.scss';
import {withRouter} from 'react-router-dom';


const Itemcard = ({itemname, key, imageUrl, linkUrl, history, match} ) =>(
    <div className='itemcard'>

        <div className='item' onClick={()=>history.push(`${match.url}${linkUrl}`) }>

        <img alt='image' className='image'src={`${imageUrl}`}/>
        
    
        <div className='title'>
            <h2> {itemname.toUpperCase()} </h2>
       </div>
       </div>
    </div>
)

export default withRouter(Itemcard);
