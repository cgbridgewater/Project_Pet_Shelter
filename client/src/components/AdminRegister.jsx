import {Link} from "react-router-dom"

const Register = () => {

    return(
        <div className="Wrapper" >

  <div className="LoginContainer">
          {/* <!-- trim area for spinner --> */}
          <span className="borderLine"></span> 	
          {/* <!-- ... -->  */}
              <div className="formContainer">
                {/* <!-- FORM REGISTER SECTION --> */}
                <h1 style={{color:"red"}} className="BigText"> Admin Registration </h1>
                <form action="/register" method="POST" modelAttribute="user">

                  <h2 className="SmallText">Register Here:</h2>
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
                <p style={{color:"white"}}>Already Registered? <Link to="/admin/signin" style={{color:"#45f3ff"}}>Sign-in Here!</Link></p>
            </div>
          
          </div>
   
         
        </div>
    )
}

export default Register