import React from "react";
import { useLocation } from "react-router-dom";

function ProductFrom() {
  const location = useLocation();

  return (
    <>
      <main>
        <section className="vh-lg-100 mt-5 mt-lg-0 bg-soft d-flex align-items-center">
          <div className="container">
            <div
              className="row justify-content-center form-bg-image"
              data-background-lg="../../assets/img/illustrations/signin.svg"
            >
              <div className="col-12 d-flex align-items-center justify-content-center">
                <div className="bg-white shadow border-0 rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                  <div className="text-center text-md-center mb-4 mt-md-0">
                    {location.pathname === "/create-product" && (
                      <h1 className="mb-0 h3">New product</h1>
                    )}

                    {location.pathname === "/update-product" && (
                      <h1 className="mb-0 h3">Name product</h1>
                    )}
                  </div>

                  <form action="#" className="mt-4 text-start">
                    <div className="form-group mb-4">
                      <label htmlFor="name">Name</label>
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          autoFocus
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group mb-4">
                      <div className="mb-3">
                        <label htmlFor="disabledTextInput">Slug</label>
                        <input
                          type="text"
                          id="disabledTextInput"
                          className="form-control"
                          disabled
                        />
                      </div>
                    </div>
                    <div className="form-group mb-4">
                      <div className="my-4">
                        <label htmlFor="textarea">Description</label>
                        <textarea
                          className="form-control"
                          id="textarea"
                          rows="4"
                        ></textarea>
                      </div>
                    </div>
                    <div className="form-group mb-4">
                      <label htmlFor="price">Price</label>
                      <div className="input-group">
                        <input
                          type="number"
                          className="form-control"
                          id="price"
                          name="price"
                          autoFocus
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group mb-4">
                      <label htmlFor="stock">Stock</label>
                      <div className="input-group">
                        <input
                          type="number"
                          className="form-control"
                          id="stock"
                          name="stock"
                          autoFocus
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group mb-4">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck10"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck10"
                        >
                          Featured
                        </label>
                      </div>
                    </div>
                    <div className="d-grid">
                      <button type="submit" className="btn btn-gray-800">
                        Login
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default ProductFrom;
