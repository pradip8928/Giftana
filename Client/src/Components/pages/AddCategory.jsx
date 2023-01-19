import React, { useState, useEffect } from "react";
import Error from "./Error";
import Success from "./Success";
import Loading from "./Loading";
import { useNavigate } from "react-router-dom";

const AddCategory = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);

    const [message, setMessage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [addCategory, setCategory] = useState({
      productName: "",
      productCompleteName: "",
      productAliasName: "",
      productPublished: "",
      productOrder:"",
      productStores:""
    });
// message disapper 
    useEffect(() => {
      if(message){
        setTimeout(() => {
            setMessage(null);
        }, 3000);
      }
    }, [message]);
    useEffect(() => {
      if(error){
        setTimeout(() => {
          setError(null);
        }, 3000);
      }
    }, [error]);
  
  
      let name, value;
    const handleInputs = (e) => {
      name = e.target.name;
      value = e.target.value;
      setCategory({ ...addCategory, [name]: value });
      console.log(
         addCategory
      );
    };
  
  
  
    const postData = async (e) => {
      console.log(addCategory);
  
      e.preventDefault();
      const { productName, productCompleteName, productAliasName,productPublished,productOrder,productStores } = addCategory;
  
      if (!productName || !productCompleteName || !productAliasName || !productPublished || !productOrder || !productStores) {
        setError("Please Fill the  all fields ");
      } else {
        setError("");
  
        try {
          const res = await fetch("http://localhost:3000/catalog/catagory/createProduct", {
            method: "post",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              productName,
              productCompleteName,
              productAliasName,
              productPublished,
              productOrder,
              productStores,
            }),
          }
        );

        const data = await res.json();
        console.log("frontend data is", data);

        if (data.success === false) {
          setError(data.message);
        } else {
          setMessage("Product Added in the category Successfully");
        }
      } catch (error) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div>
      {error && <Error errMessage={error}> {error}</Error>}
      {message && (
        <SuccessMessage varient="danger" successMessage={message}>
          {" "}
          {message}
        </SuccessMessage>
      )}
      {loading && <Loading />}

      <form onSubmit={postData}>
        {message && <p>{message}</p>}
        {error && <p>{error}</p>}
        <label>
          Product Name:
          <input
            type="text"
            name="productName"
            value={addCategory.productName}
            onChange={handleInputs}
          />
        </label>
        <br />
        <label>
          Product Complete Name:
          <input
            type="text"
            name="productCompleteName"
            value={addCategory.productCompleteName}
            onChange={handleInputs}
          />
        </label>
        <br />
        <label>
          Product Alias Name:
          <input
            type="text"
            name="productAliasName"
            value={addCategory.productAliasName}
            onChange={handleInputs}
          />
        </label>
        <br />
        <label>
          Product Published:
          <input
            type="text"
            name="productPublished"
            value={addCategory.productPublished}
            onChange={handleInputs}
          />
        </label>
        <br />
        <label>
          Product Order:
          <input
            type="text"
            name="productOrder"
            value={addCategory.productOrder}
            onChange={handleInputs}
          />
        </label>
        <br />
        <label>
          Product Stores:
          <input
            type="text"
            name="productStores"
            value={addCategory.productStores}
            onChange={handleInputs}
          />
        </label>
        <br />
        {loading ? (
          <button type="submit" disabled>
            Loading...
          </button>
        ) : (
          <button type="submit">Submit</button>
        )}
      </form>
    </div>
  );
};

export default AddCategory;
