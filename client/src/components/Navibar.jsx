import { Link } from "react-router-dom"
import { useEffect } from "react"

const Navibar = () => {

    // scroll to top fix
    useEffect(() => {
      window.scrollTo(0,0)
  },[])

  return (
    // Container background
    <div className="NavBackground">
      {/* navbar container */}
      <nav style={{flexWrap:"wrap",height:"auto", display:"flex", justifyContent:"space-evenly", alignItems:"center", padding:"1%", borderBottom:"10px double #073DAA"}}>
        {/* left side of navbar */}
        <div style={{minWidth:"355px",width:"30%", textAlign:"start"}}>
          <Link to="/">
            <p className="NavTitle">
              Coding Dojo Pet Shelters
            </p>  
              <span style={{fontSize:"14px", marginLeft:"45%"}}>
                Save one until there are none.
              </span>
          </Link>
        </div>
        <Link to="/petshelter/livefeed">
          <img className="LiveFeed2 mobile-only" src="https://i.gifer.com/9XLg.gif" alt="live feed" />
          <img className="LiveFeed desktop-only" src="https://i.gifer.com/9XLg.gif" alt="live feed" />
        </Link>
        {/* right side of navbar */}
        <div style={{minWidth:"30%",display:"flex",alignItems:"center", justifyContent:"end"}} className='RightNav'>
          <Link to="/petshelter/events">
            <p className="ActionNavTitle">
              See Upcoming Events!
            </p>  
          </Link>
          <Link to="/petshelter/events">
            <img style={{height:"80px",width:"80px", borderRadius:"50%"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLVoF89deZHiOVAJIV4NKeqnZryBNrFzUWh3vZncWmcU2qGeqGXs6LhJlwPOHkbMFEitQ&usqp=CAU" alt="ninja cat" />
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navibar;