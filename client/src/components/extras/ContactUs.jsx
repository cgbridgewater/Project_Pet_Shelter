import { Link } from 'react-router-dom';

const ContactUs = () => {

    return(
        <div className='Background' style={{minHeight:"60vh"}}>
            
            <div className='hoursFlex'>
                <h1 className='title'>The shelter is open for certain programs and services, see below for details.</h1>
                <p className='textLeft'>
                    <span style={{fontSize:" 200%", fontWeight: 700, lineHeight:"80%", color:"#073DAA"}}>T</span>
                    he Coding Dojo Pet Shelter is closed on the following holidays each year: Thanksgiving, Christmas, and New Year’s Day. Staff & Volunteers are always onsite caring for the animals. We will close at 3 pm on 12/24 & 12/31.
                </p>
            </div>  
            
            <div className='infoWrapper'>

                <div className='hoursFlex3'>
                    <h1 className='title'> Adoption Information</h1>
                    <p className='textLeft'>
                        <span style={{fontSize:" 200%", fontWeight: 700, lineHeight:"80%", color:"#073DAA"}}>I</span>
                        f you are interested in adopting a cat or dog, please come out to Creswell between 11 am – 4 pm. We are operating on a first come, limited capacity basis.

                        If you are interested in adopting a specialized species, please call us to schedule an adoption appointment. We are following all safety guidelines to prevent the spread of COVID. 
                    </p>
                </div>

                <div className='hoursFlex3'>
                    <h1 className='title'>Lost & Found Pets</h1>
                    <p className='textLeft'>
                        <span style={{fontSize:" 200%", fontWeight: 700, lineHeight:"80%", color:"#073DAA"}}>I</span>
                        f you have lost or found a pet, please call our shelter during open hours so we can take a detailed report and provide prompt assistance. We can also provide microchip reading to help rejoin pets with their owners. 
                    </p>
                    <p>Make sure to click the LoveLost button below to search database for lost pets</p>
                    <a  
                        className='lostLink'
                        href="https://lost.petcolove.org/shelters/greenhill-humane-society/44525748387a50417251" 
                        target="_blank" 
                        rel="noopener">
                        <img 
                            className='lostnfound'  
                            src="https://www.green-hill.org/wp-content/uploads/2022/08/LostWebsiteBanners_SidebarImage_270x90.png" alt="lost_n_found" 
                            width="270" 
                            height="90"
                        />
                    </a>
                </div>
            </div>

            <div className='hoursFlex'>
                <h1 className='title'>We offer Guided Shelter Tours!</h1>
                <p className='textLeft'>
                <span style={{fontSize:" 200%", fontWeight: 700, lineHeight:"80%", color:"#073DAA"}}>A </span>
                    45-minute tour of our state-of-art animal shelter facility. Tours are led by our Outreach Team and will include seeing animal care spaces, potentially meeting adoptable animals, and information on our programs & services.
                </p>
            </div>
            

            <div className='hoursFlex2'>
                <div className='infobox'>
                    <br />
                    <p className='textLeft'>Coding Dojo Pet Shelter (Seattle)</p>
                    <br /><hr /><br />
                    <p className='textLeft'>3600 136th Pl SE Suite 300</p> 
                    <br />
                    <p className='textLeft'>Bellevue, WA 98006</p>
                    <br /><hr /><br />
                    <p className='textLeft'>Phone: 1-877-ADOPT-ME</p>
                    <br />
                </div>
                {/* <!-- google MAP --> */}
                <iframe
                    title='googleMap'
                    style={{height:"280px", width:"280px"}}
                    loading="lazy"
                    allowfullscreen
                    referrerpolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAckSxJ-8-9KFx-HKZsyAhpq1gsp01Upek
                    &q=coding dojo 3600 136th Pl SE Suite 300, Bellevue, WA 98006 ">
                </iframe>
                {/* <!-- end google MAP --> */}
            </div>
            <br />
            <br />
            <Link 
                className='Return'  
                style={{textDecoration:"none"}} 
                to={`/petshelter`}><button className='EnterButton' > Return To Pet Shelter</button>
            </Link>

        </div>
    )
}

export default ContactUs