import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import AboutUs from './AboutUs';
import Account from './Account';
import Contact from './Contact';
import Store from './Store';
import SignIn from './Account/SignIn';
import Register from './Account/Register';
import Hoodie from './Product/Hoodie';
import PHS from './Product/products_hoodie_sweatshirts';
import PJ from './Product/products_jackets';

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
            <Route exact path='/Product/Hoodie' element={<Hoodie />} />
            <Route exact path='/Product/products_hoodie_sweatshirts' element={<PHS />} />
            <Route exact path='/Product/products_jackets' element={<PJ />} />
        </Routes>
     );
}
 
export default Main;