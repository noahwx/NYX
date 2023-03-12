import React from "react";
import Data from "./productdata";
 
const Buttons = ({ filterItem, setItem, menuItems }) => {
  return (
    <>
        <div className="btnsbar">

            <div className="categories">
                <div className="btnfilters">
                    <button onClick={() => setItem(Data)} className='categorybtn'>
                        All
                    </button> 
                    <div className="buttons">
                            {menuItems.map((Product, product_id) => {
                            return (
                                <button onClick={() => filterItem(Product)} key={product_id} className='categorybtn'>
                                    {Product}
                                </button>
                            );
                            })}
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};
 
export default Buttons;

