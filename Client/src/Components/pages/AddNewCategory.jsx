import React from 'react';
import NewCategory from '../forms/NewCategory';
import Sidebar from '/src/Components/Sidebar';
import AddNcss from '../css/addNewCategories.module.css';
export default function AdminLogin() {

    return (
        <div className={ AddNcss.maincontainer}>
            <div className={ AddNcss.subcontainer}>
                <div className="container-fluid">
                    <div className="m-5 mb-0 row">
                        <div className="col">
                            <button className="btn border"><img src="/src/assets/icons/arrow-left.svg" alt="" srcSet="" /></button>
                            <strong className="p-2 h3">Add a new category</strong>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2 row-sm">
                            <Sidebar buttons={[{ name: "General", icon: "src/assets/icons/general.svg" }, { name: "Search engines (SEO)", icon: "src/assets/icons/search.svg" }, { name: "Products", icon: "src/assets/icons/box.svg" }, { name: "MegaMenu", icon: "src/assets/icons/menu-down.svg" }, { name: "Content Slider", icon: "src/assets/icons/photos.svg" }]} />
                        </div>
                        <div className="col-md-10 row-sm">
                            <NewCategory />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
