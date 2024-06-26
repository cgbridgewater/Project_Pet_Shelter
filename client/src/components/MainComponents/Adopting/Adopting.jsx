import GoHome from "../Buttons/HomeButton"
import { useEffect } from "react"
import ThankYou from "./Assets/thankYouDogAndCat.jpg"
import './Adopting.css';


const Adopting = () => {

    // scroll to top
    useEffect(() => {
        window.scrollTo(0,0)
    },[])

    return(
        <div className="Background">
            {/* thank you animation */}
            <div className="ThanksFlex">
                <div className="animate five">
                    <span>T</span><span>h</span><span>a</span><span>n</span><span>k</span><span>s</span>&nbsp;
                    <span>F</span><span>o</span><span>r</span>&nbsp;
                    <span>R</span><span>e</span><span>g</span><span>i</span><span>s</span><span>t</span><span>e</span><span>r</span><span>i</span><span>n</span><span>g</span><span>!</span>
                </div>
                <img style={{height:"200px", borderRadius:"5%", margin:'20px'}} src={ThankYou} alt="Thanks" />
            </div>
            <br />
            {/* text container */}
            <div className="TextBox">
                <br /><hr className="Divide"/><br />
                {/* Thanks info */}
                <h3 style={{textAlign:"start"}}>
                    Thank you for showing an interest in adopting one of our pets, we will reach out to you as soon as possible to confirm an adoption appointment, please remember our adoptions operate on a 'first come first serve basis'. 
                </h3>
                {/* break */}
                <br /><hr className="Divide"/><br />
                {/* adopt info */}
                <div className="Adoptions">
                    <h2 style={{textAlign:"start"}}>
                        Adoptions
                    </h2>
                    <h3 style={{textAlign:"start"}}>
                        fees are:
                    </h3>
                    <ul className="FeesList" style={{marginLeft:"20px"}}>
                        <li style={{textAlign:"start"}}>
                            $175 per cat
                        </li>
                        <li style={{textAlign:"start"}}>
                            $200 per kitten or $300 per pair (Why Two Kittens Are Better Than One)
                        </li>
                        <li style={{textAlign:"start"}}>
                            $295 per dog over 1 year (includes collar and leash)
                        </li>
                        <li style={{textAlign:"start"}}>
                            $395 per puppy 4 months to 1 year old (includes collar and leash)
                        </li>
                        <li style={{textAlign:"start"}}>
                            $450 per puppy under 4 months old (includes collar and leash)
                        </li>
                    </ul>
                    <br />
                    <h3 style={{textAlign:"start"}}>
                        Our adoption fee covers spay/neuter, core vaccines, and microchip.
                    </h3>
                </div>
                {/* break */}
                <br /><hr className="Divide"/><br />
                {/* requirements info */}
                <div className="Requirements">
                    <h2 style={{textAlign:"start"}}>
                        Requirements:
                    </h2>
                    <ul className="ReqList" style={{marginLeft:"20px"}}>
                        <li style={{textAlign:"start"}}>
                            You must be 21 to adopt.
                        </li>
                        <li style={{textAlign:"start"}}>
                            All interested adopters must meet our animals in-person at the shelter – we cannot accommodate digital appointments.
                        </li>
                        <li style={{textAlign:"start"}}>
                            We ask for a personal reference (this can be a family member, friend, employer) who can attest to your ability to care for a pet.                        </li>
                        <li style={{textAlign:"start"}}>
                            Adopters who live in apartments will be required to show proof that pets are allowed. This can be provided in the form of a lease, phone number of a leasing office, landlord, super or property website.
                        </li>
                        <li style={{textAlign:"start"}}>
                            If you currently or previously had a pet, a vet reference will be required.                        </li>
                        <li style={{textAlign:"start"}}>
                            We ask that all members of the household meet the animal at some point during the adoption process.                        </li>
                        <li style={{textAlign:"start"}}>
                            We do require the current dogs of the household meet the dog you are applying for as well – but this is often the last step of the process.                        </li>
                    </ul>
                </div>
                {/* break */}
                <br /><hr className="Divide"/><br />
                {/* special pets info */}
                <h4 style={{textAlign:"start"}}>
                    NOTE - If you are interested in adopting a specialized species, you MUST call us to schedule an appointment, as some species require special needs and handling care.
                </h4>
            </div>
            {/* break */}
            <br /><hr className="Divide2"/><br />
            {/* Home Link */}
            <GoHome/>
            <br />
        </div>
    )
}

export default Adopting