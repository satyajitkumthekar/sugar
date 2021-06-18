import React from 'react';
import reactDom from 'react-dom';
import DATA from '../../components/data/data';
import ItemCard from './homepage-directory.component';
import './homepage.styles.scss';

 class Homepage extends React.Component  {
     constructor(){
         super();
         this.state={
             menu:DATA
         };
     }
render(){
  
    
    return(
        <div className = 'homepage' >
            <div className='image-list'>
            {
                this.state.menu.map(
                    ({id, ...otherprops}) => <ItemCard key={id} {...otherprops}/>
                )
            }
            </div>

        </div>
    )
}
 }
 export default Homepage;