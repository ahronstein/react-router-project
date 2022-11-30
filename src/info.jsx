import React, { useEffect, useState } from "react";

const Info = (props) => {
  const [userInfo, setUserInfo] = useState(JSON.parse(sessionStorage.getItem("user")));

  
    const {company,address } = userInfo;
    const inform = ['name','username', 'email','phone','website']
  

  return (
    <div>
      <h1>Info</h1>
      <ul>
        
        <li>company : {company.name}</li>
        <li>company : {company.catchPhrase}</li>
        <li>company : {company.bs}</li>
        <li>address : {address.street}</li>
        <li>address : {address.suite}</li>
        <li>address : {address.city}</li>
        {inform.map((e, i) => {
          return (
            <li key={i}>
          {e}:{userInfo[e]}
            </li>

          );
        })}
      </ul>
    </div>
  );

}

export default Info;
