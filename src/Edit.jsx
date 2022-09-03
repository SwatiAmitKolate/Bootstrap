import React, {useState, useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Edit = () => {

    const navigate = useNavigate();
    const {userID} = useParams();
    console.log(userID);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [mobNumber, setMobNumber] = useState("");
    const [password, setPassword] = useState("");
    const [userData, setUserData] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:5000/user/${userID}`)
        .then(async(res) => {
            // console.log(res.data);
    
            const rawData = await res.data[0];
            console.log(rawData);

            setFirstName(rawData.firstName);
            setLastName(rawData.lastName);
            setMobNumber(rawData.mobNumber);
            setPassword(rawData.password);     
    
            setUserData(rawData);
        }).catch(err => console.log(err));
      }, []);

    const updateHandler = (e) => {
        e.preventDefault();

        const dataObj = {
            firstName,
            lastName,
            mobNumber,
            password
        }

        axios.put(`http://localhost:5000/user/${userID}`, dataObj)
        .then(res =>{
            alert("User Updated");
            navigate("/home");
        })
        .catch(err => {
            alert(err);
        })
    }

    return(
        <div>
            <div className='container-sm'>
                <form onSubmit={updateHandler}>
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
                            <input type="password" class="form-control" placeholder="Password" aria-label="Password" onChange={(e) => setPassword(e.target.value)} value={password}/>
                        </div>
                    </div>
                    <button class="mt-3 btn btn-primary" type="submit"> Update User</button> 
                </form>
            </div>
        </div>
    );
};

export default Edit;



// import React, {useState} from "react";

// const Edit = () => {

//     const [firstName, setFirstName] = useState("");
//     const [lastName, setLastName] = useState("");
//     const [mobNumber, setMobNumber] = useState("");
//     const [password, setPassword] = useState("");

//     return (
//         <div className="container-sm">
//                 <form>
//                     <div class="row">
//                         <div class="col">
//                             <intput type="text" class="form-control" placeholder="First Name" arial-label="First Name" onChange={(e) => setFirstName(e.target.value)} value={firstName} />
//                         </div>
//                         <div class="col">
//                             <intput type="text" class="form-control" placeholder="Last Name" arial-label="Last Name" onChange={(e) => setLastName(e.target.value)} value={lastName} />
//                         </div>
//                         <div class="col">
//                             <intput type="number" class="form-control" placeholder="Mob Number" arial-label="Mob Number" onChange={(e) => setMobNumber(e.target.value)} value={mobNumber} />
//                         </div>
//                         <div class="col">
//                             <intput type="password" class="form-control" placeholder="Password" arial-label="Password" onChange={(e) => setPassword(e.target.value)} value={password} />
//                         </div>
//                     </div>    
//                     <button class="mt-3 btn btn-primary" type="submit">Update user</button>
//                 </form>        
//         </div>
//     );
// };

// export default Edit;