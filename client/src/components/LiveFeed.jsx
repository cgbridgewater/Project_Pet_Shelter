import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const LiveFeed = () => {

    // scroll to top fix
    useEffect(() => {
        window.scrollTo(0,0)
    },[])

    return(
        // Background
        <div className='Background' style={{minHeight:"65vh"}}>
            {/* Home Link */}
            <Link className='Return'  style={{textDecoration:"none"}} to={"/"}><button className='EnterButton' > Return To Pet Shelter</button></Link>
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