import React from 'react';
import { Link } from 'react-router-dom';

export default function AddNewProduct() {
    return (
        <div className="container ">
            <div className="row">
                <Link to="/new-product">+ Add New...</Link>
            </div>
        </div>
    )
}