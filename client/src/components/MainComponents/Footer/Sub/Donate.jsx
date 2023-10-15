import './Donate.css';

const Donate = () => {

    return(
        <div className="DonationContainer">
            {/* donate link */}
            <a className="DonateButton" href="#popup2">Donate</a>
            {/* pop up */}
            <div id="popup2" className="overlay2">
                <div className="DonatePopup2">
                    <h2><span className="Warning">Warning!</span> You are about to leave this site... 
                    </h2>
                    <br />
                    <h2>
                        Are you sure?
                    </h2>    
                    <br />
                    {/* This link leaves the APP!! */}
                    ❤️<a className="DonationLink" style={{textDecoration:"underline"}} href="https://oregonhumane.tfaforms.net/23" target="_blank">
                        Yes, I want to donate!!
                    </a>❤️
                    <a className="close" href="###">&times;</a>
                </div>
            </div>
        </div>
    )
}

export default Donate