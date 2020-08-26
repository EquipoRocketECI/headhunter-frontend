import React from 'react';

import { Item } from './Item.js';

import './css/Explore.css';

export class Explore extends React.Component{
    constructor(props){
        super(props)
        this.state ={items:[{name:"idea 1",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis urna sit amet tortor pulvinar rhoncus at ut odio. Donec risus augue, scelerisque molestie vehicula a, interdum a tellus. Sed dapibus ac dui sed congue. Mauris auctor, turpis vitae sagittis sodales, risus libero hendrerit mi, id tempor urna libero vitae ante.",image:"PLACEHOLDERTHUMBNAIL.jpg"},
                            {name:"idea 2",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis urna sit amet tortor pulvinar rhoncus at ut odio. Donec risus augue, scelerisque molestie vehicula a, interdum a tellus. Sed dapibus ac dui sed congue. Mauris auctor, turpis vitae sagittis sodales, risus libero hendrerit mi, id tempor urna libero vitae ante.",image:"PLACEHOLDERTHUMBNAIL.jpg"},
                            {name:"idea 1",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis urna sit amet tortor pulvinar rhoncus at ut odio. Donec risus augue, scelerisque molestie vehicula a, interdum a tellus. Sed dapibus ac dui sed congue. Mauris auctor, turpis vitae sagittis sodales, risus libero hendrerit mi, id tempor urna libero vitae ante.",image:"PLACEHOLDERTHUMBNAIL.jpg"},
                            {name:"idea 2",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis urna sit amet tortor pulvinar rhoncus at ut odio. Donec risus augue, scelerisque molestie vehicula a, interdum a tellus. Sed dapibus ac dui sed congue. Mauris auctor, turpis vitae sagittis sodales, risus libero hendrerit mi, id tempor urna libero vitae ante.",image:"PLACEHOLDERTHUMBNAIL.jpg"},
                            {name:"idea 1",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis urna sit amet tortor pulvinar rhoncus at ut odio. Donec risus augue, scelerisque molestie vehicula a, interdum a tellus. Sed dapibus ac dui sed congue. Mauris auctor, turpis vitae sagittis sodales, risus libero hendrerit mi, id tempor urna libero vitae ante.",image:"PLACEHOLDERTHUMBNAIL.jpg"},
                            {name:"idea 2",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis urna sit amet tortor pulvinar rhoncus at ut odio. Donec risus augue, scelerisque molestie vehicula a, interdum a tellus. Sed dapibus ac dui sed congue. Mauris auctor, turpis vitae sagittis sodales, risus libero hendrerit mi, id tempor urna libero vitae ante.",image:"PLACEHOLDERTHUMBNAIL.jpg"},
                            {name:"idea 1",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis urna sit amet tortor pulvinar rhoncus at ut odio. Donec risus augue, scelerisque molestie vehicula a, interdum a tellus. Sed dapibus ac dui sed congue. Mauris auctor, turpis vitae sagittis sodales, risus libero hendrerit mi, id tempor urna libero vitae ante.",image:"PLACEHOLDERTHUMBNAIL.jpg"},
                            {name:"idea 2",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis urna sit amet tortor pulvinar rhoncus at ut odio. Donec risus augue, scelerisque molestie vehicula a, interdum a tellus. Sed dapibus ac dui sed congue. Mauris auctor, turpis vitae sagittis sodales, risus libero hendrerit mi, id tempor urna libero vitae ante.",image:"PLACEHOLDERTHUMBNAIL.jpg"}
                        ]}
    }

    render(){
        const itemList = this.state.items.map((item,i)=>{
            return(<Item
                key={i}
                image={item.image}
                name={item.name}
                description={item.description}
            />);
            
        });
        return(
            <div className="mainView">
                
            {itemList}
            </div>
        );
    }

}