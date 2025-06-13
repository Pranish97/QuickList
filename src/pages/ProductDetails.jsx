import { useParams } from "react-router-dom"
import { useGetSpecificProductsQuery } from "../app/services/apiData"
import Loading from "./Loading"

const ProductDetails = () => {
    const {id} = useParams()
    const {data, isError, isLoading} = useGetSpecificProductsQuery(id)
    console.log(data)
    if(isLoading){
      return <Loading />
    }
  return (
    <div className="product-detail-container">
  <div className="product-box">
    <div className="image-section">
      <img src={data?.images[0]} alt={data?.title} />
    </div>
    <div className="info-section">
      <span className="brand">{data?.category.charAt(0).toUpperCase() + data?.category.slice(1)}</span>
      <h1 className="product-title">{data?.title}</h1>
      <p className="product-price">${data?.price}</p>

      <div className="option-group">
        <label>Size:</label>
        <div className="size-options">
          {["XS", "S", "M", "L", "XL"].map((size) => (
            <button key={size} className={`size-btn ${size === "L" ? "selected" : ""}`}>{size}</button>
          ))}
        </div>
      </div>

      <div className="option-group">
        <label>Color:</label>
        <div className="color-options">
          <div className="color-swatch black"></div>
          <div className="color-swatch orange"></div>
        </div>
      </div>

      <div className="option-group">
        <label>Qty:</label>
        <input type="number" defaultValue={1} min={1} className="qty-input" />
      </div>

      <button className="add-to-cart">Add to Cart</button>
      <p className="description">{data?.description}</p>
    </div>
  </div>
</div>

  )
}

export default ProductDetails