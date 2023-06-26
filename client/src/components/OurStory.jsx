import { useEffect } from 'react';
import GoHome from './HomeButton';

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
            <img className='storyImg' src="https://uploads-ssl.webflow.com/5fcef581573d578e99713e74/5ffd1f960d41742045cbd26f_AdoptDogHeader.jpg" alt="forever home" />
            {/* section 2 */}
            <p style={{textAlign:"start", fontSize:"18px", fontWeight:800, color:"#073DAA"}} className='ourStory'>
                <span style={{fontSize:" 200%", fontWeight: 700, lineHeight:"80%", color:"#073DAA"}}>T</span>
                he Coding Dojo Pet Shelter came about when the veterinary hospital staff of the Coding Dojo Centers in Seattle, Washington, found themselves treating patients out-of-pocket when clients lacked the necessary funds to save their pets in emergency situations. After realizing the problem was larger than the animal hospital could handle, The Coding Dojo Pet Shelter was formed.
            </p>
            {/* image 2 */}
            <img className='storyImg' src="https://petpartners.org/wp-content/uploads/2019/10/Blog-Shelter-hero-cropped-1900x600-1598469591.jpg" alt="puppy pet" />
            {/* section 3 */}
            <p style={{textAlign:"start", fontSize:"18px", fontWeight:800, color:"#073DAA"}} className='ourStory'>
                <span style={{fontSize:" 200%", fontWeight: 700, lineHeight:"80%", color:"#073DAA"}}>T</span>
                he Coding Dojo Pet Shelter helps animals by rescuing animals from abuse or neglect, finding animals foster and forever homes, funding spay, neuter and vaccination programs and raising funds for pets in low-income families.
            </p>
            {/* image 3 */}
            <img style={{marginBottom:"10px"}} className='storyImg' src="https://advancelocal-adapter-image-uploads.s3.amazonaws.com/image.mlive.com/home/mlive-media/width2048/img/news_impact/photo/23192288-standard.jpg" alt="kitten" />
            <br /><br />
            {/* Home Link */}
            <GoHome/>
        </div>
    )
}

export default OurStory
