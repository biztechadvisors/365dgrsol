import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchData,
  fetchPropTypeData,
  addDataAsync,
  updateDataAsync,
  deleteDataAsync,
} from "../../store/componentSlice/eventorganiserSlice";
import AdminDashboad from "../AdminDashboad";
import Pagination from "react-js-pagination";

import "./styles.css"; // Add a new CSS file for styles

const DataList = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.data);
  const loading = useSelector((state) => state.data.loading);
  const error = useSelector((state) => state.data.error);

  // console.log(data);

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
            <th>Property Name</th>
            <th>Property City</th>
            <th>Property State</th>
            <th>Property Address</th>
            <th>Property Image</th>
            <th>Property Type</th>
            <th>Propert People Capacity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.slice(startIdx, endIdx).map((item) => (
            <tr key={item.prop_id}>
              <td>{item.prop_id}</td>
              <td>{item.prop_name}</td>
              <td>{item.prop_city}</td>
              <td>{item.prop_state}</td>
              <td>{item.prop_address}</td>
              <td>{item.prop_img}</td>
              <td>{item.prop_type}</td>
              <td>{item.prop_capacity}</td>
              <td>
                <button
                  onClick={() => dispatch(deleteDataAsync(item.prop_id))}
                  style={{ margin: "10px", padding: "15px" }}
                >
                  Delete
                </button>
                <button
                  style={{ margin: "10px", padding: "15px" }}
                  onClick={async () => {
                    const newPropId = window.prompt(
                      "Enter new ID",
                      item.prop_id
                    );
                    const newPropName = window.prompt(
                      "Enter new name",
                      item.prop_name
                    );
                    const newPropCity = window.prompt(
                      "Enter new city",
                      item.prop_city
                    );
                    const newPropState = window.prompt(
                      "Enter new state",
                      item.prop_state
                    );
                    const newPropAddress = window.prompt(
                      "Enter new address",
                      item.prop_address
                    );
                    const newPropImg = window.prompt(
                      "Enter new image URL",
                      item.prop_img
                    );
                    const newPropType = window.prompt(
                      "Enter new type",
                      item.prop_type
                    );
                    const newPropCapacity = window.prompt(
                      "Enter new capacity",
                      item.prop_capacity
                    );

                    try {
                      const updatedData = await dispatch(
                        updateDataAsync({
                          prop_id: newPropId,
                          prop_name: newPropName,
                          prop_city: newPropCity,
                          prop_state: newPropState,
                          prop_address: newPropAddress,
                          prop_img: newPropImg,
                          prop_type: newPropType,
                          prop_capacity: newPropCapacity,
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
  const [proName, setProName] = React.useState("");
  const [proAdd, setProAdd] = React.useState("");
  const [proCap, setProCap] = React.useState("");
  const [proImg, setProImg] = React.useState("");
  const [proType, setProType] = React.useState("");
  const [proCity, setProCity] = React.useState("");
  const [proState, setProState] = React.useState("");

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchPropTypeData());
  }, [dispatch]);
  

  const data = useSelector((state) => state.data.data);
  
  // console.log(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addDataAsync({
        proName,
        proAdd,
        proCap,
        proImg,
        proType,
        proState,
        proCity,
      })
    );
    console.log(proName, proAdd, proCap, proImg, proType, proState, proCity);

    setProName("");
    setProAdd("");
    setProCap("");
    setProImg("");
    setProType("");
    setProState("");
    setProCity("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Property Name"
        value={proName}
        onChange={(e) => setProName(e.target.value)}
        style={{ margin: "10px", padding: "15px" }}
      />
      <input
        type="text"
        placeholder="Property City"
        value={proCity}
        onChange={(e) => setProCity(e.target.value)}
        style={{ margin: "10px", padding: "15px" }}
      />
      <input
        type="text"
        placeholder="Property State"
        value={proState}
        onChange={(e) => setProState(e.target.value)}
        style={{ margin: "10px", padding: "15px" }}
      />
      <input
        type="text"
        placeholder="Property Address"
        value={proAdd}
        onChange={(e) => setProAdd(e.target.value)}
        style={{ margin: "10px", padding: "15px" }}
      />
      <input
        type="number"
        placeholder="People Capacity"
        value={proCap}
        onChange={(e) => setProCap(e.target.value)}
        style={{ margin: "10px", padding: "15px" }}
      />
      <input
        type="text"
        placeholder="Property Image"
        value={proImg}
        onChange={(e) => setProImg(e.target.value)}
        style={{ margin: "10px", padding: "15px" }}
      />

      <select
        value={proType}
        onChange={(e) => setProType(e.target.value)}
        style={{ margin: "10px", padding: "15px" }}
      >
        <option value="">-- Select property type --</option>
        {data.map((data, id) => (
          <option key={id} value={data.prop_type}>
            {data.prop_type}
          </option>
        ))}
      </select>

      <button type="submit" style={{ margin: "10px", padding: "15px" }}>
        Submit
      </button>
    </form>
  );
};

const EventOrganiser = () => {
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

export default EventOrganiser;
