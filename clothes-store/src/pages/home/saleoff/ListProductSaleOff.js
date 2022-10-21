import React from 'react'
import Product from '../../../common/product/Product'
import { Col, Container, Row } from 'react-bootstrap'
import './SaleOff.css'

const ListProductSaleOff = () => {
  return (
    <Container xs={3} className="list_product_saleoff">
      <h4 className='list_product_saleoff_title'>Trending Product</h4>
      <Row>
        <Col><Product /></Col>
        <Col><Product /></Col>
        <Col><Product /></Col>
        <Col><Product /></Col>
      </Row>
    </Container>
  )
}

export default ListProductSaleOff