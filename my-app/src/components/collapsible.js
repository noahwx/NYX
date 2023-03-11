import React from 'react';
import Collapsible from 'react-collapsible';

const collapsible = () => {
    return ( 
        <div>
            <Collapsible trigger='Gender' transitionTime='200' transitionCloseTime='250' easing='ease-in-out' open='true'>
                <div>
                    <label for='Male' className='collapse_label'>
                        <input type='checkbox' id='Male' name='Male' value='Male' className='collapse_input'/>
                        <span className='collapse_text'>Male</span>
                    </label>
                </div>
                <div>
                    <label for='Female' className='collapse_label'>
                        <input type='checkbox' id='Female' name='Female' value='Female' className='collapse_input'/>
                        <span className='collapse_text'>Female</span>
                    </label>
                </div>
                <div>
                    <label for='Unisex' className='collapse_label'>
                        <input type='checkbox' id='Unisex' name='Unisex' value='Unisex' className='collapse_input'/>
                        <span className='collapse_text'>Unisex</span>
                    </label>
                </div>
            </Collapsible>
            <Collapsible trigger='Shop By Price' transitionTime='200' transitionCloseTime='250' easing='ease-in-out' open='true'>
                <div>
                    <label for='$0_$25' className='collapse_label'>
                        <input type='checkbox' id='$0_$25' name='$0_$25' value='$0_$25' className='collapse_input'/>
                        <span className='collapse_text'>$0 - $25</span>
                    </label>
                </div>
                <div>
                    <label for='$25_$50' className='collapse_label'>
                        <input type='checkbox' id='$25_$50' name='$25_$50' value='$25_$50' className='collapse_input'/>
                        <span className='collapse_text'>$25 - $50</span>
                    </label>
                </div>
                <div>
                    <label for='$50_$100' className='collapse_label'>
                        <input type='checkbox' id='$50_$100' name='$50_$100' value='$50_$100' className='collapse_input'/>
                        <span className='collapse_text'>$50 - $100</span>
                    </label>
                </div>
                <div>
                    <label for='$100_$150' className='collapse_label'>
                        <input type='checkbox' id='$100_$150' name='$100_$150' value='$100_$150' className='collapse_input'/>
                        <span className='collapse_text'>$100 - $150</span>
                    </label>
                </div>
                <div>
                    <label for='Over$150' className='collapse_label'>
                        <input type='checkbox' id='Over$150' name='Over$150' value='Over$150' className='collapse_input'/>
                        <span className='collapse_text'>Over $150</span>
                    </label>
                </div>
            </Collapsible>
            <Collapsible trigger='Color' transitionTime='200' transitionCloseTime='250' easing='ease-in-out' open='true'>
                <div>
                    <button className='colorbtn red'></button>
                </div>
                <div>
                    <button className='colorbtn white'></button>
                </div>
                <div>
                    <button className='colorbtn blue'></button>
                </div>
                <div>
                    <button className='colorbtn orange'></button>
                </div>
                <div>
                    <button className='colorbtn green'></button>
                </div>
            </Collapsible>  
            <Collapsible trigger='Sizes' transitionTime='200' transitionCloseTime='250' easing='ease-in-out' open='true'>
                <div>
                    <label for='XSmall' className='collapse_label'>
                        <input type='checkbox' id='XSmall' name='XSmall' value='XSmall' className='collapse_input'/>
                        <span className='collapse_text'>X-Small</span>
                    </label>
                </div>
                <div>
                    <label for='Small' className='collapse_label'>
                        <input type='checkbox' id='Small' name='Small' value='Small' className='collapse_input'/>
                        <span className='collapse_text'>Small</span>
                    </label>
                </div>
                <div>
                    <label for='Medium' className='collapse_label'>
                        <input type='checkbox' id='Medium' name='Medium' value='Medium' className='collapse_input'/>
                        <span className='collapse_text'>Medium</span>
                    </label>
                </div>
                <div>
                    <label for='Large' className='collapse_label'>
                        <input type='checkbox' id='Large' name='Large' value='Large' className='collapse_input'/>
                        <span className='collapse_text'>Large</span>
                    </label>
                </div>
                <div>
                    <label for='XLarge' className='collapse_label'>
                        <input type='checkbox' id='XLarge' name='XLarge' value='XLarge' className='collapse_input'/>
                        <span className='collapse_text'>XLarge</span>
                    </label>
                </div>
            </Collapsible>
            <Collapsible trigger='Collections' transitionTime='200' transitionCloseTime='250' easing='ease-in-out' open='true'>
                <div>
                    <label for='SS-23' className='collapse_label'>
                        <input type='checkbox' id='SS-23' name='SS-23' value='SS-23' className='collapse_input'/>
                        <span className='collapse_text'>SS-23</span>
                    </label>
                </div>
                <div>
                    <label for='W-23' className='collapse_label'>
                        <input type='checkbox' id='W-23' name='W-23' value='W-23' className='collapse_input'/>
                        <span className='collapse_text'>W-23</span>
                    </label>
                </div>
            </Collapsible>
        </div>
     );
}
 
export default collapsible;