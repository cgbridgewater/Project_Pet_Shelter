import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AdoptForm = (props) => {

    const { petName, petId, petImage } = props;
    const[ userName, setUserName ] = useState("");
    const[ email, setEmail ] = useState("");
    const[ phone, setPhone ] = useState("");
    const [errors, setErrors] = useState("");
    const navigate = useNavigate();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/adopt", {
        petName,
        petId,
        petImage,
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
            {/* botton to trigger pop-up */}
            <a className="AdoptButton" href="#popup1">Adopt ME!</a>
            {/* pop up */}
            <div id="popup1" className="overlay">
                <div className="popup">
                    <h2>Sign-up to be contacted about <span style={{fontSize:"24px",color:"#fd6ee0"}}><em>{petName}</em></span></h2>
                    <a className="close" href="#">&times;</a>
                    <div className="content">
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
                                {/* submit button */}
                                <input className="SubmitButton" style={{color:"#073DAA", margin:"5% 0"}} type="submit" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdoptForm