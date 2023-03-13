import logo from '../logo.svg';
import { useState, useRef } from "react";
import { useOnHoverOutside } from "./../hooks/useOnHoverOutside";
import { NavLink } from 'react-router-dom';
import Menu from "./menu";

export function Header() {
  const dropdownRef = useRef(null); // Create a reference for dropdown container
  const [isMenuDropDownOpen, setMenuDropDownOpen] = useState(false);

  // Function to close dropdown
  const closeHoverMenu = () => {
    setMenuDropDownOpen(false);
  };

  useOnHoverOutside(dropdownRef, closeHoverMenu); // Call the hook

  return (
    <div className='Nav'>
        <NavLink to='/' onMouseOver={() => setMenuDropDownOpen(false)}><img src={logo} alt='' className='logo'/></NavLink>
        <div className='navItems' ref={dropdownRef}>
            <NavLink to='/AboutUs' className='navItem' onMouseOver={() => setMenuDropDownOpen(false)}>About Us</NavLink>
            <NavLink to='/Store' className='navItem' onMouseOver={() => setMenuDropDownOpen(false)}>Store</NavLink>
            <NavLink to='/Contact' className='navItem' onMouseOver={() => setMenuDropDownOpen(false)}>Contact</NavLink>
            <NavLink to='/Account' className='navItem' onMouseOver={() => setMenuDropDownOpen(true)}>Account</NavLink>
            <NavLink to='/Cart' className='navItem' onMouseOver={() => setMenuDropDownOpen(false)}>Cart</NavLink>

            {isMenuDropDownOpen && <Menu />}
        </div>
    </div>
  );
}