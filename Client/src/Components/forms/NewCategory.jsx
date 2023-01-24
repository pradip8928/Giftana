import React, { useState, useEffect } from "react";
import InputField from "./formComponents/InputField";
import Checkbox from "./formComponents/Checkbox";
import Button from "./formComponents/Button";
import Dropdown from "./formComponents/Dropdown";
import PhotoUpload from "./formComponents/PhotoUpload";

import reverseIcon from "/src/assets/icons/reverse.svg";
import thunderIcon from "/src/assets/icons/thunder.svg";
import Error from "../pages/Error";
import Loading from "../pages/Loading";
import SuccessMessage from "../pages/Success";

function NewProduct(props) {
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (message || error) {
      setTimeout(() => {
        setMessage(null);
        setError(null);
      }, 3000);
    }
  }, [message, error]);

  const [addCategory, setCategory] = useState({
    productName: "",
    productCompleteName: "",
    productAliasName: "",
    productPublished: false,
    productOrder: "",
    productStores: "",

    productParentCategory: "",
    productExternalLink: "",
    productDesc: "",
    productBadgeText: "",
    productBadgeStyle: "",
    showOnHomePage: false,
    pageSizeOptions: "",
    productImage: "",
  });

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setCategory({ ...addCategory, [name]: value });
    console.log(addCategory);
  };

  const handleCheckbox = (e) => {
    const { name, checked } = e.target;
    setCategory({ ...addCategory, [name]: checked });
  };

  const postData = async (e) => {
    console.log(addCategory);

    e.preventDefault();
    const {
      productName,
      productCompleteName,
      productAliasName,
      productPublished,
      productOrder,
      productStores,
      productParentCategory,
      productExternalLink,
      productDesc,
      productBadgeText,
      productBadgeStyle,
      showOnHomePage,
      pageSizeOptions,
      productImage,
    } = addCategory;

    if (
      !productName ||
      !productCompleteName ||
      !productAliasName ||
      !productPublished ||
      !productOrder
    ) {
      setError("Please Fill the  all fields ");
    } else {
      setError("");

      try {
        const res = await fetch(
          "http://localhost:3000/catalog/catagory/createProduct",
          {
            method: "post",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "http://localhost:3000",
              "Access-Control-Allow-Credentials": "true",
            },
            body: JSON.stringify({
              productName,
              productCompleteName,
              productAliasName,
              productPublished,
              productOrder,
              productStores,
              productParentCategory,
              productExternalLink,
              productDesc,
              productBadgeText,
              productBadgeStyle,
              showOnHomePage,
              pageSizeOptions,
              productImage,
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
    <>
      {error && <Error errMessage={error}> {error}</Error>}
      {message && (
        <SuccessMessage varient="danger" successMessage={message}>
          {" "}
          {message}
        </SuccessMessage>
      )}
      {loading && <Loading />}
      <form
        className="form"
        method="POST"
        action={props.postTo}
        onSubmit={postData}
      >
        <InputField
          type="text"
          name="productExternalLink"
          label="External Link"
          data={handleInputs}
          value={addCategory.productExternalLink}
        />
        <InputField
          type="text"
          name="productParentCategory"
          data={handleInputs}
          value={addCategory.productParentCategory}
          label="Parent category"
          placeholder="[Unspecified]"
        />
        <InputField
          type="text"
          name="productOrder"
          label="Display order"
          data={handleInputs}
          value={addCategory.productOrder}
        />
        <InputField
          type="checkbox"
          label="Published"
          name="productPublished"
          data={handleCheckbox}
          checked={addCategory.productPublished}
        />
        <InputField
          type="checkbox"
          name="showOnHomePage"
          label="Show on Home Page"
          data={handleCheckbox}
          checked={addCategory.showOnHomePage}
        />
        <div className="border m-2 p-2 row">
          <InputField
            type="text"
            label="Name"
            name="productName"
            data={handleInputs}
            value={addCategory.productName}
          />
          <InputField
            type="text"
            name="productCompleteName"
            label="Complete Name"
            data={handleInputs}
            value={addCategory.productCompleteName}
          />
          <div className="mb-2 form-group">
            <label htmlFor="textarea" class="col-form-label col-sm-2">
              Top Description
            </label>
            <textarea
              className=" p-2 col-form-control col-sm-10"
              name="productDesc"
              onChange={handleInputs}
              value={addCategory.productDesc}
              rows="2"
            ></textarea>
          </div>
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-10">
              <Button type="" name="Show Description" icon={reverseIcon} />
            </div>
          </div>
          <InputField
            type="text"
            label="Badge Text"
            name="productBadgeText"
            data={handleInputs}
            value={addCategory.productBadgeText}
          />
        </div>
        <Dropdown
          label="Badge Style"
          options={[
            "Secondary",
            "Primary",
            "Warning",
            "Danger",
            "Success",
            "Info",
            "Light",
            "Dark",
          ]}
        />
        <PhotoUpload
          label="Picutre"
          type="file"
          name="productImage"
          data={handleInputs}
          value={addCategory.productImage}
        />
        <hr className="" />
        <Dropdown label="Default view mode" options={["Grid", "List"]} />
        <Dropdown
          label="Allow customers to select page size"
          options={["Yes", "No"]}
        />
        <InputField
          type="text"
          label="Page size options (comma separated)"
          name="pageSizeOptions"
          data={handleInputs}
          value={addCategory.pageSizeOptions}
        />
        <hr className="" />
        <InputField
          type="text"
          label="Alias"
          data={handleInputs}
          value={addCategory.productAliasName}
          name="productAliasName"
        />
        <Dropdown
          label="Category template"
          options={["Products in Grid or Lines"]}
        />
        <Dropdown label="Discounts" options={["Searching..."]} />
        <Dropdown
          label="Limited to stores"
          options={[
            "Smartstore 5 Backend Demo Shop",
            "Smartstore 5 Backend Demo Shop 2",
          ]}
        >
          <Button
            type=""
            icon={thunderIcon}
            name="Transfer this store configuration to children"
          />
        </Dropdown>
        <Dropdown
          label="Limited to customer roles"
          data={handleInputs}
          value={addCategory.productStores}
          name="productStores"
          options={["Searching..."]}
        >
          <Button
            type=""
            icon={thunderIcon}
            name="Transfer this ACL configuration to children"
          />
        </Dropdown>
        <div className="row">
          <button
            className="btn btn-warning m-1 col font-weight-bold"
            type="submit"
          >
            Save
          </button>
          <button
            type=""
            className="btn btn-light active m-1 col font-weight-bold"
          >
            Save and Continue Edit
          </button>
        </div>
      </form>
    </>
  );
}

export default NewProduct;
