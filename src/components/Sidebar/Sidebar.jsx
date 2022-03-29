import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <nav
        id="sidebarMenu"
        className="sidebar d-lg-block bg-gray-800 text-white collapse"
        data-simplebar
      >
        <div className="sidebar-inner px-4 pt-3">
          <ul className="nav flex-column pt-3 pt-md-0">
            <li role="separator" className="dropdown-divider mt-4 mb-3 border-gray-700"></li>
            <li class="nav-item">
              <Link to={"/category"} className={"nav-link d-flex justify-content-between"}>
                <span>
                  <span className="sidebar-text">Categories</span>
                </span>
              </Link>
            </li>
            <li role="separator" className="dropdown-divider mt-4 mb-3 border-gray-700"></li>
            <li className="nav-item">
              <Link to={"/products"} className={"nav-link d-flex justify-content-between"}>
                <span>
                  <span className="sidebar-text">Products</span>
                </span>
              </Link>
            </li>
            <li role="separator" className="dropdown-divider mt-4 mb-3 border-gray-700"></li>
            <li class="nav-item">
              <Link to={"/admins"} className={"nav-link d-flex justify-content-between"}>
                <span>
                  <span className="sidebar-text">Administrators</span>
                </span>
              </Link>
            </li>
            <li role="separator" className="dropdown-divider mt-4 mb-3 border-gray-700"></li>
            <li className="nav-item">
              <span
                className="nav-link  collapsed  d-flex justify-content-between align-items-center"
                data-bs-toggle="collapse"
                data-bs-target="#submenu-pages"
              >
                <span>
                  <span className="sidebar-text">Orders</span>
                </span>
              </span>
            </li>

            <li className="nav-item">
              <a
                id="btn-logout"
                href="../../pages/upgrade-to-pro.html"
                className="btn d-flex align-items-center justify-content-center btn-upgrade-pro"
              >
                <span>Logout</span>
              </a>
            </li>
            <li role="separator" className="dropdown-divider mt-4 mb-3 border-gray-700"></li>
            <li class="nav-item">
              <Link to={"/images"} className={"nav-link d-flex justify-content-between"}>
                <span>
                  <span className="sidebar-text">Images</span>
                </span>
              </Link>
            </li>
            <li role="separator" className="dropdown-divider mt-4 mb-3 border-gray-700"></li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Sidebar;
