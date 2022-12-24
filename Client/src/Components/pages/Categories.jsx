import React, { useState } from "react";
import Filter from "../Filter";
import AddNewProduct from "../AddNewProduct";
import ItemList from "../ItemList";
import Button from "../Button";
import Pagination from "../Pagination";

import categoryList from "../../categories.js";

import filterIcon from "/src/assets/icons/filter.svg";
import refreshIcon from "/src/assets/icons/refresh.svg";
import settingsIcon from "/src/assets/icons/settings.svg";
import caret from "/src/assets/icons/caret-down.svg";

export default function Categories() {
  const helloWorld = () => {
    console.log("hello world");
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
          <Button icon={filterIcon} />
          <Button name="+ Add new..." helloWorld={helloWorld} />
        </div>
        <div className="p-0">
          <ItemList categories={categoryList} />
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
