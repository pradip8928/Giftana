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


    
    
    //   const handleSubmit = (e) => {

    //     const {value,checked}=e.target;
    //     console.log(`${value} is ${checked}`);
    //     console.log("hlw ");
    //     // Make the API call here, passing the selectedItems array as a prop
    //     // console.log(`Selected items: ${id}`);
    //     // console.log(id);


    //     // if (checked) {
    //     //     setSelectedItems([...selectedItems,value])
    //     // }else{
    //     //     setSelectedItems(selectedItems.filter((e)=>{e!== value}))
    //     // }
    //   };


    //   const handleCheckboxChange = (id) => {
    //     console.log(id);



    //     // Add or remove the ID from the array, depending on whether it is already present
    //     if (selectedItems.includes(id)) {
    //         console.log(id);
    //         setSelectedItems(selectedItems.filter((item) => item !== id));
    //     } else {
    //         setSelectedItems([...selectedItems, id]);
    //         console.log(selectedItems);

    //         // selectedItems.map((item) =>{
    //         //     console.log(item);
    //         //     console.log(1234);
    //         // })
    //     }
    //   };

const deleteAllItems=()=>{
    console.log(`Delete button is Clicked`);
}

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
              
                <div className="p-0">
                    {/* <ItemList categories={categoryList} /> */}
                    <Button  items={deleteAllItems}  name="- Delete the item"   />
                    <ItemList categories={data}     />
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
