import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import LikeButton from './LikeButton';

// sorting
const sortType = { 
    NONE: (a,b) => a.createdAt > b.createdAt ? -1 : 1,
    ATOZ: (a,b) => a.name.localeCompare(b.name),                   
    ZTOA: (a,b) => b.name.localeCompare(a.name)
}

const TypeSort = (props) => {
    const {type} = useParams()
    const [ pet, setPet ] = useState("")
    const [ sort, setSort ] = useState("NONE") 
    const [getErrors, setGetErrors] = useState({});

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
        <div style={{ minHeight:"70vh"}}>
            {/* page load ternary */}
            { pet.length == 0  ? 
            <div className="Background">
                <h3 style={{color:"#073DAA", fontWeight:700, fontSize:"30px", marginTop:"20"}}>It appears your lost.. Don't worry, we'll get you to your owners.</h3>
                
                {/* <Link to="/petshelter" className='ViewButton' style={{  textDecoration: "none"}}>Back To Shelter</Link> */}
                {/* <br/> */}
                <br/>
                <a  href="/petshelter">
                    <img className='Lost'src="https://img.freepik.com/premium-vector/animal-shelter-house-cartoon-illustration-containing-animals-adoption-flat-hand-drawn-style_2175-6053.jpg?w=2000" alt="" />        
                </a>
            </div>
                : //ternary for bad data flow //
            // start content //
            <div style={{padding:"10px"}}>
                <Link  to="/petshelter" style={{textDecoration:"underline", color:"#073DAA", fontWeight:"800", marginLeft:"50%"}}>Return To Shelter</Link>
                {/* top bar */}
                <div style={{marginTop:"10px",display:"flex", justifyContent:"space-evenly", flexWrap:"wrap"}} >
                    <div>
                        {/* spacer */}
                    </div>
                    {/* remove sort ternary if only 1 tag */}
                    { pet.length == 1  ? 
                    "":
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
                <div className='Main' style={{ display:'flex',justifyContent:"center"}}>
                    <div className='Boxes' 
                        style={{display:"flex", flexWrap:"wrap"}}>
                        {/* mapping */}
                        {pet.length > 0 &&[...pet]
                            .sort(sortType[sort])
                            .map((pet, index) => {
                            return(
                                <div key={pet._id}  className='CardContainer'>
                                    <div className="Card">
                                        <h1 style={{color:"#073DAA"}}>{pet.name}</h1>
                                        <h2>
                                            <p>{pet.type}</p>
                                        </h2>
                                        <img style={{height:"100px",borderRadius: "50%"}} src="data:image/jpeg;base64,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" alt="" />
                                        <p>
                                            <Link style={{textDecoration:"none", color:"white"}} to={`/petshelter/${pet._id}`}>
                                                <button className='ViewButton'>
                                                    <h3>View</h3>
                                                    <h3>{pet.name}</h3>
                                                </button>
                                            </Link>
                                        </p>
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