const Login = () => {

    return(
        <div className="background">
            <div class="container">
                <input type="radio" name="switch" id="switch_register" />
                <label class="l_switch" for="switch_register">Need To Sign Up? </label>
                <form class="form">
                    <div>
                    <h2>Register</h2>
                    <label>Email</label>
                    <input placeholder="email address"/>
                    <label>Password</label>
                    <input type="password" placeholder="passwords"/>
                    <label>Verify Password</label>
                    <input type="password" placeholder="password"/>
                    <button>Sign Up!</button>
                    </div>
                </form>
                <input type="radio" name="switch" id="switch_login" checked/>
                <label class="l_switch" for="switch_login">Already A Member?</label>
                <form class="form">
                    <div> 
                    <h2>Login</h2>
                    <label>Username</label>
                    <input placeholder="email address"/>
                    <label>Password</label>
                    <input type="password" placeholder="password"/>
                    <button>Log In!</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login