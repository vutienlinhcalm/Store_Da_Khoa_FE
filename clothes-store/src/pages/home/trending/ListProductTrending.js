import React from 'react'
import Product from '../../../common/product/Product'
import { Col, Container, Row } from 'react-bootstrap'
import './Trending.css'

const ListProductTrending = ({ products }) => {
  return (
    <Container xs={3} className="list_product_trending">
      <h4 className='list_product_trending_title'>Trending Product</h4>
      <Row>
        <Col><Product info={products[products.length - 1]} /></Col>
        <Col><Product info={products[products.length - 2]} /></Col>
        <Col><Product info={products[products.length - 3]} /></Col>
        <Col><Product info={products[products.length - 4]} /></Col>
      </Row>
    </Container>
  )
}

export default ListProductTrending