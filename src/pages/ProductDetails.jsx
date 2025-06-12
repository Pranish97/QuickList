import { useParams } from "react-router-dom"
import { useGetSpecificProductsQuery } from "../app/services/apiData"

const ProductDetails = () => {
    const {id} = useParams()
    const {data, isError, isLoading} = useGetSpecificProductsQuery(id)
    console.log(data)
  return (
    <div>ProductDetails</div>
  )
}

export default ProductDetails