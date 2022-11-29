import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import ShopCard from "../../components/shopCard/ShopCard.component";

import "./ShopList.styles.css";
import Filter from "../../components/Filter";

const ShopList = () => {
  const { shopArray, filterArray } = useSelector((state) => state.shops);
  const dispatch = useDispatch();

  return (
    <>
      <Filter />

      <div className="shopList_container">
        <span className="shopList_title">Add your shop in the list</span>
        <Link to="/addShop">
          <button className="shopList_addShopButton">Add Shop</button>
        </Link>
        <div>{shopArray.length ? <ShopCard /> : <p>No Shop Added</p>}</div>
      </div>
    </>
  );
};

export default ShopList;
