import React, { useState, useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { Header } from "./Header";

const ProductList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  // console.warn(data);
  const deleteProduct = async (id) => {
    // alert(id);
    let result = await fetch("http://localhost:8000/api/delete/" + id, {
      method: "DELETE",
    });
    result = await result.json();
    console.log(result);
    getData();
  };

  //   useEffect(async () => {
  //     let result = await fetch("http://localhost:8000/api/list/");
  //     result = await result.json();
  //     setData(result);
  //   }, []);
  //   console.warn(data);

  async function getData() {
    let result = await fetch("http://localhost:8000/api/list/");
    result = await result.json();
    setData(result);
  }

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
              <th>Operation</th>
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
                <td>
                  <Button
                    className='btn btn-danger cursor-pointer'
                    onClick={() => deleteProduct(item.id)}
                  >
                    Delete
                  </Button>
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
