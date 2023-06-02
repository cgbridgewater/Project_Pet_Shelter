import React, { useEffect, useState} from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from 'react-router-dom';
import LikeButton from "./LikeButton";

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
    const [ skillOne, setSkillOne ] = useState("");
    const [ skillTwo, setSkillTwo ] = useState("");
    const [ skillThree, setSkillThree ] = useState("");
    const [ age, setAge ] = useState("");
    const [getErrors, setGetErrors] = useState("null");

        useEffect(() => {
            axios.get("http://localhost:8000/api/pets/" + id)
            .then( res => {
                console.log(res.data);
                setName(res.data.name);
                setType(res.data.type);
                setDescription(res.data.description);
                setSkillOne(res.data.skillOne);
                setSkillTwo(res.data.skillTwo);
                setSkillThree(res.data.skillThree);
                setAge(res.data.age);
                setGetErrors("")
            })
            .catch((err) => {
                console.log(err.response.data)
                setGetErrors(err.response.data); 
            })
        }, []);

        const adoptPet = (e) => {
            axios.delete('http://localhost:8000/api/pets/' + id)
                .then(res => {
                    alert(`Congratulations!! ${name} has lots of love to give and will make a great pet in your home.`)
                    navigate("/petshelter");
                })
                .catch((err) => {
                    console.log(err.response.data)
                    setGetErrors(err.response.data); 
                })
        }

    return (
        <div>
            {/* page load ternary */}
            { name.length == 0  ? 
            <div className="Background">
                <h3 style={{color:"#073DAA", fontWeight:700, fontSize:"30px", marginTop:"20"}}>It appears your lost...</h3>
                <h3 style={{color:"#073DAA", fontWeight:700, fontSize:"20px", marginTop:"20"}}>Click below and we'll get you back to to your owners.</h3>

                <br/>
                <a  href="/petshelter">
                    <img className='Lost'src="https://img.freepik.com/premium-vector/animal-shelter-house-cartoon-illustration-containing-animals-adoption-flat-hand-drawn-style_2175-6053.jpg?w=2000" alt="" />        
                </a>
            </div>
                : //ternary for bad data flow //
            // start content //
            <div>
                <div style={{ minHeight:"61vh"}}>
                {/* content */}
                    {/* top ribbon */}
                    <div style={{display:"flex",justifyContent:"space-evenly", alignItems:"center", height:"15%"}}>
                        <h1 style={{color:"#073DAA"}}>Details about : {name}</h1>
                        <div style={{marginTop:"10px"}}>
                        <Link to="/petshelter" style={{color: "#073DAA ",fontWeight:"800", textDecoration:"underline"}}> Back To Shelter</Link>
                            <div className="Deets" style={{marginTop:"20px"}} >
                                <button className='DeleteButton' style={{color:"#073DAA", fontWeight:800}} onClick={(e) =>{adoptPet(id)}}>
                                    <img  
                                        style={{width:"90px",height:"50px",boxShadow:"0 8px 12px 0 rgba(0, 0, 0, 0.80)" }} 
                                        src="https://thumbs.dreamstime.com/b/vector-flat-cartoon-illustration-icon-design-adopt-me-dont-buy-dog-cat-pet-adoption-puppy-pooch-kitty-cat-looking-up-to-red-heart-99463424.jpg" 
                                        alt="Adopt Pet" 
                                    />
                                    <br />ADOPT {name}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* results container */}
                    <div style={{margin:"auto", marginTop:"30px",padding:"0 10%", minHeight:"35%", width:"40%",backgroundImage:"url(https://media.istockphoto.com/id/1064117208/vector/animal-paw-prints-on-blue-winter-background.jpg?s=612x612&w=0&k=20&c=SxtfxxqqSEHv8ms2EhMAvAuYZGFdQtqbcUOY4D3JIaU=)",backgroundSize:"cover", border:"2px solid white", borderRadius:"15px"}}>
                        <div style={{display:"flex", justifyContent:"space-between",marginTop:"0px"}}>
                            <p style={{color:"#073DAA", textDecoration:"underline", margin:0}}>Type</p>
                            <p style={{margin:"3px"}}>{type}</p>
                        </div>
                        <hr />
                        <div style={{display:"flex", justifyContent:"space-between"}}>
                            <p style={{color:"#073DAA", textDecoration:"underline", margin:0}}>Description</p>
                            <p style={{margin:"3px"}}>{description}</p>
                        </div>
                        <hr />
                        <div style={{display:"flex", justifyContent:"space-between"}}>
                            <p style={{color:"#073DAA", textDecoration:"underline", margin:0}}>Age</p>
                            <p style={{margin:"3px"}}>{age}</p>
                        </div>
                        <hr />
                        <div style={{display:"flex", justifyContent:"space-between"}}>
                            <p style={{color:"#073DAA", textDecoration:"underline", margin:0}}>Skills</p>
                            <div>
                                <p style={{margin:"3px"}}>{skillOne}</p>
                                <p style={{margin:"3px"}}>{skillTwo}</p>
                                <p style={{margin:"3px"}}>{skillThree}</p>
                            </div>
                        </div>    
                        
                        <div style={{display:"flex",alignItems:"center", justifyContent:"space-evenly" }}>
                        <LikeButton name={name}/>
                        </div>
                    </div>
                </div>
            </div>    
            }
        </div>    
    );
}

export default Detail;