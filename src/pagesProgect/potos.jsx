import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Potos = () => {
    const [potos,setpotoss]=useState()
    let { pObjId } = useParams();
console.log(pObjId)
    useEffect(() => {
        const url = `http://localhost:3010/albums/${pObjId}/photos`;
        fetch(url)
          .then((res) => res.json())
          .then((data) => {
            if (data.length) {  
              setpotoss(data);
              console.log(potos);
            
            }
          });
      }, [pObjId]);
    

    return ( 
        <div>
            <br />
            <Carousel>
           {potos?.length &&potos.map((photo,i)=>(<div><h3 key={i}>{photo.title}</h3><div><img loading="lazy" src={photo.thumbnailUrl} key={i} alt="" style={{width:"50%"}} /></div></div>))}
        </Carousel>
        </div>
     );
}
 
export default Potos;