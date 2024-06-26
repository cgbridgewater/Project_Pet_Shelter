import { useEffect } from 'react';
import { Link } from "react-router-dom";
import GoHome from '../Buttons/HomeButton';
import AdoptDontBuy from './Assets/adoptDontBuy.png'
import './dontbuy.css';

const DontBuy = () => {

    // scroll to top fix
    useEffect(() => {
        window.scrollTo(0,0)
    },[])

    return (
        <div style={{minHeight:"70vh"}}>
            <div className="ContentContainer" style={{display:"flex", flexWrap:"wrap", justifyContent:"space-evenly" }}>
                <div className="LeftContainer" style={{minWidth:"325px",width:"55%", marginTop:"4%"}}>
                    <h1>Adopt, Don't Buy!</h1>
                    <p style={{textAlign:"start", fontSize:"18px", fontWeight:800, color:"#073DAA"}}>
                        <span style={{fontSize:" 200%", fontWeight: 700, lineHeight:"80%", color:"#073DAA"}}>W</span>
                        hen you adopt an animal, you’re not just saving the life of the animal you’re welcoming into your home. You’re giving another animal an opportunity to move to the adoption floor and find a new family. And, you’re reducing the demand that keeps puppy and kitten mills in business. Many people buy from animal mills without realizing that these breeding facilities abuse and neglect their animals.
                    </p>
                    <br />
                    <p style={{textAlign:"start", fontSize:"18px", fontWeight:800, color:"#073DAA"}}>
                        <span style={{fontSize:" 200%", fontWeight: 700, lineHeight:"80%", color:"#073DAA"}}>E</span>
                        ach year, millions of unwanted animals enter shelters across America. More than three million cats and dogs are euthanized every year; millions more small animals, like rabbits and hamsters, meet the same fate. Adoption helps break this cycle and put an end to the animal mill industry.
                    </p>
                    <br />
                    <p style={{textAlign:"start", fontSize:"18px", fontWeight:800, color:"#073DAA"}}>
                        <span style={{fontSize:" 200%", fontWeight: 700, lineHeight:"80%", color:"#073DAA"}}>I</span>
                        f you would still rather buy than adopt, make sure you buy from a responsible, reputable breeder. If you’re buying an animal over the Internet, you’re almost certainly buying from an animal mill. Responsible breeders are individuals who have focused their efforts on one or a select few breeds, and they screen potential owners to ensure a long-term fit. Always visit the breeder’s facility and observe the animals’ behavior and socialization. Don’t be fooled by breeder certification or purebred registration papers; a puppy mill can be USDA licensed. 
                    </p>
                </div>
                <div className="RightContainer" style={{Minwidth:"350px", marginTop:"4%", marginBottom:"2%",paddingBottom:"1%", border:"2px solid #073DAA"}} >
                    <img style={{margin: 0 }} className="support" src={AdoptDontBuy} alt="support" />
                    <h1 style={{textAlign:"center",backgroundColor:"#073DAA", color:"white", margin:"auto",padding:"5px"}}>Find Your Companion</h1>
                    <br />
                    <Link to="/petshelter" style={{fontSize:"20px", fontWeight:"700", textDecoration:"underline"}}>See Our Pets!</Link>
                </div>
            </div>
            {/* Home Link */}
            <GoHome/>
        </div>
    )
}

export default DontBuy;