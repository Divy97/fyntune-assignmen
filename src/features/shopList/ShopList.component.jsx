import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./ShopList.styles.css";
import ShopCard from "../../components/shopCard/ShopCard.component";

const ShopList = () => {
  const shops = useSelector((store) => store.shops);

  return (
    <>
      <div className="shopList_container">
        <span className="shopList_title">Add your shop in the list</span>
        <Link to="/addShop">
          <button className="shopList_addShopButton">Add Shop</button>
        </Link>
        <div>{shops.length ? <ShopCard /> : <p>No Shop Added</p>}</div>
      </div>
    </>
  );
};

export default ShopList;
