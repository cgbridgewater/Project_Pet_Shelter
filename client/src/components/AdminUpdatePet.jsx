import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";

const AdminUpdatePet = (props) => {

    const {id} = useParams();
    const[ name, setName ] = useState("");
    const[ type, setType ] = useState("");
    const[ description, setDescription ] = useState("");
    const[ age, setAge ] = useState("");
    const[ petImage, setPetImage ] = useState(null);
    const[ notes, setNotes ] = useState("");
    const[ checked1, setChecked1 ] = useState("");
    const[ checked2, setChecked2 ] = useState("");
    const[ checked3, setChecked3 ] = useState("");
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
        axios.get("http://localhost:8000/api/admin/pets/" + id, {withCredentials: true})
        .then( res => {
            console.log(res.data);
            setName(res.data.name);
            setType(res.data.type);
            setDescription(res.data.description);
            setAge(res.data.age);
            setPetImage(res.data.petImage);
            setNotes(res.data.notes);
            setChecked1(res.data.fixed);
            setChecked2(res.data.childFriendly);
            setChecked3(res.data.animalFriendly);
            setGetErrors("")
        })
        .catch((err) => {
            console.log(err.response.data)
            setGetErrors(err.response.data); 
        })
    }, []);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/pets/' + id, {
            name: name.toUpperCase(),
            type:type.toLowerCase(),
            description,
            age,
            petImage,
            notes,
            fixed: checked1,
            childFriendly: checked2,
            animalFriendly: checked3,
        })
            .then(res => {
                setGetErrors("")
                navigate("/admin/viewall");
                console.log(res);
            })
            .catch((err) => {
                console.log(err.response.data.error.errors) 
                setGetErrors(err.response.data.error.errors); //Set Errors
            })
    }

    const deletePet = (e) => {
        axios.delete('http://localhost:8000/api/pets/' + id, {withCredentials: true})
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
                <h1 style={{color:"#073DAA"}}>Pet Update Form</h1>
                <h1 style={{fontSize:"40px",color:"RED"}}>ADMIN PAGE </h1>
                <br />
                <Link to="/admin/viewall" style={{color: "#073DAA ",fontWeight:"800", textDecoration:"underline"}}> Back To Admin Main</Link>
            </div>
            {/* form start */}
            <form className="Form" style={{minWidth:"370px", fontSize:"20px", fontWeight:800,boxShadow:"0 8px 12px 0 rgba(0, 0, 0, 0.70)"}} onSubmit={onSubmitHandler}>
            {/* inner form container */}
                {/* Pet name */}
                <div className="FormInput">
                    <label>
                        { errors.name ? 
                            <h3 style={{color:"red", margin:0}}>{errors.name.message}</h3>
                            : <h3 style={{color:"#073DAA", margin:0, minWidth:"150px", textAlign:"start"}}>
                                Pet Name
                            </h3>
                        }
                    </label>
                    <input 
                        style={{paddingLeft:"5px", marginTop:"5px",backgroundColor:"lightgray", fontSize:"20px", fontWeight:800, border:"4px solid #073DAA", borderRadius:"15px", width:"250px"  }} 
                        type="text" 
                        onChange={(e) => setName(e.target.value)}
                        value= {name}
                        placeholder="Required"
                    />
                </div>
                {/* Pet type */}
                <div className="FormInput">
                    <label>
                        { errors.type ? 
                            <h3 style={{color:"red", margin:0}}>{errors.type.message}</h3>
                            : <h3 style={{color:"#073DAA", margin:0, minWidth:"150px", textAlign:"start"}}>
                                Pet Type
                            </h3>
                        }
                    </label>
                    <input 
                        style={{paddingLeft:"5px", marginTop:"5px",backgroundColor:"lightgray", fontSize:"20px", fontWeight:800, border:"4px solid #073DAA", borderRadius:"15px", width:"250px"  }} 
                        type="text" 
                        onChange={(e) => setType(e.target.value)}
                        value= {type}
                        placeholder="Required"
                    />
                </div>
                {/* Pet description */}
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
                {/* Pet age */}
                <div className="FormInput">
                    <label>
                        { errors.age ? 
                            <h3 style={{color:"red", margin:0}}>{errors.age.message}</h3>
                            : <h3 style={{color:"#073DAA", margin:0, minWidth:"150px", textAlign:"start"}}>
                                Pet Age
                            </h3>
                        }
                    </label>
                    <input 
                        style={{paddingLeft:"5px", marginTop:"5px",backgroundColor:"lightgray", fontSize:"20px", fontWeight:800, border:"4px solid #073DAA", borderRadius:"15px", width:"250px"  }} 
                        type="Number" 
                        step="1" 
                        min="1"
                        onChange={(e) => setAge(e.target.value)}
                        value={age}
                        placeholder="Required"
                    />
                </div>
                {/* Pet Image */}
                <div className="FormInput">
                    <label>
                        { errors.petImage ? 
                            <h3 style={{color:"red", margin:0}}>{errors.petImage.message}</h3>
                            : <h3 style={{color:"#073DAA", margin:0, minWidth:"150px", textAlign:"start"}}>
                                Image Link
                            </h3>
                        }
                    </label>
                    <input 
                        style={{paddingLeft:"5px", marginTop:"5px",backgroundColor:"lightgray", fontSize:"20px", fontWeight:800, border:"4px solid #073DAA", borderRadius:"15px", width:"250px"  }} 
                        type="text" 
                        onChange={(e) => setPetImage(e.target.value)}
                        value= {petImage}
                        placeholder="Required"
                    />
                </div>
                {/* Notes */}
                <div className="FormInput">
                    <label>
                        <h3 style={{color:"#073DAA", margin:0, minWidth:"150px", textAlign:"start"}}>
                            Notes
                        </h3>
                    </label>                    
                    <input 
                        style={{paddingLeft:"5px", marginTop:"5px",backgroundColor:"lightgray", fontSize:"20px", fontWeight:800, border:"4px solid #073DAA", borderRadius:"15px", width:"250px"  }} 
                        type="text" 
                        onChange={(e) => setNotes(e.target.value)}
                        value= {notes}
                        placeholder="Optional"
                    />
                </div>
                {/* Check Boxes */}
                <div className="FormInput">
                    {/* fixed */}
                    <div>
                        <label>
                            <h3 style={{color:"#073DAA", margin:0}}>Fixed? </h3>
                        </label>                    
                        <input 
                            style={{marginTop:"5px",backgroundColor:"lightgray", border:"4px solid #073DAA", height:"30px", width:"30px"  }} 
                            type="checkbox" 
                            checked={checked1}
                            onChange={(e) => setChecked1(!checked1)}
                            />
                    </div>
                    {/* child friendly */}
                    <div>
                        <label>
                            <h3 style={{color:"#073DAA", margin:0}}>
                                Child Friendly? 
                            </h3>
                        </label>                    
                        <input 
                            style={{marginTop:"5px",backgroundColor:"lightgray", border:"4px solid #073DAA", height:"30px", width:"30px"  }} 
                            type="checkbox" 
                            checked={checked2}
                            onChange={(e) => setChecked2(!checked2)}
                            />
                    </div>
                    {/* pet friendly */}
                    <div>
                        <label>
                            <h3 style={{color:"#073DAA", margin:0}}>
                                Pet Friendly? 
                            </h3>
                        </label>                    
                        <input 
                            style={{marginTop:"5px",backgroundColor:"lightgray", border:"4px solid #073DAA", height:"30px", width:"30px"  }} 
                            type="checkbox" 
                            checked={checked3}
                            onChange={(e) => setChecked3(!checked3)}
                            />
                    </div>
                </div>
                {/* form buttons */}
                <div className="FlierFlex">
                    <input className="SubmitButton" style={{color:"#073DAA", marginTop:"5%"}} type="submit" />
                    <button className="SubmitButton" style={{color:"red", marginTop:"5%"}} onClick={(e) =>{deletePet(id)}}>
                        Delete 
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AdminUpdatePet;