import React, { useEffect, useState} from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from 'react-router-dom';
import AdoptForm from "./AdoptForm";
// import LikeButton from "./LikeButton";

const Detail = () => {

    // scroll to top fix
    useEffect(() => {
        window.scrollTo(0,0)
    },[])

    const {id} = useParams();
    const navigate = useNavigate();
    const [ name, setName ] = useState("");
    const [ type, setType ] = useState("");
    const [ description, setDescription ] = useState("");
    const [ age, setAge ] = useState("");
    const [ petImage, setpetImage ] = useState("");
    const [ notes, setNotes ] = useState("");
    const [ fixed, setFixed ] = useState("");
    const [ childFriendly, setChildFriendly ] = useState("");
    const [ animalFriendly, setAnimalFriendly ] = useState("");
    const [getErrors, setGetErrors] = useState("null");

        useEffect(() => {
            axios.get("http://localhost:8000/api/pets/" + id)
            .then( res => {
                console.log(res.data);
                setName(res.data.name);
                setType(res.data.type);
                setDescription(res.data.description);
                setAge(res.data.age);
                setpetImage(res.data.petImage);
                setNotes(res.data.notes);
                setFixed(res.data.fixed);
                setChildFriendly(res.data.childFriendly);
                setAnimalFriendly(res.data.animalFriendly);
                setGetErrors("")
            })
            .catch((err) => {
                console.log(err.response.data)
                setGetErrors(err.response.data); 
            })
        }, []);

        // const adoptPet = (e) => {
        //     axios.delete('http://localhost:8000/api/pets/' + id)
        //         .then(res => {
        //             alert(`Congratulations!! ${name} has lots of love to give and will make a great pet in your home.`)
        //             navigate("/petshelter");
        //         })
        //         .catch((err) => {
        //             console.log(err.response.data)
        //             setGetErrors(err.response.data); 
        //         })
        // }

    return (
        <div>

            {/* page load ternary */}
            { name.length === 0  ? 
            <div className="Background">
                <h3 style={{color:"#073DAA", fontWeight:700, fontSize:"30px", marginTop:"20"}}>It appears your lost...</h3>
                <h3 style={{color:"#073DAA", fontWeight:700, fontSize:"20px", marginTop:"20"}}>Click below and we'll get you back to to your owners.</h3>
                <br/>
                <Link  to="/">
                    <img className='Lost'src="https://img.freepik.com/premium-vector/animal-shelter-house-cartoon-illustration-containing-animals-adoption-flat-hand-drawn-style_2175-6053.jpg?w=2000" alt="" />        
                </Link>
            </div>
                : //ternary for bad data flow //


            // start content //
            <div>
                <div style={{ minHeight:"61vh"}}>
                {/* content */}
                    {/* top ribbon */}
                    <div style={{display:"flex",justifyContent:"space-evenly", alignItems:"center", height:"15%"}}>
                        <h1 style={{color:"#073DAA"}}>Details about : {name}</h1>

                        <div>
                            <Link to="/" style={{color: "#073DAA ",fontWeight:"800", textDecoration:"underline"}}> Back To Shelter</Link>
                            <div className="Flex">
                                <Link to="/petshelter" style={{color: "#073DAA ",fontWeight:"800", textDecoration:"underline",width:"65px",margin:"10px"}}>All Pets</Link>
                                <Link to="/petshelter/sort/dogs" style={{color: "#073DAA ",fontWeight:"800", textDecoration:"underline",margin:"10px"}}>Dogs</Link>
                                <Link to="/petshelter/sort/cats" style={{color: "#073DAA ",fontWeight:"800", textDecoration:"underline",margin:"10px"}}>Cats</Link>
                            </div>
                        </div>
                        
                    </div>
                    {/* results container */}
                    <div className="DetailContainer" style={{display:"flex", justifyContent:"space-evenly",flexWrap:"wrap", alignItems:"center",margin:"20px auto",padding:"2%", minHeight:"35%", width:"70%", minWidth:"370px",backgroundImage:"url(https://media.istockphoto.com/id/1064117208/vector/animal-paw-prints-on-blue-winter-background.jpg?s=612x612&w=0&k=20&c=SxtfxxqqSEHv8ms2EhMAvAuYZGFdQtqbcUOY4D3JIaU=)",backgroundSize:"cover", border:"2px solid white", borderRadius:"15px"}}>
                        <img style={{width:"350px", borderRadius:"10px"}} src={petImage} alt="" />


                        {/* <div className="Deets" style={{marginTop:"20px"}} > */}
                            {/* THIS IS A DELETE BUTTON!!!! */}
                            {/* <button className='DeleteButton' style={{color:"#073DAA", fontWeight:800, padding:"2px"}} onClick={(e) =>{adoptPet(id)}}>
                                <img  
                                    style={{width:"55px",height:"50px",boxShadow:"0 8px 12px 0 rgba(0, 0, 0, 0.80)" }} 
                                    src="https://thumbs.dreamstime.com/b/vector-flat-cartoon-illustration-icon-design-adopt-me-dont-buy-dog-cat-pet-adoption-puppy-pooch-kitty-cat-looking-up-to-red-heart-99463424.jpg" 
                                    alt="Adopt Pet" 
                                />
                                <br />ADOPT ME! 
                            </button> */}
                        {/* </div> */}


                        <div style={{width:"60%",minWidth:"350px", padding:"2%"}} className="details">

                            <div style={{display:"flex",justifyContent:"space-between",padding:"10px",marginTop:"0px"}}>
                                <p style={{color:"#073DAA", margin:0}}>Type</p>
                                <p  style={{width:"250px", textAlign:"end"}}>{type}</p>
                            </div>

                            <hr />
                            
                            <div style={{display:"flex",justifyContent:"space-between",padding:"10px"}}>
                                <p style={{color:"#073DAA", margin:0}}>Description</p>
                                <p  style={{width:"250px", textAlign:"end"}}>{description}</p>
                            </div>
                            
                            <hr />
                            
                            <div style={{display:"flex",justifyContent:"space-between",padding:"10px"}}>
                                <p style={{color:"#073DAA", margin:0}}>Age</p>
                                <p  style={{width:"250px", textAlign:"end"}}>{age}</p>
                            </div>
                            
                            <hr />
                            
                            <div style={{display:"flex",justifyContent:"space-between",padding:"10px"}}>
                                <p style={{color:"#073DAA", margin:0}}>Notes</p>
                                <div>
                                    <p style={{width:"250px", textAlign:"start"}}>{notes}</p>
                                </div>
                            
                            </div>
                            
                            <div>
                            <div style={{display:"flex",justifyContent:"space-between",padding:"10px"}}>
                                <p style={{textAlign:"start" }}>Fixed?</p>
                                <p style={{width:"250px", textAlign:"end"}}>{fixed ? "Yes":"No"}</p>
                            </div>
                            <div style={{display:"flex",justifyContent:"space-between",padding:"10px"}}>
                                <p style={{textAlign:"start" }}>Friendly to other animals?</p>
                                <p style={{width:"250px", textAlign:"end"}}>{animalFriendly ? "Yes":"No"}</p>
                            </div>
                            <div style={{display:"flex",justifyContent:"space-between",padding:"10px"}}>
                                <p style={{textAlign:"start" }}>Plays well with childern?</p>
                                <p style={{width:"250px", textAlign:"end"}}>{childFriendly ? "Yes":"No"}</p>
                            </div>

                            
                            </div>
                        </div>
                    </div>
                </div>
                <AdoptForm petName= {name} petId={id} />
                <br />
            </div>    
            }
        </div>    
    );
}

export default Detail;