import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Stories = () => {

    // scroll to top fix
    useEffect(() => {
        window.scrollTo(0,0)
    },[])
    
    return(
        <div className='Background' style={{minHeight:"60vh"}}>
            <div>
                <img className='Results' src="https://www.bchumane.org/wp-content/uploads/2021/09/Header-Oct-2021-scaled.jpg" alt="success stories" />
            </div>
            <p style={{textAlign:"start", fontSize:"18px", fontWeight:800, color:"#073DAA"}} className='ourStory'>
                <span style={{fontSize:"200%", fontWeight: 700, lineHeight:"80%", color:"#073DAA"}}>T</span>
                he Coding Dojo Pet Shelter sees some incredibly challenging pet rescue cases.  Fortunately, we see very happy endings, too! Here are a few stories of the animal rescues we receive and a glimpse at how these special pets have touched our hearts.
            </p>



            {/* REMOVE AND REPLACE WITH CONTENT!! */}
            <p>Heart Warming</p>
            <p>Content</p>
            <p>and Images</p>
            <p>Coming</p>
            <p>Soon!!!</p>

            <br />
                <img style={{margin:"2% auto", width:"30%", height:"15%", minWidth:"325px", minHeight:"163px"}} src="https://png.pngitem.com/pimgs/s/46-464912_site-under-construction-hd-png-download.png" alt="Under Construction" />
            <br />
            {/* END REMOVE AND REPLACE WITH CONTENT!! */}


            {/* donate button */}
            <a href="https://oregonhumane.tfaforms.net/23">
                <img className='donate' style={{height:"75px", width:"172px", borderRadius:"5px", border: "1px solid #073DAA", marginTop:"2%"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVMMYCnUQ3zRjA9N-fsTSZ1NcTzglTZUzUxyKBtTc3zU-BCcTTukP2F9VrkVOoHubw4p4&usqp=CAU" alt="donate button"/>
            </a>
            {/* donate button */}
            
            <br />
            <Link to="/" style={{fontSize:"20px", fontWeight:"700", textDecoration:"underline", marginRight:"50px"}}>Return To Shelter Home</Link>

        </div>
    )
}

export default Stories