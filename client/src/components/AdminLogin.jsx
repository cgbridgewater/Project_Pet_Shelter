import { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Login = (props) => {

    const [regState, setRegState] = useState ({
        register: {
            firstName: "",
            lastName: "",
            email:"",
            password:"",
            confirmPassword:""
        }
    });

    const {register} = regState
    const handleRegInputs =(e) => {
        props.setAuthorized("");
        setRegState({...regState, register: {...regState.register,[ e.target.name]: e.target.value}})
    }
    const handleRegistration = (e) =>{
        e.preventDefault()
        axios.post("http://localhost:8000/api/register", register, {withCredentials: true})
            .then(res => {console.log(res)
                navigate("/users")
            })
            .catch(err => console.log(err))
    }



    const [loginState, setLoginState] = useState ({
        login:{
            email:"",
            password:""
        }
    })

    const {login} = loginState;
    const navigate = useNavigate()

    const handleLoginInputs = (e) => {
        PaymentResponse.setAuthorized("");
        setLoginState({...loginState, login: {...loginState.login, [e.target.name]: e.target.value}})
    }

    const handleLogin = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/login", login, {withCredentials:true})
        .then(res => { console.log(res)
            navigate("/admin/viewall")
        })
        .catch(err => console.log(err))
    }



    return(
        <div className="background">
            <div className="container">
                <input type="radio" name="switch" id="switch_register" />
                <label className="l_switch" htmlFor="switch_register">Need To Sign Up? </label>
                <form onSubmit={handleRegistration} className="form">
                    <div>
                    <h2>Sign Up</h2>
                    {/* email signup */}
                    <label htmlFor="email">Email</label>
                    <input 
                        name="email" 
                        placeholder="email address"
                        onChange={handleRegInputs}
                    />
                    {/* password signup */}
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        placeholder="password"
                        onChange={handleRegInputs}
                    />
                    {/* password signup */}
                    <label htmlFor="verPass">Verify Password</label>
                    <input 
                    name="verPass" 
                    type="password" 
                    placeholder="password"
                    onChange={handleRegInputs}
                    />
                    {/* signup button */}
                    <button >Sign Up!</button>
                    </div>
                </form>
                <input type="radio" name="switch" id="switch_login" defaultChecked/>
                <label className="l_switch" htmlFor="switch_login">Already A Member?</label>
                <form className="form" onSubmit={handleLogin}>
                    <div> 
                    <h2>Login</h2>
                    {/* email login */}
                    <label htmlFor="username">Email</label>
                    <input
                        name="email" 
                        placeholder="email address"
                        onChange={handleLoginInputs}
                    />
                    {/* password login */}
                    <label htmlFor="password">Password</label>
                    <input 
                        name="password" 
                        type="password" 
                        placeholder="password"
                        onChange={handleLoginInputs}    
                    />
                    {/* login button */}
                    <button>Log In!</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login