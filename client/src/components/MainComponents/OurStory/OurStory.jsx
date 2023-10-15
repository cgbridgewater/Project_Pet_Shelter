import './ourStory.css';
import { useEffect } from 'react';
import GoHome from '../Buttons/HomeButton';
import OurStoryImage1 from './Assets/ourStory1.jpg'
import OurStoryImage2 from './Assets/ourStory2.jpg'
import OurStoryImage3 from './Assets/ourStory3.jpg'

const OurStory = () => {

    // scroll to top fix
    useEffect(() => {
        window.scrollTo(0,0)
    },[])

    return(
        <div className='Background' style={{minHeight:"60vh"}}>
            {/* section 1 */}
            <p style={{textAlign:"start", fontSize:"18px", fontWeight:800, color:"#073DAA"}} className='ourStory'>
                <span style={{fontSize:" 200%", fontWeight: 700, lineHeight:"80%", color:"#073DAA"}}>T</span>
                he Coding Dojo Pet Shelter sees each animal as a unique individual and strives to ensure all animals receive the medical care they require and the caring homes they deserve.
            </p>
            {/* image 1 */}
            <img className='storyImg' src={OurStoryImage1} alt="forever home" />
            {/* section 2 */}
            <p style={{textAlign:"start", fontSize:"18px", fontWeight:800, color:"#073DAA"}} className='ourStory'>
                <span style={{fontSize:" 200%", fontWeight: 700, lineHeight:"80%", color:"#073DAA"}}>T</span>
                he Coding Dojo Pet Shelter came about when the veterinary hospital staff of the Coding Dojo Centers in Seattle, Washington, found themselves treating patients out-of-pocket when clients lacked the necessary funds to save their pets in emergency situations. After realizing the problem was larger than the animal hospital could handle, The Coding Dojo Pet Shelter was formed.
            </p>
            {/* image 2 */}
            <img className='storyImg' src={OurStoryImage2} alt="puppy hold" />
            {/* section 3 */}
            <p style={{textAlign:"start", fontSize:"18px", fontWeight:800, color:"#073DAA"}} className='ourStory'>
                <span style={{fontSize:" 200%", fontWeight: 700, lineHeight:"80%", color:"#073DAA"}}>T</span>
                he Coding Dojo Pet Shelter helps animals by rescuing animals from abuse or neglect, finding animals foster and forever homes, funding spay, neuter and vaccination programs and raising funds for pets in low-income families.
            </p>
            {/* image 3 */}
            <img style={{marginBottom:"10px"}} className='storyImg' src={OurStoryImage3} alt="kitten" />
            <br /><br />
            {/* Home Link */}
            <GoHome/>
        </div>
    )
}

export default OurStory
