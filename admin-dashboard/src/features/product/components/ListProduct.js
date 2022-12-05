import React from 'react'
import Product from './Product'
import { Col, Container, Row } from 'react-bootstrap'

const ListProduct = () => {
  return (
    <Container fluid="md" className="category_product_list">
      {/* <ListFilter /> */}
      <Row>
        <Col xs={12} sm={6} md={3}><Product /></Col>
        <Col xs={12} sm={6} md={3}><Product /></Col>
        <Col xs={12} sm={6} md={3}><Product /></Col>
        <Col xs={12} sm={6} md={3}><Product /></Col>
      </Row>
      <Row>
        <Col xs={12} sm={6} md={3}><Product /></Col>
        <Col xs={12} sm={6} md={3}><Product /></Col>
        <Col xs={12} sm={6} md={3}><Product /></Col>
        <Col xs={12} sm={6} md={3}><Product /></Col>
      </Row>
      <Row>
        <Col xs={12} sm={6} md={3}><Product /></Col>
        <Col xs={12} sm={6} md={3}><Product /></Col>
        <Col xs={12} sm={6} md={3}><Product /></Col>
        <Col xs={12} sm={6} md={3}><Product /></Col>
      </Row>
      <Row>
        <Col xs={12} sm={6} md={3}><Product /></Col>
        <Col xs={12} sm={6} md={3}><Product /></Col>
        <Col xs={12} sm={6} md={3}><Product /></Col>
        <Col xs={12} sm={6} md={3}><Product /></Col>
      </Row>
      {/* <PageNumbers /> */}
    </Container>
  )
}

export default ListProduct