import React from "react";
import UserList from "./features/users/userList/UserList.component";

import "./App.css";

const App = () => {
  return (
    <div className="main_container">
      <h1 className="main_heading">Shop List</h1>
      <UserList />
    </div>
  );
};

export default App;
