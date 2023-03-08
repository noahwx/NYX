import { NavLink } from "react-router-dom";

export default function Menu() {
    return (
        <>
            <div className="dropdown-menu">
                <NavLink to='/Account/SignIn' className='dropdownItem'>Sign In</NavLink>
                <NavLink to='/Account/Register' className='dropdownItem'>Register</NavLink>
            </div>
        </>
    )
}