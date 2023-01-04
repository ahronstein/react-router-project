import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Comments = () => {
  const [comment, setComments] = useState();
  let { postId } = useParams();
  console.log(postId);
  useEffect(() => {
    const url = `http://localhost:3010/posts/${postId}/comments`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data.length) {
          setComments(data);
        }
      });
  }, [postId]);

  console.log(comment);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>mail</th>
            <th>comment</th>
          </tr>
        </thead>

        <tbody>
          {comment?.length &&
            comment.map((comen, i) => (
              <tr key={i}>
                <td>{comen.postId}</td>
                <td>{comen.name}</td>
                <td>{comen.email}</td>
                <td>{comen.body}</td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Comments;
