import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { addShop } from "../shopSlice";
import { v4 as uuidv4 } from "uuid";
import "./AddShop.styles.css";

const AddShop = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    name: "",
    area: "Thane",
    category: "Grocery",
    openingDate: "",
    closingDate: "",
  });

  const handleAddShop = () => {
    dispatch(
      addShop({
        id: uuidv4(),
        name: values.name,
        area: values.area,
        category: values.category,
        openingDate: values.openingDate,
        closingDate: values.closingDate,
      })
    );

    setValues({
      name: "",
      area: "",
      category: "",
      openingDate: "",
      closingDate: "",
    });

    navigate("/");
  };

  return (
    <div className="addShop_container">
      <h1 className="addShop_heading">Enter Shop Details</h1>
      <label>Shop Name: </label>
      <input
        className="addShop_input"
        type="text"
        placeholder="Enter shop name..."
        value={values.name}
        onChange={(e) => setValues({ ...values, name: e.target.value })}
      />

      <label>Select Area: </label>
      <select
        className="addShop_input"
        value={values.area}
        onChange={(e) => setValues({ ...values, area: e.target.value })}
      >
        <option value="Thane">Thane</option>
        <option value="Pune">Pune</option>
        <option value="Mumbai Suburban">Mumbai Suburban</option>
        <option value="Nashik">Nashik</option>
        <option value="Nagpur">Nagpur</option>
        <option value="Ahmednagar">Ahmednagar</option>
        <option value="Solapur">Solapur</option>
      </select>
      <label>Select Shop Category: </label>
      <select
        className="addShop_input"
        value={values.category}
        onChange={(e) => setValues({ ...values, category: e.target.value })}
      >
        <option value="Grocery">Grocery</option>
        <option value="Butcher">Butcher</option>
        <option value="Baker">Baker</option>
        <option value="Chemist">Chemist</option>
        <option value="Stationery shop">Stationery shop</option>
      </select>
      <label>Opening date: </label>
      <input
        className="addShop_input"
        type="date"
        value={values.openingDate}
        onChange={(e) => setValues({ ...values, openingDate: e.target.value })}
      />
      <label>Closing date: </label>
      <input
        className="addShop_input"
        type="date"
        value={values.closingDate}
        onChange={(e) => setValues({ ...values, closingDate: e.target.value })}
      />
      <button className="addShop_submitButton" onClick={handleAddShop}>
        Submit
      </button>
    </div>
  );
};

export default AddShop;
