import React from 'react'
import Product from './Product'
import { Col, Container, Row } from 'react-bootstrap'
import './Trending.css'

const ListProductTrending = () => {
  return (
    <Container xs={3} className="list_product_trending">
      <h4 className='list_product_trending_title'>Trending Product</h4>
      <Row>
        <Col><Product /></Col>
        <Col><Product /></Col>
        <Col><Product /></Col>
        <Col><Product /></Col>
      </Row>
    </Container>
  )
}

export default ListProductTrending