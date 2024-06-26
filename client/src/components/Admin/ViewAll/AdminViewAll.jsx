import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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

const AdminViewAll = (props) => {    

    const [ pet, setPet ] = useState([])
    const [ petSort, setPetSort ] = useState("NONE") 
    const [ setGetErrors] = useState({});
    const [ event, setEvent ] = useState([])
    const [ eventSort, setEventSort ] = useState("NONE") 
    const [ setGetEventErrors] = useState({});
    const [ adopt, setAdopt ] = useState([])
    const [ adoptSort, setAdoptSort ] = useState("NONE") 
    const [ setGetAdoptErrors] = useState({});
    const navigate = useNavigate()

    // scroll to top
    useEffect(() => {
        window.scrollTo(0,0)
    },[])

    // this runs to test cookies
    useEffect(() => {
        axios.get("http://localhost:8000/api/admin/user"  ,{withCredentials: true})
        .then((res) => {
            console.log("Logged In User Being Tracked!");
        })
        .catch((err) => {
            console.log("UNAUTHORIZED USER DETECTED!")
            props.setAuthorized("You must log in to access admin pages!");  // Sends back to main page with this message
            navigate("/admin/signin")
        })
    }, [])

    useEffect(() => {
        axios.get("http://localhost:8000/api/admin/events",{withCredentials: true})
        .then((res) => {
            setEvent(res.data);
            setGetEventErrors("")
        })
        .catch((err) => {
            setGetEventErrors(err.response.data.path); //Set Errors
        })
    }, [eventSort])

    useEffect(() => {
        axios.get("http://localhost:8000/api/admin/pets",{withCredentials: true})
        .then((res) => {
            setPet(res.data);
            setGetErrors("")
        })
        .catch((err) => {
            setGetErrors(err.response.data.path); //Set Errors
        })
    }, [petSort])

    useEffect(() => {
        axios.get("http://localhost:8000/api/admin/adopt" ,{withCredentials: true})
        .then((res) => {
            setAdopt(res.data);
            setGetAdoptErrors("")
        })
        .catch((err) => {
            setGetAdoptErrors(err.response.data.path); //Set Errors
        })
    }, [adoptSort])

    return(
        <div className="Background">
            <div className='PetListTable'>
                {/* Top Row */}
                <div style={{padding:"0 10%",display:"flex",justifyContent:"space-evenly", alignItems:"center", flexWrap:"wrap"}}>
                    <span></span>
                    <h1 style={{fontSize:"40px",color:"red"}}> ADMIN PAGE</h1>
                    <Link style={{fontWeight:"bold", fontSize:"1.8em",textDecoration:"underline"}} className='Logout' to="/admin/logout">LOGOUT</Link>
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
                            <Link to="/admin/new/pet" style={{fontSize:"20px", fontWeight:"700", textDecoration:"underline",color:"#073DAA"}}>Add a pet to the shelter</Link>
                            {/* sorting menu */}
                            <div style={{display:"flex", justifyContent:"center", width:"175px",margin:"7px auto 0"}} >
                                {/* <label style={{fontSize:"18px", fontWeight:800, color:"#073DAA",backgroundColor:"white"}} htmlFor="">Sort</label> */}
                                <select value={petSort} onChange={(e) => setPetSort(e.target.value)} style={{padding:"3px",width:"175px",textAlign:"center",border:"1px solid white", fontSize:"18px", color:"#45f3ff",backgroundColor:"#073DAA",boxShadow:"0 8px 12px 0 rgba(0, 0, 0, 0.80)"}}>
                                    <option value="NONE">ALL</option>
                                    <option value="ATOZ">A to Z</option>
                                    <option value="ZTOA">Z to A</option>
                                    <option value="TYPEA2Z">Type A to Z</option>
                                    <option value="TYPEZ2A">Type Z to A</option>
                                </select>
                            </div>
                        </div>
                        {/* pets Table */}
                        <table className='PetTable'>
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
                                                        <Link style={{fontWeight:600 ,textDecoration: "underline"}} className='TableLink' to={"/admin/edit/pet/" +pet._id}>{pet.name}</Link>
                                                    </td>
                                                    <td style={{color:"#073DAA", fontSize:"16px", textAlign:"center"}}>
                                                        {pet.type}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        )})
                                }
                                {/* end mapping */}
                        </table>
                    </div>
                    {/* Center TABLE */}
                    <div className='TableBox'>
                        {/* Table Title */}
                        <div className="TitleBox">
                            <h1><em>EVENTS LIST</em></h1>
                            <Link className="Add" to="/admin/new/event" style={{fontSize:"20px", fontWeight:"700", textDecoration:"underline",color:"#073DAA"}}>Add a new event for the shelter</Link>
                            {/* sorting menu */}
                            <div style={{display:"flex", justifyContent:"center", width:"175px",margin:"7px auto 0"}} >
                                {/* <label style={{fontSize:"18px", fontWeight:800, color:"#073DAA",backgroundColor:"white"}} htmlFor="">Sort</label> */}
                                <select value={eventSort} onChange={(e) => setEventSort(e.target.value)} style={{padding:"3px",width:"175px",textAlign:"center",border:"1px solid white", fontSize:"18px", color:"#45f3ff",backgroundColor:"#073DAA",boxShadow:"0 8px 12px 0 rgba(0, 0, 0, 0.80)"}}>
                                    <option value="NONE">ALL</option>
                                    <option value="ATOZ">A to Z</option>
                                    <option value="ZTOA">Z to A</option>
                                </select>
                            </div>
                        </div>
                        {/* Events Table */}
                        <table className='EventTable'>
                            {/* table header */}
                            <thead>
                                <tr>
                                    <th>Event Name</th>
                                    <th>Date</th>
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
                                                        <Link style={{fontWeight:600 ,textDecoration: "underline"}} className='TableLink' to={"/admin/edit/event/" +event._id}>{event.title}</Link>
                                                    </td>
                                                    {/* Date */}
                                                    <td style={{color:"#073DAA", fontSize:"16px", textAlign:"center"}}>
                                                        {event.date}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        )})
                                }
                                {/* end mapping */}
                        </table>
                    </div>
                    {/* RIGHT TABLE */}
                    {/* table container */}
                    <div className='TableBox'>
                        {/* Table Title */}
                        <div className="TitleBox">
                            <h1><em>ADOPTION REQUESTS</em></h1>
                            <p style={{color:"#073DAA", fontWeight:700}}>Generated user side input</p>
                            {/* sorting menu */}
                            <div style={{display:"flex", justifyContent:"center", width:"175px",margin:"7px auto 0"}} >
                                {/* <label style={{fontSize:"18px", fontWeight:800, color:"#073DAA",backgroundColor:"white"}} htmlFor="">Sort</label> */}
                                <select value={adoptSort} onChange={(e) => setAdoptSort(e.target.value)} style={{padding:"3px",width:"175px",textAlign:"center",border:"1px solid white", fontSize:"18px", color:"#45f3ff",backgroundColor:"#073DAA",boxShadow:"0 8px 12px 0 rgba(0, 0, 0, 0.80)"}}>
                                    <option value="NONE">ALL</option>
                                    <option value="ATOZ">By Pet - A to Z</option>
                                    <option value="ZTOA">By Pet - Z to A</option>
                                </select>
                            </div>
                        </div>
                        {/* Adopt Table */}
                        <table className='AdoptTable'>
                            {/* table header */}
                            <thead>
                                <tr>
                                    <th>Contact Email </th>
                                    <th>Pet</th>
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
                                                        <Link  style={{fontWeight:600 ,textDecoration: "underline"}} className='TableLink' to={"/admin/adopt/" +adopt._id}>
                                                            {adopt.email}
                                                        </Link>
                                                    </td>
                                                    {/* Pet Name */}
                                                    <td style={{color:"#073DAA", fontSize:"16px", textAlign:"center"}}>
                                                        {adopt.petName}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        )})
                                }
                                {/* end mapping */}
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminViewAll