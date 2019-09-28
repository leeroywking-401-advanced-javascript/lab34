import React from "react";

import ToDo from "./components/todo/todo.js";
import Auth from "./components/auth/auth.js";
import Login from "./components/auth/login.js";
import Context from "./components/auth/context.js";

export default class App extends React.Component {
  render() {
    return (
      <>
        <Context>
          <Login />
          {/* <Auth capability="read"> */}
            {/* <ToDo /> */}
          {/* </Auth> */}
        </Context>
      </>
    );
  }
}
