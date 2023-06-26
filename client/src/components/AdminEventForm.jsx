import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const AdminEventForm = (props) => {

    const[ title, setTitle ] = useState("");
    const[ date, setDate ] = useState("");
    const[ description, setDescription ] = useState("");
    const[ flierImage, setFlierImage ] = useState("");
    const [errors, setErrors] = useState("");
    const navigate = useNavigate();

    // scroll to top fix
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

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/events", {
            title: title,
            date,
            description,
            flierImage,
    })
        .then( res => {
            setTitle("")
            setDate("")
            setDescription("")
            setFlierImage("")
            setErrors({})
            navigate("/admin/viewall");
        })
        .catch((err) => {
            setErrors(err.response.data.error.errors); //Set Errors
        })
    }

    return(
        <div className="Background" style={{minHeight:"69vh"}}>
            {/* top ribbon */}
            <div  className='PetFormHeader' style={{display:"flex", justifyContent:"space-evenly", alignItems:"center", flexWrap:"wrap-reverse"}}>
                <h1 style={{color:"#073DAA"}}>New Event Form</h1>
                <h1 style={{fontSize:"40px",color:"RED"}}>ADMIN PAGE </h1>
                <br />
                <Link to="/admin/viewall" style={{fontSize:"20px", fontWeight:"700", textDecoration:"underline"}}> Back To Admin Main</Link>
            </div>
            {/* form start */}
            <form className="Form" style={{marginTop:"2%",minWidth:"370px", fontSize:"20px", fontWeight:800,boxShadow:"0 8px 12px 0 rgba(0, 0, 0, 0.70)"}} onSubmit={onSubmitHandler}>
            {/* inner form container */}
                {/* Event Title */}
                <div className="FormInput">
                    <label>
                        { errors.title ? 
                            <p style={{color:"red", margin:0, textAlign:"start"}}>{errors.title.message}</p>
                            : <p style={{color:"#073DAA", margin:0, minWidth:"150px", textAlign:"start"}}>
                                Title
                            </p>
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
                            <p style={{color:"red", margin:0, textAlign:"start"}}>{errors.date.message}</p>
                            : <p style={{color:"#073DAA", margin:0, minWidth:"150px", textAlign:"start"}}>
                                Date
                            </p>
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
                            <p style={{color:"red", margin:0, textAlign:"start"}}>{errors.description.message}</p>
                            : <p style={{color:"#073DAA", margin:0, minWidth:"150px", textAlign:"start"}}>
                                Description
                            </p>
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
                            <p style={{color:"red", margin:0, textAlign:"start"}}>{errors.flierImage.message}</p>
                            : <p style={{color:"#073DAA", margin:0, minWidth:"150px", textAlign:"start"}}>
                                Flier Image Link
                            </p>
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
                    <input className="SubmitButton" style={{marginTop:"5%"}} type="submit" />
                </div>
            </form>
        </div>
    )
}

export default AdminEventForm;