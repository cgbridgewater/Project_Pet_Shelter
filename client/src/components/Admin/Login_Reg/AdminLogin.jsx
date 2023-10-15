import './Login.css';
import { useNavigate, Link} from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';

const Login = (props) => {
    const [errors, setErrors] = useState("");
    const [state, setState] = useState ({
        login: {
            email:"",
            password:""
        }
    });

    const {login} = state;
    const navigate = useNavigate()
    const handleLoginInputs = (e) => {
        props.setAuthorized("");
        setState({...state, login: {...state.login, [e.target.name]: e.target.value}})
    }

    const handleLogin = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/login", login, {withCredentials: true})
            .then(res => { 
                navigate("/admin/viewall")
            })
            .catch(err =>  {
                setErrors(err.response.data); //Set Errors
            })
            
    }

    return(
        <div className="Wrapper" >
            <h2 id='LoginH2' className='Unauthorized'>{props.authorized}</h2>
            {/* Login Container */}
            <div className="LoginContainer">
                {/* <!-- trim area for spinner --> */}
                <span className="borderLine"></span> 	
                {/* <!-- FORM SECTION --> */}
                <div className="formContainer">
                    {/* Form Titles */}
                    <h1 style={{color:"red"}} className="BigText"> Admin Login </h1>
                    <h2 className="SmallText">Login Here:</h2>
                    {/* <!-- FORM SECTION  --> */}
                    <form onSubmit={handleLogin}>
                        <div className="InputContainer">
                        {/* <!-- EMAIL SECTION --> */}
                            <div className="sectionOne">
                                <div className="errors">
                                { errors.message ? 
                                    <input
                                    style={{borderColor:"red"}} 
                                    onChange={handleLoginInputs}
                                    type='text'
                                    name="email" 
                                    className="input" 
                                    placeholder="Invalid Login"
                                    /> 
                                    :
                                    <input 
                                        onChange={handleLoginInputs}
                                        type='text'
                                        name="email" 
                                        className="input" 
                                        placeholder="Enter Email"
                                    />
                                }
                                </div>
                            </div>
                            {/* <!-- PASSWORD SECTION --> */}
                            <div className="sectionTwo">
                                <div className="errors">
                                { errors.message ? 
                                    <input
                                    style={{borderColor:"red"}} 
                                    onChange={handleLoginInputs}
                                    type='password'
                                    name="password" 
                                    className="input" 
                                    placeholder="Invalid Login"
                                    /> 
                                    :
                                    <input 
                                    onChange={handleLoginInputs}
                                        name="password" 
                                        type="password" 
                                        className="input" 
                                        placeholder="Enter Password"
                                    />
                                }
                                </div>
                            </div>
                        </div>
                        {/* <!-- FORM BUTTON --> */}
                        <div className="buttonContainer">
                            <button className="button" type="submit">Login</button>
                        </div>
                    </form>
                    {/* <!-- END FORM SECTION --> */}
                    <p style={{color:"white"}}>Not Registered? <Link to="/admin/register" style={{color:"#45f3ff"}}>Register Here!</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Login