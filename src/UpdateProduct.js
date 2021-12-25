import React, { useEffect, useState } from "react";
import { Header } from "./Header";
import { withRouter } from "react-router-dom";
import { Button } from "react-bootstrap";

const UpdateProduct = (props) => {
  //   console.log("Props: ", props.match.params.id);
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [file, setFile] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  //   useEffect(async () => {
  //     let result = await fetch(
  //       "http://localhost:8000/api/product/" + props.match.params.id
  //     );
  //     result = await result.json();
  //     setData(result)
  //   }, []);

  useEffect(() => {
    async function fetchData() {
      let result = await fetch(
        "http://localhost:8000/api/product/" + props.match.params.id
      );
      result = await result.json();
      setData(result);
      setName(result.name);
      setPrice(result.price);
      setDescription(result.description);
      setFile(result.file);
    }
    fetchData();
  }, [props.match.params.id]);

  const editProduct = async (id) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", name);
    formData.append("price", price);
    formData.append("description", description);

    let result = await fetch(
      "http://localhost:8000/api/update/" + id + "?_method=PUT",
      {
        method: "POST",
        body: formData,
      }
    );
    alert("Data saved successfully", result);
  };

  return (
    <div>
      <Header />
      <h2>Update Product</h2>
      <input
        type='text'
        defaultValue={data.name}
        onChange={(e) => setName(e.target.value)}
      />
      <br /> <br />
      <input
        type='text'
        defaultValue={data.price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <br /> <br />
      <input
        type='text'
        defaultValue={data.description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br /> <br />
      <input
        type='file'
        defaultValue={data.file_path}
        onChange={(e) => setFile(e.target.files[0])}
      />
      <br /> <br />
      <img
        style={{ width: 60 }}
        src={"http://localhost:8000/" + data.file_path}
        alt=''
      />
      <br />
      <br />
      <Button onClick={() => editProduct(data.id)}>Update</Button>
    </div>
  );
};

export default withRouter(UpdateProduct);
