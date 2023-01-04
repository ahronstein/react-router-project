import { TextField, Button, Input, FormLabel } from "@mui/material";
import React, { useMemo, useRef, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Login = (props) => {
  const refs = useRef({});
  const navigate = useNavigate();
  const setRef = (e, name) => {
    refs.current[name] = e;
  };

  const chackUser = () => {
    const name = refs.current.name.value;
    const pass = refs.current.password.value;
    fetch(`http://localhost:3010/users`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ password: pass }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.length) {
          sessionStorage.setItem("user", JSON.stringify(data[0]));
          //console.log(filtering[0]);
          navigate("/home");
        } else {
          navigate("/login");
        }
      });
  };
  return (
    <React.Fragment>
      <div className="loginBox">
        <form>
          <label htmlFor="name">name:</label>
          <br />
          <input id="name" ref={(e) => setRef(e, "name")} />
          <br />
          <label htmlFor="password">password:</label>
          <br />
          <input id="password" ref={(e) => setRef(e, "password")} />
          <br />
          <Button
            variant="contained"
            sx={{ marginLeft: "30px" }}
            onClick={chackUser}
          >
            Contained
          </Button>
        </form>
      </div>
    </React.Fragment>
  );
};
export default Login;
