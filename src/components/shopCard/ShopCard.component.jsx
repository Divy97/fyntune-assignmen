import { Link } from "react-router-dom";
import DELETE_ICON from "../../assets/delete.png";
import EDIT_ICON from "../../assets/edit.png";
import { useSelector, useDispatch } from "react-redux";
import { deleteShop } from "../../features/shopSlice";
import "./ShopCard.styles.css";

const ShopCard = () => {
  const { shopArray, filterArray } = useSelector((state) => state.shops);
  const dispatch = useDispatch();
  const handleRemoveShop = (id) => {
    dispatch(
      deleteShop({
        id: id,
      })
    );
  };
  return (
    <>
      <div className="main">
        <ul className="cards">
          {filterArray.map((shop) => (
            <li className="cards_item" key={shop.id}>
              <div className="card">
                <div className="card_content">
                  <button
                    className="delete_icon"
                    onClick={() => handleRemoveShop(shop.id)}
                  >
                    <img src={DELETE_ICON} alt="deleteIcon" />
                  </button>
                  <Link to={`editShop/${shop.id}`}>
                    <button className="delete_icon">
                      <img src={EDIT_ICON} alt="deleteIcon" />
                    </button>
                  </Link>
                  <h2 className="card_title">Shop name: {shop.name}</h2>
                  <h3 className="card_title__h3">Shop Area: {shop.area}</h3>
                  <h3 className="card_title__h3">
                    Shop Category: {shop.category}
                  </h3>
                  <p className="card_text">
                    <span>
                      Opening date:{" "}
                      <b
                        style={{
                          fontSize: "1rem",
                        }}
                      >
                        {shop.openingDate}
                      </b>{" "}
                    </span>
                  </p>
                  <p className="card_text">
                    <span>
                      Closing date:{" "}
                      <b
                        style={{
                          fontSize: "1rem",
                        }}
                      >
                        {shop.closingDate}
                      </b>{" "}
                    </span>
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ShopCard;
