import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function ProductEditForm() {
  const navigate = useNavigate();
  const params = useParams();
  const [product, setProduct] = React.useState({});
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [price, setPrice] = React.useState();
  const [stock, setStock] = React.useState();
  const [slug, setSlug] = React.useState();
  const [featured, setFeatured] = React.useState("");
  const slugify = require("slugify");

  useEffect(() => {
    const getProduct = async () => {
      const response = await axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_URL}/products/${params.id}`,
      });

      setProduct(response.data);
      setName(response.data.name);
      setDescription(response.data.description);
      setPrice(response.data.price);
      setStock(response.data.stock);
      setSlug(response.data.slug);
      setFeatured(response.data.featured);
    };

    getProduct();
  }, []);

  const handleOnSubmit = async (ev) => {
    ev.preventDefault();
    try {
      const response = await axios({
        method: "PUT",
        url: `${process.env.REACT_APP_API_URL}/admin/products/${product.id}`,
        data: {
          name: name,
          description: description,
          price: price,
          stock: stock,
          featured: featured,
          slug: slug,
        },
      });
      navigate("/products");
    } catch (err) {}
  };
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
                    <h1 className="mb-0 h3">Edit</h1>
                  </div>

                  <form
                    action="#"
                    className="mt-4 text-start"
                    onSubmit={(ev) => handleOnSubmit(ev)}
                  >
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
                          value={name}
                          onChange={(ev) => {
                            setName(ev.target.value);
                            setSlug(slugify(ev.target.value));
                          }}
                        />
                      </div>
                    </div>
                    <div className="form-group mb-4">
                      <div className="mb-3">
                        <label htmlFor="slug">Slug</label>
                        <input
                          type="text"
                          id="slug"
                          className="form-control"
                          name="slug"
                          value={slug}
                          disabled
                        />
                      </div>
                    </div>
                    <div className="form-group mb-4">
                      <div className="my-4">
                        <label htmlFor="textarea">Description</label>
                        <textarea
                          className="form-control"
                          id="description"
                          name="description"
                          rows="4"
                          required
                          value={description}
                          onChange={(ev) => setDescription(ev.target.value)}
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
                          value={price}
                          onChange={(ev) => setPrice(ev.target.value)}
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
                          value={stock}
                          onChange={(ev) => setStock(ev.target.value)}
                        />
                      </div>
                    </div>
                    <div className="form-group mb-4">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="featured"
                          name="featured"
                          value={featured}
                          checked={featured}
                          onChange={(ev) => setFeatured(ev.target.checked)}
                        />
                        <label className="form-check-label" htmlFor="featured">
                          Featured
                        </label>
                      </div>
                    </div>
                    <div className="d-grid">
                      <button type="submit" className="btn btn-gray-800">
                        Send
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

export default ProductEditForm;
