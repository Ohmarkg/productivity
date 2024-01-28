'use client'
import Progress from '@/components/Progress';
import React from 'react';
import { useState } from 'react';

function EditText() {
    const [text, setText] = useState('New Task');
  
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
        setProjects(prevProjects => [...prevProjects, { id: idCounter, text: 'New Task' + (prevProjects.length + 1)}]);
        setIdCounter(idCounter + 1);
    }

    const handleTextChange = (id, newText) => {
        setProjects(prevProjects => prevProjects.map((project) => project.id === id ? { ...project, text: newText } : project));
    }

    const handleDelete = (idToDelete) => {
        setProjects(prevProjects => prevProjects.filter(project => project.id !== idToDelete));
    }

    return (
        <main style={{justifyContent: 'center', alignItems: 'center', backgroundColor:'#ffd099'}}>
            <h1 style={{textAlign:'center', backgroundColor: '#ffc175', fontSize: '50px', color: 'white', width: 'auto', marginBottom: '7px'}}>
                <a href='.' style={{}}>
                    Home
                </a>
                <div style={{marginBottom:'-50px'}}>
                    Project
                </div>
                <br></br>
                <Progress />
            </h1>
            <button onClick={handleClick} style={{display:'flex', justifyContent: 'center', alignItems:'center', fontSize:'45px', backgroundColor:'black', borderRadius:'50px', height:'45px', width:'45px', marginLeft:'150px', marginTop:'50px', marginBottom:'-100px', position: 'sticky', top:'10px'}}>
                    +
            </button>
            <br></br>
            <div style={{backgroundColor:'PeachPuff', height:'100vh', height:'auto', minHeight:'100vh', width:'auto', margin:'0px 250px', borderRadius: '20px', padding:'10px 0px'}}>
                {projects.map((project) => 
                    <div key={project.id} className="text-5xl font-bold font-sans_serif text-gray-700 items-center flex justify-center" style={{display: 'flex', justifyContent: 'space-between', padding: '10px 20px', borderRadius: '50px',backgroundColor: 'white',color: 'dark-gray-700',textAlign: 'center', margin: '10px 50px'}}>
                        <div style={{display: 'flex', justifyContent: 'center', width: 'auto'}}>
                            <EditText text={project.text} onTextChange={newText => handleTextChange(project.id, newText)} />
                        </div>
                        <div style={{display: 'flex', justifyContent: 'space-between', padding: '10px 20px', borderRadius: '50px',backgroundColor: 'red',color: 'dark-gray-700',textAlign: 'center'}}>
                            <button onClick={() => handleDelete(project.id)}>X</button>
                        </div>
                    </div>
                )}
            </div>
            <footer>
                <div style={{textAlign:'center', backgroundColor:'#ffc175', fontSize:'50px', color:'white', width:'auto', marginTop:'10px'}}>
                    Footer
                </div>
            </footer>
        </main>
    );
}
export default Show