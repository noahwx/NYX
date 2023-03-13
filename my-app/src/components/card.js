import React from "react";
import { NavLink } from "react-router-dom";

const Card = ({ item }) => {

    return ( 
        <>
            <div>
                <div className="store_card">
                    {item.map((Product) => {
                        return (
                            <NavLink to={`/products/${Product.product_id}`}>
                                <div key={Product.product_id} className='product_card'>
                                    <div className="card_main">
                                        <div className="card_img">
                                            <img src={Product.product_img} alt={Product.product_name}/>
                                        </div>
                                        <div className="card_info">
                                            <div className="product_status">
                                                {Product.product_status} &nbsp;
                                            </div>
                                            <div className="product_name">
                                                {Product.product_name} &nbsp;
                                            </div>
                                            <div className="product_color">
                                                {Product.product_color} / {Product.product_sex} / {Product.product_size}
                                            </div>
                                            <div className="product_price">
                                                {Product.product_price} &nbsp; 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </NavLink>
                        );
                    })}
                </div>
            </div>
        </>
     );
}
 
export default Card;