import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import AboutUs from './AboutUs';
import Account from './Account';
import Contact from './Contact';
import Store from './Store';
import SignIn from './Account/SignIn';
import Register from './Account/Register';
import ProductPage from './components/productpage';

const Main = () => {
    return ( 
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/AboutUs' element={<AboutUs />} />
            <Route exact path='/Account' element={<Account />} />
            <Route exact path='/Contact' element={<Contact />} />
            <Route exact path='/Store' element={<Store />} />
            <Route exact path='/Account/SignIn' element={<SignIn />} />
            <Route exact path='/Account/Register' element={<Register />} />
            <Route path="/products/:productId" element={<ProductPage />}/>
        </Routes>
     );
}
 
export default Main;