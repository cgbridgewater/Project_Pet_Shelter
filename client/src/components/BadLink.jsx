import {Link} from "react-router-dom"

const BadLink = () => {

    return(
        <div className="Background">
                <h3 style={{color:"#073DAA", fontWeight:700, fontSize:"30px", marginTop:"20"}}>It appears your lost...</h3>
                <h3 style={{color:"#073DAA", fontWeight:700, fontSize:"20px", marginTop:"20"}}>Click below and we'll get you back to to your owners.</h3>            <br/>
            <Link  to="/">
                <img className='Lost'src="https://img.freepik.com/premium-vector/animal-shelter-house-cartoon-illustration-containing-animals-adoption-flat-hand-drawn-style_2175-6053.jpg?w=2000" alt="" />        
            </Link>
    </div>
    )
}

export default BadLink