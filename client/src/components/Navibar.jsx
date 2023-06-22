import { Link } from "react-router-dom"

const Navibar = () => {

  return (
    // Container background
    <div style={{background:"url('https://media.istockphoto.com/id/1276581591/vector/cute-simple-seamless-pattern-with-paw-prints.jpg?s=612x612&w=0&k=20&c=qRxqN8NX0Q0VkLOOj0NCysIZZ37328M4W2Kze2Xofro=')"}}>
      {/* navbar container */}
      <nav style={{flexWrap:"wrap",height:"auto", display:"flex", justifyContent:"space-between", alignItems:"center", padding:"1%", paddingLeft:"5%", borderBottom:"10px double #073DAA"}}>
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
          <img className="LiveFeed" src="https://www.rosen-group.com/.imaging/stk/rosen-website-mobile/gallery-zoom/dms/rosen-website/rosen-pictures/company/insight/news/latest-news/2018/Live-Stream/LiveStreaming_Button_PTC2018/document/LiveStreaming_Button_PTC2018.png" alt="live feed" />
        </Link>
        {/* right side of navbar */}
        <div style={{minWidth:"30%",display:"flex",alignItems:"center"}} className='RightNav'>
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