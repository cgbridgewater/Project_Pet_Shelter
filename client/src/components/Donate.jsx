import React from "react";

const Donate = () => {

    return(
        <div className="Background">
            {/* donate link */}
            <a class="DonateButton" href="#popup2">Donate</a>
            {/* pop up */}
            <div id="popup2" class="overlay2">
                <div class="DonatePopup2">
                    <h2>Warning! You are about to leave this site... 
                    </h2>
                    <br />
                    <h2>
                        Are you sure?
                    </h2>    
                    <br />
                    {/* This link leaves the APP!! */}
                    ❤️<a style={{fontSize:"20px", fontWeight:"800", textDecoration:"underline"}} href="https://oregonhumane.tfaforms.net/23">
                        Yes, I want to donate!!
                    </a>❤️
                    <a class="close" href="#">&times;</a>
                </div>
            </div>
        </div>
    )
}

export default Donate