import { useState } from "react";
import { useGetAllProductsQuery } from "../app/services/apiData";
import { FaStar, FaHeart, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const Shop = () => {
  const { data, isError, isLoading } = useGetAllProductsQuery();
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = data?.products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(data?.products.length / productsPerPage);

  return (
    <div className="shop-container">
      <div className="shop-title">
        <h1>New Arrivals</h1>
      </div>
      <div className="product-grid">
        {currentProducts?.map((product) => (
          <Link to={`/shop/${product.id}`} key={product.id}>
          <div className="product-card">
            <div className="card-icons">
              <FaHeart className="icon" />
            </div>

            <img
              src={product.images[0]}
              alt={product.title}
              className="product-img"
            />

            <div className="product-info">
              <p className="category">
                {product.category.charAt(0).toUpperCase() +
                  product.category.slice(1)}
              </p>
              <h3 className="title">{product.title}</h3>

              <div className="price-rating-row">
                <div className="price">
                  <span className="current-price">${product.price}</span>
                </div>
                <div className="rating">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={i < product.rating ? "filled" : "empty"}
                    />
                  ))}
                  <span className="rating-value">({product.rating})</span>
                </div>
              </div>
            </div>
          </div>
          </Link>
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => setCurrentPage(i + 1)}
            className={currentPage === i + 1 ? "active-page" : ""}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Shop;
