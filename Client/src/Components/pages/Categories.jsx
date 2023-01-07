import React, { useState, useEffect } from "react";
import axios from "axios";
import AddNewProduct from "../forms/formComponents/NewProductButton";
import ItemList from "../ItemList";
// <<<<<<< HEAD
import Button from "../Button";

import '../Button'
import Pagination from "../PaginationComponent";

// import Pagination from "../Pagination";
// import InputField from "../InputField";
// import Filter from "../Filter";
// =======
// import Button from "../forms/formComponents/Button";
// import Pagination from "../Pagination";
import InputField from "../forms/formComponents/InputField";
// >>>>>>> 68782268e01a85e696b33233dbe67663b08cbed2

// import categoryList from "../../categories.js";

import filterIcon from "/src/assets/icons/filter.svg";
import refreshIcon from "/src/assets/icons/refresh.svg";
import settingsIcon from "/src/assets/icons/settings.svg";
import caret from "/src/assets/icons/caret-down.svg";

export default function Categories() {
  const [data, setData] = useState([]);
  const [selectedData, setSelectedData] = useState([]);
  const [query, setQuery] = useState("");
  const [filterdata, setFilterData] = useState([]);
  useEffect(() => {
    category();
  }, [query, data]);

  function filter_btn() {
    document.getElementById('myid').style.display = "block";
  }
  const category = () => {
    const config = {
      headers: { "Content-Type": "application/json" },
    };
    // http://localhost:3000
    axios
      .get(
        `http://localhost:3000/catalog/catagory/getAllProduct?productName=${query}`,
        config
      )
      .then((result) => {
        setData(result.data.products);
      });
  };

  const handleInput = (e) => {
    // console.log(e.target.value);
    setQuery(e.target.value);
  };

  const getData = (ids) => {
    if (ids.length > 0) {
      setSelectedData(ids);
    } else {
      setSelectedData([]);
    }
  };

  const deleteAllItems = () => {
    // console.log(data);
    console.log(`Delete button is Clicked ${selectedData}`);
    console.log(selectedData);
    const objectIds = selectedData.map((id) => mongoose.Types.ObjectId(id));

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
      })
      .catch((err) => {
        console.error(`Error retrieving items: ${err.message}`);
      });
  };

  return (


    <div className="h-100 m-5 p-2 border rounded">

      <div className="row m-2 align-items-center">
        <h1 className="container col-md-3 h-100 p-2">Manage Categories</h1>
        <div className="col-md">
          <Button name="List" />
          <Button name="Tree" />
        </div>
      </div>
      <div className="row m-2 pt-1 pb-1 border">
   

        <div class="container">
          <Button   icon={filterIcon} />
          {/* sumit */}

          <Button name="+ Add new..." />
        
          <InputField
            type="text"
            name="adminName"
            placeholder="search by product Name"
            data={handleInput}
          />
        </div>

        <div className="p-0">
          <Button items={deleteAllItems} name="- Delete the item" />
          <ItemList categories={data} getData={getData} />
          {/* <ItemList categories={data}     checkedItems={(e)=>handleCheckboxChange(e)}  /> */}
        </div>
        <div class="row">
          <div className="col-md-1">
            <Button icon={refreshIcon} />
          </div>
          <div className="col-md-8">
            <Pagination />
          </div>
          <div className="col-md-2">
            <Button icon={caret} name="per page" />
          </div>
          <div className="col-md-1">
            <Button icon={settingsIcon} />
          </div>
        </div>
      </div>
    </div>
  );
}
