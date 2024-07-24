import './index.css';
import React from 'react';
import boy from './Images/boy-reading'


const Profile = () => {
    return(
        <div className='Container'>
            <div className='header'>
            <h1>Students</h1>
            <img src={boy} alt ="Rodney's-Image" className='school-boy'></img>
            <p>Name: Mark</p>
            </div>
            <div className='title'>
            <p>Subject</p>
            <p>Score</p>
            </div>
            <div className='subject'>
                <p>Math</p>
                <p>English</p>
                <p>Social Studies</p>
                <p>Science</p>
                <p>Kiswahili</p>
            </div>
            <div className='Score'>
                <p>80</p>
                <mark>View</mark>
                <mark>View</mark>
                <p>View</p>
                <p>View</p>
            </div>
           
         

        </div>
    )
}
export default Profile;