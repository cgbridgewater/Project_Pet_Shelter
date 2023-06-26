import { useEffect, useState} from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom"

const AdoptInfo = (props) => {

    // adoption application info
    const {id} = useParams();
    const [ petName, setPetName ] = useState("");
    const [ userName, setUserName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ phone, setPhone ] = useState("");
    const [ errors, setErrors] = useState("");
    const [ petImage, setpetImage ] = useState("");
    const navigate = useNavigate()

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
        axios.get("http://localhost:8000/api/adopt/" + id)
        .then( res => {
            setPetName(res.data.petName);
            setUserName(res.data.userName);
            setPhone(res.data.phone);
            setEmail(res.data.email);
            setpetImage(res.data.petImage);
            setErrors("")
        })
        .catch((err) => {
            setErrors(err.response.data); 
        })
    }, []);

    const deleteApplication = (e) => {
        axios.delete('http://localhost:8000/api/adopt/' + id)
            .then(res => {
                navigate("/admin/viewall");
            })
            .catch((err) => {
                setErrors(err.response.data); 
            })
    }
    
    return(
        
        <div className="AdoptInfoContainer">
        {/* page load ternary */}
            { userName.length === 0  ? 
            <div className="Background">
                <h3 style={{color:"#073DAA", fontWeight:700, fontSize:"30px", marginTop:"20"}}>It appears your lost...</h3>
                <h3 style={{color:"#073DAA", fontWeight:700, fontSize:"20px", marginTop:"20"}}>Click below and we'll get you back to to your owners.</h3>
                <br/>
                <Link  to="/">
                    <img className='Lost'src="https://img.freepik.com/premium-vector/animal-shelter-house-cartoon-illustration-containing-animals-adoption-flat-hand-drawn-style_2175-6053.jpg?w=2000" alt="" />        
                </Link>
            </div>
                : 
            // start content //
            <div>
                <div className="DetailContainer" style={{ minHeight:"67vh"}}>
                {/* content */}
                    {/* top ribbon */}
                    <div style={{margin:"2%",display:"flex",justifyContent:"space-evenly", alignItems:"center", height:"15%", marginTop:"20px"}}>
                        {/* Pet Name */}
                        <h1 style={{color:"#073DAA"}}>Request For : {petName}</h1>
                        {/* ADMIN PAGE TEXT */}
                        <h1 style={{fontSize:"40px",color:"red"}}> ADMIN PAGE</h1>
                        {/* links */}
                        <div>
                            <Link to="/admin/viewall" style={{color: "#073DAA ",fontWeight:"800", textDecoration:"underline"}}> Back To Admin Main Page</Link>
                        </div>
                    </div>
                    {/* Details Container */}
                    <div className="DetailContainer" style={{display:"flex", justifyContent:"space-evenly",flexWrap:"wrap", alignItems:"center",margin:"20px auto",padding:"2%", minHeight:"35%", width:"70%", minWidth:"370px",backgroundImage:"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt0KsyQv5YwZXalff-qFUxzk_C_rL80pkG3w&usqp=CAU)",backgroundSize:"cover", border:"2px solid #073DAA", borderRadius:"15px"}}>
                        {/* pet image */}
                        <img style={{width:"350px", borderRadius:"10px"}} src={petImage} alt="" />
                        {/* pet details */}
                        <div style={{width:"60%",minWidth:"350px", padding:"2%"}} className="details">
                            {/* Contact Name */}
                            <div style={{display:"flex",justifyContent:"space-between",padding:"10px",marginTop:"0px", fontWeight:900}}>
                                <p style={{color:"#073DAA", margin:0}}>Applicant Name</p>
                                <p  style={{width:"250px", textAlign:"end"}}>{userName}</p>
                            </div>
                        <hr />
                            {/* Contact Email */}
                            <div style={{display:"flex",justifyContent:"space-between",padding:"10px", fontWeight:900}}>
                                <p style={{color:"#073DAA", margin:0}}>Contact Email:</p>
                                <p  style={{width:"250px", textAlign:"end"}}>{email}</p>
                            </div>
                        <hr />
                            {/* Contact Phone */}
                            <div style={{display:"flex",justifyContent:"space-between",padding:"10px", fontWeight:900}}>
                                <p style={{color:"#073DAA", margin:0}}>Contact Phone:</p>
                                <p  style={{width:"250px", textAlign:"end"}}>{phone}</p>
                            </div>                    
                        </div>
                    </div>
                    {/* Delete Button */}
                    <div className="FlierFlex">
                        <button style={{margin:"0 auto"}} className="DeleteButton" onClick={(e) =>{deleteApplication(id)}}>
                            Delete Application 
                        </button>
                    </div>
                </div>
            </div>    
        }
        </div>    
    )
}

export default AdoptInfo