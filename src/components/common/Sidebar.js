import React, {Fragment} from 'react';
import {Link} from "react-router-dom";

function Sidebar() {
    return (
        <Fragment>
            <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/* <!-- Sidebar - Brand --> */}
                <Link to="/admin/" class="sidebar-brand d-flex align-items-center justify-content-center">
                    <div class="sidebar-brand-icon rotate-n-15">
                    <i class="fas fa-laugh-wink"></i>
                    </div>
                    <div class="sidebar-brand-text mx-3">Sweetitech</div>
                </Link>

                {/* <!-- Divider --> */}
                <hr class="sidebar-divider my-0"/>

                {/* <!-- Nav Item - Dashboard --> active */}
                <li class="nav-item">
                    <Link class="nav-link" to="/admin/">
                    <i class="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span></Link>
                </li>

                {/* <!-- Divider --> */}
                <hr class="sidebar-divider"/>

                {/* <!-- Heading --> */}
                <div class="sidebar-heading">
                    Products
                </div>

                <li class="nav-item">
                    <Link class="nav-link" to='/admin/product'>
                    <i class="fas fa-fw fa-tachometer-alt"></i>
                    <span>Product List</span></Link>
                </li>

                <li class="nav-item">
                    <Link class="nav-link" to="/admin/add-product">
                    <i class="fas fa-fw fa-tachometer-alt"></i>
                    <span>Add Product</span></Link>
                </li>

                {/* <!-- Divider --> */}
                <hr class="sidebar-divider"/>

                {/* <!-- Sidebar Toggler (Sidebar) --> */}
                <div class="text-center d-none d-md-inline">
                    <button class="rounded-circle border-0" id="sidebarToggle"></button>
                </div>

                </ul>
        </Fragment>
    )
}

export default Sidebar
