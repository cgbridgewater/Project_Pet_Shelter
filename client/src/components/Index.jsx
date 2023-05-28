import { Link } from 'react-router-dom';

const Indexpage = () => {

    return(
        <div className='Background' style={{minHeight:"60vh"}}>
            <br />
            <h1 style={{border:"2px solid #073DAA", borderRadius:"20px", margin:"0 auto",width:"612px",minWidth:"612px",backgroundImage:"url(https://media.istockphoto.com/id/1276581591/vector/cute-simple-seamless-pattern-with-paw-prints.jpg?s=612x612&w=0&k=20&c=qRxqN8NX0Q0VkLOOj0NCysIZZ37328M4W2Kze2Xofro=)"}}>
                Welcome To The Dojo Pet Shelter
            </h1><br /><br /><br />
            <Link to="/petshelter">
                <img className='EnteranceCard' src="https://media.istockphoto.com/id/1214105784/pt/vetorial/concept-of-animal-shelter-for-stray-pets-kind-people-help-homeless-animals-family-adopting.jpg?s=612x612&w=0&k=20&c=VGvVlNa2ZdnpQls7adSBWbXjG9wGoLfHx-Jb9VCbQD8=" alt="shelter" /><br></br>click to enter
            </Link>
        </div>
    )
}

export default Indexpage