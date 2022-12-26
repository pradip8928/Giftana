import React, { useState } from "react";
import axios from "axios";

function updateProduct(props) {
  const [product, setProduct] = useState(props.currentProduct);
  const [error, setError] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .patch(`http://localhost:3000/catalog/catagory/${product.id}`, product)
      .then((res) => {
        if (res.status === 200) {
          // Update the product in the frontend and close the form
          props.updateProduct(product);
          props.setEditing(false);
        } else {
          setError(`Error updating product: ${res.data.message}`);
        }
      })
      .catch((err) => {
        setError(`Error updating product: ${err.message}`);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Price:
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Description:
        <textarea
          name="description"
          value={product.description}
          onChange={handleInputChange}
        />
      </label>
      <br />
      {error && <p>{error}</p>}
      <button type="submit">Update Product</button>
      <button onClick={() => props.setEditing(false)}>Cancel</button>
    </form>
  );
}

export default updateProduct;
