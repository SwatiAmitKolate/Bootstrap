import React, {useState, useEffect} from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState([]);
    const [userEmail, setUserEmail] = useState([]);
    const [userPassword, setUserPassword] = useState([]);


    useEffect(() => {
        axios.get("http://localhost:5000/user")
        .then(async(res) => {
            // console.log(res.data);
    
            const rawData = await res.data;
            console.log(rawData);
    
            setUserData(rawData);
        }).catch(err => console.log(err));
      }, []);

      const loginHandler = (e) => {
        e.preventDefault();
        const rawData = userData.filter((data) => {
            if(data.emailId == userEmail && data.password == userPassword){
                return(
                    {data}
                )
            }
          })
          console.log(rawData);
          const filteredData = rawData[0]._id;
          console.log(filteredData);
          navigate(`/dashboard/${filteredData}`)
      }
    
    return(
        <>
        <form onSubmit={loginHandler}>
            <input type="email" placeholder="email" onChange={(e) =>setUserEmail(e.target.value)} value={userEmail}/>
            <input type="password" placeholder="password" onChange={(e) =>setUserPassword(e.target.value)} value={userPassword}/>
            <button type="submit">Login</button>
        </form>
        </>
    );
};

export default Login;