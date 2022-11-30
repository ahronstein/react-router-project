import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";

const Alboms = (props) => {
  const [alboms, setAlboms] = useState([]);
  
    useEffect(() => {
    const userID = JSON.parse(sessionStorage.getItem("user")).id;
    console.log(userID);
    const url = `https://jsonplaceholder.typicode.com/users/${userID}/albums`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data.length) {
            data.sort((a,b)=> a.title > b.title ? 1 :  a.title < b.title ? -1 : 0)
          setAlboms(data);
        }
      });
  }, []);
 console.log(alboms);

  return (
    <table>
       {alboms?.length &&
       alboms.map((pObj, i) => (
          <tr key={i}><Link  to={`${pObj.id}`} > <br /> {pObj.title} <br /><br /></Link></tr>
        ))} 
      
    </table>
  );
};

export default Alboms;
