import React, {useState,useEffect} from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const AdminEventForm = () => {

    // scroll to top fix
    useEffect(() => {
        window.scrollTo(0,0)
    },[])

    const[ title, setTitle ] = useState("");
    const[ date, setDate ] = useState("");
    const[ description, setDescription ] = useState("");
    const[ flierImage, setFlierImage ] = useState(null);
    const [errors, setErrors] = useState("");
    const navigate = useNavigate();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/events", {
            title: title.toUpperCase(),
            date,
            description,
            flierImage,
    })
        .then( res => {
            console.log(res);
            console.log(res.data) 
            setTitle("")
            setDate("")
            setDescription("")
            setFlierImage("")
            setErrors({})
            navigate("/admin/viewall");
        })
        .catch((err) => {
            console.log(err.response.data.error.errors) 
            setErrors(err.response.data.error.errors); //Set Errors
        })
    }

    return(
        <div className="Background" style={{minHeight:"63vh"}}>
            {/* top ribbon */}
            <div  className='PetFormHeader' style={{display:"flex", justifyContent:"space-evenly", alignItems:"center", flexWrap:"wrap-reverse"}}>
                <h1 style={{color:"#073DAA"}}>New Event Form</h1>
                <h1 style={{fontSize:"40px",color:"RED"}}>ADMIN PAGE </h1>
                <br />
                <Link to="/admin/viewall" style={{fontSize:"20px", fontWeight:"700", textDecoration:"underline"}}> Back To Admin Main</Link>
            </div>
            {/* form start */}
            <form className="Form" style={{minWidth:"370px", fontSize:"20px", fontWeight:800,boxShadow:"0 8px 12px 0 rgba(0, 0, 0, 0.70)"}} onSubmit={onSubmitHandler}>
            {/* inner form container */}
                {/* Event Title */}
                <div className="FormInput">
                    <label>
                        { errors.title ? 
                            <h3 style={{color:"red", margin:0}}>{errors.title.message}</h3>
                            : <h3 style={{color:"#073DAA", margin:0, minWidth:"150px", textAlign:"start"}}>
                                Title
                            </h3>
                        }
                    </label>
                    <input 
                        style={{paddingLeft:"5px", marginTop:"5px",backgroundColor:"lightgray", fontSize:"20px", fontWeight:800, border:"4px solid #073DAA", borderRadius:"15px", width:"250px"  }} 
                        type="text" 
                        onChange={(e) => setTitle(e.target.value)}
                        value= {title}
                        placeholder="Required"
                    />
                </div>
                {/* Date */}
                <div className="FormInput">
                    <label>
                        { errors.date ? 
                            <h3 style={{color:"red", margin:0}}>{errors.date.message}</h3>
                            : <h3 style={{color:"#073DAA", margin:0, minWidth:"150px", textAlign:"start"}}>
                                Date
                            </h3>
                        }
                    </label>
                    <input 
                        style={{paddingLeft:"5px", marginTop:"5px",backgroundColor:"lightgray", fontSize:"20px", fontWeight:800, border:"4px solid #073DAA", borderRadius:"15px", width:"250px"  }} 
                        type="date" 
                        onChange={(e) => setDate(e.target.value)}
                        value= {date}
                        placeholder="Required"
                    />
                </div>
                {/* description */}
                <div className="FormInput">
                    <label>
                        { errors.description ? 
                            <h3 style={{color:"red", margin:0}}>{errors.description.message}</h3>
                            : <h3 style={{color:"#073DAA", margin:0, minWidth:"150px", textAlign:"start"}}>
                                Description
                            </h3>
                        }
                    </label>
                    <input 
                        style={{paddingLeft:"5px", marginTop:"5px",backgroundColor:"lightgray", fontSize:"20px", fontWeight:800, border:"4px solid #073DAA", borderRadius:"15px", width:"250px"  }} 
                        type="text" 
                        onChange={(e) => setDescription(e.target.value)}
                        value= {description}
                        placeholder="Required"
                    />
                </div>
                
                {/* Flier Image */}
                <div className="FormInput">
                    <label>
                        { errors.flierImage ? 
                            <h3 style={{color:"red", margin:0}}>{errors.flierImage.message}</h3>
                            : <h3 style={{color:"#073DAA", margin:0, minWidth:"150px", textAlign:"start"}}>
                                Flier Image Link
                            </h3>
                        }
                    </label>
                    <input 
                        style={{paddingLeft:"5px", marginTop:"5px",backgroundColor:"lightgray", fontSize:"20px", fontWeight:800, border:"4px solid #073DAA", borderRadius:"15px", width:"250px"  }} 
                        type="text" 
                        onChange={(e) => setFlierImage(e.target.value)}
                        value= {flierImage}
                        placeholder="Required"
                    />
                </div>
                {/* form button */}
                <div>
                    <input className="SubmitButton" style={{color:"#073DAA", marginTop:"5%"}} type="submit" />
                </div>
            </form>
        </div>
    )
}

export default AdminEventForm;