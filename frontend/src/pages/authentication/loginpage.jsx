import React from "react";
import Footer from "../../components/footer/footer";
import NavBar1 from "../../components/navbar/navbar";
import SignInBox from "../../components/authentication/signin"

function SignInPage(){
    return (
        <div>
        <NavBar1/>
        <main style={{ backgroundColor: "#eaf7ea", minHeight: "100vh", padding: "2rem 0" }}>
            <SignInBox />
        </main>
        <Footer/>
        </div>

    )
}
export default SignInPage;