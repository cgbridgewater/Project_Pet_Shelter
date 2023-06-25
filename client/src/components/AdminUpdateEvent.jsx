import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";

const AdminUpdateEvent = (props) => {

    const {id} = useParams();
    const[ title, setTitle ] = useState("");
    const[ date, setDate ] = useState("");
    const[ description, setDescription ] = useState("");
    const[ flierImage, setFlierImage ] = useState(null);
    const [errors, setGetErrors] = useState({});
    const navigate = useNavigate()

        // scroll fix
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

    useEffect(() => {
        axios.get("http://localhost:8000/api/admin/oneEvent/" + id, {withCredentials: true})
        .then( res => {
            // console.log(res.data);
            setTitle(res.data.title);
            setDate(res.data.date);
            setDescription(res.data.description);
            setFlierImage(res.data.flierImage);
            setGetErrors("")
        })
        .catch((err) => {
            console.log(err.response.data)
            setGetErrors(err.response.data); 
        })
    }, []);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/events/' + id, {
            title: title.toUpperCase(),
            date,
            description,
            flierImage,
        })
            .then(res => {
                setGetErrors("")
                navigate("/admin/viewall");
                console.log(res);
            })
            .catch((err) => {
                console.log(err.response.data.error.errors) 
                setGetErrors(err.response.data.error.errors); //Set Errors
                props.setAuthorized("You must log in to access admin pages!");  // Sends back to main page with this message
                navigate("/admin/signin")
            })
    }

    const deleteEvent = (e) => {
        axios.delete('http://localhost:8000/api/events/' + id)
            .then(res => {
                navigate("/admin/viewall");
            })
            .catch((err) => {
                console.log(err.response.data)
                setGetErrors(err.response.data); 
            })
    }

    return(
        <div className="Background"style={{minHeight:"63vh"}}>
            {/* top ribbon */}
            <div style={{display:"flex", justifyContent:"space-evenly", alignItems:"center", flexWrap:"wrap-reverse"}}>
                <h1 style={{color:"#073DAA"}}>Event Update Form</h1>
                <h1 style={{fontSize:"40px",color:"RED"}}>ADMIN PAGE </h1>
                <br />
                <Link to="/admin/viewall" style={{color: "#073DAA ",fontWeight:"800", textDecoration:"underline"}}> Back To Admin Main</Link>
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
                {/* Event Date */}
                <div className="FormInput">
                    <label>
                        { errors.Date ? 
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
                {/* Event Description */}
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
                {/* Event Flier Image */}
                <div className="FormInput">
                    <label>
                        { errors.flierImage ? 
                            <h3 style={{color:"red", margin:0}}>{errors.flierImage.message}</h3>
                            : <h3 style={{color:"#073DAA", margin:0, minWidth:"150px", textAlign:"start"}}>
                                Image Link
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
                
                {/* Event form button */}
                <div className="FlierFlex">
                    <input className="SubmitButton" style={{color:"#073DAA", marginTop:"5%"}} type="submit" />
                    <button className="SubmitButton" style={{color:"red", marginTop:"5%"}} onClick={(e) =>{deleteEvent(id)}}>
                        Delete 
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AdminUpdateEvent;