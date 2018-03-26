import React from 'react';
import MdStore from 'react-icons/lib/md/store'

class Merchant extends  React.Component{
    render(){
        return(
            <div className="mookh-customer">
                <div className="mookh-icon"><MdStore /></div>
                <h4><strong>Sell Online.</strong></h4>
                <h6><strong>Power your existing website or social media pages</strong></h6>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur,
                    ea sunt. Blanditiis cupiditate earum minima porro unde! Consectetur
                    mollitia, vitae!
                </p>
                <div className="user-action">
                    <a href="#" className="mookh-btn mookh-btn-highlight">Learn More</a>
                    <a href="#" className="mookh-btn">Sign Up</a>
                    <a href="#" className="mookh-btn">Login</a>
                </div>
            </div>
        )
    }
}

export default Merchant;