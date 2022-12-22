import React from 'react'
import Table from 'react-bootstrap/Table';
import { NavLink } from 'react-router-dom';
import ImageProduct1 from '../../assets/images/ao_khoac_bomber.jpg';
import DeleteIcon from '@mui/icons-material/Delete';
import './CartPage.css';
const CartPage = ({ productsInCart, setProductsInCart }) => {
  const handleBuy = async () => {

  }

  const handleDelete = (id) => {
    setProductsInCart((prev) => {
      return prev.filter(item => {
        if (item.productId === id) {
          return false
        }
        return true
      })
    })
  }
  return (
    <div>
      <div className='d-flex'>
        <div className='header_cart'>
          <h2>Your Cart </h2>
        </div>
      </div>
      <Table hover>
        <thead>
          <tr>
            <th>Product</th>
            <th>Image</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Amount of money</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {productsInCart.map((item, index) => {
            return <tr key={index}>
              <td>{item.productName}</td>
              <td><img src={item.mainImage} alt='hinh anh' width={100} height={100}></img></td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
              <td>{item.total}</td>
              <td><DeleteIcon style={{ cursor: "pointer" }} onClick={() => handleDelete(item.productId)} /></td>
            </tr>
          })}
        </tbody>
      </Table>
      <button type="button" class="btn btn-light" onClick={handleBuy}>
        Buy Now
      </button>


    </div>

  )
}

export default CartPage