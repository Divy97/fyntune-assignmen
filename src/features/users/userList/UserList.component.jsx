import React from "react";
import "./UserList.styles.css";

const UserList = () => {
  return (
    <div className="userList_container">
      <span className="userList__title">Add your shop in the list</span>
      <button className="userList__addShopButton">Add Shop</button>
    </div>
  );
};

export default UserList;
