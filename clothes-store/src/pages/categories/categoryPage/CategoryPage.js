import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Product from '../../../common/product/Product'
import ListFilter from '../filter/ListFilter'
import './Category.css'
import PageNumbers from '../pageNumber/PageNumbers'

const CategoryPage = () => {
  return (
    <Container fluid="md" className="category_product_list">
      <ListFilter />
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
      <PageNumbers />
    </Container>
  )
}

export default CategoryPage