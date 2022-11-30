import React from 'react';
import { useEffect } from 'react';
import { useState } from "react";
import { json, Outlet } from 'react-router-dom';

const Heder = () => {
    const [name,setname] = useState()
 
    useEffect(()=>{
    if(sessionStorage.getItem('user')){
         setname(JSON.parse (sessionStorage.getItem('user')).name)
    } 
   },[name])
    
    
 
 console.log('name' ,name);
    return ( 
        <div>

         { name && <h1>wellcome :{name}</h1>}
         <Outlet/>
                 </div>
     );
}
 
export default Heder;