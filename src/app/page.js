'use client'
import { useState, useEffect } from "react";
import { auth, googleProvider } from "../config/firebase.js";
import { signInWithPopup, signOut } from "firebase/auth";
import { db } from "../config/firebase.js";
import { doc } from 'firebase/firestore'; 
import { getDoc,getDocs , collection, addDoc , setDoc } from "firebase/firestore";


export default function Home() {
  const [users, setUsers] = useState([]);
  const userCollectionRef = collection(db,'users');

  useEffect(() => {

    const getUserList = async () => {
    const data = await getDocs(userCollectionRef);
    const userList = data.docs.map((doc) => (
      {  
      id: doc.id 
      }));
    setUsers(userList);

  }

  getUserList();
  
}, []);

  const signInwithGoogle = async () =>{
    try{
      await signInWithPopup(auth, googleProvider)
      //setIsNewUser(auth?.currentUser?.uid in users)
      console.log('Signed in as ' , auth?.currentUser?.displayName)

      const userDocRef = doc(db, 'users', auth?.currentUser?.uid);
      const userDocSnap = await getDoc(userDocRef);

      if (userDocSnap.exists()) {
        console.log('User data already exists');
      } else {
        console.log('User data does not exist yet');
        await setDoc(doc(db, "users", auth?.currentUser?.uid), {
          name: auth?.currentUser?.displayName
        });
      }
      
    }
    catch(err){
      console.log(err)
    }

  }

  const signOutwithGoogle = async () =>{
    try{
      await signOut(auth)
    }
    catch(err){
      console.log(err)
    }

  }
  return (
    
    <main className="bg-white  w-screen h-screen grid grid-flow-row justify-center">
      
      <button onClick={signInwithGoogle }  className="text-black text-center bg-gray-600 rounded-md w-fit h-fit text-lg ">Sign In</button>
      <button onClick={signOutwithGoogle} className="text-black text bg-gray-600 rounded-md w-fit h-fit text-lg">Sign Out</button>
    </main>
  );
}
