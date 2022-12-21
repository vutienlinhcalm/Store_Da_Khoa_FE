import React from 'react'
import Product from '../../../common/product/Product'
import { Col, Container, Row } from 'react-bootstrap'
import './SaleOff.css'

const ListProductSaleOff = ({ products }) => {

  return (
    <Container xs={3} className="list_product_saleoff">
      <h4 className='list_product_saleoff_title'>SaleOff Product</h4>
      <Row>
        <Col><Product info={products[0]} /></Col>
        <Col><Product info={products[1]} /></Col>
        <Col><Product info={products[2]} /></Col>
        <Col><Product info={products[3]} /></Col>
      </Row>
    </Container>
  )
}

export default ListProductSaleOff