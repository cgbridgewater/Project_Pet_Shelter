import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import LikeButton from './LikeButton';

// sorting
const sortType = { 
    NONE: (a,b) => a.createdAt > b.createdAt ? -1 : 1,
    TYPEA2Z: (a,b) => a.type > b.type ? 1 : -1,
    TYPEZ2A: (a,b) => a.type > b.type ? -1 : 1,
    ATOZ: (a,b) => a.name.localeCompare(b.name),                   
    ZTOA: (a,b) => b.name.localeCompare(a.name)
}

const PetShow = () => {

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

    const adoptPet = (id,name) => {
        axios.delete('http://localhost:8000/api/pets/' + id)
            .then(res => {
                alert(`Congratulations!! ${name} has lots of love to give and will make a great pet in your home.`)
                removeFromDom(id)
            })
            .catch((err) => {
                console.log(err.response.data)
                setGetErrors(err.response.data); 
            })
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

    return (
        <div style={{padding:"10px"}}>
            {/* top bar */}
            <div style={{padding:"0 10%",display:"flex",justifyContent:"space-between", flexWrap:"wrap", alignItems:"center"}}>
                {/* <h1> These pets are looking for a good home🐶🐱</h1> */}
                <img style={{height:"150px", borderRadius:"8px", marginLeft: "5%"}}  src="https://www.ochd.org/wp-content/uploads/2019/04/pet-new-slider3-1200x644.jpg" alt="" />
                <Link to="/petshelter/new" style={{fontSize:"20px", fontWeight:"700", textDecoration:"underline", marginRight:"50px"}}>Add a pet to the shelter</Link>
            </div>
            <div style={{marginLeft:"40%"}} >
                <div>
                    {/* spacer */}
                </div>
                <div style={{display:"flex", justifyContent:"center", flexWrap:"wrap" }}>
                    <label style={{fontSize:"18px", fontWeight:800, color:"#073DAA", minWidth:"240px", marginTop:"15px", textAlign:"start"}}>Select Drop Down To Sort:</label>
                    <select className='dropdown' value={sort} onChange={(e) => setSort(e.target.value)} style={{border:"3px solid white", fontSize:"18px", color:"white",backgroundColor:"#073DAA",boxShadow:"0 8px 12px 0 rgba(0, 0, 0, 0.80)"}}>
                        <option value="NONE">Newest Added</option>
                        <option value="ATOZ">Name A to Z</option>
                        <option value="ZTOA">Name Z to A</option>
                        <option value="TYPEA2Z">Type A to Z</option>
                        <option value="TYPEZ2A">Type Z to A</option>
                    </select>
                </div>
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
                                    <div className="Deets" style={{marginTop:"20px"}} >
                                        <button className='DeleteButton' style={{color:"#073DAA", fontWeight:800}} onClick={(e) =>{adoptPet(pet._id, pet.name)}}>
                                            <img  
                                                style={{width:"90px",height:"50px",boxShadow:"0 8px 12px 0 rgba(0, 0, 0, 0.80)" }} 
                                                src="https://thumbs.dreamstime.com/b/vector-flat-cartoon-illustration-icon-design-adopt-me-dont-buy-dog-cat-pet-adoption-puppy-pooch-kitty-cat-looking-up-to-red-heart-99463424.jpg" 
                                                alt="Adopt Pet" 
                                            />
                                            <br />ADOPT {pet.name}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )})
                }</div>
            </div>
        </div>
    );
}
export default PetShow;