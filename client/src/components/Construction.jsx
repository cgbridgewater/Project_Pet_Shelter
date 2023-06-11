import { Link } from "react-router-dom"

const Construction = () => {

    return(
        <div style={{minHeight:"65vh"}}>
            <Link to="/" style={{fontSize:"20px", fontWeight:"700", textDecoration:"underline"}}>Return To Pet Shelter</Link><br />
            <img style={{margin:"2% auto", width:"30%", height:"15%", minWidth:"325px", minHeight:"163px"}} src="https://png.pngitem.com/pimgs/s/46-464912_site-under-construction-hd-png-download.png" alt="Under Construction" />
        </div>
    ) 
}

export default Construction

