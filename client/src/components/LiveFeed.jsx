import { Link } from 'react-router-dom';

const LiveFeed = () => {

    return(
        <div className='Background' style={{minHeight:"65vh"}}>
            <Link className='Return'  style={{textDecoration:"none"}} to={`/petshelter`}><button className='EnterButton' > Return To Pet Shelter</button></Link>
            <br />
            <br />
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