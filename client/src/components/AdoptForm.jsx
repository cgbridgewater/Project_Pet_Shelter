import React, {useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AdoptForm = (props) => {

    const { petName, petId } = props;
    const[ userName, setUserName ] = useState("");
    const[ email, setEmail ] = useState("");
    const[ phone, setPhone ] = useState("");
    const [errors, setErrors] = useState("");
    const navigate = useNavigate();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/pets/adopt", {
        petName,
        petId,
        userName,
        email,
        phone
    })
        .then( res => {
            console.log(res);
            console.log(res.data) 
            setUserName("")
            setEmail("")
            setPhone("")
            setErrors({})
            navigate("/petshelter/adopting");
        })
        .catch((err) => {
            console.log(err.response.data.error.errors) 
            setErrors(err.response.data.error.errors); //Set Errors
        })
    }

    return(
        <div className="Background">
            <a class="AdoptButton" href="#popup1">Adopt ME!</a>
            {/* pop up */}
            <div id="popup1" class="overlay">
                <div class="popup">
                    <h2>Pet Adoption Form</h2>
                    <a class="close" href="#">&times;</a>
                    <div class="content">
                        {/* form start */}
                        <form 
                                className="FormAdopt"    
                                onSubmit={onSubmitHandler}
                                style={{width:"50%", minWidth:"330px", fontSize:"20px", fontWeight:800,boxShadow:"0 8px 12px 0 rgba(0, 0, 0, 0.70)"}} 
                        >
                        {/* inner form container */}
                            <div>
                                {/* name */}
                                <div className="FormInput">
                                    <label style={{minWidth:"200px", textAlign:"start"}}>
                                        { errors.userName ? 
                                            <h3 style={{color:"red", margin:0}}>{errors.userName.message}</h3>
                                            : <h3 style={{color:"#073DAA", margin:0}}> Name:</h3>
                                        }
                                        </label>
                                    <input 
                                        style={{backgroundColor:"lightgray", fontSize:"20px", fontWeight:800, border:"4px solid #073DAA", borderRadius:"15px", width:"60%", minWidth:"300px", paddingLeft:"15px"}} 
                                        type="text" 
                                        onChange={(e) => setUserName(e.target.value)}
                                        value= {userName}
                                    />
                                </div>
                                {/* Email */}
                                <div className="FormInput">
                                    <label style={{minWidth:"200px", textAlign:"start"}}>
                                        { errors.email ? 
                                            <h3 style={{color:"red", margin:0}}>{errors.email.message}</h3>
                                            : <h3 style={{color:"#073DAA", margin:0}}>Email:</h3>
                                        }
                                        
                                    </label>
                                    <input 
                                        style={{backgroundColor:"lightgray", fontSize:"20px", fontWeight:800, border:"4px solid #073DAA", borderRadius:"15px",width:"60%", minWidth:"300px", paddingLeft:"15px"}} 
                                        type="email" 
                                        onChange={(e) => setEmail(e.target.value)}
                                        value= {email}
                                    />
                                </div>
                                {/* Phone */}
                                <div className="FormInput">
                                    <label style={{minWidth:"200px", textAlign:"start"}}>
                                        { errors.phone ? 
                                            <h3 style={{color:"red", margin:0}}>{errors.phone.message}</h3>
                                            : <h3 style={{color:"#073DAA", margin:0}}>Phone:</h3>
                                        }
                                    </label>
                                    <input 
                                        style={{backgroundColor:"lightgray", fontSize:"20px", fontWeight:800, border:"4px solid #073DAA", borderRadius:"15px",width:"60%", minWidth:"300px", paddingLeft:"15px"}} 
                                        type="number" 
                                        onChange={(e) => setPhone(e.target.value)}
                                        value= {phone}
                                    />
                                </div>
                                {/* Pet Name */}
                                <div className="FormInput">
                                    <label style={{minWidth:"200px", textAlign:"start"}}>
                                        Pet Name:
                                    </label>
                                    <label style={{minWidth:"200px", textAlign:"start",color:"#fd6ee0", paddingLeft:"15px"}}>
                                        {petName}
                                    </label>
                                </div>
                                    {/* <h6 style={{margin:"3px", color:"red"}}> * is required</h6> */}
                                {/* form button */}
                                <input className="SubmitButton" style={{color:"#073DAA", marginTop:"5%"}} type="submit" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdoptForm