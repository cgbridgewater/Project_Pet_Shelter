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
        <div style={{padding:"10px"}}>
            {/* top bar */}
            <div style={{display:"flex", justifyContent:"space-evenly"}} >
                <div>
                    {/* spacer */}
                </div>
                <div>
                    <label style={{fontSize:"18px", fontWeight:800, color:"#073DAA", marginRight:"10px"}} htmlFor="">Select Drop Down To Sort:</label>
                    <select onChange={(e) => setSort(e.target.value)} style={{border:"3px solid white", fontSize:"18px", color:"white",backgroundColor:"#073DAA",boxShadow:"0 8px 12px 0 rgba(0, 0, 0, 0.80)"}}>
                        <option value="NONE">Newest Added</option>
                        <option value="ATOZ">A to Z</option>
                        <option value="ZTOA">Z to A</option>
                    </select>
                </div>
                <Link  to="/petshelter" style={{textDecoration:"underline", color:"#073DAA", fontWeight:"800"}}>Return To Shelter</Link>
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
                                    <p className="type" style={{color:"#073DAA", fontSize:"22px", fontWeight:"600"}}>Pet Type: 
                                        <a style={{textDecoration:"underline"}} href={`/petshelter/sort/${pet.type}`}>{pet.type}</a>
                                    </p>
                                    <LikeButton/>
                                    <p>
                                        <Link style={{textDecoration:"none", color:"white"}} to={`/petshelter/${pet._id}`}><button className='ViewButton'>View Pet</button></Link>
                                    </p>
                                    <p>
                                        <Link style={{textDecoration:"none", color:"white"}} to={"/petshelter/edit/" +pet._id}><button className='EditButton'>Edit</button></Link>
                                        </p>
                                </div>
                            </div>
                        )})
                }</div>
            </div>
        </div>
    );
}
export default TypeSort;