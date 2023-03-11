import '../index.css';
import { NavLink } from 'react-router-dom';
import Filters from '../components/filter';

const products = () => {

    return ( 
        <main className='store_container display1'>
            <Filters />
            <div className='product_wrapper'>
                <div className='product_card'>
                    <NavLink to='/Product/Hoodie'>
                        <div className='figure'>
                            <div className='product_info'>
                                <h3 className='new_product'>On Sale</h3>
                                <h1 className='product_name'>Classic Jacket</h1>
                                <p className='product_gender'>Unisex</p>
                                <p className='product_colors'>2 Colors</p>
                                <h2 className='product_price'>$250.00</h2>
                            </div>
                            <img className='product_image' src='https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1036&q=80' alt='' style={{maxWidth: "120%"}}/>
                        </div>
                    </NavLink>
                </div>
            </div>
        </main>
     );
}
 
export default products;