const Hoodie = () => {
    return ( 
        <div class="wrapper">
            <div class="cards-container">
                <div class="card">
                    <div class="pp-image">
                        <div><img src='https://images.unsplash.com/photo-1605908502724-9093a79a1b39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80' alt=''></img></div>
                    </div>
                    <div class="info">
                        <h2 className="pp-name">Classic Jacket</h2>
                        <p className="pp-price">$140.00</p>
                        <button className="ppbtn">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Hoodie;