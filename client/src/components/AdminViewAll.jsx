import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// Pet Sorting
const petSortType = { 
    NONE: (a,b) => a.createdAt > b.createdAt ? -1 : 1,
    TYPEA2Z: (a,b) => a.type > b.type ? 1 : -1,
    TYPEZ2A: (a,b) => a.type > b.type ? -1 : 1,
    ATOZ: (a,b) => a.name.localeCompare(b.name),
    ZTOA: (a,b) => b.name.localeCompare(a.name)
}

// Event Sorting
const eventSortType = { 
    NONE: (a,b) => a.date > b.date ? 1 : -1,
    ATOZ: (a,b) => a.title.localeCompare(b.title),
    ZTOA: (a,b) => b.title.localeCompare(a.title),
}

// Adoption Sorting
const AdoptSortType = { 
    NONE: (a,b) => a.date > b.date ? 1 : -1,
    ATOZ: (a,b) => a.petName.localeCompare(b.petName),
    ZTOA: (a,b) => b.petName.localeCompare(a.petName)
}

const AdminViewAll = () => {

    // scroll to top
    useEffect(() => {
        window.scrollTo(0,0)
    },[])
    
    const [ pet, setPet ] = useState([])
    const [ petSort, setPetSort ] = useState("NONE") 
    const [getErrors, setGetErrors] = useState({});
    const [ event, setEvent ] = useState([])
    const [ eventSort, setEventSort ] = useState("NONE") 
    const [getEventErrors, setGetEventErrors] = useState({});
    const [ adopt, setAdopt ] = useState([])
    const [ adoptSort, setAdoptSort ] = useState("NONE") 
    const [getAdoptErrors, setGetAdoptErrors] = useState({});

    useEffect(() => {
        axios.get("http://localhost:8000/api/events")
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
        axios.get("http://localhost:8000/api/adopt")
        .then((res) => {
            console.log(res.data);
            setAdopt(res.data);
            setGetAdoptErrors("")
        })
        .catch((err) => {
            console.log(err.response.data.path)
            setGetAdoptErrors(err.response.data.path); //Set Errors
        })
    }, [adoptSort])

    return(
        <div className="Background">
            <div className='PetListTable'>
                {/* Top Row */}
                <div style={{padding:"0 10%",display:"flex",justifyContent:"space-evenly", alignItems:"center", flexWrap:"wrap"}}>
                    <h1 style={{fontSize:"40px",color:"red"}}> ADMIN PAGE</h1>
                </div>
                <br />
                {/* tables contaner */}
                <div className='TablesContainer' style={{display:"flex", justifyContent:"space-evenly", flexWrap:"wrap"}}>
                    {/* LEFT TABLE */}
                    {/* pet table container */}
                    <div className='TableBox'>
                        {/* Table Title */}
                        <div className="TitleBox">
                            <h1><em>PETS FOR ADOPTION</em></h1>
                            <Link to="/admin/new/pet" style={{fontSize:"20px", fontWeight:"700", textDecoration:"underline",color:"white"}}>Add a pet to the shelter</Link>
                        </div>
                        {/* pets Table */}
                        <table className='PetTable'>
                            {/* sorting menu */}
                            <div style={{display:"flex", justifyContent:"center", flexDirection:"column", width:"150px", border:"3px solid #073DAA"}} >
                                {/* <label style={{fontSize:"18px", fontWeight:800, color:"#073DAA",backgroundColor:"white"}} htmlFor="">Sort</label> */}
                                <select value={petSort} onChange={(e) => setPetSort(e.target.value)} style={{textAlign:"center",border:"3px solid white", fontSize:"18px", color:"white",backgroundColor:"#073DAA",boxShadow:"0 8px 12px 0 rgba(0, 0, 0, 0.80)"}}>
                                    <option value="NONE">ALL</option>
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
                                    .sort(petSortType[petSort])
                                    .map((pet, index) => {
                                        return(
                                            // table body // 
                                            <tbody key={pet._id}>
                                                <tr>
                                                    <td>
                                                        <Link className='TableLink' to={"/admin/edit/pet/" +pet._id}>{pet.name}</Link>
                                                    </td>
                                                    <td style={{color:"white", fontSize:"16px", textAlign:"center"}}>
                                                        {pet.type}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        )})
                                }  {/* end mapping */}
                        </table>
                    </div>
                    {/* Center TABLE */}
                    <div className='TableBox'>
                        {/* Table Title */}
                        <div className="TitleBox">
                            <h1><em>EVENTS LIST</em></h1>
                            <Link className="Add" to="/admin/new/event" style={{fontSize:"20px", fontWeight:"700", textDecoration:"underline",color:"white"}}>Add a new event for the shelter</Link>
                        </div>
                        {/* Events Table */}
                        <table className='EventTable'>
                            {/* sorting menu */}
                            <div style={{display:"flex", justifyContent:"center", flexDirection:"column", width:"150px", border:"3px solid #073DAA"}} >
                                {/* <label style={{fontSize:"18px", fontWeight:800, color:"#073DAA",backgroundColor:"white"}} htmlFor="">Sort</label> */}
                                <select value={eventSort} onChange={(e) => setEventSort(e.target.value)} style={{textAlign:"center",border:"3px solid white", fontSize:"18px", color:"white",backgroundColor:"#073DAA",boxShadow:"0 8px 12px 0 rgba(0, 0, 0, 0.80)"}}>
                                    <option value="NONE">ALL</option>
                                    <option value="ATOZ">A to Z</option>
                                    <option value="ZTOA">Z to A</option>
                                </select>
                            </div>
                            {/* table header */}
                            <thead>
                                <tr>
                                    <th>Event Name</th>
                                    <th>Event Date</th>
                                </tr>
                            </thead>
                                {/* mapping and sorting */}
                                {event.length > 0 &&[...event]
                                    .sort(eventSortType[eventSort])
                                    .map((event, index) => {
                                        return(
                                            // table body // 
                                            <tbody key={event._id}>
                                                <tr>
                                                    {/* Title */}
                                                    <td>
                                                        <Link  className='TableLink' to={"/admin/edit/event/" +event._id}>{event.title}</Link>
                                                    </td>
                                                    {/* Date */}
                                                    <td style={{color:"white", fontSize:"16px", textAlign:"center"}}>
                                                        {event.date}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        )})
                                }  {/* end mapping */}
                        </table>
                    </div>
                    {/* RIGHT TABLE */}
                    {/* table container */}
                    <div className='TableBox'>
                        {/* Table Title */}
                        <div className="TitleBox">
                        <h1><em>ADOPTION REQUESTS</em></h1>
                        <h3>Generated user side input</h3>
                        </div>
                        {/* Adopt Table */}
                        <table className='AdoptTable'>
                            {/* sorting menu */}
                            <div style={{display:"flex", justifyContent:"center", flexDirection:"column", width:"150px", border:"3px solid #073DAA"}} >
                                {/* <label style={{fontSize:"18px", fontWeight:800, color:"#073DAA",backgroundColor:"white"}} htmlFor="">Sort</label> */}
                                <select value={adoptSort} onChange={(e) => setAdoptSort(e.target.value)} style={{textAlign:"center",border:"3px solid white", fontSize:"18px", color:"white",backgroundColor:"#073DAA",boxShadow:"0 8px 12px 0 rgba(0, 0, 0, 0.80)"}}>
                                    <option value="NONE">ALL</option>
                                    <option value="ATOZ">By Pet - A to Z</option>
                                    <option value="ZTOA">By Pet - Z to A</option>
                                </select>
                            </div>
                            {/* table header */}
                            <thead>
                                <tr>
                                    <th>Contact Email </th>
                                    <th>Pet Name</th>
                                </tr>
                            </thead>
                                {/* mapping and sorting */}
                                {adopt.length > 0 &&[...adopt]
                                    .sort(AdoptSortType[adoptSort])
                                    .map((adopt, index) => {
                                        return(
                                            // table body // 
                                            <tbody key={adopt._id}>
                                                <tr>
                                                    {/* Contact */}
                                                    <td>
                                                        <Link 
                                                            style={{textAlign:"end"}}
                                                            className='TableLink' 
                                                            to={"/admin/adopt/" +adopt._id}
                                                        >
                                                            {adopt.email}
                                                        </Link>
                                                    </td>
                                                    {/* Pet Name */}
                                                    <td style={{color:"white", fontSize:"16px", textAlign:"center"}}>
                                                        {adopt.petName}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        )})
                                }  {/* end mapping */}
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminViewAll