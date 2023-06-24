import React, { useEffect } from 'react';
import { Link } from "react-router-dom";

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
                    <h2 style={{fontWeight:"800", fontSize:"40px"}}>There is nothing like going home at the end of the day knowing you made lives better.</h2>
                    <div className='TextBox'>
                        <p style={{fontSize:"18px", fontWeight:800, color:"#073DAA"}}>
                            <span style={{fontSize:" 200%", fontWeight: 700, lineHeight:"80%", color:"#073DAA"}}>W</span>
                            e all share a common passion here at the Dojo Pet Shelter. Not just for the animals saved, but for their companions and those in our community who then foster, volunteer, or adopt. Whether affected by illness, injury, or homelessness, the animals we help need our expertise and compassion. You could wake up every day knowing you’ll be “doing good work” in a fulfilling environment where no two days are the same. The SF SPCA has been at the forefront of animal welfare for 150+ years, and Vision 2030 is our plan to positively impact 5+ million lives over the next decade. We are looking for animal-loving professionals to help us turn this vision into reality!</p>
                    </div>
                    <img className='desktop-only' width="450px" src="https://newsroom.ocfl.net/wp-content/uploads/2016/03/AnimalServicesVolunteer.jpg" alt="Volunteer" />
                </div>
                {/* row 2 */}
                <div className='Flex'>
                    <img width="350px" src="https://network.bestfriends.org/sites/default/files/page_images/hero/DavisCountyTaizleyWithWing7155sak.jpg" alt="Staff1" />
                    <div className='TextBox'>
                        <h2 style={{fontWeight:"800", fontSize:"40px"}}>Equality</h2>
                        <p style={{fontSize:"18px", fontWeight:800, color:"#073DAA"}}>
                            <span style={{fontSize:" 200%", fontWeight: 700, lineHeight:"80%", color:"#073DAA"}}>D</span>
                            iversity. Inclusion. They’re more than just words for us. They are on every Dojo Pet Shelter job description and are the principles guiding how we build our teams, cultivate our leaders and build a culture of belonging where differences are valued.</p>
                    </div>
                </div>
                {/* row 3 */}
                <div className='Flex'>
                    <div className='TextBox'>
                        <h2 style={{fontWeight:"800", fontSize:"40px"}}>Career Opportunities</h2>
                        <p style={{fontSize:"18px", fontWeight:800, color:"#073DAA"}}>
                            <span style={{fontSize:" 200%", fontWeight: 700, lineHeight:"80%", color:"#073DAA"}}>W</span>
                            ith a busy veterinary hospital, a high volume spay neuter clinic, plus community and shelter medicine programs, we have positions for veterinarians, veterinary nurses and assistants, customer service representatives, and animal care associates. We also offer positions in a wide variety of other professions. Our current openings may include the job and location that’s the perfect fit for you.</p>
                    </div>
                    <img width="350px" src="https://humaneheroes.org/wp-content/uploads/2021/11/Volunteer1.jpg" alt="Volunteer"/>
                </div>
                {/* row 4 */}
                <div className='Flex'>
                    <img className='desktop-only' width="350px" src="https://www.thestarpress.com/gcdn/presto/2019/06/21/PMUN/0ec66285-17fd-4ebd-b093-b6cf3d1ebe50-Dawg14660.JPG?width=660&height=464&fit=crop&format=pjpg&auto=webp" alt="DogKiss" />
                    <div className='TextBox'>
                        <h2 style={{fontWeight:"800", fontSize:"40px"}}>Location</h2>
                        <p style={{fontSize:"18px", fontWeight:800, color:"#073DAA"}}> 
                            <span style={{fontSize:" 200%", fontWeight: 700, lineHeight:"80%", color:"#073DAA"}}>W</span>
                            e have Dojo Pet Shelter locations across the country, each home of our innovative dog and cat shelter, full-service public veterinary hospital, and veterinary clinics.</p>
                    </div>
                </div>
                {/* row 5 */}
                <div className='Flex'>
                    <div>
                        <Link to="/petshelter" style={{fontSize:"20px", fontWeight:"700", textDecoration:"underline"}}>See all of our pets</Link>
                        <br/>
                        <br/>
                        <Link to="/" style={{fontSize:"20px", fontWeight:"700", textDecoration:"underline"}}>Go To Shelter Home</Link>
                    </div>
                    <img src="data:image/jpeg;base64,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" alt="volunteer" />
                </div>
            </div>
        </div>
    )
}

export default Careers;