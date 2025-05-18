import Footer from "../../components/footer";
import NavBar1 from "../../components/navbar";
import SignUpBox from "../../components/signup"
import React from "react";

function SignUpPage(){
    return (
        <div>
        <NavBar1/>
        <main style={{ backgroundColor: "#eaf7ea", height: "500vh" }}>
                <SignUpBox />
        </main>
        <Footer/>
        </div>

    )
}
export default SignUpPage;