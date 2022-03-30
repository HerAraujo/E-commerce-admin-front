import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./ProductImages.css";

function ProductImages() {
  const [product, setProduct] = React.useState(null);
  const [images, setImages] = React.useState(null);
  const params = useParams();

  useEffect(() => {
    const getProduct = async () => {
      const response = await axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_URL}/products/${params.id}`,
      });

      setProduct(response.data);
    };

    const getImages = async () => {
      const response = await axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_URL}/admin/images`,
      });
      setImages(response.data);
    };

    getProduct();
    getImages();
  }, []);

  const handleCurrentImageClick = () => {
    alert("remove form json!");
  };

  const handleAvailableImageClick = () => {
    alert("add to json!");
  };
  return (
    <main style={{ overflow: "auto" }}>
      <section className="vh-100 mt-5">
        <div className="container ">
          <div className="row">
            {product && (
              <div className="col-12 text-start">
                <h2>{product.name}</h2>
                <div>
                  <h5 className="mt-5 mb-4">Current images</h5>
                  <div className="row">
                    {product.images.map((image) => (
                      <div key={image.id} className="col-2 mb-5 ">
                        <img
                          className="image-gallery"
                          src={`${process.env.REACT_APP_API_URL}/${image.name}`}
                          alt={image.title}
                          style={{ height: "150px", width: "150px", objectFit: "cover" }}
                          onClick={(ev) => handleCurrentImageClick(ev)}
                        />
                      </div>
                    ))}
                  </div>
                </div>
                {images && (
                  <div>
                    <h5 className="mt-2 mb-4">Available images</h5>
                    <div className="row ">
                      {images.map((image) => (
                        <div key={image.id} className="col-2 mb-5 ">
                          <img
                            className="image-gallery"
                            src={`${process.env.REACT_APP_API_URL}/${image.name}`}
                            alt={image.title}
                            style={{ height: "150px", width: "150px", objectFit: "cover" }}
                            onClick={(ev) => handleAvailableImageClick(ev)}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                <div>
                  <button type="submit" className="btn btn-gray-800">
                    Confirm
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default ProductImages;
