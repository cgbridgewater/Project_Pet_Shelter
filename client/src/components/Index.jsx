import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Counter from './Counter';


const Indexpage = () => {
    
    // scroll to top fix
    useEffect(() => {
        window.scrollTo(0,0)
    },[])

    return(
        <div className='Background' style={{}}>


            {/* sliding Title */}
            <div class='TitleContainer'>
                <div class="slide-right">
                    <h2>Welcome to the</h2>
                    <span>
                        <div class="line fade-in"></div>
                        </span>
                    
                    <h1 className='Title'><em>Coding Dojo Pet Shelter</em></h1>
                </div>
                <Counter/>

                <div class="slide-left">
                    <div className="AnimalLinks" style={{display:"flex",width:"90%",margin:"0% auto", flexWrap:"wrap", justifyContent:"space-evenly", marginTop:"3%"}}>
                        {/* all pets link */}
                        <Link to="/petshelter">
                            <div className="PetLink">
                                    <img style={{height:"150px", width:"260px" ,borderRadius: "50%", border:"1px solid #073DAA"}}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFdTOfoRLr6SIV4DWCJi-OGD7GHTZzbN87gQ&usqp=CAU" alt="OtherPets" />
                                    <br />
                                    <h5 style={{color:"#073DAA"}}>
                                        All Pets
                                    </h5>
                            </div>
                        </Link>
                        {/* dogs link */}
                        <Link to="/petshelter/sort/dog  ">
                            <div className="PetLink">
                                    <img style={{height:"150px", width:"260px",borderRadius: "50%", border:"1px solid #073DAA"}}  src="data:image/jpeg;base64,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" alt="Puppy" />
                                    <br />
                                    <h5 style={{color:"#073DAA"}}>
                                    View Dogs
                                    </h5>
                            </div>
                        </Link>
                        {/* cats link */}
                        <Link to="/petshelter/sort/cat">
                            <div className="PetLink">
                                    <img style={{height:"150px", width:"260px",borderRadius: "50%", border:"1px solid #073DAA"}}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHSzuCrOWu1JSEIN-yC6prF4Z2edNL6UCwGA&usqp=CAU" alt="Kitten" />
                                    <br />
                                    <h5 style={{color:"#073DAA"}}>
                                    View Cats
                                    </h5>
                            </div>
                        </Link>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Indexpage