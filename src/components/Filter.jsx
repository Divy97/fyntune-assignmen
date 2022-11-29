import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { filteredShops } from "../features/shopSlice";
const Filter = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const changeSearchTerm = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    dispatch(filteredShops(searchTerm));
  }, [searchTerm, dispatch]);

  return (
    <div>
      <input
        type="search"
        placeholder="Search......"
        value={searchTerm}
        onChange={changeSearchTerm}
      />
    </div>
  );
};

export default Filter;
