import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";


const Posts = (props) => {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState();
  const [comments, setComments] = useState([]);


  useEffect(() => {
    const userID = JSON.parse(sessionStorage.getItem("user")).id;
    console.log(userID);
    const url = `https://jsonplaceholder.typicode.com/users/${userID}/posts`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data.length) {
          setPosts(data);
        }
      });
  }, []);
 
  return (
    <div style={{textAlign: "center"}} >
        <br /><br />
      {posts?.length &&
        posts.map((pObj, i) => (
          <ul>
            <li id={pObj} key={i} className="btn" onClick={() => setPost(pObj)}>
              {i + 1} . {pObj.title}
            </li>
          </ul>
        ))}
        <br /><hr />
      <div className="post">
        <ul>
          {post &&
          <div> <Link  to={`${post.id}/comments`}><li  className="btn">title :{post.title}</li></Link>
           <Link  to={`${post.id}/comments`}><li  className="btn">body :{post.body}</li></Link> </div>
           }
        </ul>
        <Outlet />
      </div>
    </div>
  );
};

export default Posts;
