import React from "react";
import { useEffect, useState } from "react";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [tableTitles, setTableTitless] = useState([]);
  const [sortUp, setSortUp] = useState(true);

  useEffect(() => {
    const userID = JSON.parse(sessionStorage.getItem("user")).id;
    console.log(userID);
    const url = `https://jsonplaceholder.typicode.com/users/${userID}/todos`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data.length) {
          setTodos(data);
          console.log(todos);
          setTableTitless(Object.keys(todos[0]));
        }
      });
  }, []);

  function sortTodos(e) {
    const sortingTodos = [...todos];
    sortingTodos.sort((a, b) => {
      if (e === "random") {
        return 0.5 - Math.random();
      }
      if (a[e] > b[e]) {
        return sortUp ? 1 : -1;
      } else if (a[e] < b[e]) {
        return sortUp ? -1 : 1;
      }
      return 0;
    });
    setSortUp(!sortUp);
    setTodos(sortingTodos);
    console.log(sortingTodos);
  }

  return (
    <React.Fragment>
      <div>
        <button onClick={() => sortTodos("random")}>sort random</button>
        <button onClick={() => sortTodos("id")}>sort by ID</button>
        <button onClick={() => sortTodos("completed")}>sort by comlited</button>
        <button onClick={() => sortTodos("title")}>sort by title </button>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              {todos?.length &&
                tableTitles.map((title, i) => <th key={title}>{title}</th>)}
            </tr>
          </thead>
          <tbody>
            {todos?.length &&
              todos.map((todo, i) => (
                <tr key={todo.id}>
                  {Object.values(todo).map((element, b) => (
                    <td key={b}>
                      {typeof element === "boolean" ? (
                        <input type={"checkbox"} checked={element} disabled />
                      ) : (
                        element
                      )}
                    </td>
                  ))}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};

export default Todos;
