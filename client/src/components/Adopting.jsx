import {Link} from "react-router-dom"

const Adopting = () => {

    return(
        <div className="Background">
            <div className="ThanksFlex">
                <div class="animate five">
                    <span>T</span><span>h</span><span>a</span><span>n</span><span>k</span><span>s</span>&nbsp;
                    <span>F</span><span>o</span><span>r</span>&nbsp;
                    <span>R</span><span>e</span><span>g</span><span>i</span><span>s</span><span>t</span><span>e</span><span>r</span><span>i</span><span>n</span><span>g</span><span>!</span>
                </div>
                <img style={{height:"200px", borderRadius:"5%", margin:'20px'}} src="https://adopthope.org/wp-content/uploads/2018/12/Thank-You-Dog-and-Cat.jpg" alt="Thanks" />
            </div>
            <br />
            
            <div className="TextBox">
                <hr className="Divide"/>
                <br />
                <h3>
                    Thank you for showing an interest in adopting one of our pets, we will reach out to you as soon as possible to confirm an adoption appointment, please remember our adoptions operate on a 'first come first serve basis'. 
                </h3>
                <br />
                <h3>
                    Adoption hours are between 11 am – 4 pm.
                </h3>
                <br />
                <hr className="Divide"/>
                <br />
                <h4>
                    NOTE - If you are interested in adopting a specialized species, you MUST call us to schedule an appointment, as some species require special needs and handling care.
                </h4>
            </div>

            <Link  to="/" style={{color: "#073DAA ",fontWeight:"800", textDecoration:"underline"}}>
                Back To Shelter Home
            </Link>
            <br />

    </div>
    )
}

export default Adopting