import React, { useState, useEffect } from "react";
import axios from "axios";
import Checkbox from './Checkbox';
import InputField from './InputField';
import checkIcon from "/src/assets/icons/check.svg"
// import categories from "../categories";

export default function ItemList(props) {

    const [selectedItems, setSelectedItems] = useState([]);
     // checkbox
    const handleCheckboxChange = (id) => {
        console.log(id);
        // Add or remove the ID from the array, depending on whether it is already present
        if (selectedItems.includes(id)) {
            console.log(id);
            setSelectedItems(selectedItems.filter((item) => item !== id));
        } else {
            setSelectedItems([...selectedItems, id]);
            console.log(selectedItems);

            selectedItems.map((item) =>{
                console.log(item);
                console.log(1234);
            })
        }
      };


    return (
        <table className="table border-top">
            <thead>
                <tr className="">
                    <th scope="col"><InputField type="checkbox"  /></th>
                    <th scope="col">Name</th>
                    <th scope="col">Complete Name</th>
                    <th scope="col">Alias</th>
                    <th scope="col">Published</th>
                    <th scope="col">Display Order</th>
                    <th scope="col">Limited to stores</th>
                </tr>
            </thead>
            <tbody className="h-100 overflow-y-auto">

                {/* // productName,productCompleteName,productAliasName,productPublished,productOrder,productStores */}
                {props.categories.map((category, index) => {
                    return( 
                        <tr key={index} >
                        <td scope="row"><InputField type="checkbox"  onChange={() => handleCheckboxChange(category._id)} />{category._id}</td>
                        <td>{category.productName}</td>
                        <td>{category.productCompleteName}</td>
                        <td>{category.productAliasName}</td>
                        <td>{category.productPublished ? <img src={checkIcon} alt="Yes" /> : "-"}</td>
                        <td>{category.productOrder}</td>
                        <td>{category.productStores? category.productStores: "-"}</td>
                    </tr>
                    )
                })}
                {/* {categories.map((category, index) => {
                    return (<tr key={index}>
                        <td scope="row"><InputField type="checkbox" /></td>
                        <td>{category.cname}</td>
                        <td>{category.alias}</td>
                        <td>{category.published ? <img src={checkIcon} alt="Yes" /> : "-"}</td>
                        <td>{category.order}</td>
                        <td>{category.stores? category.stores: "-"}</td>
                    </tr>)
                })} */}
                
                
            </tbody>
        </table>

    )
}
