import {Link} from "react-router-dom"

const AboutMe = () => {

    return(
        <div className="Background">
                <h3 style={{color:"#073DAA", fontWeight:700, fontSize:"20px", marginTop:"20"}}>A little something about the builder</h3>            <br/>
                
                <hr />
                
                <h3 style={{color:"#073DAA", fontWeight:700, fontSize:"20px", marginTop:"20"}}>Check out my GitHub</h3>            <br/>
                
                <hr />

                <h3 style={{color:"#073DAA", fontWeight:700, fontSize:"20px", marginTop:"20"}}>Check out the GitHub repo for THIS site</h3>            <br/>
                
                <hr />

                <h3 style={{color:"#073DAA", fontWeight:700, fontSize:"20px", marginTop:"20"}}>Check out my LinkedIn</h3>            <br/>
                
                <hr />
                <br /><br />
                <Link to="/" style={{color: "#073DAA ",fontWeight:"800", textDecoration:"underline"}}> Back To Shelter</Link>
    </div>
    )
}

export default AboutMe