const Hoodie = () => {
    return ( 
        <div class="wrapper">
            <div class="cards-container">
                <div class="card">
                    <div class="pp-image">
                        <div><img src='https://images.unsplash.com/photo-1615397587950-3cbb55f95b77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80' alt=''></img></div>
                    </div>
                    <div class="info">
                        <h2 className="pp-name">Classic Hoodie</h2>
                        <p className="pp-price">$140.00</p>
                        <button className="ppbtn">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Hoodie;