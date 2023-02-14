import React, { useRef, useState } from "react";
import funnelCss from "../../css/funnel.module.css";
// import $ from "jquery";
import { BiFilterAlt } from "react-icons/bi";
import { FcSearch } from "react-icons/fc";
const Funnel = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      {show ? (
        <>
          {" "}
          <div
            className={funnelCss.slidingDiv}
            style={{ width: "25rem", height: "26rem" }}
          >
            <div className={funnelCss.filterButton}>
              <h3 style={{ color: "grey", fontSize: "20px" }}>Filter</h3>

              <FcSearch onClick={() => setShow(!show)} />
            </div>

            <hr />

            <h4 style={{ fontSize: "20px", margin: "10px" }}>Category name:</h4>
            <input
              className={funnelCss.searchbox}
              type="text"
              id="SearchCategoryName"
              name="SearchCategoryName"
              //   value=""
            />

            <h4 style={{ fontSize: "20px", margin: "10px" }}>Alias:</h4>
            <input
              className={funnelCss.searchbox}
              type="text"
              id="SearchCategoryName"
              name="SearchCategoryName"
              //   value=""
            />

            <h4 style={{ fontSize: "20px", margin: "10px" }}>Store:</h4>

            <select className={funnelCss.searchbox} name="store">
              <option value="volvo">Select demo</option>
              <option value="volvo">Smartstore 5 backend demo 1</option>
              <option value="saab">Smartstore 5 backend demo 2</option>
            </select>
          </div>
        </>
      ) : null}

      <button>
        <BiFilterAlt
          className={funnelCss.filterbtn}
          style={{ color: "black", fontSize: "18px" }}
          onClick={() => setShow(!show)}
        />
      </button>
    </>
  );
};

export default Funnel;



