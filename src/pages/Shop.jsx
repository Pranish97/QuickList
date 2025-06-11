import { useGetAllProductsQuery } from "../app/services/apiData"

const Shop = () => {
    const {data, isError, isLoading} = useGetAllProductsQuery()
    console.log(data)
  return (
    <div>Shop</div>
  )
}

export default Shop