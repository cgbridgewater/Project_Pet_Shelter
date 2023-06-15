import {Link} from "react-router-dom"

const AboutMe = () => {

    return(
        <div className="Background">
            <div className="PageContainer" style={{width:"60%", margin:"15px auto"}}>

                <p style={{textAlign:"start", fontSize:"18px", fontWeight:800, color:"#073DAA"}}>
                    <span style={{fontSize:" 200%", fontWeight: 700, lineHeight:"80%", color:"#073DAA"}}>W</span>
                        elcome to my mock pet shelter site. This is a single page app utilizing the MERN stack, and has a handfull of features built into it:
                </p>
                <ul style={{width:"80%", margin:"15px auto", textAlign:"start"}}>
                    <li>Full CRUD functionality on both the pets up for adoptoin and the event fliers</li>
                    <li>Admin login/registration pages are validated by Bcrypt and using hashed passwords for added security</li>
                    <li>Update and Delete functions are protected by limiting access with JWT tokens via the admin pages</li>
                    <li>Integration of location mapping API from Google's Cloud Services</li>
                    <li>On page sorting for pets and events with an array of sorting types</li>
                    <li>Backend Data filtering for event fliers to ensure old data is not rendered</li>
                    <li>All displays, actions and animations are built with pure CSS and with no added libraries</li>
                    <li>A responsive design for friendly viewing across multiple devices and screen sizes, which includes phones and tablets</li>
                </ul>
                <br />
                <hr />
                
                <br/>
                <h3 style={{color:"#073DAA", fontWeight:700, fontSize:"20px", marginTop:"20"}}>
                    Check out my <a style={{textDecoration:"underline"}} href="https://github.com/cgbridgewater">GitHub</a>
                </h3>
                <br/>
                
                <hr />

                <br/>
                <h3 style={{color:"#073DAA", fontWeight:700, fontSize:"20px", marginTop:"20"}}>
                    See The Code! Check out the GitHub repo for<a style={{textDecoration:"underline"}} href="https://github.com/cgbridgewater/Project_Pet_Shelter">"Project Pet Shelter"</a> 
                </h3>
                <br/>
                
                <hr />
                <br/>
                <h3 style={{color:"#073DAA", fontWeight:700, fontSize:"20px", marginTop:"20"}}>
                    Check out my <a style={{textDecoration:"underline"}} href="https://www.linkedin.com/in/chris-bridgewater/">LinkedIn</a>
                </h3>
                <br/>
                
                <hr />

                <br/>
                <h3 style={{color:"#073DAA", fontWeight:700, fontSize:"20px", marginTop:"20"}}>
                    Email me <a style={{textDecoration:"underline"}} href="mailto:cgbridgewater@outlook.com">HERE!</a>
                </h3>
                <br/>
                
                <hr />

                <img width="350" src="https://i.pinimg.com/originals/60/a0/f1/60a0f10e9227fa654939884d40c2d8f3.gif" alt="dog" />










                <br /><br />
                <Link to="/" style={{color: "#073DAA ",fontWeight:"800", textDecoration:"underline"}}>
                    Back To Shelter
                </Link>
    
            </div>
    </div>
    )
}

export default AboutMe