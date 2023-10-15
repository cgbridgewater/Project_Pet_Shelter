import { useEffect, useState } from 'react';
import axios from 'axios';
import EventsBanner from './Sub/EventsBanner';
import GoHome from '../Buttons/HomeButton';

// Fetch Date
const current = new Date();
const today = `${current.getFullYear()}-${String(current.getMonth() + 1).padStart(2, '0')}-${String(current.getDate()).padStart(2,'0')}`;
const EventsViewAll = () => {
    
    const [ event, setEvent ] = useState([])

    // scroll to top fix
    useEffect(() => {
        window.scrollTo(0,0)
    },[])

    useEffect(() => {
        axios.get("http://localhost:8000/api/events/" + today)
        .then((res) => {
            setEvent(res.data);
        })
        .catch((err) => {
            console.log("Axios Issue")
        })
    }, [])

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
                                <img className='FlierImg desktop-only' src={event.flierImage} alt="flier"/>
                                <img className='FlierImg2 mobile-only' src={event.flierImage} alt="flier"/>
                                <div className='FlierInfo'>
                                    <h3 style={{textAlign:"center"}}>{event.title}</h3>
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
                {/* Home Link */}
                <GoHome/>
            </div>
        </div>
    )
}

export default EventsViewAll