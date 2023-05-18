import { useState } from "react";

import "./CartDisplayProduct.css";
import {
  addItemQuantity,
  getCart,
  reduceItemQuantity,
} from "../../../store/eshopSlice";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

function CartDisplayProduct(props) {
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(props.quantity);

  const seller = "Seller: DJP Team";
  const { id, name, image, price, rating, handleRemove, calculateTotalPrice } =
    props;

  function handleReduce() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
    dispatch(reduceItemQuantity(id));
    props.setCartItems(getCart());
  }

  function handleAdd() {
    setQuantity(quantity + 1);
    dispatch(addItemQuantity(id));
    props.setCartItems(getCart());
  }

  if (quantity === 0) {
    return null;
  }
  return (
    <div className="single-cart-product-card">
      <div className="cart-card-flex">
        <div className="cart-product-image">
          <img src={image} alt={name} />
          <div className="cart-quantity-buttons">
            <button
              disabled={quantity <= 1}
              onClick={handleReduce}
              className="reduce"
              style={{
                background: "red",
                color: "white",
                border: "none",
                padding: "5px 10px",
                marginRight: "10px",
              }}
            >
              -
            </button>
            {quantity}
            <button
              onClick={handleAdd}
              className="increase"
              style={{
                background: "green",
                color: "white",
                border: "none",
                padding: "5px 10px",
                marginLeft: "10px",
              }}
            >
              +
            </button>
          </div>
        </div>
        <div className="cart-product-details">
          <Link to={`/products/${id}`}>
            <h3 className="capitalize">{name}</h3>
          </Link>
          <h6>{seller}</h6>
          <h3>{price}</h3>
          <p>{rating}</p>
          <div className="cart-product-buttons">
            <button onClick={() => handleRemove(id)}>Remove</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartDisplayProduct;
