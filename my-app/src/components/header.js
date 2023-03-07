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
            <NavLink to='/' className='navItem' onMouseOver={() => setMenuDropDownOpen(false)}>Link 1</NavLink>
            <NavLink to='/' className='navItem' onMouseOver={() => setMenuDropDownOpen(false)}>Link 2</NavLink>
            <NavLink to='/' className='navItem' onMouseOver={() => setMenuDropDownOpen(false)}>Link 3</NavLink>
            <NavLink to='/' className='navItem' onMouseOver={() => setMenuDropDownOpen(true)}>Link 4</NavLink>

            {isMenuDropDownOpen && <Menu />}
        </div>
    </div>
  );
}