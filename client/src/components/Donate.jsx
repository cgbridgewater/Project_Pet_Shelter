import React, {useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Donate = (props) => {

    const { petName, petId } = props;
    const[ userName, setUserName ] = useState("");
    const[ email, setEmail ] = useState("");
    const[ phone, setPhone ] = useState("");
    const [errors, setErrors] = useState("");
    const navigate = useNavigate();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/pets/adopt", {
        petName,
        petId,
        userName,
        email,
        phone
    })
        .then( res => {
            console.log(res);
            console.log(res.data) 
            setUserName("")
            setEmail("")
            setPhone("")
            setErrors({})
            navigate("/petshelter/adopting");
        })
        .catch((err) => {
            console.log(err.response.data.error.errors) 
            setErrors(err.response.data.error.errors); //Set Errors
        })
    }

    return(
        <div className="Background">
            <a class="DonateButton" href="#popup1">Donate</a>
            {/* pop up */}
            <div id="popup1" class="overlay">
                <div class="DonatePopup">
                    <h2>Warning! You are about to leave this site... 
                    </h2>
                    <br />
                    <h2>
                        Are you sure?
                    </h2>    
                    <br />
                    <a href="https://oregonhumane.tfaforms.net/23">Yes, I want to donate!!</a>
                    <a class="close" href="#">&times;</a>
                </div>
            </div>
        </div>
    )
}

export default Donate