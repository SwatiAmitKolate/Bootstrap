import React from 'react'
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';

    const Delete = () => {

        const {userID} = useParams();
        const navigate = useNavigate();

        const deleteHandler = () => {
            axios.delete(`http://localhost:5000/user/${userID}`)
            .then((res) => {
                alert("User Deleted");
                navigate(`/home`)
            })
            .catch((err) => {
                alert(err);
            })
        }

        return (
            <div>
                <button onClick={deleteHandler}>Delete</button>
                <button onClick={() => navigate(`/home`)}>Cancle</button>
            </div>
          );
    };


    export default Delete;


