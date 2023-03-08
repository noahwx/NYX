const Account = () => {
    return ( 
        <div className="container-acct">
            <h1 className="title">Account</h1>
            <div className="acctinfo">
                <div className="userinfo">
                    <h2 className="usertitle">Information</h2>
                </div>
                <div className="useraddress">
                    <h2 className="usertitle">Addresses</h2>
                </div>
                <div className="currentorders">
                    <h2 className="usertitle">Orders</h2>
                </div>
                <div className="paymentinfo">
                    <h2 className="usertitle">Payments</h2>
                </div>
            </div>
        </div>
     );
}
 
export default Account;