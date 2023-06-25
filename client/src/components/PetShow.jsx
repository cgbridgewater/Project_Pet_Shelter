import { useEffect, useState } from 'react';
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

const PetShow = () => {

    const [ pet, setPet ] = useState([])
    const [ sort, setSort ] = useState("ATOZ") 

    // scroll to top fix
    useEffect(() => {
        window.scrollTo(0,0)
    },[])

    useEffect(() => {
        axios.get("http://localhost:8000/api/pets")
        .then((res) => {
            console.log(res.data);
            setPet(res.data);
            // setGetErrors("")
        })
        .catch((err) => {
            console.log(err.response.data.path)
            // setGetErrors(err.response.data.path); //Set Errors
        })
    }, [sort])

    return (
        // Show All Container
        <div style={{padding:"20px 10px"}}>
            {/* top bar */}
            <div style={{padding:"0 10%",display:"flex",justifyContent:"space-between", flexWrap:"wrap-reverse", alignItems:"center"}}>
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
                {/* Link to home page */}
                <Link to="/" style={{fontSize:"20px", fontWeight:"700", textDecoration:"underline"}}>Return To Shelter Home</Link>
            </div>
            <br />
            <p className="mobile-only">Click Image To View Pet Details</p>
            {/* Main Content Cards */}
            <div className='Boxes' style={{display:"flex", flexWrap:"wrap", justifyContent:"center"}}>
                {/* mapping */}
                {pet.length > 0 &&[...pet]
                    .sort(sortType[sort])
                    .map((pet, index) => {
                    return(
                        // Each Card //
                        <div key={pet._id} className="pet-container">
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
                        // Each Card //
                        // <div key={pet._id}  className='PetCardContainer'>
                        //     <div className="PetCard">
                        //         {/* Pet Name */}
                        //         <h1 style={{color:"#073DAA"}}>{pet.name}</h1>
                        //         {/* Link To Pet Type */}
                        //         <h2>
                        //             <Link style={{textDecoration:"underline"}} to={`/petshelter/sort/${pet.type}`}>({pet.type})</Link>
                        //         </h2>
                        //         {/* Image Link to view pet */}
                        //         <Link to={`/petshelter/${pet._id}`}>
                        //             {/* Check For Pet Image */}
                        //             { pet.petImage == null  ?
                        //             <img 
                        //                 style={{height:"100px",borderRadius: "50%"}} 
                        //                 src={defaultPetImage}
                        //                 alt="Pet Image" 
                        //             />
                        //             :
                        //             <img 
                        //                 style={{height:"100px",borderRadius: "50%"}} 
                        //                 src={pet.petImage} 
                        //                 alt="Pet Image" />
                        //             }
                        //         </Link>
                        //         {/* Link to view pet */}
                        //         <p>
                        //             <Link style={{textDecoration:"none"}} to={`/petshelter/${pet._id}`}>
                        //                 <button className='ViewButton'>
                        //                     <h3>View</h3>
                        //                     <h3>{pet.name}</h3>
                        //                 </button>
                        //             </Link>
                        //         </p>
                        //     </div>
                        // </div>
                    )})
            }</div>
        </div>
    );
}
export default PetShow;