import "./contactus.css"

function ContactUs2(){
    return (
        <div className="contactbox">
            <div className="title">Contact us</div>

            <div className="message2">
                <div className="input">
                    <div className="text">Message</div>
                    <input className="inbox" type="text"></input>
                </div>
            </div>
            <button className="button">Submit</button>
        </div>
    )
}

export default ContactUs2;