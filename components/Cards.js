import React, { useState, useEffect } from 'react'
import TinderCard from "react-tinder-card";
import "../src/styling/Cards.css";
import {Tag,Text} from "@jrobins/bulma-native";
import { Ionicons } from '@expo/vector-icons'; 
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

    function match(course){
        const dataBody = {
            "_id" : course.id,
            "name": course.name,
            "platform": course.platform,
            "instructor": course.instructor,
            "imgUrl": course.imgUrl,
            "url": course.url,
            "affiliation": course.affiliation,
            "description": course.description,
        }
        axios.post('/lyceum/matches', dataBody)
            .then((response) => {
                console.log(response);
            }, (error) => {
                console.log(error);
            });          
    }


    return (
        <div>
            <div className="Cards__cardContainer">
                {courses.map((course,idx) => (
                    <TinderCard
                        className="swipe"
                        key={idx}
                        preventSwipe={["up", "down"]}
                        onSwipe={(direction) => {
                            direction === "right" ? match(course) : console.log("swiped left!");
                        }}
                    >
                        <div 
                        style={{backgroundColor: "rgb(255,255,255)", backgroundImage: `url(${course.imgUrl})`, 
                        objectFit: "contain",backgroundSize: "555px", backgroundRepeat: "no-repeat", backgroundPosition: "top", flex:1,flexDirection: "column",
                        justifyContent: "flex-start"}}
                        className="card"
                        >
                            <h2>{course.name}</h2>
                            <p id="description">{course.description}......</p>
                            <p id="author">
                            <Ionicons name="ios-person-circle-sharp" size={15} color="black" />                             
                            &nbsp;{course.instructor}</p>
                            <div>
                                <Tag 
                                rounded="true"
                                style={{backgroundColor: "#5b8bd9",justifyContent:"center",width:"82px"}} >
                                   <Text size="small" weight="medium" color="white"> {course.platform} </Text>
                                </Tag>
                            </div>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    );
}

export default Cards;
