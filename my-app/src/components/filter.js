import { NavLink } from "react-router-dom";

const filter = () => {

    return ( 
        <div className='filter'>
            <h1 className='filter_title'>New Releases</h1>
            <div className='in_stock_button'>
                    <h3 className='isb_title'>Order Today</h3>
                <label class="switch">
                    <input type="checkbox"/>
                    <span class="slider round"></span>
                </label>
            </div>
            <div className='filters'>
                <div className='category'>
                    <NavLink to='/Store' className='category_link'>
                        <h2 className='category_title'>Tops & T-Shirts</h2>
                    </NavLink>
                </div>
                <div className='category'>
                    <NavLink to='/Store' className='category_link'>
                        <h2 className='category_title'>Hoodies & Sweaters</h2>
                    </NavLink>
                </div>
                <div className='category'>
                    <NavLink to='/Store' className='category_link'>
                        <h2 className='category_title'>Shorts</h2>
                    </NavLink>
                </div>
                <div className='category'>
                    <NavLink to='/Store' className='category_link'>
                        <h2 className='category_title'>Pants</h2>
                    </NavLink>
                </div>
                <div className='category'>
                    <NavLink to='/Store' className='category_link'>
                        <h2 className='category_title'>Jackets</h2>
                    </NavLink>
                </div>
                <div className='category'>
                    <NavLink to='/Store' className='category_link'>
                        <h2 className='category_title'>Socks</h2>
                    </NavLink>
                </div>
                <div className='category'>
                    <NavLink to='/Store' className='category_link'>
                        <h2 className='category_title'>Accessories</h2>
                    </NavLink>
                </div>
            </div>

        </div>
     );
}
 
export default filter;