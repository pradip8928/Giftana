import React, { useState, useEffect } from "react";
import axios from "axios";
import Checkbox from './Checkbox';
import InputField from './InputField';
import checkIcon from "/src/assets/icons/check.svg"
// import categories from "../categories";

export default function ItemList(props) {
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     category()
    //   }, []);



    // const category=()=>{
    //     const config = {
    //         headers: { "Content-Type": "application/json" },
    //       };
    //       // http://localhost:3000
    //       axios
    //         .get(
    //           "http://localhost:3000/catalog/catagory/getAllProduct",
    //           config
    //         )
    //         .then((result) => {
    //            console.log(result.data);
    //             setData(result.data);
             
    //         });
    // }

    return (
        <table className="table border-top">
            <thead>
                <tr className="">
                    <th scope="col"><InputField type="checkbox" /></th>
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
                    return( 
                        <tr key={index}>
                        <td scope="row"><InputField type="checkbox" /></td>
                        <td>{category.productName}</td>
                        <td>{category.productPrice}</td>
                        <td>{category.alias}</td>
                        <td>{category.published ? <img src={checkIcon} alt="Yes" /> : "-"}</td>
                        <td>{category.order}</td>
                        <td>{category.productQuantity? category.productQuantity: "-"}</td>
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
