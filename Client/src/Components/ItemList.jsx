import React, { useState, useEffect } from "react";
import axios from "axios";
import Checkbox from "./forms/formComponents/Checkbox";
import InputField from "./forms/formComponents/InputField";
import checkIcon from "/src/assets/icons/check.svg";
import { AiOutlineEdit } from "react-icons/ai";
import UpdateForm from "./pages/UpdateForm";
import mongoose from "mongoose";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Error from "./pages/Error";
import SuccessMessage from "./pages/Success";
import Loading from "./pages/Loading";
import Dropdown from "./forms/formComponents/Dropdown";

export default function ItemList(props) {
  let counter = 1;

  const [modal, setModal] = useState(false);
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  
  useEffect(() => {
    if(message || error) {
      setTimeout(() => {
          setMessage(null);
          setError(null);
      }, 3000);
    }
  }, [message,error]);

  // const [modal, setModal] = useState(false);
  const [productId, setProductId] = useState("");
  const [link, setLink] = useState("");
  const [parentCategory, setparentCategory] = useState("");
  const [displayOrder, setdisplayOrder] = useState("");
  const [isPublished, setIsPublished] = useState(false);
  const [isShowOnPage, setisShowOnPage] = useState(false);
  const [contentSliderName, setcontentSliderName] = useState("");
  const [contentSliderCompleteName, setcontentSliderCompleteName] =
    useState("");
  const [contentSliderDescription, setcontentSliderDescription] = useState("");
  const [badgeText, setbadgeText] = useState("");
  const [pageSize, setpageSize] = useState("");
  const [alias, setalias] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  const updateForm = (product) => {
    console.log(
      product.productExternalLink,
      product.productCategory,
      product.productOrder,
      product.productPublished,
      product.showOnHomePage,
      product.contentSliderName,
      product.contentSliderCompleteName
    );

    setProductId(product._id);
    setLink(product.productExternalLink);
    setparentCategory(product.productParentCategory);
    setdisplayOrder(product.productOrder);
    setIsPublished(product.productPublished);
    setisShowOnPage(product.showOnHomePage);
    setcontentSliderName(product.productName);
    setcontentSliderCompleteName(product.productCompleteName);
    setbadgeText(product.productBadgeText);
    setpageSize(product.pageSizeOptions);
    setalias(product.productAliasName);
    setcontentSliderDescription(product.productDesc);

    console.log(product);

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

  // const handleSubmit = (req, res) => {
  //   console.log("click");
  //   console.log(selectedItems);

  //   const objectIds = selectedItems.map((id) => mongoose.Types.ObjectId(id));
  //   console.log(objectIds);

  //   const config = {
  //     headers: { "Content-Type": "application/json" },
  //   };

  //   axios
  //     .delete(
  //       `http://localhost:3000/catalog/catagory/products/deleteMultipleProducts`,
  //       {
  //         data: objectIds,
  //       },
  //       config
  //     )
  //     .then((result) => {
  //       console.log(`deleted items successfully ${result}`);

  //     })
  //     .catch((err) => {
  //       console.error(`Error retrieving items: ${err.message}`);
  //     });
  // };

  // UPDATING THE PRODUCT

  const postData = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        `http://localhost:3000/catalog/catagory/product/${productId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            productExternalLink: link,
            productParentCategory: parentCategory,
            productOrder: displayOrder,
            productPublished: isPublished,
            showOnHomePage: isShowOnPage,
            productName: contentSliderName,
            productCompleteName: contentSliderCompleteName,
            productDesc: contentSliderDescription,
            productBadgeText: badgeText,
            pageSizeOptions: pageSize,
            productAliasName: alias,
          }),
        }
      );

      const data = await res.json();
      if (data.success === false) {
        setError(data.message);
      } else {
        setModal(!toggle);
        window.location.reload();
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

      {/* <button onClick={handleSubmit}>Delete the Product </button> */}
      <table className="table border-top">
        <thead>
          <tr className="">
            <th scope="col">
              <InputField type="checkbox" />
            </th>
            <th scope="col">#</th>
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
                      defaultChecked={false}
                    />
                  </td>
                  <td>{counter++}</td>
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
                  <td>
                    {category.productStores ? category.productStores : "-"}
                  </td>
                  <td>
                    <AiOutlineEdit onClick={() => updateForm(category)} />
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>

      <Modal isOpen={modal} toggle={toggle} fullscreen>
        <ModalHeader toggle={toggle}>Update the product</ModalHeader>
        <ModalBody>
          {/* <form>
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
          </form> */}
          <form
            className="form"
            method="POST"
            action={props.postTo}
            // onSubmit={submitProductData}
          >
            <InputField
              type="text"
              label="External Link"
              value={link}
              data={(e) => {
                setLink(e.target.value);
                console.log(link);
              }}
            />
            <InputField
              type="text"
              label="Parent category"
              placeholder="[Unspecified]"
              value={parentCategory}
              data={(e) => {
                setparentCategory(e.target.value);
                console.log(parentCategory);
              }}
            />
            <InputField
              type="Number"
              label="Display order"
              value={displayOrder}
              // value="0"
              data={(e) => {
                setdisplayOrder(e.target.value);
                console.log(displayOrder);
              }}
            />
            <InputField
              type="checkbox"
              checked
              label="Published"
              value={isPublished}
              data={(e) => {
                setIsPublished(e.target.checked);
                console.log(isPublished);
              }}
            />
            <InputField
              type="checkbox"
              label="Show on Home Page"
              value={isShowOnPage}
              data={(e) => {
                setisShowOnPage(e.target.checked);
              }}
            />
            <div className="border m-2 p-2 row">
              <InputField
                type="text"
                label="Name"
                value={contentSliderName}
                data={(e) => {
                  setcontentSliderName(e.target.value);
                }}
              />
              <InputField
                type="text"
                label="Complete Name"
                value={contentSliderCompleteName}
                data={(e) => {
                  setcontentSliderCompleteName(e.target.value);
                }}
              />
              <div className="mb-2 form-group">
                <label htmlFor="textarea" class="col-form-label col-sm-2">
                  Top Description
                </label>
                <textarea
                  className=" p-2 col-form-control col-sm-10"
                  name="textarea"
                  rows="2"
                  value={contentSliderDescription}
                  data={(e) => {
                    setcontentSliderDescription(e.target.value);
                  }}
                ></textarea>
              </div>
              <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-10">
                  {/* <Button type="" name="Show Description" icon={reverseIcon} /> */}
                </div>
              </div>
              <InputField
                type="text"
                label="Badge Text"
                value={badgeText}
                data={(e) => {
                  setbadgeText(e.target.value);
                }}
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
            {/* <PhotoUpload label="Picutre" /> */}
            <hr className="" />
            <Dropdown label="Default view mode" options={["Grid", "List"]} />
            <Dropdown
              label="Allow customers to select page size"
              options={["Yes", "No"]}
            />
            <InputField
              type="text"
              label="Page size options (comma separated)"
              value={pageSize}
              data={(e) => {
                setpageSize(e.target.value);
              }}
            />
            <hr className="" />
            <InputField
              type="text"
              label="Alias"
              value={alias}
              data={(e) => {
                setalias(e.target.value);
              }}
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
              {/* <Button
          type=""
          icon={thunderIcon}
          name="Transfer this store configuration to children"
          items={() => {
            console.log("clicked");
          }}
        /> */}
            </Dropdown>
            <Dropdown
              label="Limited to customer roles"
              options={["Searching..."]}
            >
              {/* <Button
          type=""
          icon={thunderIcon}
          name="Transfer this ACL configuration to children"
          items={() => {
            console.log("clicked");
          }}
        /> */}
            </Dropdown>
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
