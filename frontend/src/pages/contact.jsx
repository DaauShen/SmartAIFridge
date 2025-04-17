import React from "react";
import NavBar1 from "../components/navbar";
import Footer from "../components/footer";
import ContactUs from "../components/contactus"
import "./home.css"
import contact from "../assets/images/contact.png"
function ContactUsPage(){
    return (
        <div>
            <NavBar1/>
            <main style={{ backgroundColor: "#eaf7ea", minHeight: "100vh", padding: "2rem 0" }}>
                <ContactUs />
                <div className="contactpage">
                    {/* <div className="title">Contact Information</div> */}
                    <img src={contact} alt="information"/>
                </div>
            </main>
            <Footer/>
        </div>
    )
}

export default ContactUsPage