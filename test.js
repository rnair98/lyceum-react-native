import React, { useState, useEffect } from 'react';
import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.coursera.org/api/'
});

function Courses() {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const req = await axios.get('/courses.v1');
            
            setCourses(req.data)
        }

        fetchData();
    }, []); 

    console.log(courses);
}

Courses();