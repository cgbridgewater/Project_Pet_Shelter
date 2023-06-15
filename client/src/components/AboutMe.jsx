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
                
                <h3 style={{color:"#073DAA", fontWeight:700, fontSize:"20px", marginTop:"20"}}>Check out my GitHub</h3>            <br/>
                
                <hr />

                <h3 style={{color:"#073DAA", fontWeight:700, fontSize:"20px", marginTop:"20"}}>Check out the GitHub repo for THIS site</h3>            <br/>
                
                <hr />

                <h3 style={{color:"#073DAA", fontWeight:700, fontSize:"20px", marginTop:"20"}}>Check out my LinkedIn</h3>            <br/>
                
                <hr />
                <br /><br />
                <Link to="/" style={{color: "#073DAA ",fontWeight:"800", textDecoration:"underline"}}> Back To Shelter</Link>
    

                    {/* sample style */}
                    <h1>Adopt, Don't Buy!</h1>
                    <p style={{textAlign:"start", fontSize:"18px", fontWeight:800, color:"#073DAA"}}>
                    <span style={{fontSize:" 200%", fontWeight: 700, lineHeight:"80%", color:"#073DAA"}}>W</span>
                        hen you adopt an animal, you’re not just saving the life of the animal you’re welcoming into your home. You’re giving another animal an opportunity to move to the adoption floor and find a new family. And, you’re reducing the demand that keeps puppy and kitten mills in business. Many people buy from animal mills without realizing that these breeding facilities abuse and neglect their animals.
                    </p>
                    <br />
                    <p style={{textAlign:"start", fontSize:"18px", fontWeight:800, color:"#073DAA"}}>
                    <span style={{fontSize:" 200%", fontWeight: 700, lineHeight:"80%", color:"#073DAA"}}>E</span>
                        ach year, millions of unwanted animals enter shelters across America. More than three million cats and dogs are euthanized every year; millions more small animals, like rabbits and hamsters, meet the same fate. Adoption helps break this cycle and put an end to the animal mill industry.
                    </p>
                    <br />
                    <p style={{textAlign:"start", fontSize:"18px", fontWeight:800, color:"#073DAA"}}>
                    <span style={{fontSize:" 200%", fontWeight: 700, lineHeight:"80%", color:"#073DAA"}}>I</span>
                        f you would still rather buy than adopt, make sure you buy from a responsible, reputable breeder. If you’re buying an animal over the Internet, you’re almost certainly buying from an animal mill. Responsible breeders are individuals who have focused their efforts on one or a select few breeds, and they screen potential owners to ensure a long-term fit. Always visit the breeder’s facility and observe the animals’ behavior and socialization. Don’t be fooled by breeder certification or purebred registration papers; a puppy mill can be USDA licensed. 
                    </p>

    
    
    
    
    
            </div>
    </div>
    )
}

export default AboutMe