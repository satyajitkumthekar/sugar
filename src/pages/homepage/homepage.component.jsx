import React from 'react';
import reactDom from 'react-dom';
import DATA from '../../components/data/data';
import ItemCard from './homepage-directory.component';
import './homepage.styles.scss';
import Itemspage from '../itemspage/items-page.component';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

 class Homepage extends React.Component  {
     constructor(){
         super();
         this.state={
             menu:DATA,
             Show:false
         };
     }
render(){
    
  
    
    return(
        
        
        <div className = 'homepage' >
            <div className='image-list' >
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