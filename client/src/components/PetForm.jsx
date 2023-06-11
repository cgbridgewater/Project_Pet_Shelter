import React, {useState,useEffect} from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const PetForm = (props) => {

    // scroll to top fix
    useEffect(() => {
        window.scrollTo(0,0)
    },[])

    const[ name, setName ] = useState("");
    const[ type, setType ] = useState("");
    const[ description, setDescription ] = useState("");
    const[ skillOne, setSkillOne ] = useState("");
    const[ skillTwo, setSkillTwo ] = useState("");
    const[ skillThree, setSkillThree ] = useState("");
    const[ age, setAge ] = useState("");
    const [errors, setErrors] = useState("");
    const navigate = useNavigate();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/pets", {
            name: name.toUpperCase(),
        type:type.toLowerCase(),
        description,
        skillOne,
        skillTwo,
        skillThree,
        age,
        // likes // like tracking to be added later
    })
        .then( res => {
            console.log(res);
            console.log(res.data) 
            setName("")
            setType("")
            setDescription("")
            setSkillOne("")
            setSkillTwo("")
            setSkillThree("")
            setAge("")
            setErrors({})
            navigate("/petshelter");
        })
        .catch((err) => {
            console.log(err.response.data.error.errors) 
            setErrors(err.response.data.error.errors); //Set Errors
        })
    }

    return(
        <div style={{height:"63vh"}}>
            {/* top ribbon */}
            <div style={{display:"flex", justifyContent:"space-evenly", alignItems:"center"}}>
                <h1 style={{color:"#073DAA"}}>Know a pet needing a home?</h1>
                <Link to="/petshelter" style={{color: "#073DAA ",fontWeight:"800", textDecoration:"underline"}}> Back To Shelter</Link>
            </div>
            {/* form start */}
            <form className="Form" style={{ fontSize:"20px", fontWeight:800,boxShadow:"0 8px 12px 0 rgba(0, 0, 0, 0.70)"}} onSubmit={onSubmitHandler}>
            {/* inner form container */}
                <div style={{display:"flex", justifyContent:"space-evenly", alignItems:"center"}}>
                    {/* left column container */}
                    <div style={{width:"40%"}}>
                        {/* name */}
                        <div>
                            <label>
                                { errors.name ? 
                                    <h3 style={{color:"red", margin:0}}>{errors.name.message}</h3>
                                    : <h3 style={{color:"#073DAA", margin:0}}>Pet Name *</h3>
                                }
                            </label>
                            <input 
                                style={{marginTop:"5px",backgroundColor:"lightgray", fontSize:"20px", fontWeight:800, border:"4px solid #073DAA", borderRadius:"15px", width:"70%"  }} 
                                type="text" 
                                onChange={(e) => setName(e.target.value)}
                                value= {name}
                            />
                        </div>
                        {/* type */}
                        <div>
                            <label>
                                { errors.type ? 
                                    <h3 style={{color:"red", margin:0}}>{errors.type.message}</h3>
                                    : <h3 style={{color:"#073DAA", margin:0}}>Pet Type *</h3>
                                }
                            </label>
                            <input 
                                style={{marginTop:"5px",backgroundColor:"lightgray", fontSize:"20px", fontWeight:800, border:"4px solid #073DAA", borderRadius:"15px", width:"70%"  }} 
                                type="text" 
                                onChange={(e) => setType(e.target.value)}
                                value= {type}
                            />
                        </div>
                        {/* description */}
                        <div>
                            <label>
                                { errors.description ? 
                                    <h3 style={{color:"red", margin:0}}>{errors.description.message}</h3>
                                    : <h3 style={{color:"#073DAA", margin:0}}>Description *</h3>
                                }
                            </label>
                            <input 
                                style={{marginTop:"5px",backgroundColor:"lightgray", fontSize:"20px", fontWeight:800, border:"4px solid #073DAA", borderRadius:"15px", width:"70%"  }} 
                                type="text" 
                                onChange={(e) => setDescription(e.target.value)}
                                value= {description}
                            />
                        </div>
                            <h6 style={{margin:"3px"}}> * is required</h6>
                        {/* form button */}
                        <input className="SubmitButton" style={{color:"#073DAA", marginTop:"5%"}} type="submit" />
                    </div>

                    {/* right column */}
                    <div className="RightColumn" style={{width:"40%"}}>
                        {/* age */}
                        <label>
                            <h3 style={{color:"#073DAA", margin:0}}>Pet Age</h3>
                        </label>
                        <input 
                            style={{marginTop:"5px",backgroundColor:"lightgray", fontSize:"20px", fontWeight:800, border:"4px solid #073DAA", borderRadius:"15px", width:"70%"  }} 
                            type="Number" 
                            step="1" 
                            min="1"
                            onChange={(e) => 
                            setAge(e.target.value)}
                            value={age}
                            placeholder="optional"
                        />
                        {/* skills */}
                        <label>
                            <h3 style={{color:"#073DAA", margin:0}}>Skill 1 </h3>
                        </label>
                        <input 
                            style={{marginTop:"5px",backgroundColor:"lightgray", fontSize:"20px", fontWeight:800, border:"4px solid #073DAA", borderRadius:"15px", width:"70%" }} 
                            type="text" 
                            onChange={(e) => setSkillOne(e.target.value)}
                            value= {skillOne}
                            placeholder="optional"
                        />
                        <label>
                            <h3 style={{color:"#073DAA", margin:0}}>Skill 2 </h3>
                        </label>                    <input 
                            style={{marginTop:"1px",backgroundColor:"lightgray", fontSize:"20px", fontWeight:800, border:"4px solid #073DAA", borderRadius:"15px", width:"70%"  }} 
                            type="text" 
                            onChange={(e) => setSkillTwo(e.target.value)}
                            value= {skillTwo}
                            placeholder="optional"
                        />
                        <label>
                            <h3 style={{color:"#073DAA", margin:0}}>Skill 3 </h3>
                        </label>                    <input 
                            style={{margin:"1px",backgroundColor:"lightgray", fontSize:"20px", fontWeight:800, border:"4px solid #073DAA", borderRadius:"15px", width:"70%"  }} 
                            type="text" 
                            onChange={(e) => setSkillThree(e.target.value)}
                            value= {skillThree}
                            placeholder="optional"
                        />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default PetForm;