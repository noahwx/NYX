import '../index.css';
import { NavLink } from 'react-router-dom';
import Filters from '../components/filter';

const products = () => {

    return ( 
        <main className='store_container display1'>
            <h1 className='product_page_title'>Hoodie's & Sweatshirts</h1>
            <Filters />
            <div className='product_wrapper'>
                <div className='product_card'>
                    <NavLink to='/Product/Hoodie'>
                        <div className='figure'>
                            <div className='product_info'>
                                <h3 className='new_product'>Just In</h3>
                                <h1 className='product_name'>Classic Hoodie</h1>
                                <p className='product_gender'>Unisex</p>
                                <p className='product_colors'>5 Colors</p>
                                <h2 className='product_price'>$140.00</h2>
                            </div>
                            <img className='product_image' src='https://images.unsplash.com/photo-1615397587950-3cbb55f95b77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80' alt=''/>
                        </div>
                    </NavLink>
                </div>
            </div>
        </main>
     );
}
 
export default products;