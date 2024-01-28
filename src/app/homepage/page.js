'use client'
import { db , auth } from '@/config/firebase';
import { doc } from 'firebase/firestore';
import { getDoc, getDocs, collection, addDoc, setDoc } from "firebase/firestore";
import React from "react";
import { useState, useEffect } from "react";



const  show = () => {
    const [users, setUsers] = useState([]);
    const [groups, setGroups] = useState([]);
    const userCollectionRef = collection(db, 'users');
    useEffect(() => {

        const getUserList = async () => {
          const data = await getDocs(userCollectionRef);
          const userList = data?.docs?.map((doc) => (
            {
              ...doc.data(),
              id: doc.id
            }));
          console.log(userList)
          setUsers(userList);
    
        }
    
        getUserList();
    
      }, []);
    
    return(
    
        <main style={{justifyContent: 'center', alignItems: 'center', backgroundColor:'#ffd099'}}>
        <h1 style={{textAlign:'center', backgroundColor: '#ffc175', fontSize: '50px', color: 'white', width: 'auto', marginBottom: '7px'}}>
            Your current projects  {auth?.currentUser?.displayName}
        </h1>
    
        <br></br>
        <div style={{backgroundColor:'PeachPuff', height:'100vh', height:'auto', minHeight:'100vh', width:'auto', margin:'0px 250px', borderRadius: '20px', padding:'10px 0px'}}>
            {users.map((project) => (
        
                    <div> 
                    {project.groups.map((items) =>
                    {
                        return(
                            <div className="text-5xl font-bold font-sans_serif text-gray-700 items-center flex justify-center gap-5" > {items}</div>
                        )
                    })
                    }
                    
                    </div>
                ) 
                )}
        </div>
        <footer>
            <div style={{textAlign:'center', backgroundColor:'#ffc175', fontSize:'50px', color:'white', width:'auto', marginTop:'10px'}}>
                Footer
            </div>
        </footer>
    </main>
    )
}

export default show








{/* <main style={{justifyContent: 'center', alignItems: 'center', backgroundColor:'#ffd099'}}>
            <h1 style={{textAlign:'center', backgroundColor: '#ffc175', fontSize: '50px', color: 'white', width: 'auto', marginBottom: '7px'}}>
                Home
            </h1>
            <button onClick={handleClick} style={{display:'flex', justifyContent: 'center', alignItems:'center', fontSize:'45px', backgroundColor:'black', borderRadius:'50px', height:'45px', width:'45px', marginLeft:'150px', marginTop:'50px', marginBottom:'-100px', position: 'sticky', top:'10px'}}>
                    +
            </button>
            <br></br>
            <div style={{backgroundColor:'PeachPuff', height:'100vh', height:'auto', minHeight:'100vh', width:'auto', margin:'0px 250px', borderRadius: '20px', padding:'10px 0px'}}>
                {groups.map((project) => 
                    <div key={project.id} onClick={() => window.location.href='/homepage/tasks'} 
                    className="text-5xl font-bold font-sans_serif text-gray-700 items-center flex justify-center" 
                    style={{display: 'flex', justifyContent: 'space-between', padding: '10px 20px', borderRadius: '50px',backgroundColor: 'white',color: 'dark-gray-700',textAlign: 'center', margin: '10px 50px'}}>
                        <div style={{display: 'flex', justifyContent: 'center', width: 'auto'}} onClick={(e) => e.stopPropagation()}>
                            <EditText text={project}  />
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
        </main> */}