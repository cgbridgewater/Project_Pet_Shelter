import { Link } from "react-router-dom"

const GoHome = () => {

    return(
        <Link className='Return'  style={{textDecoration:"none"}} to={"/"}><button className='HomeButton' > Return To Pet Shelter</button></Link>
    )
}

export default GoHome