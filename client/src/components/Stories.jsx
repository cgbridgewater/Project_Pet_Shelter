import { useEffect } from 'react';
import CardFlip from './CardFlip';
import GoHome from './HomeButton';

const Stories = () => {

    // scroll to top fix
    useEffect(() => {
        window.scrollTo(0,0)
    },[])
    
    return(
        // background image
        <div className='Background' style={{minHeight:"60vh"}}>
            {/* Title Image */}
            <div>
                <img className='Results' src="https://www.bchumane.org/wp-content/uploads/2021/09/Header-Oct-2021-scaled.jpg" alt="success stories" />
            </div>
            {/* Title Text */}
            <p style={{textAlign:"start", fontSize:"18px", fontWeight:800, color:"#073DAA"}} className='ourStory'>
                <span style={{fontSize:"200%", fontWeight: 700, lineHeight:"80%", color:"#073DAA"}}>T</span>
                he Coding Dojo Pet Shelter sees some incredibly challenging pet rescue cases.  Fortunately, we see very happy endings, too! Here are a few stories of the animal rescues we receive and a glimpse at how these special pets have touched our hearts.
            </p>
            {/* Card Flip Insert */}
            <CardFlip/>
            <br />
            {/* Home Link */}
            <GoHome/>
        </div>
    )
}

export default Stories