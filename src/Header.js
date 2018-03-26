import React from 'react';
import Customer from './Customer';
import Merchant from './Merchant';

class Header extends React.Component{
    render(){
        return(
            <header className="mookh-site-header">
                <div className="mookh-site-name"><h1>mookh</h1></div>
                <div className="mookh-customer-merchant">
                    <Customer/>
                    <Merchant/>
                </div>
            </header>
        )
    }
}

export default Header;