import React from "react";
import Footer from "../../components/footer/footer";
import NavBar1 from "../../components/navbar/navbar";
import "../home/home.css"
import BKU from "../../assets/images/BKU.png"
import team from "../../assets/images/team.png"
function AboutUsPage(){
    return (
        <div>
            <NavBar1/>
            <main style={{ backgroundColor: "#EAF7EA", height: "100vh", padding: "2rem 0" }}>
                <div className="aboutus">
                    <img src={BKU} alt="HCMUT" />
                    <div className="faculty">FACULTY OF COMPUTER SCIENCE AND ENGINEERING</div>
                    {/* <div className="team">TEAM MEMBERS</div> */}
                    <div className="teammem">
                        <img src={team} alt="team members"/>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>

    )
}
export default AboutUsPage;