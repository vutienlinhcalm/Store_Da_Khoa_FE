import React from 'react'
import Table from 'react-bootstrap/Table';
import { NavLink } from 'react-router-dom'
import ImageProduct1 from '../../assets/images/ao_khoac_bomber.jpg';

const CheckOut = () => {
   
  return (
    <div>
        <Table  bordered hover>
    <thead>
      <tr>
        <th>Product</th>
        <th>Image</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Amount of money</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Áo thun</td>
        <td><img src={ImageProduct1} alt='hinh anh' width={100} height={100}></img></td>
        <td>100000</td>
        <td>2</td>
        <td>200000</td>
      </tr>
     
    </tbody>
  </Table>
    
        <NavLink to='/checkout'>
            <button type="button" class="btn btn-light">
                Đặt Hàng
            </button>
        </NavLink>
   
  
    </div>
    
  )
}

export default CheckOut