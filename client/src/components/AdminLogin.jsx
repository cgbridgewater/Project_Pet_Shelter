import {Link} from "react-router-dom"
const Login = () => {

    return(
        <div className="Wrapper" >

  <div className="LoginContainer">
          {/* <!-- trim area for spinner --> */}
          <span className="borderLine"></span> 	
          {/* <!-- ... -->  */}
              <div className="formContainer">
                {/* <!-- FORM REGISTER SECTION --> */}

                  <h1 style={{color:"red"}} className="BigText"> Admin Login </h1>
            
                {/* <!-- FORM LOGIN SECTION  --> */}
                <form action="/login" method="POST" modelAttribute="loginUser">
                  <h2 className="SmallText">Login Here:</h2>
                  
                  {/* <!-- FORM EMAIL SECTION --> */}
                    <div className="sectionOne">
                        <div className="formation">
                            <label path="email"> Email: </label>	
                  <errors path="email" className="errors"/>
                        </div>
                        <div className="errors">
                            <input path="email" className="input" />
                        </div>
                    </div>
              {/* <!-- ...  --> */}
              
              {/* <!-- FORM PASSWORD SECTION --> */}
                    <div className="sectionTwo">
                        <div className="formation">
                            <label path="password"> Password: </label>	
                          <errors path="password" className="errors"/>
                        </div>
                        <div className="errors">
                            <input path="password" type="password" className="input"/>
                        </div>
                    </div>
                  {/* <!-- ... --> */}
                  
                  {/* <!-- FORM BUTTON --> */}
                    <div className="buttonContainer">		 		
                        <button disabled className="button" type="submit">Login</button>
                    </div>
                    {/* <!-- ... --> */}
                    
                </form>
                {/* <!-- END FORM LOGIN SECTION --> */}
            <p style={{color:"white"}}>Not Registered? <Link to="/admin/register" style={{color:"#45f3ff"}}>Register Here!</Link></p>
            </div>

          </div>
   
         
        </div>
    )
}

export default Login