import React from 'react'
import { useGetAllProductsQuery } from '../app/services/apiData'
import { FiMoreVertical } from 'react-icons/fi'; 
import Loading from './Loading';

const Dashboard = () => {
  const {data, isError, isLoading} = useGetAllProductsQuery();
 

  if(isLoading){
    return <Loading />
  }

  
  return (
    <div className='dashboard-container'>
      <h1>Products List</h1>
      <table border="1">
  <thead>
    <tr>
      <th>S.No</th>
      <th>Title</th>
      <th>Price</th>
      <th>Description</th>
      <th>Image</th>
      <th>In Stock</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody id="product-table-body">
    {data?.products.map((prod) => {
      const stock = prod.availabilityStatus == "In Stock" ? "instock" : "nostock"
      return(
        <tr key={prod.id}>
        <td>{prod.id}</td>
        <td>{prod.title}</td>
        <td className='price-dashboard'>${prod.price}</td>
        <td>{prod.description}</td>
        <td><img src={prod.images[0]} alt={prod.title} /></td>
        <td className={stock} >{prod.availabilityStatus}</td>
        <td><FiMoreVertical /></td>
        </tr>
      )
    })}
  </tbody>
</table>

    </div>
  )
}

export default Dashboard