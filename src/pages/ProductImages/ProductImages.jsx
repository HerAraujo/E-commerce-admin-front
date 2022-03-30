import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./ProductImages.css";

function ProductImages() {
  const [product, setProduct] = React.useState(null);
  const [availableImages, setAvailableImages] = React.useState(null);
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

      setAvailableImages(response.data);
    };

    getProduct();
    getImages();
  }, []);

  const handleCurrentImageClick = (currentImage) => {
    setProduct({
      ...product,
      images: product.images.filter((image) => image.id !== currentImage.id),
    });

    if (!availableImages.some((image) => image.name === currentImage.name)) {
      availableImages.push(currentImage);
      setAvailableImages([...availableImages]);
    }
  };

  const handleAvailableImageClick = (image) => {
    product.images.push(image);
    setProduct({
      ...product,
    });

    for (const productImage of product.images) {
      setAvailableImages([...availableImages.filter((image) => image.name !== productImage.name)]);
    }
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
                          className="img-thumbnail rounded-circle image-gallery"
                          src={`${process.env.REACT_APP_API_URL}/${image.name}`}
                          alt={image.title}
                          style={{ height: "150px", width: "150px", objectFit: "cover" }}
                          onClick={() => handleCurrentImageClick(image)}
                        />
                      </div>
                    ))}
                  </div>
                </div>
                {availableImages && (
                  <div>
                    <h5 className="mt-2 mb-4">Available images</h5>
                    <div className="row ">
                      {availableImages.map(
                        (image) =>
                          !product.images.some((item) => item.name === image.name) && (
                            <div key={image.id} className="col-2 mb-5">
                              <img
                                className="img-thumbnail rounded-circle image-gallery"
                                src={`${process.env.REACT_APP_API_URL}/${image.name}`}
                                alt={image.title}
                                style={{ height: "150px", width: "150px", objectFit: "cover" }}
                                onClick={() => handleAvailableImageClick(image)}
                              />
                            </div>
                          ),
                      )}
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
