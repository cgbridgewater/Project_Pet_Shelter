import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

// sorting
const sortType = { 
    NONE: (a,b) => a.createdAt > b.createdAt ? -1 : 1,
    ATOZ: (a,b) => a.name.localeCompare(b.name),                   
    ZTOA: (a,b) => b.name.localeCompare(a.name)
}
const TypeSort = () => {
    const {type} = useParams()
    const [ pet, setPet ] = useState("")
    const [ sort, setSort ] = useState("NONE") 
    const [getErrors, setGetErrors] = useState({});

    // scroll to top fix
    useEffect(() => {
        window.scrollTo(0,0)
    },[])

    useEffect(() => {
        axios.get("http://localhost:8000/api/pets/sort/" + type)
        .then((res) => {
            console.log(res.data);
            setPet(res.data);
            setGetErrors("")
        })
        .catch((err) => {
            console.log(err.response.data.path)
            setGetErrors(err.response.data.path); //Set Errors
        })
    }, [])

    return (
        // Background
        <div style={{ minHeight:"70vh"}}>
            {/* page load ternary */}
            { pet.length == 0  ? 
            <div className="Background">
                <h3 style={{color:"#073DAA", fontWeight:700, fontSize:"30px", marginTop:"20"}}>It appears your lost...</h3>
                <h3 style={{color:"#073DAA", fontWeight:700, fontSize:"20px", marginTop:"20"}}>Click below and we'll get you back to to your owners.</h3>
                <br/>
                <a  href="/">
                    <img className='Lost'src="https://img.freepik.com/premium-vector/animal-shelter-house-cartoon-illustration-containing-animals-adoption-flat-hand-drawn-style_2175-6053.jpg?w=2000" alt="" />        
                </a>
            </div>
                : //ternary for bad data flow //
            // start content //
            <div style={{padding:"10px"}}>
                {/* link to home page */}
                <Link  to="/" style={{textDecoration:"underline", color:"#073DAA", fontWeight:"800", marginLeft:"45%"}}>Return To Shelter Home</Link>
                <br />
                {/* link to all pets */}
                <Link  to="/petshelter" style={{textDecoration:"underline", color:"#073DAA", fontWeight:"800", marginLeft:"45%"}}>See All Of Our Pets!</Link>
                {/* top bar */}
                <div style={{marginTop:"10px",display:"flex", justifyContent:"space-evenly", flexWrap:"wrap"}} >
                    <div>
                        {/* spacer */}
                    </div>
                    {/* remove sort ternary if only 1 tag */}
                    { pet.length == 1  ? 
                    "":
                    // Sorting section //
                    <div>
                        <label style={{fontSize:"18px", fontWeight:800, color:"#073DAA", marginRight:"10px"}} htmlFor="">Select Drop Down To Sort:</label>
                        <select onChange={(e) => setSort(e.target.value)} style={{border:"3px solid white", fontSize:"18px", color:"white",backgroundColor:"#073DAA",boxShadow:"0 8px 12px 0 rgba(0, 0, 0, 0.80)"}}>
                            <option value="NONE">Newest Added</option>
                            <option value="ATOZ">A to Z</option>
                            <option value="ZTOA">Z to A</option>
                        </select>
                    </div>
                    }
                </div>
                <br />
                {/* Main content */}
                <div className='Main' style={{ display:'flex',justifyContent:"center"}}>
                    {/* Cards Container */}
                    <div className='Boxes' 
                        style={{display:"flex", flexWrap:"wrap"}}>
                        {/* mapping */}
                        {pet.length > 0 &&[...pet]
                            .sort(sortType[sort])
                            .map((pet, index) => {
                            return(
                            // Each Card //
                            <div key={index} className="pet-container">
                                <div className="row">
                                    <div className="pet-1">
                                        <div className="pet">
                                            <div className="pet-image">
                                                <img src={pet.petImage} alt="pet-image"/>
                                            </div>
                                            <div className="pet-details">
                                                <div className="pet-social-link">
                                                    <ul>
                                                        <li style={{color:"white",fontWeight:800}}>{pet.name}</li>
                                                        <li><Link to={`/petshelter/sort/${pet.type}`} style={{textDecoration:"underline",fontWeight:600}}>
                                                            {pet.type}
                                                        </Link></li>
                                                        <li><Link to={`/petshelter/${pet._id}`} style={{textDecoration:"underline",fontWeight:600}}>
                                                            View {pet.name}
                                                        </Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )})
                    }</div>
                </div>
            </div>
            }
        </div>
    );
}
export default TypeSort;