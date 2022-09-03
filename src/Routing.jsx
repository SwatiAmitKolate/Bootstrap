import React from "react";
import {Routes, Route} from 'react-router-dom';
import Adduser from './Adduser';
import Home from './Home';
import Edit from './Edit';
import Delete from './Delete';
import Login from './Login';
import Dashboard from "./Dashboard";

const Routing = () => {
    return(
        <>
        
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/home' element={<Home/>} /> 
            <Route exact path='/addUser' element={<Adduser/>} />
            <Route exact path='/edit/:userID' element={<Edit/>} />    
            <Route exact path='/delete/:userID' element={<Delete/>} /> 
            <Route exact path='/login' element={<Login/>} /> 
            <Route exact path='/dashboard/:userID' element={<Dashboard />} />

        </Routes>
        </>
    );
};

export default Routing;


