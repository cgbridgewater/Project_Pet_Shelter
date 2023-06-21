import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import EventsBanner from './EventsBanner';


const current = new Date();
const today = `${current.getFullYear()}-${String(current.getMonth() + 1).padStart(2, '0')}-${current.getDate()}`;

const EventsViewAll = () => {
    
    console.log("current",current)
    console.log("events today",today)
    // scroll to top fix
    useEffect(() => {
        window.scrollTo(0,0)
    },[])
    
    const [ event, setEvent ] = useState([])
    const [ eventSort, setEventSort ] = useState("NONE") 
    const [getEventErrors, setGetEventErrors] = useState({});

    useEffect(() => {
        axios.get("http://localhost:8000/api/events/" + today)
        .then((res) => {
            console.log(res.data);
            setEvent(res.data);
            setGetEventErrors("")
        })
        .catch((err) => {
            console.log(err.response.data.path)
            setGetEventErrors(err.response.data.path); //Set Errors
        })
    }, [eventSort])

    return(
        <div className="Background2">
            {/* Page Banner */}
            <EventsBanner/>
            {/* Container */}
            <div className='FlierBox'>
                {/* mapping and sorting */}
                {event.length > 0 &&[...event]
                .sort( (a,b) => a.date > b.date ? 1 : -1)
                .map((event, index) => {
                    return(
                        <div className='FlierContainer'key={event._id}>
                            <div className='FlierFlex'>
                                <img width="325px" src={event.flierImage} alt="img" />
                                <div className='FlierInfo'>
                                    <h3>{event.title} on {event.date}</h3>
                                    <hr className='FlierDivide' />
                                    <br />
                                    <h4>{event.description}</h4>
                                </div>
                            </div>
                            <hr />
                        </div>
                        )
                })}
                <br />
                <Link to="/" style={{fontSize:"20px", fontWeight:"700", textDecoration:"underline"}}>Go To Shelter Home</Link>
            </div>
        </div>
    )
}

export default EventsViewAll