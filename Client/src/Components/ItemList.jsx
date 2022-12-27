import React, { useState } from "react";
import Checkbox from "./Checkbox";
import InputField from "./InputField";
import checkIcon from "/src/assets/icons/check.svg";
import { AiOutlineEdit } from "react-icons/ai";
import UpdateForm from "./pages/UpdateForm";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export default function ItemList(props) {
  //   const handleUpdate = (category) => {
  //     <UpdateForm data={category} />;
  //     console.log(category);
  //   };
  const [modal, setModal] = useState(false);
  const [product, setProduct] = useState({
    productName: "",
    productCompleteName: "",
    productAliasName: "",
    productPublished: "",
    productOrder: "",
    productStores: "",
  });

  const toggle = () => setModal(!modal);

  let name, value;

  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setProduct({ ...product, [name]: value });
    console.log(
      "My data is",
      product.productName,
      product.productCompleteName,
      product.productAliasName,
      product.productPublished,
      product.productOrder,
      product.productStores
    );
  };

  return (
    <>
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
            console.log("my product", category);
            return (
              <>
                <tr key={index}>
                  {/* <h1>{category.productName}</h1> */}
                  <td scope="row">
                    <InputField
                      type="checkbox"
                      onChange={() => handleCheckboxChange(category)}
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
                    <AiOutlineEdit onClick={toggle} />
                  </td>
                </tr>

                <Modal isOpen={modal} toggle={toggle} fullscreen>
                  <ModalHeader toggle={toggle}>Update the product </ModalHeader>
                  <ModalBody>
                    <UpdateForm product={category} />
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={toggle}>
                      Save
                    </Button>{" "}
                    <Button color="secondary" onClick={toggle}>
                      Cancel
                    </Button>
                  </ModalFooter>
                </Modal>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
