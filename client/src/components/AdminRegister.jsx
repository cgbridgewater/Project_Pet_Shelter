import {useNavigate, Link} from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';




const Register = (props) => {

    const [state, setState] = useState ({
        register: {
            email:"",
            password:"",
            confirmPassword:""
        }
    });

    const {register} = state;
    const navigate = useNavigate()

    const handleRegInputs =(e) => {
        // props.setAuthorized("");
        setState({...state, register: {...state.register,[ e.target.name]: e.target.value}})
    }

    const handleRegistration = (e) =>{
        e.preventDefault()
        axios.post("http://localhost:8000/api/register", register, {withCredentials: true})
            .then(res => {console.log(res)
                navigate("/admin/viewall")
            })
            .catch(err => console.log(err))
    }




    return(
        <div className="Wrapper" >
            {/* Content */}
            <div className="LoginContainer">
                {/* Trim area for spinner  */}
                <span className="borderLine"></span> 	
                {/* Form Container */}
                <div className="formContainer">
                    {/* Form Title */}
                    <h1  className="BigText"> Admin Registration </h1>
                    <h2 className="SmallText">Register Here:</h2>
                    {/* FORM SECTION  */}
                    <form onSubmit={handleRegistration}>
                        {/* Input Container */}
                        <div className="InputContainer"> 
                            {/* EMAIL SECTION  */}
                            <div className="sectionOne" >
                                <div className="formation">
                                    {/* <label path="email"> Email: </label>	 */}
                                    {/* <errors path="email" className="errors"/> */}
                                </div>
                                <input 
                                    onChange={handleRegInputs}
                                    name="email" 
                                    type="email" 
                                    className="input" 
                                    placeholder="Enter Email"
                                />
                            </div>
                            {/* PASSWORD SECTION  */}
                            <div className="sectionTwo">
                                <div className="formation">
                                    {/* <label path="password"> Password: </label>	 */}
                                    {/* <errors path="password" className="errors"/> */}
                                </div>
                                <input 
                                    onChange={handleRegInputs}
                                    name="password" 
                                    type="password" 
                                    className="input" 
                                    placeholder="Enter Password"
                                />
                            </div>
                            {/* CONF PW SECTION  */}
                            <div className="sectionThree">
                                <div className="formation">
                                    {/* <label path="confirmPass"> Confirm Password: </label>	 */}
                                    {/* <errors path="confirmPass" className="errors"/> */}
                                </div>
                                <input 
                                    onChange={handleRegInputs}
                                    name="confirmPassword" 
                                    type="password" 
                                    className="input" 
                                    placeholder="Confirm Password"
                                />
                            </div>
                        </div>
                        {/* FORM BUTTON  */}
                        <div className="buttonContainer">		 		
                            <button className="button" type="submit">Register</button>
                        </div>
                    </form>
                    {/* END FORM SECTION  */}
                    <p style={{color:"white"}}>Already Registered? <Link to="/admin/signin" style={{color:"#45f3ff"}}>Sign-in Here!</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Register