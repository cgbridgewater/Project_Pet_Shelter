import { useEffect } from 'react';
import GoHome from '../Buttons/HomeButton';

const LiveFeed = () => {

    // scroll to top fix
    useEffect(() => {
        window.scrollTo(0,0)
    },[])

    return(
        // Background
        <div className='Background' style={{minHeight:"65vh"}}>
            {/* Home Link */}
            <GoHome/>
            <br />
            <br />
            {/* Youtube feed */}
            <iframe 
                className="video" 
                src="https://www.youtube.com/embed/bI0hW378XsA" 
                title="Lower Animal Wellness Adoption Center | Highlights" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen>
            </iframe>
        </div>
    )
}

export default LiveFeed