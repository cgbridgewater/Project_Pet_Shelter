
const Login = () => {

    return(
        <div className="Wrapper" >

  <div class="LoginContainer">
          {/* <!-- trim area for spinner --> */}
          <span class="borderLine"></span> 	
          {/* <!-- ... -->  */}
              <div class="formContainer">
                {/* <!-- FORM REGISTER SECTION --> */}
                <form action="/register" method="POST" modelAttribute="user">
                  <h1 style={{color:"red"}} className="BigText"> Admin Login </h1>

                  <h2 className="SmallText">Register Here:</h2>
                    {/* <!-- FORM USER Name SECTION --> */}
                    <div class="sectionOne">
                        <div class="formation">
                            <label path="userName"> User Name:  </label>	
                          <errors path="userName" class="errors"/>
                        </div>
                        
                        <div class="errors">
                            <input path="userName" class="input" />
                        </div>
                    </div>
                    {/* <!-- ...  --> */}

                    {/* <!-- FORM EMAIL SECTION --> */}
                    <div class="sectionTwo">
                        <div class="formation">
                            <label path="email"> Email: </label>	
                            <errors path="email" class="errors"/>
                        </div>
                        <div class="errorBox">
                            <input path="email" type="email" class="input" />
                        </div>
                    </div>
                    {/* <!-- ...  --> */}

                    {/* <!-- FORM PASSWORD SECTION --> */}
                    <div class="sectionThree">
                        <div class="formation">
                            <label path="password"> Password: </label>	
                            <errors path="password" class="errors"/>
                        </div>
                        <div class="errors">
                            <input path="password" type="password" class="input" />
                        </div>
                    </div>
                    {/* <!-- ...  --> */}

                    {/* <!-- FORM CONF PW SECTION --> */}
                    <div class="sectionFour">
                        <div class="formation">
                            <label path="confirmPass"> Confirm Password: </label>	
                            <errors path="confirmPass" class="errors"/>
                        </div>
                        <div class="errors">
                            <input path="confirmPass" type="password" class="input" />
                        </div>
                    </div>
                  {/* <!-- ...  --> */}
                
                  {/* <!-- FORM BUTTON --> */}
                    <div class="buttonContainer">		 		
                        <button disabled class="button" type="submit">Register</button>
                    </div>
                  {/* <!-- ... --> */}
                  
                </form>
                {/* <!-- END FORM REGISTER SECTION --> */}

              <br/>
            
                {/* <!-- FORM LOGIN SECTION  --> */}
                <form action="/login" method="POST" modelAttribute="loginUser">
                  <h2 className="SmallText">Login Here:</h2>
                  
                  {/* <!-- FORM EMAIL SECTION --> */}
                    <div class="sectionOne">
                        <div class="formation">
                            <label path="email"> Email: </label>	
                  <errors path="email" class="errors"/>
                        </div>
                        <div class="errors">
                            <input path="email" class="input" />
                        </div>
                    </div>
              {/* <!-- ...  --> */}
              
              {/* <!-- FORM PASSWORD SECTION --> */}
                    <div class="sectionTwo">
                        <div class="formation">
                            <label path="password"> Password: </label>	
                          <errors path="password" class="errors"/>
                        </div>
                        <div class="errors">
                            <input path="password" type="password" class="input"/>
                        </div>
                    </div>
                  {/* <!-- ... --> */}
                  
                  {/* <!-- FORM BUTTON --> */}
                    <div class="buttonContainer">		 		
                        <button disabled class="button" type="submit">Login</button>
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