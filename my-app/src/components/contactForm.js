const contactForm = () => {
    return ( 
        <form className="contactform">
            <label className="label">Name</label>
            <input type='text' className="input"/>
            <label className="label">Email</label>
            <input type='text' className="input"/>
            <label className="label">Message</label>
            <textarea type='text' className="message"/>
            <button className="formbtn">Submit</button>
        </form>
     );
}
 
export default contactForm