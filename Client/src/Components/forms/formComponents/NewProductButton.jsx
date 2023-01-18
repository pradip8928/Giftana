import React from 'react';
import { Link } from 'react-router-dom';
import XForm from '../XForm';

export default function AddNewProduct() {
    return (
        <>
            <div className="container ">
                <div className="row">
                    <Link to="/new-product">+ Add New...</Link>
                    {/* in work */}
                <XForm/>
            </div>
        </div>
        </>
      
    )
}