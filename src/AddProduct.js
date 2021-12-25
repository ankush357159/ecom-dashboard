import React, { useState } from "react";
import { Header } from "./Header";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [file, setFile] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const addProducts = async () => {
    console.log(name, file, price, description);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", name);
    formData.append("price", price);
    formData.append("description", description);

    let result = await fetch("http://localhost:8000/api/addproduct/", {
      method: "POST",
      body: formData,
    });
    console.log("Data saved successfully", result);
  };

  return (
    <div>
      <Header />
      <h2>Add Product Page</h2>
      <div className='col-sm-6 offset-sm-3'>
        <br />
        <input
          type='text'
          className='form-control'
          placeholder='Enter product name'
          onChange={(e) => setName(e.target.value)}
        />{" "}
        <br />
        <input
          type='file'
          className='form-control'
          placeholder='Enter product file'
          onChange={(e) => setFile(e.target.files[0])}
        />{" "}
        <br />
        <input
          type='text'
          className='form-control'
          placeholder='Enter product price'
          onChange={(e) => setPrice(e.target.value)}
        />{" "}
        <br />
        <input
          type='text'
          className='form-control'
          placeholder='Enter product description'
          onChange={(e) => setDescription(e.target.value)}
        />{" "}
        <br />
        <button className='btn btn-primary' onClick={addProducts}>
          Add Product
        </button>
      </div>
    </div>
  );
};

export default AddProduct;
