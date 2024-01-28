'use client'
/*import React, { useState } from "react";



function NewProject() {
    const [divs, setDivs] = useState([]);

    const handleClick = () => {
        setDivs(prevDivs => [...prevDivs, {}]);
    }

    return (
        <main>
            <button onClick={handleClick}>
                +
            </button>
            <br></br>
            {divs.map((div, index) => 
                <div key={index} className="text-5xl font-bold font-sans_serif text-gray-700 items-center flex justify-center w-150 h-20 bg-white">
                    New Project {index + 1}
                </div>
            )}
        </main>
    );
}

const show=()=>{
    return(
        <main>
            <div class="text-5xl font-bold font-sans_serif text-gray-700 items-center flex justify-center w-150 h-20 bg-white">
                Home
            </div>
            <br></br>
            <NewProject />
        </main>
    )
}

export default show*/

import React, { useState } from 'react';
function EditText() {
    const [text, setText] = useState('New Project');
  
    return (
      <div>
        <input value={text} onChange={e => setText(e.target.value)} />
      </div>
    );
}
'use strict'

function NewProject() {
    const [projects, setProjects] = useState([]);
    const [idCounter, setIdCounter] = useState(0);

    const handleClick = () => {
        setProjects(prevProjects => [...prevProjects, { id: idCounter, text: 'New Project ' + (prevProjects.length + 1) }]);
        setIdCounter(idCounter + 1);
    }

    const handleTextChange = (id, newText) => {
        setProjects(prevProjects => prevProjects.map((project) => project.id === id ? { ...project, text: newText } : project));
    }

    const handleDelete = (idToDelete) => {
        setProjects(prevProjects => prevProjects.filter(project => project.id !== idToDelete));
    }

    return (
        <main>
            <button onClick={handleClick}>
                +
            </button>
            <br></br>
            {divs.map((div) => 
                <div key={div.id} className="text-5xl font-bold font-sans_serif text-gray-700 items-center flex justify-center w-150 h-20 bg-white">
                    New Project {div.id + 1}
                    <button onClick={() => handleDelete(div.id)}>Delete</button>
                </div>
            )}
        </main>
    );
}
const Show = () => {
    const [projects, setProjects] = useState([]);
    const [idCounter, setIdCounter] = useState(0);

    const handleClick = () => {
        setProjects(prevProjects => [...prevProjects, { id: idCounter, text: 'New Project ' + (prevProjects.length + 1) }]);
        setIdCounter(idCounter + 1);
    }

    const handleTextChange = (id, newText) => {
        setProjects(prevProjects => prevProjects.map((project) => project.id === id ? { ...project, text: newText } : project));
    }

    const handleDelete = (idToDelete) => {
        setProjects(prevProjects => prevProjects.filter(project => project.id !== idToDelete));
    }

    return (
        <main>
            <button onClick={handleClick}>
                +
            </button>
            <br></br>
            {projects.map((project) => 
                <div key={project.id} className="text-5xl font-bold font-sans_serif text-gray-700 items-center flex justify-center w-150 h-20 bg-white">
                    <EditText text={project.text} onTextChange={newText => handleTextChange(project.id, newText)} />
                    <button onClick={() => handleDelete(project.id)}>Delete</button>
                </div>
            )}
        </main>
    );
}
export default Show