import React from 'react';
 const DATA = [
     {  id:1,
        itemname:'brownie',
        imageUrl:'https://i.ibb.co/XJ53VVd/nutella-brownie.jpg',
        linkUrl:'brownie',
        subitems:[
         {
             id:2,
             type:'NUTELLA',
             price:30,
             imageUrl: 'https://i.ibb.co/XJ53VVd/nutella-brownie.jpg'
         },
         {
            id:3,
            type:'WALLNUT',
            price:40,
            imageUrl: 'https://i.ibb.co/n077q0N/wallnut-brownie.jpg'
        },
        {
            id:4,
            type:'CHOCOLATECHIP',
            price:350,
            imageUrl: 'https://i.ibb.co/rvV2vwC/chocolatechip-brownie.jpg'
        }
     ]
    },
     {  id:5,
        itemname:'cookie',
        imageUrl: 'https://i.ibb.co/cc9r2W3/whitechocolatecookie.jpg',
        linkUrl:'cookie',
        subitems:[
            {
                id:6,
                type:'WHITE CHOCOLATE',
                price:20,
                imageUrl: 'https://i.ibb.co/cc9r2W3/whitechocolatecookie.jpg'

            },
            {
                id:7,
                type:'DOUBE CHOCOLATE',
                price:30,
                imageUrl: 'https://i.ibb.co/4J2wS88/doublechocolate.jpg'

            },
            {
                id:8,
                type:'CHOCOLATE CHIP',
                price:25,
                imageUrl: 'https://i.ibb.co/3mRYc6g/chocolatechipcookie.jpg'

            }
     ]
    }
 ]

 export default DATA;