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

const Show = () => {
    const [projects, setProjects] = useState([]);
    const [idCounter, setIdCounter] = useState(0);

    const handleClick = () => {
        setProjects(prevProjects => [...prevProjects, { id: idCounter, text: 'New Project ' + (prevProjects.length + 1)}]);
        setIdCounter(idCounter + 1);
    }

    const handleTextChange = (id, newText) => {
        setProjects(prevProjects => prevProjects.map((project) => project.id === id ? { ...project, text: newText } : project));
    }

    const handleDelete = (idToDelete) => {
        setProjects(prevProjects => prevProjects.filter(project => project.id !== idToDelete));
    }

    return (
        <main style={{dislpay: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <button onClick={handleClick}>
                +
            </button>
            <br></br>
            <div style={{backgroundColor:'PeachPuff', height:'100vh', width:'auto'}}>
                {projects.map((project) => 
                    <div key={project.id} className="text-5xl font-bold font-sans_serif text-gray-700 items-center flex justify-center" style={{display: 'flex', justifyContent: 'space-between', padding: '10px 20px', borderRadius: '50px',backgroundColor: 'white',color: 'dark-gray-700',textAlign: 'center', margin: '10px 0'}}>
                        <div style={{width: 'fit', display: 'flex', justifyContent: 'center'}}>
                            <EditText text={project.text} onTextChange={newText => handleTextChange(project.id, newText)} />
                        </div>
                        <div style={{display: 'flex', justifyContent: 'space-between', padding: '10px 20px', borderRadius: '50px',backgroundColor: 'red',color: 'dark-gray-700',textAlign: 'center'}}>
                            <button onClick={() => handleDelete(project.id)}>X</button>
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}
export default Show