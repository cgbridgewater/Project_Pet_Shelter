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
    const [ petSort, setPetSort ] = useState("NONE") 
    const [getErrors, setGetErrors] = useState({});
    const [ event, setEvent ] = useState([])
    const [ eventSort, setEventSort ] = useState("NONE") 
    const [getEventErrors, setGetEventErrors] = useState({});

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
    }, [petSort])


    useEffect(() => {
        axios.get("http://localhost:8000/api/pets/event")
        .then((res) => {
            console.log(res.data);
            setEvent(res.data);
            setGetEventErrors("")
        })
        .catch((err) => {
            console.log(err.response.data.path)
            setGetEventErrors(err.response.data.path); //Set Errors
        })
    }, [eventSort])

    return(
        <div className="Background">

            {/* LEFT TABLE */}
            <div className='PetListTable'>
                <div style={{padding:"0 10%",display:"flex",justifyContent:"space-evenly", alignItems:"center", flexWrap:"wrap"}}>
                    <h1 style={{fontSize:"40px",color:"red"}}> ADMIN PAGE</h1>
                    <Link to="/admin/new/pet" style={{fontSize:"20px", fontWeight:"700", textDecoration:"underline"}}>Add a pet to the shelter</Link>
                    <Link to="/admin/new/event" style={{fontSize:"20px", fontWeight:"700", textDecoration:"underline"}}>Add a new event for the shelter</Link>
                </div>
                <br />

            <div className='Tables Container' style={{display:"flex", flexWrap:"wrap"}}>


                {/* pet table container */}
                <table>
                    {/* sorting menu */}
                    <div style={{display:"flex", justifyContent:"center", flexDirection:"column", width:"150px", border:"3px solid #073DAA"}} >
                        {/* <label style={{fontSize:"18px", fontWeight:800, color:"#073DAA",backgroundColor:"white"}} htmlFor="">Sort</label> */}
                        <select value={petSort} onChange={(e) => setPetSort(e.target.value)} style={{textAlign:"center",border:"3px solid white", fontSize:"18px", color:"white",backgroundColor:"#073DAA",boxShadow:"0 8px 12px 0 rgba(0, 0, 0, 0.80)"}}>
                            <option value="NONE">Newest Added</option>
                            <option value="ATOZ">A to Z</option>
                            <option value="ZTOA">Z to A</option>
                            <option value="TYPEA2Z">Type A to Z</option>
                            <option value="TYPEZ2A">Type Z to A</option>
                        </select>
                    </div>
                    {/* table header */}
                    <thead>
                        <tr>
                            <th>Pet Name</th>
                            <th>Type</th>
                        </tr>
                    </thead>
                        {/* mapping and sorting */}
                        {pet.length > 0 &&[...pet]
                            .sort(sortType[petSort])
                            .map((pet, index) => {
                                return(
                    // table body // 
                    <tbody key={pet._id}>
                        <tr>
                            <td>
                                <Link className='TableLink' to={"/admin/edit/" +pet._id}>{pet.name}</Link>
                            </td>
                            <td style={{color:"white", fontSize:"16px"}}>
                                {pet.type}
                            </td>
                        </tr>
                    </tbody>
                    )})
                }  {/* end mapping */}
                </table>



            {/* RIGHT TABLE */}
            
                {/* table container */}
                <table>
                    {/* sorting menu */}
                    <div style={{display:"flex", justifyContent:"center", flexDirection:"column", width:"150px", border:"3px solid #073DAA"}} >
                        {/* <label style={{fontSize:"18px", fontWeight:800, color:"#073DAA",backgroundColor:"white"}} htmlFor="">Sort</label> */}
                        <select value={eventSort} onChange={(e) => setEventSort(e.target.value)} style={{textAlign:"center",border:"3px solid white", fontSize:"18px", color:"white",backgroundColor:"#073DAA",boxShadow:"0 8px 12px 0 rgba(0, 0, 0, 0.80)"}}>
                            <option value="NONE">Newest Added</option>
                            <option value="ATOZ">A to Z</option>
                            <option value="ZTOA">Z to A</option>
                        </select>
                    </div>
                    {/* table header */}
                    <thead>
                        <tr>
                            <th>Event Name</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                        {/* mapping and sorting
                        {event.length > 0 &&[...event]
                            .sort(sortType[eventSort])
                            .map((event, index) => {
                                return( */}
                    {/* Table Body*/}
                    <tbody key={pet._id}>
                        <tr>
                            <td>
                                <Link  className='TableLink' to={"/admin/edit/" +event._id}>FILLER</Link>
                            </td>

                            
                            <td style={{color:"white", fontSize:"16px"}}>
                                FILLER

                            </td>
                        </tr>
                    </tbody>
                    {/* ) */}
                {/* })}  end mapping */}
                </table>
            

                </div>

                </div>

















        </div>
    )
}

export default AdminViewAll