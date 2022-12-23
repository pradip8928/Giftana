import React from 'react';
import { Link } from 'react-router-dom';

export default function AddNewProduct() {
    return (
        <div className="container ">
            <div className="row">
                <Link to="/">+ Add New...</Link>
            </div>
        </div>
    )
}
