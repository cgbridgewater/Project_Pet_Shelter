
const Login = () => {

    return(
        <div className="Wrapper" >

  <div className="LoginContainer">
          {/* <!-- trim area for spinner --> */}
          <span className="borderLine"></span> 	
          {/* <!-- ... -->  */}
              <div className="formContainer">
                {/* <!-- FORM REGISTER SECTION --> */}
                <form action="/register" method="POST" modelAttribute="user">
                  <h1 style={{color:"red"}} className="BigText"> Admin Login </h1>

                  <h2 className="SmallText">Register Here:</h2>
                    {/* <!-- FORM USER Name SECTION --> */}
                    <div className="sectionOne">
                        <div className="formation">
                            <label path="userName"> User Name:  </label>	
                          <errors path="userName" className="errors"/>
                        </div>
                        
                        <div className="errors">
                            <input path="userName" className="input" />
                        </div>
                    </div>
                    {/* <!-- ...  --> */}

                    {/* <!-- FORM EMAIL SECTION --> */}
                    <div className="sectionTwo">
                        <div className="formation">
                            <label path="email"> Email: </label>	
                            <errors path="email" className="errors"/>
                        </div>
                        <div className="errorBox">
                            <input path="email" type="email" className="input" />
                        </div>
                    </div>
                    {/* <!-- ...  --> */}

                    {/* <!-- FORM PASSWORD SECTION --> */}
                    <div className="sectionThree">
                        <div className="formation">
                            <label path="password"> Password: </label>	
                            <errors path="password" className="errors"/>
                        </div>
                        <div className="errors">
                            <input path="password" type="password" className="input" />
                        </div>
                    </div>
                    {/* <!-- ...  --> */}

                    {/* <!-- FORM CONF PW SECTION --> */}
                    <div className="sectionFour">
                        <div className="formation">
                            <label path="confirmPass"> Confirm Password: </label>	
                            <errors path="confirmPass" className="errors"/>
                        </div>
                        <div className="errors">
                            <input path="confirmPass" type="password" className="input" />
                        </div>
                    </div>
                  {/* <!-- ...  --> */}
                
                  {/* <!-- FORM BUTTON --> */}
                    <div className="buttonContainer">		 		
                        <button disabled className="button" type="submit">Register</button>
                    </div>
                  {/* <!-- ... --> */}
                  
                </form>
                {/* <!-- END FORM REGISTER SECTION --> */}

              <br/>
            
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
            </div>
          
          </div>
   
         
        </div>
    )
}

export default Login