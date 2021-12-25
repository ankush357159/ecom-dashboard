import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { Header } from "./Header";

const SearchProduct = () => {
  const [data, setData] = useState([]);
  async function search(key) {
    if (key.length > 2) {
      let result = await fetch("http://localhost:8000/api/search/" + key);
      result = await result.json();
      console.warn(result);
      setData(result);
    }
  }

  return (
    <>
      <Header />
      <div className='col-sm-6 offset-sm-3'>
        <h2>Search Product</h2>
        <input
          type='text'
          className='form-control'
          placeholder='Search product'
          onChange={(e) => search(e.target.value)}
        />
        {data.length > 0 ? (
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
        ) : <h6>You can search products here..</h6>}
        {/* ) : null} */}
      </div>
    </>
  );
};

export default SearchProduct;
