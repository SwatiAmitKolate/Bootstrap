import React, { useState, useEffect } from 'react';
import axios from "axios";
import { NavLink, useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate();
    const [userData, setUserData] = useState([]);

    useEffect(() => {
      axios.get("http://localhost:5000/user")
      .then(async(res) => {
          // console.log(res.data);
  
          const rawData = await res.data;
          console.log(rawData);
  
          setUserData(rawData);
      }).catch(err => console.log(err));
    }, []);
  
    console.log(userData);

    return (
        <>
            <div className='container'>
      <div className='row'>
        <div className='col d-flex justify-content-end'>
            <NavLink exact to="/addUser">
                <button type="button" className="mt-3 me-2 btn btn-success 
                btn-sm">Add User</button>         
            </NavLink> 
            <NavLink exact to="/login">
                <button type="button" className="mt-3 btn btn-success 
                btn-sm">Login</button>         
            </NavLink> 
        </div>  
      </div>      
    </div>

    <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Sr.No</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Mobile Number</th>
            <th scope="col">Edit user</th>
            <th scope="col">Delete user</th>
          </tr>
        </thead>
        <tbody>
          {
            userData.map((row, key) => {      
              return(
                <tr>
            <th scope="row">1</th>
            <td>{row.firstName}</td>
            <td>{row.lastName}</td>
            <td>{row.mobNumber}</td>
            <td>
                {/* <NavLink exact to={`/edit/${row._id}`}> //using Bactic      {/* <NavLink exact to={"/edit" + row._id}>      //using ""  */} 
                    {/* <button type="button" class="btn btn-success">Edit user</button>  
                </NavLink>        1st way-NavLink*/}     

                <button type="button" onClick={() => navigate(`/edit/${row._id}`)} class="btn btn-success">Edit user</button>     {/* 2nd way using navigate */}

            </td>            
            <td>
                <button type="button" onClick={() =>navigate(`/delete/${row._id}`)} class="btn btn-danger">Delete user</button> 
            </td>
          </tr>
              )
            })
          }
        
        </tbody>
    </table>

    
        </>
    )
        }

export default Home;
