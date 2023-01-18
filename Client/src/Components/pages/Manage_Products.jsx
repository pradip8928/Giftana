import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "../Button";
import checkIcon from "/src/assets/icons/check.svg";
// import checkIcon from "";
import Manage_ProductCss from "../css/Manage_Product.module.css";
export default function Manage_Product() {
  const [data, setData] = useState([]);
  let counter = 1;
  useEffect(() => {
    manageProducts();
  }, [data]);

  const manageProducts = () => {
    const config = {
      headers: { "Content-Type": "application/json" },
    };
    // http://localhost:3000
    axios
      .get(`http://localhost:3000/catalog/manageProducts/getAllProduct`, config)
      .then((result) => {
        setData(result.data.products);
          console.log(data);
      });
  };

  return (
    <div className={Manage_ProductCss.main_container}>
      <h1>Manage Products</h1>

      <div className={Manage_ProductCss.container}>
        <div className={Manage_ProductCss.container_btn}>
          <Button
            className={Manage_ProductCss.filter_btn}
            name="Filter"
            onClick=" "
          />

          <Button className={Manage_ProductCss.edit_btn} name="+ Add items" />
          <Button className={Manage_ProductCss.edit_btn} name="Edit" />
        </div>
        <table className={Manage_ProductCss.table}>
          <thead>
            <tr className={Manage_ProductCss.table_first_row}>
              <th scope="col">#</th>
              <th scope="col">img</th>
              <th scope="col">Product Name</th>
              <th scope="col">SKU</th>
              <th scope="col">PRICE</th>
              <th scope="col">stock quality</th>
              <th scope="col">Limited to store</th>
              <th scope="col">Updated on</th>
              <th scope="col">Publish</th>
            </tr>
          </thead>
          <tbody>
            {data.map((manageProducts, key) => {
              const date = new Date(manageProducts.productUpdateOn);
              const options = {
                year: "numeric",
                month: "long",
                day: "numeric",
              };
              const formatter = new Intl.DateTimeFormat("en-US", options);
              const formattedDate = formatter.format(date);

         
              return (
                <>
                  <tr key={manageProducts.id}>
                    <td >{counter++}</td>
                    <td> {manageProducts.productPublished ? (
                        <img className={Manage_ProductCss.productImages} src={`data:image/png;base64,${manageProducts.productImage}`} alt="Yes" />
                      ) : (
                        "-"
                      )}</td>
                    <td>{manageProducts.productName}</td>
                    <td> {manageProducts.productSKU}</td>
                    <td> {manageProducts.productPrice}</td>
                    <td> {manageProducts.productStockQuantity}</td>
                    <td> {manageProducts.productLimitationInStore}</td>
                    <td> {formattedDate}</td>
                    
                    <td>
                      {" "}
                      {manageProducts.productPublished ? (
                        <img src={checkIcon} alt="Yes" />
                      ) : (
                        "-"
                      )}
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
