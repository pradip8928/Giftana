import React from 'react';
import XForm from '../forms/XForm';
import Sidebar from '/src/Components/Sidebar';
import sidebarOptions from "/src/sidebar.js"

export default function AdminLogin() {
    return (
        <div className="container-fluid">
            <div className="m-5 mb-0 row">
                <div className="col">
                    <button className="btn border"><img src="/src/assets/icons/arrow-left.svg" alt="" srcSet="" /></button>
                    <strong className="p-2 h3">Edit customer details - demo</strong>
                </div>
            </div>
            <div className="row">
                <div className="col-md-2 row-sm">
                    <Sidebar buttons={sidebarOptions} />
                </div>
                <div className="col-md-10 row-sm">
                    <XForm postTo="/" />
                </div>
            </div>
        </div>
    )
}
