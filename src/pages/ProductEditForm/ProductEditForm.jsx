import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";

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
  const [category, setCategory] = React.useState();
  const [categories, setCategories] = React.useState();
  const [apiStatus, setApiStatus] = React.useState();
  const slugify = require("slugify");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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

    const getCategories = async () => {
      const response = await axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_URL}/admin/category`,
      });

      setCategories(response.data);
    };

    getProduct();
    getCategories();
  }, []);

  useEffect(() => {
    const getCategory = async () => {
      const response = await axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_URL}/admin/category/${product.categoryId}`,
      });

      setCategory(response.data.category);
    };

    getCategory();
  }, [product]);

  const onSubmit = async (data) => {
    console.log(data);
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
    } catch (err) {
      setApiStatus(err.response.status);
    }
  };

  const handleChange = (ev) => {
    setCategory(ev.target.value);
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

                  <form action="#" className="mt-4 text-start" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group mb-4">
                      <label htmlFor="name">Name</label>
                      <div className="input-group">
                        <input
                          {...register("name", { required: true })}
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          autoFocus
                          value={name}
                          onChange={(ev) => {
                            setName(ev.target.value);
                            setSlug(slugify(ev.target.value));
                            setApiStatus(0);
                          }}
                        />
                      </div>
                      {errors.name && name.length === 0 && (
                        // {errors.name && (
                        <span className="text-danger fw-bold mt-1 small">Name is required</span>
                      )}

                      {apiStatus === 409 && (
                        <div className="text-danger fw-bold mt-1 small">Product already exists</div>
                      )}
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
                          {...register("description", { required: true })}
                          className="form-control"
                          id="description"
                          name="description"
                          rows="4"
                          value={description}
                          onChange={(ev) => setDescription(ev.target.value)}
                        ></textarea>
                        {errors.description && description.length === 0 && (
                          <span className="text-danger fw-bold small">Description is required</span>
                        )}
                      </div>
                    </div>
                    <div className="form-group mb-4">
                      <label htmlFor="price">Price</label>
                      <div className="input-group">
                        <input
                          {...register("price", { required: true })}
                          type="number"
                          className="form-control"
                          id="price"
                          name="price"
                          autoFocus
                          value={price}
                          onChange={(ev) => setPrice(ev.target.value)}
                        />
                      </div>
                      {errors.price && price.length === 0 && (
                        <span className="text-danger fw-bold small">Price is required</span>
                      )}
                    </div>
                    <div className="form-group mb-4">
                      <label htmlFor="stock">Stock</label>
                      <div className="input-group">
                        <input
                          {...register("stock", { required: true })}
                          type="number"
                          className="form-control"
                          id="stock"
                          name="stock"
                          autoFocus
                          value={stock}
                          onChange={(ev) => setStock(ev.target.value)}
                        />
                      </div>
                      {errors.stock && stock.length === 0 && (
                        <span className="text-danger fw-bold small">Stock is required</span>
                      )}
                    </div>
                    <div className="mb-4">
                      <label className="my-1 me-2" htmlFor="category">
                        Category
                      </label>
                      {product && category && (
                        <select
                          className="form-select"
                          id="category"
                          aria-label="Default select example"
                          value={category.id}
                          onChange={(ev) => handleChange(ev)}
                        >
                          {product && category.name && (
                            <option value={product.categoryId}>{category.name}</option>
                          )}
                          {categories &&
                            categories.map((category) => (
                              <option key={category.id} value={category.id}>
                                {category.name}
                              </option>
                            ))}
                        </select>
                      )}
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
