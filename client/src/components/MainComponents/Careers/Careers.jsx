import { useEffect } from 'react';
import GoHome from '../Buttons/HomeButton';
import AnimalServices from './Assets/animalServicesVolunteer.jpg'
import VolunteerWithPet from './Assets/volunteerWithPet.webp'
import Volunteer from './Assets/volunteer2WithPet.jpg'
import DogKiss from './Assets/volunteer3WithPet.webp'
import BecomeAVolunteer from './Assets/becomeAVolunteer.jpg'

const Careers = () => {

    // scroll to top fix
    useEffect(() => {
        window.scrollTo(0,0)
    },[])

    return (
        // background
        <div style={{minHeight:"65vh"}}>
            {/* container */}
            <div style={{width:"70%", margin:"10px auto" }}>
                {/* row 1 */}
                <div className='Flex'>
                    <h2 style={{fontWeight:"800", fontSize:"2em", textAlign:"start",margin:"15px -40px"}}>There is nothing like going home at the end of the day knowing you made lives better!</h2>
                    <div className='TextBox'>
                        <p style={{fontSize:"18px", fontWeight:800, color:"#073DAA", textAlign:"start"}}>
                            <span style={{fontSize:" 200%", fontWeight: 700, lineHeight:"80%", color:"#073DAA"}}>W</span>
                            e all share a common passion here at the Dojo Pet Shelter. Not just for the animals saved, but for their companions and those in our community who then foster, volunteer, or adopt. Whether affected by illness, injury, or homelessness, the animals we help need our expertise and compassion. You could wake up every day knowing you’ll be “doing good work” in a fulfilling environment where no two days are the same. The SF SPCA has been at the forefront of animal welfare for 150+ years, and Vision 2030 is our plan to positively impact 5+ million lives over the next decade. We are looking for animal-loving professionals to help us turn this vision into reality!</p>
                    </div>
                    <img className='desktop-only' width="450px" src={AnimalServices} alt="Volunteer" />
                </div>
                {/* row 2 */}
                <div className='Flex'>
                    <img width="350px" src={VolunteerWithPet} alt="Staff1" />
                    <div className='TextBox'>
                        <h2 style={{fontWeight:"800", fontSize:"40px"}}>Equality</h2>
                        <p style={{fontSize:"18px", fontWeight:800, color:"#073DAA", textAlign:"start"}}>
                            <span style={{fontSize:" 200%", fontWeight: 700, lineHeight:"80%", color:"#073DAA"}}>D</span>
                            iversity. Inclusion. They’re more than just words for us. They are on every Dojo Pet Shelter job description and are the principles guiding how we build our teams, cultivate our leaders and build a culture of belonging where differences are valued.</p>
                    </div>
                </div>
                {/* row 3 */}
                <div className='Flex'>
                    <div className='TextBox'>
                        <h2 style={{fontWeight:"800", fontSize:"40px"}}>Career Opportunities</h2>
                        <p style={{fontSize:"18px", fontWeight:800, color:"#073DAA", textAlign:"start"}}>
                            <span style={{fontSize:" 200%", fontWeight: 700, lineHeight:"80%", color:"#073DAA"}}>W</span>
                            ith a busy veterinary hospital, a high volume spay neuter clinic, plus community and shelter medicine programs, we have positions for veterinarians, veterinary nurses and assistants, customer service representatives, and animal care associates. We also offer positions in a wide variety of other professions. Our current openings may include the job and location that’s the perfect fit for you.</p>
                    </div>
                    <img width="350px" src={Volunteer} alt="Volunteer"/>
                </div>
                {/* row 4 */}
                <div className='Flex'>
                    <img className='desktop-only' width="350px" src={DogKiss} alt="DogKiss" />
                    <div className='TextBox'>
                        <h2 style={{fontWeight:"800", fontSize:"40px"}}>Location</h2>
                        <p style={{fontSize:"18px", fontWeight:800, color:"#073DAA", textAlign:"start"}}> 
                            <span style={{fontSize:" 200%", fontWeight: 700, lineHeight:"80%", color:"#073DAA"}}>W</span>
                            e have Dojo Pet Shelter locations across the country, each home of our innovative dog and cat shelter, full-service public veterinary hospital, and veterinary clinics.</p>
                    </div>
                </div>
                {/* row 5 */}
                <div className='Flex'>
                    <div>
                        <br/>
                        <img src={BecomeAVolunteer} alt="volunteer" />
                        <br/>
                        <br/>
                        {/* Home Link */}
                        <GoHome/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Careers;