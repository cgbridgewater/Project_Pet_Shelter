import Donate from "./Donate";

const Footer = () => {

    return (
        <div className="Footer">
            {/* footer content container */}
            <div className="FooterFlex" >
                {/* left side links */}
                <div className="List1">
                    <a href="/petshelter/events">Upcoming Events</a>
                    <hr className="mobile-only" style={{borderBottom:"1px solid #073DAA", width:"95%", marginRight:"5%"}}/>
                    <a href="/petshelter/adopt">Adopt Don't Buy</a>
                    <hr className="mobile-only" style={{borderBottom:"1px solid #073DAA", width:"95%", marginRight:"5%"}}/>
                    <a href="/petshelter/thingstoknow">Things To Know</a>
                    <hr className="mobile-only" style={{borderBottom:"1px solid #073DAA", width:"95%", marginRight:"5%"}}/>
                    <a href="/petshelter/contactus">Visit Us</a>
                    <hr className="mobile-only" style={{borderBottom:"1px solid #073DAA", width:"95%", marginRight:"5%"}}/>
                    <a href="/petshelter/wishlist">Wish List</a>
                </div>
                {/* social media links (center) */}
                <div className="FooterLogos">
                    <a href="https://www.facebook.com/greenhillhumane/?ref=ts">
                        <img className="social" style={{height:"40px",width:"40px", marginLeft: "5%"}} src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/83-facebook-64.png" alt="#"/>
                    </a>
                    <a href="https://www.youtube.com/c/GreenhillHumane">
                        <img className="social" style={{height:"40px",width:"40px", marginLeft: "5%"}} src="https://cdn0.iconfinder.com/data/icons/social-media-2473/128/youtube_logo_social_media_social_media_network-64.png" alt="#"/>
                    </a>
                    <a href="https://twitter.com/GreenhillHumane">
                        <img className="social" style={{height:"40px",width:"40px", marginLeft: "5%"}} src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Twitter3_colored_svg-64.png" alt="#"/>
                    </a>
                    <a href="https://www.instagram.com/greenhillhumane/">
                        <img className="social" style={{height:"40px",width:"40px", marginLeft: "5%"}} src="https://cdn3.iconfinder.com/data/icons/blue-magic/256/Instagram.png" alt="#"/>
                    </a>
                    <a href="https://open.spotify.com/show/2EVHbhbQand7huz6fpOtPB?si=b3600725d7434783&nd=1">
                        <img className="social" style={{height:"40px",width:"40px", marginLeft: "5%"}} src="https://cdn0.iconfinder.com/data/icons/social-media-2473/128/spotify_interface_media_social_logo-64.png" alt="#"/>
                    </a>
                    <a href="https://www.tiktok.com/@greenhillhumanesociety">
                        <img className="social"  style={{height:"40px",width:"40px", marginLeft: "5%"}} src="https://cdn2.iconfinder.com/data/icons/social-media-2452/512/TikTok-01-64.png" alt="#"/>
                    </a>
                </div>
                {/* right side links */}
                <div className="List2">
                    <a href="/petshelter/stories">Success Stories</a>
                    <hr className="mobile-only" style={{borderBottom:"1px solid #073DAA", width:"95%", marginLeft:"5%"}}/>
                    <a href="/petshelter/ourstory">Our Story</a>
                    <hr className="mobile-only" style={{borderBottom:"1px solid #073DAA", width:"95%", marginLeft:"5%"}}/>
                    <Donate />
                    <hr className="mobile-only" style={{borderBottom:"1px solid #073DAA", width:"95%", marginLeft:"5%"}}/>
                    <a href="/petshelter/careers">Careers</a>
                    <hr className="mobile-only" style={{borderBottom:"1px solid #073DAA", width:"95%", marginLeft:"5%"}}/>
                    <a href="/petshelter/aboutme">Site Info</a>
                </div>
            </div>
        </div>
    );
};

export default Footer