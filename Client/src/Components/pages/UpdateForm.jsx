import React, { useState } from "react";

const UpdateForm = ({ product }) => {
  const productId = product._id;

  const updatedProduct = {
    productId,
    productName,
    productCompleteName,
    productAliasName,
    productPublished,
    productOrder,
    productStores,
  };
  console.log("product is", product._id);

  return (
    <>
      {/* <Modal isOpen={modal} toggle={toggle} fullscreen>
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
                onChange={(e) => setProductName(e.target.value)}
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
                onChange={(e) => setProductCompleteName(e.target.value)}

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
                onChange={(e) => setProductAliasName(e.target.value)}
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
                onChange={(e) => setProductPublished(e.target.value)}
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
                onChange={(e) => setProductOrder(e.target.value)}
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
          <Button color="primary" onClick={toggle}>
            Save
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal> */}
    </>
  );
};

export default UpdateForm;

// productName     -- text
// productCompleteName   --text
// productOrder   -- number
// productAliasName    -- text
// productpublished    -- boolean
// productStores       -- number
