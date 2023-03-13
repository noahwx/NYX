import React from "react";
import { useParams } from "react-router-dom";
import productsData from "./productdata";

function ProductDetail({ item }) {
    const {productId} = useParams();
    const thisProduct = productsData.find(prod => prod.product_id === productId);

    return (
        <div class="wrapper">
            <div class="cards-container">
                <div class="card">
                    <div class="pp-image">
                        <div><img src={thisProduct.product_img} alt=''></img></div>
                    </div>
                    <div class="info">
                        <h2 className="pp-name">{thisProduct.product_name}</h2>
                        <p className="pp-price">{thisProduct.product_price}</p>
                        <button className="ppbtn" onClick={() => {window.alert('Buy');}}>Buy Now</button>
                        <div className="pp_color">
                            <h3>{thisProduct.product_color}</h3>
                            <h4 className="product_sex">{thisProduct.product_sex}</h4>
                            <h3>Size: {thisProduct.product_size}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail