import React from 'react';
import XForm from '../forms/XForm';
import Sidebar from '/src/Components/Sidebar';
import sidebarOptions from "/src/sidebar.js"
import adminLoginCss from '../css/Admin_Login_page.module.css';
//AdminLogin === Admin_Login_page.css

export default function AdminLogin() {
    return (
        <div className={adminLoginCss.admin_login_main_container}>
            <div className={adminLoginCss.sub_container_admin_log}>
                <div className={adminLoginCss.container}>
                {/* <div className={adminLoginCss.container-fluid}> */}
                    <div className="m-5 mb-0 row">
                        <div className="col" id={adminLoginCss.tital_of_admin_login_page}>
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
            </div>
        </div>
    )
}
