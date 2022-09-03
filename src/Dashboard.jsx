import React,{useState, useEffect} from "react";
import { useParams, useNavigate } from 'react-router-dom';
import axios from "axios";

const Dashboard = () => {
    const {userID} = useParams();
    const [userData, setUserData] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:5000/user/${userID}`)
        .then(async(res) => {
            // console.log(res.data);
    
            const rawData = await res.data[0];
            console.log(rawData);

             
    
            setUserData(rawData);
        }).catch(err => console.log(err));
      }, []);
    

    return (
        <div>
            <p>Hello {userData.firstName}</p>
        </div>
    );
};

export default Dashboard;