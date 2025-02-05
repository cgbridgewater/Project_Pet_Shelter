import { useEffect } from "react"
import GoHome from "../Buttons/HomeButton"
import GitHub from "./Sub/GitHubGraph"
import FetchDog from "./Assets/fetchDog.gif"
import BinaryCode from "./Assets/binaryCode.gif"
import LinkedIn from "./Assets/linkedIn.gif"
import MailBox from "./Assets/mailBox.gif"
import Nibbler from "./Assets/nibbler.jpg"

const AboutMe = () => {

    // scroll to top
    useEffect(() => {
        window.scrollTo(0,0)
    },[])
    
    return(
        <div className="Background">
            {/* Container */}
            <div className="PageContainer" style={{width:"80%", margin:"15px auto"}}>
                {/* Title */}
                <h1 style={{margin:"15px"}}>Welcome To My Pet Shelter Project Website!</h1>
                {/* Row 1 */}
                <div className="FlexBox">
                    <img className="AboutMePic" src={FetchDog} alt="dog" />
                    <div className="TextBox">
                        <p style={{textAlign:"start", fontSize:"18px", fontWeight:800, color:"#073DAA"}}>
                            <span style={{fontSize:" 200%", fontWeight: 700, lineHeight:"80%", color:"#073DAA"}}>T</span>
                            his single page app was created utilizing the JavaScript MERN stack, and was built with a handfull of features. Here is a few of them:
                        </p>
                        <ul style={{width:"80%", margin:"15px", textAlign:"start"}}>
                            <li>Full CRUD functionality on both the pets up for adoption and the event fliers</li>
                            <li>Admin login/registration pages are validated by Bcrypt and using hashed passwords for added security</li>
                            <li>All Update and Delete functions are protected by limiting access with JWT tokens via the admin pages</li>
                            <li>Integration of Googles location mapping API from Google's Cloud Services</li>
                            <li>On page sorting for pets, events and adoption applications with an array of sorting types</li>
                            <li>Backend Data filtering for event fliers display to ensure old data is not rendered</li>
                            <li>All displays, actions and animations are built with pure CSS and with no added libraries used</li>
                            <li>A responsive design for friendly viewing across multiple devices and screen sizes, which includes phones and tablets</li>
                            <li>Utilizing Lighthouse for optimization in Performance, Best Practices, Accessibility and SEO performance</li>
                        </ul>
                    </div>
                </div>
                {/* spliter */}
                <hr />
                {/* Row 2 */}
                <div className="FlexBox">
                    <div className="TextBox">
                        <p style={{textAlign:"start",color:"#073DAA", fontWeight:700, fontSize:"20px", marginTop:"20px"}}>
                            <span style={{fontSize:" 200%", fontWeight: 700, lineHeight:"80%", color:"#073DAA"}}>W</span>
                            ant to see The Code for this site? Check out the GitHub repo for <a style={{textDecoration:"underline"}} href="https://github.com/cgbridgewater/Project_Pet_Shelter">"Project Pet Shelter"</a>. While you're there, check out the ReadMe file for more info and details!
                        </p>
                    </div>
                    <img className="AboutMePic" src={BinaryCode} alt="code" />
                </div>
                {/* spliter */}
                <hr />
                {/* Row 3 */}
                <div className="FlexBox">
                    <GitHub/>
                    <div className="TextBox">
                        <p style={{textAlign:"start",color:"#073DAA", fontWeight:700, fontSize:"20px", marginTop:"20px"}}>
                            <span style={{fontSize:" 200%", fontWeight: 700, lineHeight:"80%", color:"#073DAA"}}>I</span>
                            nterested in what other projects I've worked on? <br /> Want to see the technologies I know? <br /> Here is a snip of my stats <br /> Check out my <a style={{textDecoration:"underline"}} href="https://github.com/cgbridgewater">GitHub</a>
                        </p>
                    </div>
                </div>
                {/* spliter */}
                <hr />
                {/* Row 4 */}
                <div className="FlexBox">
                    <div className="TextBox">
                        <p style={{color:"#073DAA", fontWeight:700, fontSize:"20px", marginTop:"20px"}}>
                            <span style={{fontSize:" 200%", fontWeight: 700, lineHeight:"80%", color:"#073DAA"}}>F</span>
                            ind out more about me, or connect with me on <a style={{textDecoration:"underline"}} href="https://www.linkedin.com/in/chris-bridgewater/">LinkedIn</a>
                        </p>
                    </div>
                    <img className="AboutMePic" src={LinkedIn} alt="LinkedIn" />
                </div> 
                {/* spliter */}
                <hr />
                {/* Row 5 */}
                <div className="FlexBox">
                    <img className="MailPic" src={MailBox} alt="mail" />
                    <div className="TextBox">
                        <p style={{color:"#073DAA", fontWeight:700, fontSize:"20px", marginTop:"20px"}}>
                            <span style={{fontSize:" 200%", fontWeight: 700, lineHeight:"80%", color:"#073DAA"}}>H</span>
                            ave questions, want to collaborate on something or want to know more? 
                            <br /><br /> 
                            Click <a style={{textDecoration:"underline"}} href="mailto:cgbridgewater@outlook.com">HERE</a> to email me me!
                            <br />Or<br />
                            Check out my portfolio <a style={{textDecoration:"underline"}}  href="https://www.chrisbridgewater.com/" target="_blank">ChrisBridgewater.com</a>
                        </p>
                    </div>
                </div>
                {/* spliter */}
                <hr />
                {/* Row 3 */}
                <div className="FlexBox">
                    <div>
                        <img className="AboutMePic" src={Nibbler} alt="Nibbler ❤️" />
                    </div>
                    <div className="TextBox">
                        <p style={{textAlign:"start",color:"#073DAA", fontWeight:700, fontSize:"20px", marginTop:"20px"}}>
                            <span style={{fontSize:" 200%", fontWeight: 700, lineHeight:"80%", color:"#073DAA"}}>T</span>
                            his site is in loving memory of Nibbler, 2008-2024.
                        </p>
                        <p style={{textAlign:"start",color:"#073DAA", fontWeight:700, fontSize:"20px", marginTop:"20px"}}>
                            Rest in peace puppy boy. It's not good bye, just see you later. ❤️🐾❤️🐾
                        </p>
                    </div>
                </div>
                {/* spliter */}
                <hr />
                <br />
                {/* Home Link */}
                <GoHome/>
            </div>
        </div>
    )
}

export default AboutMe