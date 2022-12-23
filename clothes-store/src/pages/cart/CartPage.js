import React, { useState } from 'react'
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap'
import DeleteIcon from '@mui/icons-material/Delete';
import { Input, message } from 'antd'
import { v4 as uuidv4 } from 'uuid'
import './CartPage.css';
import axios from 'axios';
const CartPage = ({ productsInCart, setProductsInCart }) => {
  const { TextArea } = Input
  const [isLoading, setIsLoading] = useState(false)
  const [address, setAddress] = useState("")
  const handleBuy = async (productsInCart) => {
    try {
      setIsLoading(true)
      const orderProducts = productsInCart.map((item) => {
        return {
          "productId": item.productId,
          "quantity": item.quantity,
          "price": item.price,
        }
      })

      const totalCost = productsInCart.reduce((accumulator, item) => {
        return accumulator + item.total
      }, 0)

      console.log({
        "orderId": uuidv4(),
        "accountId": "01",
        "paymentMethod": "COD",
        "address": address,
        "totalPrice": totalCost,
        "orderProducts": orderProducts
      })

      const response = await axios.post("http://localhost:5001/api/Order/CreateOrder", {
        "orderId": uuidv4(),
        "accountId": "01",
        "paymentMethod": "COD",
        "address": address,
        "totalPrice": totalCost,
        "orderProducts": orderProducts
      })

      const data = await response.data
      const result = data.data
      console.log(result)
      setIsLoading(false)
      message.success("Create order successfully")
    } catch (error) {
      message.error(error)
    }


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
      <TextArea rows={3} placeholder="Enter your address here" style={{ marginBottom: 10, width: "50%", display: "block" }} value={address} onChange={(e) => setAddress(e.target.value)} />
      <Button variant='primary' onClick={() => handleBuy(productsInCart)} disabled={isLoading || productsInCart.length === 0}>
        Buy Now
      </Button>


    </div>

  )
}

export default CartPage