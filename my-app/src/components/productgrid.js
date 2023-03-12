import React, { useState } from "react";
import Data from './productdata';
import Card from "./card";
import Buttons from './buttons'

const ProductGrid = () => {

    const [item, setItem] = useState(Data);
    const menuItems = [...new Set(Data.map((Product) => Product.product_category))];
    const menuItems2 = [...new Set(Data.map((Product) => Product.product_size))];
    const menuItems3 = [...new Set(Data.map((Product) => Product.product_color))];
    const menuItems4 = [...new Set(Data.map((Product) => Product.product_price))];

    const filterItem = (curcat) => {
        const newItem = Data.filter((newProduct) => {
          return newProduct.product_category === curcat;
        });
        setItem(newItem);
    };

    const filterItem2 = (curcat) => {
        const newItem = Data.filter((newProduct) => {
          return newProduct.product_size === curcat;
        });
        setItem(newItem);
    };

    const filterItem3 = (curcat) => {
        const newItem = Data.filter((newProduct) => {
          return newProduct.product_color === curcat;
        });
        setItem(newItem);
    };

    const filterItem4 = (curcat) => {
        const newItem = Data.filter((newProduct) => {
          return newProduct.product_price === curcat;
        });
        setItem(newItem);
    };

    return (
        <>
            <div className="productgrid">
                <div className="filter_section">
                    <h4 className="filter_title">Categories</h4>
                    <Buttons filterItem={filterItem} setItem={setItem} menuItems={menuItems}/>
                </div>
                <div className="filter_section">
                    <h4 className="filter_title">Sizes</h4>
                    <Buttons filterItem={filterItem2} setItem={setItem} menuItems={menuItems2}/>
                </div>
                <div className="filter_section">
                    <h4 className="filter_title">Color</h4>
                    <Buttons filterItem={filterItem3} setItem={setItem} menuItems={menuItems3}/>
                </div>
                <div className="filter_section">
                    <h4 className="filter_title">Price</h4>
                    <Buttons filterItem={filterItem4} setItem={setItem} menuItems={menuItems4}/>
                </div>
                <div>
                    <Card item={item}/>
                </div>
            </div>
        </>
    )
}
 
export default ProductGrid;