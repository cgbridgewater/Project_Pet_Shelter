import { Link } from "react-router-dom"

const Navibar = () => {

  return (
    <div>
      {/* navbar container */}
      <nav style={{flexWrap:"wrap",height:"auto", display:"flex", justifyContent:"space-between", alignItems:"center", padding:"1%", paddingLeft:"5%", borderBottom:"10px double #073DAA",backgroundImage:"url(https://media.istockphoto.com/id/1276581591/vector/cute-simple-seamless-pattern-with-paw-prints.jpg?s=612x612&w=0&k=20&c=qRxqN8NX0Q0VkLOOj0NCysIZZ37328M4W2Kze2Xofro=)"}}>
        {/* left side of navbar */}
        <div style={{minWidth:"355px",width:"30%", textAlign:"start"}} className='LeftNav'>
          <Link to="/petshelter" style={{fontSize:"30px", fontWeight:"700"}}>Coding Dojo Pet Shelter</Link>
        </div>
          <Link className="LiveFeed" to={`/petshelter/livefeed`}></Link>
        {/* right side of navbar */}
        <div style={{minWidth:"30%"}} className='RightNav'>
          <img style={{height:"80px", borderRadius:"50%"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLVoF89deZHiOVAJIV4NKeqnZryBNrFzUWh3vZncWmcU2qGeqGXs6LhJlwPOHkbMFEitQ&usqp=CAU" alt="" />
        </div>
      </nav>
    </div>
  );
}

export default Navibar;