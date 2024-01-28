'use client'
import React from 'react';
import { useState } from 'react';

const Project = () =>{
    const [project, setProject] = useState({name: 'New Project', progress: 0});
    return (
        <div>
            <h1>{project.name}</h1>
            <h1>{project.progress}</h1>
        </div>
    );
}
export default Project;