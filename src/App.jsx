import React from "react";
import { Route, Routes } from "react-router-dom";
import ShopList from "./features/shopList/ShopList.component";
import AddShop from "./features/addShop/AddShop.component";

import "./App.css";
import EditShop from "./features/editShop/EditShop.component";

const App = () => {
  return (
    <div className="main_container">
      <Routes>
        <Route path="/" element={<ShopList />} />
        <Route path="/addShop" element={<AddShop />} />
        <Route path="/editShop/:id" element={<EditShop />} />
      </Routes>
    </div>
  );
};

export default App;
