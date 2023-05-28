import React, {useEffect, useState} from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";

const Update = (props) => {

    // scroll fix
    useEffect(() => {
        window.scrollTo(0,0)
    },[])

    const {id} = useParams();
    const[ name, setName ] = useState("");
    const[ type, setType ] = useState("");
    const[ description, setDescription ] = useState("");
    const[ skillOne, setSkillOne ] = useState("");
    const[ skillTwo, setSkillTwo ] = useState("");
    const[ skillThree, setSkillThree ] = useState("");
    const[ age, setAge ] = useState("");
    const [errors, setUpdateErrors] = useState("");
    const [getErrors, setGetErrors] = useState("{}");
    const navigate = useNavigate()

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
                setGetErrors(err.response.data.path); //Set Errors
        })
    }, [id]);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/pets/' + id, {
            name: name.toUpperCase(),
            type: type.toLowerCase(),
            description,
            skillOne,
            skillTwo,
            skillThree,
            age,
        })
            .then(res => {
                setUpdateErrors("")
                navigate("/petshelter");
                console.log(res);
            })
            .catch((err) => {
                console.log(err.response.data.error.errors) 
                setUpdateErrors(err.response.data.error.errors); //Set Errors
            })
    }

    const adopt = (e) => {
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

    return(
        <div>
            {/* page load ternary */}
            { getErrors.length > 0  ? 
            <div className="Background">
                <h3 style={{color:"#073DAA", fontWeight:700, fontSize:"30px", marginTop:"20"}}>It appears your lost.. Don't worry we'll get you to your owners.</h3>
                <Link to="/petshelter" className='ViewButton' style={{  textDecoration: "none"}}>Back To Shelter</Link>
                <br/>
                <br/>
                <img style={{height:"450px", borderRadius:"40%"}} src="https://img.freepik.com/premium-vector/animal-shelter-house-cartoon-illustration-containing-animals-adoption-flat-hand-drawn-style_2175-6053.jpg?w=2000" alt="" />        
            </div>
                : //ternary for bad data flow //
            // start content //
        <div style={{height:"61vh"}}>
            {/* top ribbon */}
            <div style={{display:"flex", justifyContent:"space-evenly", alignItems:"center"}}>
                <h1 style={{color:"#073DAA"}}>Edit {name}</h1>
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
        }</div>    // ternary ender
    )
}

export default Update;