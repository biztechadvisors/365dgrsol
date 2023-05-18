import React, { useEffect, useState } from "react";
import Pagination from "react-js-pagination";
import axios from "axios";
import AdminDashboard from "../AdminDashboad";

const EventInq = () => {
  const [activePage, setActivePage] = useState(1);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://biztekminds.com/mycoolapp/api/EventDetail")
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        setData([error.message + " Please try again later"]);
      });
  }, []);

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
            <th>Name</th>
            <th>Email</th>
            <th>Activities</th>
            <th>Attendies</th>
            <th>Full Address</th>
            <th>Message</th>
            <th>Time</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.slice(startIdx, endIdx).map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.activities}</td>
              <td>{item.attendies}</td>
              <td>{item.fulladd}</td>
              <td>{item.message}</td>
              <td>{item.time}</td>

              <td></td>
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

const EventInquiry = () => {
  return (
    <div>
      <AdminDashboard />
      <EventInq />
    </div>
  );
};

export default EventInquiry;
