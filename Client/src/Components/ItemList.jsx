import React, { useState, useEffect } from "react";
import axios from "axios";
import Checkbox from "./forms/formComponents/Checkbox";
import InputField from "./forms/formComponents/InputField";
import checkIcon from "/src/assets/icons/check.svg";
import { AiOutlineEdit } from "react-icons/ai";
import UpdateForm from "./pages/UpdateForm";
import axios from "axios";
import mongoose from "mongoose";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Error from "./pages/Error";
import SuccessMessage from "./pages/Success";
import Loading from "./pages/Loading";

export default function ItemList(props) {
  // <<<<<<< HEAD
  // <<<<<<< HEAD
  // return (
  //   <table className="table border-top">
  //     <thead>
  //       <tr className="">
  //         <th scope="col">
  //           <InputField type="checkbox" />
  //         </th>
  //         <th scope="col">Name</th>
  //         <th scope="col">Complete Name</th>
  //         <th scope="col">Alias</th>
  //         <th scope="col">Published</th>
  //         <th scope="col">Display Order</th>
  //         <th scope="col">Limited to stores</th>
  //       </tr>
  //     </thead>
  //     <tbody className="h-100 overflow-y-auto">
  //       {props.categories.map((category, index) => {
  //         return (
  //           <tr key={index}>
  //             <td scope="row">
  //               <InputField type="checkbox" />
  //             </td>
  //             <td>{category.productName}</td>
  //             <td>{category.productCompleteName}</td>
  //             <td>{category.productAliasName}</td>
  //             <td>
  //               {category.productPublished ? (
  //                 <img src={checkIcon} alt="Yes" />
  //               ) : (
  //                 "-"
  //               )}
  //             </td>
  //             <td>{category.productOrder}</td>
  //             <td>{category.productStores ? category.productStores : "-"}</td>
  //             <td>
  //               <AiOutlineEdit onClick={() => updateForm(category)} />
  //             </td>
  //           </tr>
  //         );
  //       })}
  //     </tbody>
  //   </table>
  // );
  // =======
  const [modal, setModal] = useState(false);
  // >>>>>>> e08c6f586a0d50249fd0f23377a4dbef0792feca
  // =======
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // >>>>>>> 22d40da7c8d00e7fa92d6614161151d5854b0c26

  // const [modal, setModal] = useState(false);
  const [productId, setProductId] = useState("");
  const [productName, setProductName] = useState("");
  const [productCompleteName, setProductCompleteName] = useState("");
  const [productAliasName, setProductAliasName] = useState("");
  const [productPublished, setProductPublished] = useState("");
  const [productOrder, setProductOrder] = useState("");
  const [productStores, setProductStores] = useState("");

  const toggle = () => {
    // window.alert("product name is", name);
    setModal(!modal);
  };

  const updateForm = (product) => {
    setProductId(product._id);
    // window.alert(name);
    setProductName(product.productName);
    setProductCompleteName(product.productCompleteName);
    setProductAliasName(product.productAliasName);
    setProductPublished(product.productPublished);
    setProductOrder(product.productOrder);
    setProductStores(product.productStores);

    setModal(!modal);
  };

  // To delete the products
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    // Call the getData function when the component unmounts

    props.getData(selectedItems);
  }, [selectedItems]);

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    console.log(`${value} is ${checked}`);

    if (checked) {
      console.log("item is checked");
      setSelectedItems([...selectedItems, value]);
    } else {
      setSelectedItems(selectedItems.filter((id) => id !== value));
    }

    props.getData(selectedItems);
  };

  const handleSubmit = (req, res) => {
    console.log("click");
    console.log(selectedItems);

    const objectIds = selectedItems.map((id) => mongoose.Types.ObjectId(id));
    console.log(objectIds);

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    axios
      .delete(
        `http://localhost:3000/catalog/catagory/products/deleteMultipleProducts`,
        {
          data: objectIds,
        },
        config
      )
      .then((result) => {
        console.log(`deleted items successfully rijul ${result}`);
        window.location.reload();
      })
      .catch((err) => {
        console.error(`Error retrieving items: ${err.message}`);
      });
  };

  // const handleSubmit = () => {
  //     console.log("click");
  //     console.log(selectedItems);
  //     const config = {
  //       headers: { "Content-Type": "application/json" },
  //     };
  //     // http://localhost:3000
  //     axios
  //       .delete(`http://localhost:3000/catalog/catagory/products/deleteMultipleProducts?productIds=${JSON.stringify(selectedItems)}`, config)
  //       .then((result) => {
  //         console.log(`deleted items successfully ${result}`);
  //       });
  //   };

  // UPDATING THE PRODUCT

  const postData = async (e) => {
    e.preventDefault();
    console.log(
      "my posted data is ",
      productCompleteName,
      productName,
      productAliasName,
      productOrder,
      productPublished,
      productStores,
      productId
    );

    try {
      const res = await fetch(
        `http://localhost:3000/catalog/catagory/product/${productId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            productName,
            productCompleteName,
            productAliasName,
            productOrder,
            productPublished,
            productStores,
          }),
        }
      );

      const data = await res.json();

      // if (data.success === true) {
      //   setError(data.message);
      //   // window.alert("updated successfully");
      //   setModal(!toggle);
      // } else {
      //   setMessage("please refresh it and try again");
      //   // window.alert("please refresh it and try again");
      // }

      if (data.success === false) {
        setError(data.message);
      } else {
        setModal(!toggle);
        await window.location.reload();
        setMessage("Product updated successfully");
      }
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <>
      {error && <Error errMessage={error}> {error}</Error>}
      {message && (
        <SuccessMessage varient="danger" successMessage={message}>
          {" "}
          {message}
        </SuccessMessage>
      )}
      {loading && <Loading />}

      <button onClick={handleSubmit}>Delete the Product </button>
      <table className="table border-top">
        <thead>
          <tr className="">
            <th scope="col">
              <InputField type="checkbox" />
            </th>
            <th scope="col">Name</th>
            <th scope="col">Complete Name</th>
            <th scope="col">Alias</th>
            <th scope="col">Published</th>
            <th scope="col">Display Order</th>
            <th scope="col">Limited to stores</th>
          </tr>
        </thead>
        <tbody className="h-100 overflow-y-auto">
          {props.categories.map((category, index) => {
            return (
              <>
                <tr key={index}>
                  {/* <h1>{category.productName}</h1> */}
                  <td scope="row">
                    <InputField
                      value={category._id}
                      type="checkbox"
                      data={(e) => {
                        handleCheckboxChange(e);
                      }}
                      checked={category.selectedItems}
                    />
                  </td>
                  <td>{category.productName}</td>
                  <td>{category.productCompleteName}</td>
                  <td>{category.productAliasName}</td>
                  <td>
                    {category.published ? (
                      <img src={checkIcon} alt="Yes" />
                    ) : (
                      "-"
                    )}
                  </td>
                  <td>{category.order}</td>
                  <td>{category.stores ? category.stores : "-"}</td>
                  <td>
                    {/* <AiOutlineEdit onClick={() => handleUpdate(category)} /> */}
                    <AiOutlineEdit onClick={() => updateForm(category)} />
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>

      <Modal isOpen={modal} toggle={toggle} fullscreen>
        <ModalHeader toggle={toggle}>Update the product </ModalHeader>
        <ModalBody>
          <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                ProductName
              </label>
              <input
                type="text"
                name="productName"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={productName}
                onChange={(e) => {
                  setProductName(e.target.value);
                  console.log(productName);
                }}
                //   defaultValue={category.productName}
                //   onChange={handleInputs}
                // value={category.productName}
                // onChange={(e) => setProduct(e.target.value)}

                //   value={product.productName}
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                ProductCompleteName
              </label>
              <input
                type="text"
                name="productCompleteName"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={productCompleteName}
                onChange={(e) => {
                  console.log(productCompleteName);
                  setProductCompleteName(e.target.value);
                }}

                //   defaultValue={category.productCompleteName}
                // onChange={handleInputs}
                // value={product.productCompleteName}
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                ProductAliasName
              </label>
              <input
                type="text"
                name="productAliasName"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={productAliasName}
                onChange={(e) => {
                  console.log(productAliasName);
                  setProductAliasName(e.target.value);
                }}
                //   defaultValue={category.productAliasName}
                // onChange={handleInputs}
                // value={product.productAliasName}
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                ProductPublished
              </label>
              <input
                type="text"
                name="productPublished"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={productPublished}
                onChange={(e) => {
                  console.log(productPublished);
                  setProductPublished(e.target.value);
                }}
                //   defaultValue={category.productPublished}
                // onChange={handleInputs}
                // value={product.productPublished}
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                ProductOrder
              </label>
              <input
                type="Number"
                name="productOrder"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={productOrder}
                onChange={(e) => {
                  console.log(productOrder);
                  setProductOrder(e.target.value);
                }}
                //   defaultValue={category.productOrder}
                // onChange={handleInputs}
                // value={product.productOrder}
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                ProductStores
              </label>
              <input
                type="Number"
                name="productStores"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={productStores}
                onChange={(e) => setProductStores(e.target.value)}
                //   defaultValue={category.productStores}
                // onChange={handleInputs}
                // value={product.productStores}
              />
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={postData}>
            Save
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}
