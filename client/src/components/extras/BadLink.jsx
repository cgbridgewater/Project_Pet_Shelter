import {Link} from "react-router-dom"

const BadLink = () => {

    return(
        <div className="Background">
            <h3 style={{color:"#073DAA", fontWeight:700, fontSize:"30px", marginTop:"20"}}>It appears your lost.. Don't worry we'll get you to your owners.</h3>
            <Link to="/petshelter" className='ViewButton' style={{  textDecoration: "none"}}>Back To Shelter</Link>
            <br/>
            <br/>
            <img style={{height:"450px", borderRadius:"40%"}} src="https://img.freepik.com/premium-vector/animal-shelter-house-cartoon-illustration-containing-animals-adoption-flat-hand-drawn-style_2175-6053.jpg?w=2000" alt="" />        
        </div>
    )
}

export default BadLink