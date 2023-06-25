import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import GoHome from './HomeButton';

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
        <div style={{ minHeight:"70vh",padding:"20px 10px"}}>
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
            <div>
                <div style={{padding:"0 10%",display:"flex",justifyContent:"space-between", flexWrap:"wrap-reverse", alignItems:"center"}}>
                    <div style={{marginTop:"10px",display:"flex", justifyContent:"space-evenly", flexWrap:"wrap"}} >
                        {/* remove sort ternary if only 1 tag */}
                        { pet.length == 1  ? 
                        "":
                        // Sorting section //
                        <div>
                            {/* Sort Drowpdown with image */}
                            <div className='DropdownContainer' style={{border:"2px solid #073DAA",boxShadow:"0 8px 12px 0 rgba(0, 0, 0, 0.80)"}}>
                                <img style={{height:"150px", width:"280px", margin:0}}  src="https://www.ochd.org/wp-content/uploads/2019/04/pet-new-slider3-1200x644.jpg" alt="" />
                                <div style={{display:"flex", justifyContent:"center", flexWrap:"wrap" }}>
                                    <div className='DropdownFlex' style={{display:"flex", flexDirection:"column"}}>
                                        <label style={{fontSize:"18px", fontWeight:800, color:"#073DAA", minWidth:"240px",marginTop:"-7px", backgroundColor:"#EFEDEF",textAlign:"center"}}>Select Drop Down To Sort:</label>
                                        <select className='dropdown' value={sort} onChange={(e) => setSort(e.target.value)} style={{border:"3px solid white", fontSize:"18px", color:"white",backgroundColor:"#073DAA", width:"280px",boxShadow:"0 8px 12px 0 rgba(0, 0, 0, 0.80)", textAlign:"center"}}>
                                            <option value="NONE">Newest Added</option>
                                            <option value="ATOZ">Name A to Z</option>
                                            <option value="ZTOA">Name Z to A</option>
                                            <option value="TYPEA2Z">Type A to Z</option>
                                            <option value="TYPEZ2A">Type Z to A</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        }
                    </div>
                    {/* Link to home page and view all */}
                    <div style={{display:"flex",flexDirection:"column"}}>
                        <Link to="/" style={{fontSize:"20px", fontWeight:"700", textDecoration:"underline"}}>Return To Shelter Home</Link>
                        <Link to="/petshelter" style={{fontSize:"20px", fontWeight:"700", textDecoration:"underline"}}>View All Pets</Link>
                    </div>
                </div>
                <br />
                <p className="mobile-only">Click Image To View Pet Details</p>
                
                {/* Main content */}
                <div className='Main'>
                    {/* Cards Container */}
                    <div className='Boxes' style={{display:"flex", flexWrap:"wrap", justifyContent:"center"}}>
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
                                            <div className="pet-image desktop-only">
                                                <Link to={`/petshelter/${pet._id}`}>
                                                    <img src={pet.petImage} alt="pet-image"/>
                                                </Link>
                                            </div>
                                            <div className="pet-image mobile-only">
                                                    <img src={pet.petImage} alt="pet-image"/>
                                            </div>
                                            <div className="pet-details">
                                                <div className="pet-social-link">
                                                <ul>
                                                    <li>
                                                        <Link to={`/petshelter/${pet._id}`} style={{textDecoration:"underline",fontWeight:600}}>
                                                            View {pet.name}
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to={`/petshelter/sort/${pet.type}`} style={{textDecoration:"underline",fontWeight:600}}>
                                                            {pet.type}
                                                        </Link>
                                                    </li>
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
            <br />
            <br />
            {/* Home Link */}
            <GoHome/>
        </div>
    );
}
export default TypeSort;