import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchData,
  addDataAsync,
  updateDataAsync,
  deleteDataAsync,
} from "../../store/componentSlice/electronicsSlice";
import AdminDashboad from "../AdminDashboad";
import Pagination from "react-js-pagination";

import "./styles.css"; // Add a new CSS file for styles

const DataList = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.data);
  const loading = useSelector((state) => state.data.loading);
  const error = useSelector((state) => state.data.error);

  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const itemsPerPage = 10;
  const startIdx = (activePage - 1) * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  return (
    <div style={{ padding: 30 }}>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>CategoryName</th>
            <th>productImage</th>
            <th>productDesc</th>
            <th>price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.slice(startIdx, endIdx).map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.CategoryName}</td>
              <td>{item.productImage}</td>
              <td>{item.productDesc}</td>
              <td>{item.price}</td>
              <td>
                <button
                  onClick={() => dispatch(deleteDataAsync(item.id))}
                  style={{ margin: "10px", padding: "15px" }}
                >
                  Delete
                </button>
                <button
                  style={{ margin: "10px", padding: "15px" }}
                  onClick={async () => {
                    const newId = window.prompt("Enter new id", item.id);
                    const newCategoryName = window.prompt(
                      "Enter new sc_cat",
                      item.CategoryName
                    );
                    const newProductImage = window.prompt(
                      "Enter new productImage",
                      item.productImage
                    );
                    const newProductDesc = window.prompt(
                      "Enter new productDesc",
                      item.productDesc
                    );
                    const newPrice = window.prompt(
                      "Enter new price",
                      item.price
                    );

                    try {
                      const updatedData = await dispatch(
                        updateDataAsync({
                          id: newId,
                          CategoryName: newCategoryName,
                          productImage: newProductImage,
                          productDesc: newProductDesc,
                          price: newPrice,
                        })
                      );
                      console.log("Data updated successfully: ", updatedData);
                    } catch (error) {
                      console.error("Failed to update data: ", error);
                    }
                  }}
                >
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        activePage={activePage}
        itemsCountPerPage={itemsPerPage}
        totalItemsCount={data.length}
        onChange={handlePageChange}
        className="Pagination"
      />
    </div>
  );
};

const DataForm = () => {
  const [id, setId] = React.useState("");
  const [categoryName, setCategoryName] = React.useState("");
  const [productImage, setProductImage] = React.useState("");
  const [productDesc, setProductDesc] = React.useState("");
  const [price, setPrice] = React.useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addDataAsync({
        id,
        categoryName,
        productImage,
        productDesc,
        price,
      })
    );
    setId("");
    setCategoryName("");
    setProductImage("");
    setProductDesc("");
    setPrice("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="id"
        value={id}
        onChange={(e) => setId(e.target.value)}
        style={{ margin: "10px", padding: "15px" }}
      />
      <input
        type="text"
        placeholder="CategoryName"
        value={categoryName}
        onChange={(e) => setCategoryName(e.target.value)}
        style={{ margin: "10px", padding: "15px" }}
      />
      <input
        type="text"
        placeholder="Image"
        value={productImage}
        onChange={(e) => setProductImage(e.target.value)}
        style={{ margin: "10px", padding: "15px" }}
      />
      <input
        type="text"
        placeholder="desc"
        value={productDesc}
        onChange={(e) => setProductDesc(e.target.value)}
        style={{ margin: "10px", padding: "15px" }}
      />
      <input
        type="text"
        placeholder="prize"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        style={{ margin: "10px", padding: "15px" }}
      />
      <button type="submit" style={{ margin: "10px", padding: "15px" }}>
        Submit
      </button>
    </form>
  );
};

const CustomiseJewelDesign = () => {
  return (
    <div>
      <AdminDashboad />
      <div style={{ padding: 30 }}>
        <DataForm />
      </div>
      <DataList />
    </div>
  );
};

export default CustomiseJewelDesign;
