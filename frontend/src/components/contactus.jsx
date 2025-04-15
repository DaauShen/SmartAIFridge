import "./contactus.css"

function ContactUs(){
    return (
        <div className="contactbox">
            <div className="title">Contact us</div>
            <div className="name">
                <div className="input">
                    <div className="text">Name</div>
                    <input className="inbox" type="text"></input>
                </div>
            </div>
            <div className="email">
                <div className="input">
                    <div className="text">Email</div>
                    <input className="inbox" type="text"></input>
                </div>
            </div>
            <div className="message">
                <div className="input">
                    <div className="text">Message</div>
                    <input className="inbox" type="text"></input>
                </div>
            </div>
            <button className="button">Submit</button>
        </div>
    )
}

export default ContactUs;