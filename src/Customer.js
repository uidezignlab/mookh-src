import React from 'react';
import MdAddShoppingCart from 'react-icons/lib/md/add-shopping-cart';
import MdSearch from 'react-icons/lib/md/search';

class Customer extends  React.Component{
    render(){
        return(
            <div className="mookh-customer">
                <div className="mookh-icon"><MdAddShoppingCart /></div>
                <h4><strong>Buy Online.</strong></h4>
                <h6><strong>Search for existing items below</strong></h6>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur,
                    ea sunt. Blanditiis cupiditate earum minima porro unde! Consectetur
                    mollitia, vitae!
                </p>

                <form action="#">
                    <div className="mookh-search">
                        <input type="search" placeholder="Search"/>
                        <div className="mookh-search-icon"><MdSearch/></div>
                    </div>
                </form>

            </div>
        )
    }
}

export default Customer;