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
                    <div class="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
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
                    <Link class="nav-link" to='/admin/'>
                    <i class="fas fa-fw fa-tachometer-alt"></i>
                    <span>Product List</span></Link>
                </li>

                <li class="nav-item">
                    <Link class="nav-link" to="/admin/">
                    <i class="fas fa-fw fa-tachometer-alt"></i>
                    <span>Add Product</span></Link>
                </li>

                {/* <!-- Divider --> */}
                <hr class="sidebar-divider"/>

                {/* <!-- Heading --> */}
                {/* <div class="sidebar-heading">
                    Addons
                </div>

                <li class="nav-item">
                    <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages" aria-expanded="true" aria-controls="collapsePages">
                    <i class="fas fa-fw fa-folder"></i>
                    <span>Pages</span>
                    </a>
                    <div id="collapsePages" class="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                    <div class="bg-white py-2 collapse-inner rounded">
                        <h6 class="collapse-header">Login Screens:</h6>
                        <a class="collapse-item" href="login.html">Login</a>
                        <a class="collapse-item" href="register.html">Register</a>
                        <a class="collapse-item" href="forgot-password.html">Forgot Password</a>
                        <div class="collapse-divider"></div>
                        <h6 class="collapse-header">Other Pages:</h6>
                        <a class="collapse-item" href="404.html">404 Page</a>
                        <a class="collapse-item" href="blank.html">Blank Page</a>
                    </div>
                    </div>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="charts.html">
                    <i class="fas fa-fw fa-chart-area"></i>
                    <span>Charts</span></a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="tables.html">
                    <i class="fas fa-fw fa-table"></i>
                    <span>Tables</span></a>
                </li>

                <hr class="sidebar-divider d-none d-md-block"/> */}

                {/* <!-- Sidebar Toggler (Sidebar) --> */}
                <div class="text-center d-none d-md-inline">
                    <button class="rounded-circle border-0" id="sidebarToggle"></button>
                </div>

                </ul>
        </Fragment>
    )
}

export default Sidebar
