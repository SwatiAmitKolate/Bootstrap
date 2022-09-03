import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Adduser = () => {

    const navigate = useNavigate();
;
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [mobNumber, setMobNumber] = useState("");
    const [password, setPassword] = useState(""); 
    const [emailId, setEmailId] = useState(""); 

    const submitHandler = (e) => {
        e.preventDefault();

        const dataObj = {
            firstName,
            lastName,
            mobNumber,
            password,
            emailId
        }
        console.log(dataObj);
        axios.post("http://localhost:5000/user", dataObj)

        setFirstName("");
        setLastName("");
        setMobNumber();
        setPassword("");

        alert("User Added");
        navigate("/home");
    }

    return(
        <>
        <div className='container-sm'>
            <form onSubmit={submitHandler}>
                <div class="row">
                    <div class="col">
                        <input type="text" class="form-control" placeholder="First name" aria-label="First name" onChange={(e) => setFirstName(e.target.value)} value={firstName} />
                    </div>
                    <div class="col">
                        <input type="text" class="form-control" placeholder="Last name" aria-label="Last name" onChange={(e) => setLastName(e.target.value)} value={lastName}/>
                    </div>
                    <div class="col">
                        <input type="number" class="form-control" placeholder="Mob Number" aria-label="Mob Number" onChange={(e) => setMobNumber(e.target.value)} value={mobNumber}/>
                    </div>

                    <div class="col">
                        <input type="email" class="form-control" placeholder="Email" aria-label="Email" onChange={(e) => setEmailId(e.target.value)} value={emailId}/>
                    </div>

                    <div class="col">
                        <input type="password" class="form-control" placeholder="Password" aria-label="Password" onChange={(e) => setPassword(e.target.value)} value={password}/>
                    </div>
                </div>
                <button class="mt-3 btn btn-primary" type="submit">Submit Forms</button> 
            </form>
        </div>


        </>     
    );
};

export default Adduser;

