import React from 'react';
import Nav from "./Nav";
import Items from "./Items";

export default class Content extends React.Component{
    render(){
        return(
            <div>
                <Nav />
                <Items/>
            </div>
        )
    }
}