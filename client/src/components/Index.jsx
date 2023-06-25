import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Counter from './Counter';

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
                                    <img className="PetLink" src="https://media.istockphoto.com/id/1296353202/photo/group-of-pets-posing-around-a-border-collie-dog-cat-ferret-rabbit-bird-fish-rodent.jpg?s=612x612&w=0&k=20&c=l4UJze9hXcNABS_3QJcaOU07R1pcuV3L7w_IJTu9o2c=" alt="OtherPets" />
                                    <br />
                                        All Pets
                            </div>
                        </Link>
                        {/* dogs link */}
                        <Link to="/petshelter/sort/dog  ">
                            <div style={{color:"#073DAA", fontWeight:"bold"}}>
                                    <img className="PetLink" src="https://a-z-animals.com/media/2022/05/group-of-six-dogs-picture-id1175747279-1024x614.jpg" alt="dogs" />
                                    <br />
                                    View Dogs
                            </div>
                        </Link>
                        {/* cats link */}
                        <Link to="/petshelter/sort/cat">
                            <div style={{color:"#073DAA", fontWeight:"bold"}}>
                                    <img className="PetLink" src="https://a-z-animals.com/media/2022/05/Multiple-cats-on-white-background.jpg" alt="cats" />
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