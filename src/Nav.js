import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Items from "./Items";

export default class Nav extends React.Component{
    render(){
        return(
            <Router>
              <div>
                  <nav className="mookh-nav">
                      <Link className="current" to="/">Featured</Link>
                      <Link to="/tickets">Tickets</Link>
                      <Link to="/products">Products</Link>
                      <Link to="/digital">Digital Content</Link>
                  </nav>
                  <Route exact path="/" component={Items} />
                  <Route path="/tickets" component={Items} />
                  <Route path="/products" component={Items} />
                  <Route path="/digital" component={Items} />
              </div>
            </Router>
        )
    }
}