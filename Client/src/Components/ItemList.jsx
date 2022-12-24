import React from "react";
import Checkbox from "./Checkbox";
import InputField from "./InputField";
import checkIcon from "/src/assets/icons/check.svg";

export default function ItemList(props) {
  return (
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
          return (
            <tr key={index}>
              <td scope="row">
                <InputField
                  type="checkbox"
                  // ye fucntion kaha bnaya hai
                  // haa tho kr tho rh hai pass bta zra kha hai
                  onChange={() => handleCheckboxChange(category._id)}
                />
              </td>
              <td>{category.name}</td>
              <td>{category.cname}</td>
              <td>{category.alias}</td>
              <td>
                {category.published ? <img src={checkIcon} alt="Yes" /> : "-"}
              </td>
              <td>{category.order}</td>
              <td>{category.stores ? category.stores : "-"}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
