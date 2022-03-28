import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <nav
        id="sidebarMenu"
        class="sidebar d-lg-block bg-gray-800 text-white collapse"
        data-simplebar
      >
        <div class="sidebar-inner px-4 pt-3">
          <ul class="nav flex-column pt-3 pt-md-0">
            <li
              role="separator"
              class="dropdown-divider mt-4 mb-3 border-gray-700"
            ></li>
            <li class="nav-item">
              <a
                href="https://demo.themesberg.com/volt-pro/pages/calendar.html"
                target="_blank"
                class="nav-link d-flex justify-content-between"
              >
                <span>
                  <span class="sidebar-text">Categories</span>
                </span>
              </a>
            </li>
            <li
              role="separator"
              class="dropdown-divider mt-4 mb-3 border-gray-700"
            ></li>
            <li class="nav-item">
              <Link
                to={"/products"}
                className={"nav-link d-flex justify-content-between"}
              >
                <span>
                  <span class="sidebar-text">Products</span>
                </span>
              </Link>
            </li>
            <li
              role="separator"
              class="dropdown-divider mt-4 mb-3 border-gray-700"
            ></li>
            <li class="nav-item">
              <span
                class="nav-link  collapsed  d-flex justify-content-between align-items-center"
                data-bs-toggle="collapse"
                data-bs-target="#submenu-app"
              >
                <span>
                  <span class="sidebar-text">Administrators</span>
                </span>
              </span>
            </li>
            <li
              role="separator"
              class="dropdown-divider mt-4 mb-3 border-gray-700"
            ></li>
            <li class="nav-item">
              <span
                class="nav-link  collapsed  d-flex justify-content-between align-items-center"
                data-bs-toggle="collapse"
                data-bs-target="#submenu-pages"
              >
                <span>
                  <span class="sidebar-text">Orders</span>
                </span>
              </span>
            </li>

            <li class="nav-item">
              <a
                id="btn-logout"
                href="../../pages/upgrade-to-pro.html"
                class="btn d-flex align-items-center justify-content-center btn-upgrade-pro"
              >
                <span>Logout</span>
              </a>
            </li>
            <li
              role="separator"
              class="dropdown-divider mt-4 mb-3 border-gray-700"
            ></li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Sidebar;
