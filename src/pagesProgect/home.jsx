import { Fragment } from "react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Heder from "./heder";
import { TabPanelUnstyled } from "@mui/base";
import { Tab, Tabs } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();
  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(event);
    navigate(`${event.target.id}`);
  };
  return (
    <React.Fragment>
     { sessionStorage.getItem("user") &&
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="info" id="info" />
        <Tab label="alboms" id="alboms" />
        <Tab label="posts" id="posts" />
        <Tab label="todos" id="todos" />
        <Tab label="loguot" id="login" onClick={()=>sessionStorage.clear('user')} />

      </Tabs>}
      <Outlet />
    </React.Fragment>
  );
};
export default Home;
