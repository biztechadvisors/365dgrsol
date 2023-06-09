import React, { useState } from "react";
import "./WishlistPage.css";
import {
  getWishlist,
} from "../../../store/eshopSlice";
import WishlistCard from "./WishlistCard";

function WishlistPage() {
  const [wishList, setWishlist] = useState(getWishlist());

  console.log(wishList);

  return (
    <div className="wishlistPage__container">
      {wishList.length === 0 ? (
        <h1>No Items in wishList</h1>
      ) : (
        wishList.map((item) => (
          <WishlistCard
            id={item.id}
            name={item.name}
            img={item.img}
            price={item.price}
            rating={item.rating}
            setWishlist={setWishlist}
          />
        ))
      )}
    </div>
  );
}

export default WishlistPage;
