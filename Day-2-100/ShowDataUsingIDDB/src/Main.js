// useRef => Html element ka ref dene k liye km aatwaw
import React, {useState, useRef} from 'react';
import Products from './Components/Products'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './pages/Home';
import SingleProducts from './pages/SingleProducts';
import Navigation from './pages/Navigation';
const Main = () => {
       
return(
    <>
        <div>
        <Router>
        <Navigation />  
            <Route exact path="/products" component={Products} />
            <Route exact path="/" component={Home} />
            <Route exact path="/Single" component={SingleProducts} />
        </Router>
        </div>
    </>
)
}
export default Main;