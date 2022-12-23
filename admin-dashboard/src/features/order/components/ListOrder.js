import React, { useEffect, useState } from 'react';
import { Button, Space, Table } from 'antd';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid'

const ListOrder = () => {


  const columns = [
    {
      title: 'Username',
      dataIndex: 'username',
      key: 'username',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Name Product',
      dataIndex: 'productName',
      key: 'productName',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Total',
      key: 'total',
      dataIndex: 'total',
    },
    {
      title: 'Method',
      key: 'method',
      dataIndex: 'method'
    },
  ];

  const [orders, setOrders] = useState([])

  useEffect(() => {
    const getAllOrders = async () => {
      const response = await axios.get("http://localhost:5001/api/Order/GetListOrder")
      const result = await response.data
      const mydata = result.data
      const listOrderToView = mydata.map((order, index) => {
        return order.orderDetails.map((detail, index) => {
          return {
            key: uuidv4(),
            address: order.address,
            username: order.account.userName,
            productName: detail.product.productName,
            quantity: detail.quantity,
            total: detail.price,
            method: order.paymentMethod
          }
        })

      })
      setOrders(listOrderToView.flat())
    }
    getAllOrders()
  }, [])

  return (
    <Table columns={columns} dataSource={orders} />
  )
}
export default ListOrder;