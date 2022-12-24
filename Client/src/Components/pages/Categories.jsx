import React, { useState, useEffect } from "react";
import axios from "axios";
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
    const [data, setData] = useState([]);
    const [selectedItems, setSelectedItems] = useState([]);
    useEffect(() => {
        category()
      }, []);
      const category=()=>{
        const config = {
            headers: { "Content-Type": "application/json" },
          };
          // http://localhost:3000
          axios
            .get(
              "http://localhost:3000/catalog/catagory/getAllProduct",
              config
            )
            .then((result) => {
               console.log(result.data.products);
               console.log(result.data.products);
                setData(result.data.products);
             
            });
    }


    
    
      const handleSubmit = (id) => {

        console.log("hlw ");
        // Make the API call here, passing the selectedItems array as a prop
        console.log(`Selected items: ${id}`);
        console.log(id);
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


                    
                   
                    <Button name="+ Add new..." />
                </div>
                <div class="container">
                    <Button icon={filterIcon} />

                     {/* -- */}
                    
                    


                   
  {/* form content goes here */}
                    <Button  ids={handleSubmit}  name="+ Delete the item"   />
 
                    {/* -- */}
                </div>
                <div className="p-0">
                    {/* <ItemList categories={categoryList} /> */}
                    <ItemList categories={data} />
                </div>
                <div class="row">
                    <div className="col-md-1">
                        <Button icon={refreshIcon} />
                    </div>
                    <div className="col-md-8">
                        <Pagination />
                    </div>
                    <div className="col-md-2">
                        <Button icon={caret} name="per page"/>
                    </div>
                    <div className="col-md-1">
                        <Button icon={settingsIcon} />
                    </div>
                </div>
            </div>

        </div>
    )
}
