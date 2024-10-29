import "./App.css";
import React from "react";
import { Route } from "react-router-dom";
import Chat from "./pages/Chat";
import Login from "./pages/Login";

function ChatApp() {
  return (
    <>
      <Route exact path={"/"} component={Login} />
      <Route exact path={"/chat"} component={Chat} />
    </>
  );
}

export default ChatApp;
