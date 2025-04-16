import Footer from "../components/footer";
import NavBar1 from "../components/navbar";
import SignUpBox from "../components/signup"
import "./base.css"

function SignUpPage(){
    return (
        <div>
        <NavBar1/>
        <main style={{ backgroundColor: "#eaf7ea", minHeight: "100vh", padding: "2rem 0" }}>
                <SignUpBox />
        </main>
        <Footer/>
        </div>

    )
}
export default SignUpPage;