import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { Header } from "./Header";

const ProductList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let result = await fetch("http://localhost:8000/api/list/");
      result = await result.json();
      setData(result);
    }
    fetchData();
  }, []);
    console.warn(data);

//   useEffect(async () => {
//     let result = await fetch("http://localhost:8000/api/list/");
//     result = await result.json();
//     setData(result);
//   }, []);
//   console.warn(data);

  return (
    <div>
      <Header />
      <div className='col-sm-10 offset-sm-1'>
        <h2>Product List</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>Rs.{item.price}</td>
                <td>
                  <img
                    style={{ width: 80 }}
                    src={"http://localhost:8000/" + item.file_path}
                    alt=''
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default ProductList;

// useEffect(() => {
//     async function fetchData() {
//       // You can await here
//       const response = await MyAPI.getData(someId);
//       // ...
//     }
//     fetchData();
//   }, [someId]);
