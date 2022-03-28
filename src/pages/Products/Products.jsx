import React from "react";

function Products() {
  return (
    <main class="content text-start">
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div class="d-block mb-4 mb-md-0">
          <h2 class="h4">Products</h2>
        </div>
        <div class="btn-toolbar mb-2 mb-md-0">
          <a
            href="#"
            class="btn btn-sm btn-gray-800 d-inline-flex align-items-center"
          >
            <svg
              class="icon icon-xs me-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              ></path>
            </svg>
            New product
          </a>
        </div>
      </div>
      <div class="table-settings mb-4">
        <div class="row align-items-center justify-content-between">
          <div class="col col-md-6 col-lg-3 col-xl-4">
            <div class="input-group me-2 me-lg-3 fmxw-400">
              <span class="input-group-text">
                <svg
                  class="icon icon-xs"
                  x-description="Heroicon name: solid/search"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
              <input type="text" class="form-control" placeholder="Search " />
            </div>
          </div>
        </div>
      </div>
      <div class="card card-body border-0 shadow table-wrapper table-responsive">
        <table class="table table-hover">
          <thead>
            <tr>
              <th class="border-gray-200">#</th>
              <th class="border-gray-200">Bill For</th>
              <th class="border-gray-200">Issue Date</th>
              <th class="border-gray-200">Due Date</th>
              <th class="border-gray-200">Total</th>
              <th class="border-gray-200">Status</th>
              <th class="border-gray-200">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <a href="#" class="fw-bold">
                  456478
                </a>
              </td>
              <td>
                <span class="fw-normal">Platinum Subscription Plan</span>
              </td>
              <td>
                <span class="fw-normal">1 May 2020</span>
              </td>
              <td>
                <span class="fw-normal">1 Jun 2020</span>
              </td>
              <td>
                <span class="fw-bold">$799,00</span>
              </td>
              <td>
                <span class="fw-bold text-warning">Due</span>
              </td>
              <td>
                <div class="btn-group">
                  <button
                    class="btn btn-link text-dark dropdown-toggle dropdown-toggle-split m-0 p-0"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span class="icon icon-sm">
                      <span class="fas fa-ellipsis-h icon-dark"></span>
                    </span>
                    <span class="visually-hidden">Toggle Dropdown</span>
                  </button>
                  <div class="dropdown-menu py-0">
                    <a class="dropdown-item rounded-top" href="#">
                      <span class="fas fa-eye me-2"></span>View Details
                    </a>
                    <a class="dropdown-item" href="#">
                      <span class="fas fa-edit me-2"></span>Edit
                    </a>
                    <a
                      class="dropdown-item text-danger rounded-bottom"
                      href="#"
                    >
                      <span class="fas fa-trash-alt me-2"></span>Remove
                    </a>
                  </div>
                </div>
              </td>
            </tr>

            <tr>
              <td>
                <a href="#" class="fw-bold">
                  456423
                </a>
              </td>
              <td>
                <span class="fw-normal">Platinum Subscription Plan</span>
              </td>
              <td>
                <span class="fw-normal">1 Apr 2020</span>
              </td>
              <td>
                <span class="fw-normal">1 May 2020</span>
              </td>
              <td>
                <span class="fw-bold">$799,00</span>
              </td>
              <td>
                <span class="fw-bold text-success">Paid</span>
              </td>
              <td>
                <div class="btn-group">
                  <button
                    class="btn btn-link text-dark dropdown-toggle dropdown-toggle-split m-0 p-0"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span class="icon icon-sm">
                      <span class="fas fa-ellipsis-h icon-dark"></span>
                    </span>
                    <span class="visually-hidden">Toggle Dropdown</span>
                  </button>
                  <div class="dropdown-menu py-0">
                    <a class="dropdown-item rounded-top" href="#">
                      <span class="fas fa-eye me-2"></span>View Details
                    </a>
                    <a class="dropdown-item" href="#">
                      <span class="fas fa-edit me-2"></span>Edit
                    </a>
                    <a
                      class="dropdown-item text-danger rounded-bottom"
                      href="#"
                    >
                      <span class="fas fa-trash-alt me-2"></span>Remove
                    </a>
                  </div>
                </div>
              </td>
            </tr>

            <tr>
              <td>
                <a href="#" class="fw-bold">
                  456420
                </a>
              </td>
              <td>
                <span class="fw-normal">Platinum Subscription Plan</span>
              </td>
              <td>
                <span class="fw-normal">1 Mar 2020</span>
              </td>
              <td>
                <span class="fw-normal">1 Apr 2020</span>
              </td>
              <td>
                <span class="fw-bold">$799,00</span>
              </td>
              <td>
                <span class="fw-bold text-success">Paid</span>
              </td>
              <td>
                <div class="btn-group">
                  <button
                    class="btn btn-link text-dark dropdown-toggle dropdown-toggle-split m-0 p-0"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span class="icon icon-sm">
                      <span class="fas fa-ellipsis-h icon-dark"></span>
                    </span>
                    <span class="visually-hidden">Toggle Dropdown</span>
                  </button>
                  <div class="dropdown-menu py-0">
                    <a class="dropdown-item rounded-top" href="#">
                      <span class="fas fa-eye me-2"></span>View Details
                    </a>
                    <a class="dropdown-item" href="#">
                      <span class="fas fa-edit me-2"></span>Edit
                    </a>
                    <a
                      class="dropdown-item text-danger rounded-bottom"
                      href="#"
                    >
                      <span class="fas fa-trash-alt me-2"></span>Remove
                    </a>
                  </div>
                </div>
              </td>
            </tr>

            <tr>
              <td>
                <a href="#" class="fw-bold">
                  456421
                </a>
              </td>
              <td>
                <span class="fw-normal">Platinum Subscription Plan</span>
              </td>
              <td>
                <span class="fw-normal">1 Feb 2020</span>
              </td>
              <td>
                <span class="fw-normal">1 Mar 2020</span>
              </td>
              <td>
                <span class="fw-bold">$799,00</span>
              </td>
              <td>
                <span class="fw-bold text-success">Paid</span>
              </td>
              <td>
                <div class="btn-group">
                  <button
                    class="btn btn-link text-dark dropdown-toggle dropdown-toggle-split m-0 p-0"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span class="icon icon-sm">
                      <span class="fas fa-ellipsis-h icon-dark"></span>
                    </span>
                    <span class="visually-hidden">Toggle Dropdown</span>
                  </button>
                  <div class="dropdown-menu py-0">
                    <a class="dropdown-item rounded-top" href="#">
                      <span class="fas fa-eye me-2"></span>View Details
                    </a>
                    <a class="dropdown-item" href="#">
                      <span class="fas fa-edit me-2"></span>Edit
                    </a>
                    <a
                      class="dropdown-item text-danger rounded-bottom"
                      href="#"
                    >
                      <span class="fas fa-trash-alt me-2"></span>Remove
                    </a>
                  </div>
                </div>
              </td>
            </tr>

            <tr>
              <td>
                <a href="#" class="fw-bold">
                  456420
                </a>
              </td>
              <td>
                <span class="fw-normal">Platinum Subscription Plan</span>
              </td>
              <td>
                <span class="fw-normal">1 Jan 2020</span>
              </td>
              <td>
                <span class="fw-normal">1 Feb 2020</span>
              </td>
              <td>
                <span class="fw-bold">$799,00</span>
              </td>
              <td>
                <span class="fw-bold text-success">Paid</span>
              </td>
              <td>
                <div class="btn-group">
                  <button
                    class="btn btn-link text-dark dropdown-toggle dropdown-toggle-split m-0 p-0"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span class="icon icon-sm">
                      <span class="fas fa-ellipsis-h icon-dark"></span>
                    </span>
                    <span class="visually-hidden">Toggle Dropdown</span>
                  </button>
                  <div class="dropdown-menu py-0">
                    <a class="dropdown-item rounded-top" href="#">
                      <span class="fas fa-eye me-2"></span>View Details
                    </a>
                    <a class="dropdown-item" href="#">
                      <span class="fas fa-edit me-2"></span>Edit
                    </a>
                    <a
                      class="dropdown-item text-danger rounded-bottom"
                      href="#"
                    >
                      <span class="fas fa-trash-alt me-2"></span>Remove
                    </a>
                  </div>
                </div>
              </td>
            </tr>

            <tr>
              <td>
                <a href="#" class="fw-bold">
                  456479
                </a>
              </td>
              <td>
                <span class="fw-normal">Platinum Subscription Plan</span>
              </td>
              <td>
                <span class="fw-normal">1 Dec 2019</span>
              </td>
              <td>
                <span class="fw-normal">1 Jan 2020</span>
              </td>
              <td>
                <span class="fw-bold">$799,00</span>
              </td>
              <td>
                <span class="fw-bold text-success">Paid</span>
              </td>
              <td>
                <div class="btn-group">
                  <button
                    class="btn btn-link text-dark dropdown-toggle dropdown-toggle-split m-0 p-0"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span class="icon icon-sm">
                      <span class="fas fa-ellipsis-h icon-dark"></span>
                    </span>
                    <span class="visually-hidden">Toggle Dropdown</span>
                  </button>
                  <div class="dropdown-menu py-0">
                    <a class="dropdown-item rounded-top" href="#">
                      <span class="fas fa-eye me-2"></span>View Details
                    </a>
                    <a class="dropdown-item" href="#">
                      <span class="fas fa-edit me-2"></span>Edit
                    </a>
                    <a
                      class="dropdown-item text-danger rounded-bottom"
                      href="#"
                    >
                      <span class="fas fa-trash-alt me-2"></span>Remove
                    </a>
                  </div>
                </div>
              </td>
            </tr>

            <tr>
              <td>
                <a href="#" class="fw-bold">
                  456478
                </a>
              </td>
              <td>
                <span class="fw-normal">Platinum Subscription Plan</span>
              </td>
              <td>
                <span class="fw-normal">1 Nov 2019</span>
              </td>
              <td>
                <span class="fw-normal">1 Dec 2019</span>
              </td>
              <td>
                <span class="fw-bold">$799,00</span>
              </td>
              <td>
                <span class="fw-bold text-success">Paid</span>
              </td>
              <td>
                <div class="btn-group">
                  <button
                    class="btn btn-link text-dark dropdown-toggle dropdown-toggle-split m-0 p-0"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span class="icon icon-sm">
                      <span class="fas fa-ellipsis-h icon-dark"></span>
                    </span>
                    <span class="visually-hidden">Toggle Dropdown</span>
                  </button>
                  <div class="dropdown-menu py-0">
                    <a class="dropdown-item rounded-top" href="#">
                      <span class="fas fa-eye me-2"></span>View Details
                    </a>
                    <a class="dropdown-item" href="#">
                      <span class="fas fa-edit me-2"></span>Edit
                    </a>
                    <a
                      class="dropdown-item text-danger rounded-bottom"
                      href="#"
                    >
                      <span class="fas fa-trash-alt me-2"></span>Remove
                    </a>
                  </div>
                </div>
              </td>
            </tr>

            <tr>
              <td>
                <a href="#" class="fw-bold">
                  453673
                </a>
              </td>
              <td>
                <span class="fw-normal">Gold Subscription Plan</span>
              </td>
              <td>
                <span class="fw-normal">1 Oct 2019</span>
              </td>
              <td>
                <span class="fw-normal">1 Nov 2019</span>
              </td>
              <td>
                <span class="fw-bold">$533,42</span>
              </td>
              <td>
                <span class="fw-bold text-danger">Cancelled</span>
              </td>
              <td>
                <div class="btn-group">
                  <button
                    class="btn btn-link text-dark dropdown-toggle dropdown-toggle-split m-0 p-0"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span class="icon icon-sm">
                      <span class="fas fa-ellipsis-h icon-dark"></span>
                    </span>
                    <span class="visually-hidden">Toggle Dropdown</span>
                  </button>
                  <div class="dropdown-menu py-0">
                    <a class="dropdown-item rounded-top" href="#">
                      <span class="fas fa-eye me-2"></span>View Details
                    </a>
                    <a class="dropdown-item" href="#">
                      <span class="fas fa-edit me-2"></span>Edit
                    </a>
                    <a
                      class="dropdown-item text-danger rounded-bottom"
                      href="#"
                    >
                      <span class="fas fa-trash-alt me-2"></span>Remove
                    </a>
                  </div>
                </div>
              </td>
            </tr>

            <tr>
              <td>
                <a href="#" class="fw-bold">
                  456468
                </a>
              </td>
              <td>
                <span class="fw-normal">Gold Subscription Plan</span>
              </td>
              <td>
                <span class="fw-normal">1 Sep 2019</span>
              </td>
              <td>
                <span class="fw-normal">1 Oct 2019</span>
              </td>
              <td>
                <span class="fw-bold">$533,42</span>
              </td>
              <td>
                <span class="fw-bold text-success">Paid</span>
              </td>
              <td>
                <div class="btn-group">
                  <button
                    class="btn btn-link text-dark dropdown-toggle dropdown-toggle-split m-0 p-0"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span class="icon icon-sm">
                      <span class="fas fa-ellipsis-h icon-dark"></span>
                    </span>
                    <span class="visually-hidden">Toggle Dropdown</span>
                  </button>
                  <div class="dropdown-menu py-0">
                    <a class="dropdown-item rounded-top" href="#">
                      <span class="fas fa-eye me-2"></span>View Details
                    </a>
                    <a class="dropdown-item" href="#">
                      <span class="fas fa-edit me-2"></span>Edit
                    </a>
                    <a
                      class="dropdown-item text-danger rounded-bottom"
                      href="#"
                    >
                      <span class="fas fa-trash-alt me-2"></span>Remove
                    </a>
                  </div>
                </div>
              </td>
            </tr>

            <tr>
              <td>
                <a href="#" class="fw-bold">
                  456478
                </a>
              </td>
              <td>
                <span class="fw-normal">Flexible Subscription Plan</span>
              </td>
              <td>
                <span class="fw-normal">1 Aug 2019</span>
              </td>
              <td>
                <span class="fw-normal">1 Sep 2019</span>
              </td>
              <td>
                <span class="fw-bold">$233,42</span>
              </td>
              <td>
                <span class="fw-bold text-success">Paid</span>
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <div class="card-footer px-3 border-0 d-flex flex-column flex-lg-row align-items-center justify-content-between">
          <nav aria-label="Page navigation example">
            <ul class="pagination mb-0">
              <li class="page-item">
                <a class="page-link" href="#">
                  Previous
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  1
                </a>
              </li>
              <li class="page-item active">
                <a class="page-link" href="#">
                  2
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  3
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  4
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  5
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div
        class="theme-settings card bg-gray-800 pt-2 collapse"
        id="theme-settings"
      ></div>
    </main>
  );
}

export default Products;
