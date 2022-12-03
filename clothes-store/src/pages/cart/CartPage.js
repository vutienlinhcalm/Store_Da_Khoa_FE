import React from 'react'
import Table from 'react-bootstrap/Table';
import { NavLink } from 'react-router-dom';
import ImageProduct1 from '../../assets/images/ao_khoac_bomber.jpg';
import './CartPage.css';
const CartPage = () => {
  return (
    <div>
      <div className='d-flex'>
        <div className='header_cart'>
            <h2>Shopping Cart </h2>
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
            <th>manipulation</th>
          </tr>
        </thead>
          <tbody>
            <tr>
              <td>Áo thun</td>
              <td><img src={ImageProduct1} alt='hinh anh' width={100} height={100}></img></td>
              <td>100000</td>
              <td>2</td>
              <td>200000</td>
              <td><button type="button" class="btn btn-light">Delete</button></td>
            </tr>
            <tr>
              <td>Áo thun</td>
              <td><img src={ImageProduct1} alt='hinh anh' width={100} height={100}></img></td>
              <td>100000</td>
              <td>2</td>
              <td>200000</td>
              <td><button type="button" class="btn btn-light">Delete</button></td>
            </tr>
          
          </tbody>
        </Table>
        <button type="button" class="btn btn-light">
        <NavLink className='link_button' to='/checkout'>
            Buy Now
        </NavLink>
                      
        </button>
  
  
    </div>
    
  )
}

export default CartPage