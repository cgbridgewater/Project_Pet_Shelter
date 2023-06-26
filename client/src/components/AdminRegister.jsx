import { useNavigate, Link } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';

const Register = (props) => {

    const [errors, setErrors] = useState("");
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
        props.setAuthorized("");
        setState({...state, register: {...state.register,[ e.target.name]: e.target.value}})
    }

    const handleRegistration = (e) =>{
        e.preventDefault()
        axios.post("http://localhost:8000/api/register", register, {withCredentials: true})
            .then(res => {console.log(res)
                navigate("/admin/viewall")
            })
            .catch(err =>  {
                setErrors(err.response.data.error.errors); //Set Errors
            })
    }

    return(
        <div className="Wrapper" >
            <h2 id='LoginH2' className='Unauthorized'>{props.authorized}</h2>
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
                            { errors.email ? 
                                    <input
                                    style={{borderColor:"red"}} 
                                    onChange={handleRegInputs}
                                    type='text'
                                    name="email" 
                                    className="input" 
                                    placeholder={errors.email.message}
                                    /> 
                                    :
                                    <input 
                                        onChange={handleRegInputs}
                                        type='text'
                                        name="email" 
                                        className="input" 
                                        placeholder="Enter Email"
                                    />
                            }
                            </div>
                            {/* PASSWORD SECTION  */}
                            <div className="sectionTwo">
                            { errors.password ? 
                                    <input
                                    style={{borderColor:"red"}} 
                                    onChange={handleRegInputs}
                                    name="password" 
                                    type="password" 
                                    className="input" 
                                    placeholder={errors.password.message}
                                    /> 
                                    :
                                    <input 
                                        onChange={handleRegInputs}
                                        name="password" 
                                        type="password" 
                                        className="input" 
                                        placeholder="Create Password"
                                    />
                            }
                            </div>
                            {/* CONF PW SECTION  */}
                            <div className="sectionThree">
                            { register.password !== register.confirmPassword ? 
                                    <input
                                    style={{borderColor:"red"}} 
                                    onChange={handleRegInputs}
                                    name="confirmPassword" 
                                    type="password" 
                                    className="input" 
                                    placeholder="Passwords Must Match"
                                    /> 
                                    :
                                    <input 
                                        onChange={handleRegInputs}
                                        name="password" 
                                        type="password" 
                                        className="input" 
                                        placeholder="Confirm Password"
                                    />
                            }
                            </div>
                        </div>
                        {/* FORM BUTTON  */}
                        <div className="buttonContainer">		 		
                            <button disabled className="button" type="submit">Register</button>
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