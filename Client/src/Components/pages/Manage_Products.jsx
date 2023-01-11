import React from "react";
// import '../Button'
import Button from "../Button";
// import Button from "../Button";
// import Button from "./Button";
// import './css/Button.css';
// import '../Button'
import Manage_ProductCss from "../css/Manage_Product.module.css";
export default function Manage_Product() {
    return (
        <div className={Manage_ProductCss.main_container}>
            {/* <div className="main_container_h1"> */}
                <h1>Manage Products</h1>
            {/* </div> */}
            <div className={Manage_ProductCss.container}>
                <div className={Manage_ProductCss.container_btn}>
                    <Button className={Manage_ProductCss.filter_btn} name="Filter" onClick=" " />

                    <Button className={Manage_ProductCss.edit_btn} name="+ Add items" />
                    <Button className={ Manage_ProductCss.edit_btn} name="Edit"/>
                    
                    {/* <hr></hr> */}
                </div>
                <table className={Manage_ProductCss.table}>
                    <thead >
                        <tr className={Manage_ProductCss.table_first_row}>
                        <th scope="col">#</th>
                            <th scope="col">img</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">SKU</th>
                            <th scope="col">PRICE</th>
                            <th scope="col">stock quality</th>
                            <th scope="col">Limited to store</th>
                            <th scope="col">Updated on</th>
                            <th scope="col">Publish</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Otto</td>
                           
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Otto</td>
                           
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                           
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Otto</td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                           
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Otto</td>
                        </tr>
                        <tr>
                            <th scope="row">5</th>
                           
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Otto</td>
                        </tr>
                        <tr>
                            <th scope="row">6</th>
                           
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Otto</td>
                        </tr>
                        <tr>
                            <th scope="row">7</th>
                           
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Otto</td>
                        </tr>
                        <tr>
                            <th scope="row">8</th>
                           
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Otto</td>
                        </tr>
                        <tr>
                            <th scope="row">9</th>
                           
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Otto</td>
                        </tr>
                        <tr>
                            <th scope="row">10</th>
                           
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Otto</td>
                        </tr>
                        <tr>
                            <th scope="row">11</th>
                           
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Otto</td>
                        </tr>
                        <tr>
                            <th scope="row">12</th>
                           
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Otto</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}