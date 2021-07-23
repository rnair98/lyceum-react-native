import React, { useState, useEffect } from 'react'
import TinderCard from "react-tinder-card";
import "./styling/Cards.css";
import axios from '../axios';
//import database from "./firebase.js";


function Cards() {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const req = await axios.get('/lyceum/cards');
            
            setCourses(req.data)
        }

        fetchData();
    }, []); 

    return (
        <div>
            <div className="Cards__cardContainer">
                {courses.map(course => (
                    <TinderCard
                        className="swipe"
                        key={course.name}
                        preventSwipe={["up", "down"]}
                    >
                        <div 
                        style={{backgroundColor: "#577fc0", backgroundImage: `url(${course.imgUrl})`, 
                        backgroundSize: "650px", backgroundRepeat: "no-repeat"}}
                        className="card"
                        >
                            <h2>{course.name}</h2>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    );
}

export default Cards;
