import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


// sorting
const sortType = { 
    NONE: (a,b) => a.createdAt > b.createdAt ? -1 : 1,
    TYPEA2Z: (a,b) => a.type > b.type ? 1 : -1,
    TYPEZ2A: (a,b) => a.type > b.type ? -1 : 1,
    ATOZ: (a,b) => a.name.localeCompare(b.name),                   
    ZTOA: (a,b) => b.name.localeCompare(a.name)
}
const AdminViewAll = () => {

    // scroll to top fix
    useEffect(() => {
        window.scrollTo(0,0)
    },[])
    
    const [ pet, setPet ] = useState([])
    const [ sort, setSort ] = useState("TYPEA2Z") 
    const [getErrors, setGetErrors] = useState({});

    const removeFromDom = petId => {
        setPet(pet.filter(pet => pet._id !== petId));
    }

    useEffect(() => {
        axios.get("http://localhost:8000/api/pets")
        .then((res) => {
            console.log(res.data);
            setPet(res.data);
            setGetErrors("")
        })
        .catch((err) => {
            console.log(err.response.data.path)
            setGetErrors(err.response.data.path); //Set Errors
        })
    }, [sort])

    return(
        <div className="Background">
            <div className='ListContainer'>
            <div style={{padding:"0 10%",display:"flex",justifyContent:"space-between", alignItems:"center"}}>
                <h1> These pets are looking for a good home🐶🐱</h1>
                <Link to="/petshelter/new" style={{fontSize:"20px", fontWeight:"700", textDecoration:"underline", marginRight:"50px"}}>Add a pet to the shelter</Link>
            </div>
            {/* sorting menu */}
            <p style={{fontSize:"18px", fontWeight:800, color:"#073DAA",}}></p>
            <div style={{display:"flex", justifyContent:"center"}} >
                <br />
                <label style={{fontSize:"18px", fontWeight:800, color:"#073DAA", marginRight:"10px"}} htmlFor="">Click On "Type" To Filter By Type, OR Select Drop Down To Sort:</label>
                <select value={sort} onChange={(e) => setSort(e.target.value)} style={{border:"3px solid white", fontSize:"18px", color:"white",backgroundColor:"#073DAA",boxShadow:"0 8px 12px 0 rgba(0, 0, 0, 0.80)"}}>
                    <option value="NONE">Newest Added</option>
                    <option value="ATOZ">A to Z</option>
                    <option value="ZTOA">Z to A</option>
                    <option value="TYPEA2Z">Type A to Z</option>
                    <option value="TYPEZ2A">Type Z to A</option>
                </select>
            </div>
            <br />
            {/* table container */}
            <table>
                {/* table header */}
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Actions</th>
                        
                    </tr>
                </thead>
                    {/* mapping and sorting */}
                    {pet.length > 0 &&[...pet]
                        .sort(sortType[sort])
                        .map((pet, index) => {
                            return(
                // table body // 
                <tbody key={pet._id}>
                    <tr>
                        <td style={{ textAlign:"start",color:"#073DAA", fontSize:"30px",fontWeight:700}}>{pet.name}</td>
                        <td style={{fontWeight:700, fontSize:"20px"}}>
                            <a style={{textDecoration:"underline"}} href={`/petshelter/sort/${pet.type}`}>{pet.type}</a>
                        </td>
                        <td>
                            {/* action pets  */}
                            <Link style={{textDecoration:"none", color:"white"}} to={`/petshelter/${pet._id}`}><button className='ViewButton'>Details</button></Link>
                            <Link style={{textDecoration:"none", color:"white"}} to={"/petshelter/edit/" +pet._id}><button className='EditButton'>Edit</button></Link>
                        </td>
                        <td></td>
                    </tr>
                </tbody>
                )})
            }  {/* end mapping */}
            </table>
        </div>





        </div>
    )
}

export default AdminViewAll