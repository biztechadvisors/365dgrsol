import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  useGetProductsQuery,
} from "../../store/servicesGadgets";
import CategorySlider from "../components/categorySlider/CategorySlider";
import {
  addItemToCart,
  getCart,
  setCartItemsCount,
} from "../../store/eshopSlice";

const ProductCategory = () => {
  const dispatch = useDispatch();
  const { categories } = useParams();
  const { data, error, isLoading } = useGetProductsQuery(categories);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div style={{ background: "#F8F8F8", padding: "20px" }}>
      <CategorySlider />
      <div className="productsWrapper container">
        {data?.length > 0 ? (
          data.map((product) => {
            const cartItems = getCart();
            const itemInCart =
              cartItems && cartItems.some((item) => item.id === product.id);
            console.log(itemInCart);
            return (
              <div
                className="card"
                key={product.id}
                style={{
                  background: "#FFFFFF",
                  boxShadow: "0px 1px 5px rgba(0,0,0,0.1)",
                  marginBottom: "20px",
                }}
              >
                <Link
                  to={`/products/${product.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <div className="container my-5 py-2">
                    <div className="row">
                      <div className="col-md-6 col-sm-12 py-3">
                        <img
                          className="img-fluid"
                          src={product.image[0]}
                          alt={product.title}
                          width="400px"
                          height="400px"
                          style={{ borderRadius: "10px" }}
                        />
                      </div>
                      <div className="col-md-6 col-md-6 py-5">
                        <h4 className="text-uppercase text-muted">
                          {product.categories}
                        </h4>
                        <h1 className="display-5">{product.name}</h1>
                        <h3 className="display-6 my-4">${product.price}</h3>
                        <p className="lead">{product.description}</p>
                        <h1 className="productPage__right__rating">
                          <i className="fa fa-star"></i>
                          {product.rating}
                        </h1>
                      </div>
                    </div>
                  </div>
                  <button
                    className="btn btn-outline-dark"
                    style={{ borderRadius: "10px", marginTop: "20px" }}
                  >
                    Buy Now
                  </button>
                </Link>
              </div>
            );
          })
        ) : (
          <div
            style={{
              background: "#FFFFFF",
              boxShadow: "0px 1px 5px rgba(0,0,0,0.1)",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            Empty Products
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCategory;
