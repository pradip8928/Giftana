import React, { useState, useEffect } from "react";
import axios from "axios";
import Checkbox from "./Checkbox";
import InputField from "./InputField";
import checkIcon from "/src/assets/icons/check.svg";
import mongoose from "mongoose";
// import categories from "../categories";

export default function ItemList(props) {
  const [selectedItems, setSelectedItems] = useState([]);

  
  // checkbox
 
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      //   console.log(`the checkbox is checked and its id is ${selectedItems}`);
      setSelectedItems([...selectedItems, value]);
    } else {
      //   console.log(`the checkbox is unchecked and its id is ${selectedItems}`);
      setSelectedItems(selectedItems.filter((id) => id !== value));
    }
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
        console.log(`deleted items successfully ${result}`);
        // Make an HTTP GET request to retrieve the updated list of items
        // axios
        //   .get("http://localhost:3000/catalog/catagory/getAllProduct")
        //   .then((result) => {
        //     // Update the state with the new list of items
        //     setData(result.data.products);
        //   })
        //   .catch((err) => {
        //     console.error(`Error retrieving items: ${err.message}`);
        //   });
      }).catch((err) => {
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

  return (
    <>
      <button onClick={handleSubmit}>Delete </button>
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
          {/* // productName,productCompleteName,productAliasName,productPublished,productOrder,productStores */}
          {props.categories.map((category, index) => {
            return (
              <tr key={index}>
               
                <td scope="row">
                  <InputField
                    type="checkbox"
                    value={category._id}
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
                  {category.productPublished ? (
                    <img src={checkIcon} alt="Yes" />
                  ) : (
                    "-"
                  )}
                </td>
                <td>{category.productOrder}</td>
                <td>{category.productStores ? category.productStores : "-"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
