import React from "react";

const AddManageProduct = () => {
  return (
    <>
      <div
        style={{
          width: "95%",
          margin: "auto auto 300px auto",
          backgroundColor: "white",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <h2 style={{ color: "rgb(73, 59, 59)" }}>
              <i
                className="fa fa-arrow-left"
                style={{
                  padding: "10px",
                  fontSize: "20px",
                  cursor: "pointer",
                  marginLeft: "20px",
                  marginRight: "10px",
                  color: "rgb(73, 59, 59)",
                }}
              />
              ADD NEW PRODUCT
            </h2>
          </div>
          <div>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  "\n                    .saveeditbtn {\n                        margin-top: 20px;\n                        margin-right: 20px;\n                        padding: 10px 20px;\n                        font-size: 14px;\n                        color: white;\n                    }\n\n                    .saveeditbtn:hover {\n                        box-shadow: inset 2px 2px 2px 2px rgb(58, 196, 238);\n                    }\n\n                ",
              }}
            />
            <button
              className="saveeditbtn"
              style={{ backgroundColor: "#51a0e0" }}
            >
              <i className="fa fa-check" style={{ fontSize: "15px" }} /> Save
            </button>
            <button className="saveeditbtn" style={{ color: "black" }}>
              Save and continue edit
            </button>
          </div>
        </div>
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n            .fa3 {\n                width: auto;\n                height: auto;\n                color: rgb(102, 94, 94);\n                font-size: 18px;\n                margin-right: 10px;\n                text-align: center;\n                cursor: pointer;\n            }\n\n\n            a {\n                color: rgb(102, 94, 94);\n                padding: 10px 10px;\n                text-decoration: none;\n                display: block;\n\n            }\n\n            a:hover {\n                color: black;\n\n                border-right: 2px solid rgb(202, 19, 19);\n                transform: scale(1.03);\n            }\n\n        ",
          }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            margin: "auto",
          }}
        >
          <div
            style={{
              width: "18%",
              height: "auto",
              marginLeft: "10px",
              borderRight: "1px solid rgb(185, 173, 173)",
            }}
          >
            <a href="#">
              <i className="fa3 fa fa-pencil" />
              Product info
            </a>
            <a href="#">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                style={{ width: "15px", height: "15px", marginRight: "15px" }}
                viewBox="0 0 320 512"
              >
                {/*! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}
                <path d="M0 64C0 46.3 14.3 32 32 32H96h16H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H231.8c9.6 14.4 16.7 30.6 20.7 48H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H252.4c-13.2 58.3-61.9 103.2-122.2 110.9L274.6 422c14.4 10.3 17.7 30.3 7.4 44.6s-30.3 17.7-44.6 7.4L13.4 314C2.1 306-2.7 291.5 1.5 278.2S18.1 256 32 256h80c32.8 0 61-19.7 73.3-48H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H185.3C173 115.7 144.8 96 112 96H96 32C14.3 96 0 81.7 0 64z" />
              </svg>
              Price
            </a>
            <a href="#">
              <i className="fa3 fa fa-image" />
              Pictures
            </a>
            <a href="#">
              <i className="fa3 fa fa-sitemap" />
              Category mappings
            </a>
            <a href="#">
              <i className="fa3 fa fa-building" />
              Manufacturer mappings
            </a>
            <a href="#">
              <i className="fa3 fa fa-bullhorn" />
              Promotion
            </a>
            <a href="#">
              <i className="fa3 fa fa-list-ol" />
              Attributes
            </a>
            <a href="#">
              <i className="fa3 fa fa-list" />
              Specification attributes
            </a>
            <a href="#">
              <i className="fa3 fa fa-search" />
              Search engines (SEO)
            </a>
            <a href="#">
              <i className="fa3 fa fa-download" />
              Downloads
            </a>
            <a href="#">
              <i className="fa3 fa fa-google" />
              GMC
            </a>
            <a href="#">
              <i className="fa3 fa fa-file" />
              File manager
            </a>
            <a href="#">
              <i className="fa3 fa fa-shopping-cart" />
              cXmlPunchout
            </a>
          </div>
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n                .searchbox {\n                    width: 80%;\n                    height: 40px;\n                    border-radius: 10px;\n                    font-size: 0px;\n                    padding-left: 15px;\n                    border: 1px solid rgb(175, 159, 159);\n                }\n\n                .inputtypes {\n                    display: flex;\n                    justify-content: space-between;\n                    margin-top: 15px;\n                }\n\n                h4 {\n                    color: rgb(73, 59, 59);\n                }\n\n            ",
            }}
          />
          <div style={{ width: "80%", height: "auto" }}>
            {/* select option */}
            <div className="inputtypes">
              <div style={{ width: "40%" }}>
                <h4>Product type</h4>
              </div>
              <div style={{ width: "60%" }}>
                <select className="searchbox" name="store">
                  <option value="volvo">Select demo</option>
                  <option value="volvo">Smartstore 5 backend demo 1</option>
                  <option value="saab">Smartstore 5 backend demo 2</option>
                </select>
              </div>
            </div>
            {/* toggle button css */}
            <style
              dangerouslySetInnerHTML={{
                __html:
                  '\n                    .switch {\n                        position: relative;\n                        display: inline-block;\n                        width: 50px;\n                        height: 25px;\n                        margin-top:15px;\n                    }\n\n                    .switch input {\n                        opacity: 0;\n                        width: 0;\n                        height: 0;\n                    }\n\n                    .slider {\n                        position: absolute;\n                        cursor: pointer;\n                        top: 0;\n                        left: 0;\n                        right: 0;\n                        bottom: 0;\n                        background-color: #ccc;\n                        -webkit-transition: .4s;\n                        transition: .4s;\n                    }\n\n                    .slider:before {\n                        position: absolute;\n                        content: "";\n                        height: 20px;\n                        width: 20px;\n                        left: 4px;\n                        bottom: 3px;\n                        background-color: white;\n                        -webkit-transition: .4s;\n                        transition: .4s;\n                    }\n\n                    input:checked+.slider {\n                        background-color: #2196F3;\n                    }\n\n                    input:focus+.slider {\n                        box-shadow: 0 0 1px #2196F3;\n                    }\n\n                    input:checked+.slider:before {\n                        -webkit-transform: translateX(23px);\n                        -ms-transform: translateX(23px);\n                        transform: translateX(23px);\n                    }\n\n                    /* Rounded sliders */\n                    .slider.round {\n                        border-radius: 34px;\n                    }\n\n                    .slider.round:before {\n                        border-radius: 50%;\n                    }\n\n                ',
              }}
            />
            <div>
              <div className="inputtypes">
                <div style={{ width: "40%" }}>
                  <h4>Published</h4>
                </div>
                <div style={{ width: "60%" }}>
                  <label className="switch">
                    <input type="checkbox" onclick="myFunction4()" />
                    <span className=" slider round" />
                  </label>
                </div>
              </div>
              <div id="myDIV4" style={{ display: "none" }}>
                <div className="inputtypes">
                  <div style={{ width: "40%" }}>
                    <h4>Product type</h4>
                  </div>
                  <div style={{ width: "60%" }}>
                    <select className="searchbox" name="store">
                      <option value="volvo">Select demo</option>
                      <option value="volvo">Smartstore 5 backend demo 1</option>
                      <option value="saab">Smartstore 5 backend demo 2</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                width: "90%",
                backgroundColor: "rgb(245, 237, 237)",
                border: "1px solid grey",
                borderRadius: "15px",
                padding: "20px",
              }}
            >
              <div className="inputtypes">
                <div style={{ width: "40%" }}>
                  <h4>Product name</h4>
                </div>
                <div style={{ width: "60%" }}>
                  <input type="textbox" className="searchbox" />
                </div>
              </div>
              <div className="inputtypes">
                <div style={{ width: "40%" }}>
                  <h4>Short description</h4>
                </div>
                <div style={{ width: "60%" }}>
                  <textarea
                    style={{ width: "90%" }}
                    rows={4}
                    cols={50}
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="inputtypes">
                <div style={{ width: "40%" }}>
                  <h4>Full description</h4>
                </div>
                <div style={{ width: "60%" }}>
                  <textarea
                    cols={500}
                    id="editor1"
                    name="editor1"
                    rows={1000}
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
            {/* input textbox */}
            <div className="inputtypes">
              <div style={{ width: "40%" }}>
                <h4>SKU</h4>
              </div>
              <div style={{ width: "60%" }}>
                <input type="textbox" className="searchbox" />
              </div>
            </div>
            <div className="inputtypes">
              <div style={{ width: "40%" }}>
                <h4>Manufacturer part number</h4>
              </div>
              <div style={{ width: "60%" }}>
                <input type="textbox" className="searchbox" />
              </div>
            </div>
            <div className="inputtypes">
              <div style={{ width: "40%" }}>
                <h4>GTIN (global trade item number)</h4>
              </div>
              <div style={{ width: "60%" }}>
                <input type="textbox" className="searchbox" />
              </div>
            </div>
            <div className="inputtypes">
              <div style={{ width: "40%" }}>
                <h4>Customs Tariff Number</h4>
              </div>
              <div style={{ width: "60%" }}>
                <input type="textbox" className="searchbox" />
              </div>
            </div>
            <div className="inputtypes">
              <div style={{ width: "40%" }}>
                <h4>Product condition</h4>
              </div>
              <div style={{ width: "60%" }}>
                <select className="searchbox" name="store">
                  <option value="volvo">Select demo</option>
                  <option value="volvo">Smartstore 5 backend demo 1</option>
                  <option value="saab">Smartstore 5 backend demo 2</option>
                </select>
              </div>
            </div>
            <div className="inputtypes">
              <div style={{ width: "40%" }}>
                <h4>Country of origin</h4>
              </div>
              <div style={{ width: "60%" }}>
                <select
                  className="searchbox"
                  placeholder="Unspecified"
                  name="store"
                >
                  <option value="volvo">Select demo</option>
                  <option value="volvo">Smartstore 5 backend demo 1</option>
                  <option value="saab">Smartstore 5 backend demo 2</option>
                </select>
              </div>
            </div>
            {/* textarea */}
            <div className="inputtypes">
              <div style={{ width: "40%" }}>
                <h4>Admin comment</h4>
              </div>
              <div style={{ width: "60%" }}>
                <textarea
                  style={{ width: "90%" }}
                  rows={4}
                  cols={50}
                  defaultValue={""}
                />
              </div>
            </div>
            <div className="inputtypes">
              <div style={{ width: "40%" }}>
                <h4>Product tags</h4>
              </div>
              <div style={{ width: "60%" }}>
                <input type="textbox" className="searchbox" />
              </div>
            </div>
            {/* date */}
            <div className="inputtypes">
              <div style={{ width: "40%" }}>
                <h4>Available start date</h4>
              </div>
              <div style={{ width: "60%" }}>
                <input type="date" className="searchbox" />
              </div>
            </div>
            <div className="inputtypes">
              <div style={{ width: "40%" }}>
                <h4>Available end date</h4>
              </div>
              <div style={{ width: "60%" }}>
                <input type="date" className="searchbox" />
              </div>
            </div>
            <div className="inputtypes">
              <div style={{ width: "40%" }}>
                <h4>Allow customer reviews</h4>
              </div>
              <div style={{ width: "60%" }}>
                <label className="switch">
                  <input type="checkbox" />
                  <span className=" slider round" />
                </label>
              </div>
            </div>
            {/* toggle button */}
            <div className="inputtypes">
              <div style={{ width: "40%" }}>
                <h4>Show on home page</h4>
              </div>
              <div style={{ width: "60%" }}>
                <label className="switch">
                  <input type="checkbox" />
                  <span className=" slider round" />
                </label>
              </div>
            </div>
            {/* search */}
            <div className="inputtypes">
              <div style={{ width: "40%" }}>
                <h4>Limited to stores</h4>
              </div>
              <div style={{ width: "60%" }}>
                <input
                  type="search"
                  placeholder="All stores"
                  className="searchbox"
                />
              </div>
            </div>
            <div className="inputtypes">
              <div style={{ width: "40%" }}>
                <h4>Limited to customers roles</h4>
              </div>
              <div style={{ width: "60%" }}>
                <input
                  type="search"
                  placeholder="All customer roles"
                  className="searchbox"
                />
              </div>
            </div>
            <hr />
            {/* 4 toggle buttons from start here */}
            <div>
              <div className="inputtypes">
                <div style={{ width: "40%" }}>
                  <h4>Require other products are added to the cart</h4>
                </div>
                <div style={{ width: "60%" }}>
                  <label className="switch">
                    <input type="checkbox" onclick="myFunction0()" />
                    <span className=" slider round" />
                  </label>
                </div>
              </div>
              <div id="myDIV0" style={{ display: "none" }}>
                <div className="inputtypes">
                  <div style={{ width: "40%" }}>
                    <h4>Required product IDs</h4>
                  </div>
                  <div style={{ width: "60%" }}>
                    <input type="textbox" className="searchbox" />
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div>
              <div className="inputtypes">
                <div style={{ width: "40%" }}>
                  <h4>Is gift card</h4>
                </div>
                <div style={{ width: "60%" }}>
                  <label className="switch">
                    <input type="checkbox" onclick="myFunction1()" />
                    <span className=" slider round" />
                  </label>
                </div>
              </div>
              <div id="myDIV1" style={{ display: "none" }}>
                <div className="inputtypes">
                  <div style={{ width: "40%" }}>
                    <h4>Gift card type</h4>
                  </div>
                  <div style={{ width: "60%" }}>
                    <select className="searchbox" name="store">
                      <option value="volvo">Select demo</option>
                      <option value="volvo">Smartstore 5 backend demo 1</option>
                      <option value="saab">Smartstore 5 backend demo 2</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div>
              <div className="inputtypes">
                <div style={{ width: "40%" }}>
                  <h4>Recurring product</h4>
                </div>
                <div style={{ width: "60%" }}>
                  <label className="switch">
                    <input type="checkbox" onclick="myFunction2()" />
                    <span className=" slider round" />
                  </label>
                </div>
              </div>
              <div id="myDIV2" style={{ display: "none" }}>
                <div className="inputtypes">
                  <div style={{ width: "40%" }}>
                    <h4>Cycle length</h4>
                  </div>
                  <div style={{ width: "60%" }}>
                    <input
                      className="searchbox"
                      placeholder="Empty"
                      type="number"
                      id="quantity"
                      name="quantity"
                      min={-10000}
                      max={100000}
                    />
                  </div>
                </div>
                <div className="inputtypes">
                  <div style={{ width: "40%" }}>
                    <h4>Cycle period</h4>
                  </div>
                  <div style={{ width: "60%" }}>
                    <select className="searchbox" name="store">
                      <option value="volvo">Select demo</option>
                      <option value="volvo">Smartstore 5 backend demo 1</option>
                      <option value="saab">Smartstore 5 backend demo 2</option>
                    </select>
                  </div>
                </div>
                <div className="inputtypes">
                  <div style={{ width: "40%" }}>
                    <h4>Total cycles</h4>
                  </div>
                  <div style={{ width: "60%" }}>
                    <input
                      className="searchbox"
                      placeholder="Empty"
                      type="number"
                      id="quantity"
                      name="quantity"
                      min={-10000}
                      max={100000}
                    />
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div>
              <div className="inputtypes">
                <div style={{ width: "40%" }}>
                  <h4>Shipping enabled</h4>
                </div>
                <div style={{ width: "60%" }}>
                  <label className="switch">
                    <input type="checkbox" onclick="myFunction3()" />
                    <span className=" slider round" />
                  </label>
                </div>
              </div>
              <div id="myDIV3" style={{ display: "none" }}>
                <div className="inputtypes">
                  <div style={{ width: "40%" }}>
                    <h4>Delivery time</h4>
                  </div>
                  <div style={{ width: "60%" }}>
                    <select className="searchbox" name="store">
                      <option value="volvo">Select demo</option>
                      <option value="volvo">Smartstore 5 backend demo 1</option>
                      <option value="saab">Smartstore 5 backend demo 2</option>
                    </select>
                  </div>
                </div>
                <div className="inputtypes">
                  <div style={{ width: "40%" }}>
                    <h4>Free shipping</h4>
                  </div>
                  <div style={{ width: "60%" }}>
                    <label className="switch">
                      <input type="checkbox" />
                      <span className=" slider round" />
                    </label>
                  </div>
                </div>
                <div className="inputtypes">
                  <div style={{ width: "40%" }}>
                    <h4>Additional shipping charge</h4>
                  </div>
                  <div style={{ width: "60%" }}>
                    <input
                      className="searchbox"
                      type="number"
                      id="quantity"
                      name="quantity"
                      min={-10000}
                      max={100000}
                    />
                    <span
                      style={{
                        marginLeft: "-70px",
                        color: "rgb(145, 128, 128)",
                      }}
                    >
                      EUR
                    </span>
                  </div>
                </div>
                <div className="inputtypes">
                  <div style={{ width: "40%" }}>
                    <h4>Quantity unit</h4>
                  </div>
                  <div style={{ width: "60%" }}>
                    <input
                      className="searchbox"
                      type="number"
                      id="quantity"
                      name="quantity"
                      min={-10000}
                      max={100000}
                    />
                  </div>
                </div>
                <div className="inputtypes">
                  <div style={{ width: "40%" }}>
                    <h4>Weight</h4>
                  </div>
                  <div style={{ width: "60%" }}>
                    <input
                      className="searchbox"
                      type="number"
                      id="quantity"
                      name="quantity"
                      min={-10}
                      max={50}
                    />
                    <span
                      style={{
                        marginLeft: "-95px",
                        color: "rgb(145, 128, 128)",
                      }}
                    >
                      Kilogram
                    </span>
                  </div>
                </div>
                <div className="inputtypes">
                  <div style={{ width: "40%" }}>
                    <h4>Length</h4>
                  </div>
                  <div style={{ width: "60%" }}>
                    <input
                      className="searchbox"
                      type="number"
                      id="quantity"
                      name="quantity"
                      min={-10000}
                      max={100000}
                    />
                    <span
                      style={{
                        marginLeft: "-70px",
                        color: "rgb(145, 128, 128)",
                      }}
                    >
                      Meter
                    </span>
                  </div>
                </div>
                <div className="inputtypes">
                  <div style={{ width: "40%" }}>
                    <h4>Width</h4>
                  </div>
                  <div style={{ width: "60%" }}>
                    <input
                      className="searchbox"
                      type="number"
                      id="quantity"
                      name="quantity"
                      min={-10}
                      max={50}
                    />
                    <span
                      style={{
                        marginLeft: "-70px",
                        color: "rgb(145, 128, 128)",
                      }}
                    >
                      Meter
                    </span>
                  </div>
                </div>
                <div className="inputtypes">
                  <div style={{ width: "40%" }}>
                    <h4>Height</h4>
                  </div>
                  <div style={{ width: "60%" }}>
                    <input
                      className="searchbox"
                      type="number"
                      id="quantity"
                      name="quantity"
                      min={-10000}
                      max={100000}
                    />
                    <span
                      style={{
                        marginLeft: "-70px",
                        color: "rgb(145, 128, 128)",
                      }}
                    >
                      Meter
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            {/* end here */}
            <div className="inputtypes">
              <div style={{ width: "40%" }}>
                <h4>Tax exempt</h4>
              </div>
              <div style={{ width: "60%" }}>
                <label className="switch">
                  <input type="checkbox" />
                  <span className=" slider round" />
                </label>
              </div>
            </div>
            <div className="inputtypes">
              <div style={{ width: "40%" }}>
                <h4>Tax category</h4>
              </div>
              <div style={{ width: "60%" }}>
                <select className="searchbox" name="store">
                  <option value="volvo">Select demo</option>
                  <option value="volvo">Smartstore 5 backend demo 1</option>
                  <option value="saab">Smartstore 5 backend demo 2</option>
                </select>
              </div>
            </div>
            <div className="inputtypes">
              <div style={{ width: "40%" }}>
                <h4>Is Electronic service</h4>
              </div>
              <div style={{ width: "60%" }}>
                <label className="switch">
                  <input type="checkbox" />
                  <span className=" slider round" />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddManageProduct;
