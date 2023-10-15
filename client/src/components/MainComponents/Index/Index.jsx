import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Counter from './IndexSub/Counter';
import AllPets from './Assets/allPets.jpg'
import ViewCats from './Assets/viewCats.jpg'
import ViewDogs from './Assets/viewDogs.jpg'

const Indexpage = () => {
    
    // scroll to top fix
    useEffect(() => {
        window.scrollTo(0,0)
    },[])

    return(
        <div className='Background'>
            {/* sliding Title */}
            <div className='TitleContainer'>
                {/* slide from Left to Right */}
                <div className="slide-right">
                    <h1>Welcome to the</h1>
                    <span>
                        <div className="line fade-in"></div>
                    </span>
                    <h1 className='Title'><em>Coding Dojo Pet Shelter</em></h1>
                </div>
                {/* Counter Insert */}
                <Counter/>
                {/* slide from Right to Left */}
                <div className="slide-left">
                    <div className="AnimalLinks" style={{display:"flex",width:"90%",margin:"0% auto", flexWrap:"wrap", justifyContent:"space-evenly", marginTop:"3%"}}>
                        {/* all pets link */}
                        <Link to="/petshelter">
                            <div style={{color:"#073DAA", fontWeight:"bold"}}>
                                    <img className="PetLink" src={AllPets} alt="OtherPets" loading='lazy'/>
                                    <br />
                                        All Pets
                            </div>
                        </Link>
                        {/* dogs link */}
                        <Link to="/petshelter/sort/DOG">
                            <div style={{color:"#073DAA", fontWeight:"bold"}}>
                                    <img className="PetLink" src={ViewDogs} alt="dogs" loading='lazy'/>
                                    <br />
                                    View Dogs
                            </div>
                        </Link>
                        {/* cats link */}
                        <Link to="/petshelter/sort/CAT">
                            <div style={{color:"#073DAA", fontWeight:"bold"}}>
                                    <img className="PetLink" src={ViewCats} alt="cats" loading='lazy'/>
                                    <br />                                    
                                    View Cats
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Indexpage