import React from 'react';
import Item from './Item';

export default class Items extends React.Component{
    render(){
        return(
            <div className="mookh-items">
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
            </div>
        )
    }
}