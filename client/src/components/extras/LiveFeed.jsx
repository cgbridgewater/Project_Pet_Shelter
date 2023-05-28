import { Link } from 'react-router-dom';

const LiveFeed = () => {

    return(
        <div className='Background' style={{minHeight:"60vh"}}>
            <Link className='Return'  style={{textDecoration:"none"}} to={`/petshelter`}><button className='EnterButton' > Return To Pet Shelter</button></Link>
            <br />
            <br />
            <iframe width="1015" height="571" src="https://www.youtube.com/embed/bI0hW378XsA" title="Lower Animal Wellness Adoption Center | Highlights" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <h2 style={{color:"white", background:"#073DAA", border:"3px solid black",padding:"5px", margin:"-5px auto",width:"25%"}}>Live Feed of our pups </h2>    
        </div>
    )
}

export default LiveFeed