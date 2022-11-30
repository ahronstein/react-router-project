import { useMemo, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pagesProgect/Login";
import Home from "./pagesProgect/home";
import Error from "./pagesProgect/Error";
import Heder from "./pagesProgect/heder";
import Info from "./info";
import Todos from "./Todos.jsx";
import Alboms from "./pagesProgect/Alboms";
import Posts from "./pagesProgect/Posts";
import Comments from "./pagesProgect/comments";
import Potos from "./pagesProgect/potos";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [allInfo, setAllInfo] = useState({});

  useMemo(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => res.json())
      .then((data) => setAllInfo(data));
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Heder />}>
            <Route index element={<Login data={allInfo} />} />
            <Route path="/login" element={<Login data={allInfo} />} />
            <Route path="/home" element={<Home data={allInfo} />}>
              <Route path="login" element={<Login data={allInfo} />} />
              <Route index element={<Info />} />
              <Route path="info" element={<Info />} />
              <Route path="todos" element={<Todos />} />
              <Route path="alboms" element={<Alboms />} />
              <Route path="alboms/:pObjId" element={<Potos />} />

              <Route path="posts" element={<Posts data={allInfo} />}>
                <Route path=":postId/comments" element={<Comments />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
