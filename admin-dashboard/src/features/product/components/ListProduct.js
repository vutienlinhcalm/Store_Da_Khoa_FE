import React, { useEffect, useState } from 'react'
import Product from './Product'
import { Col, Container, Row } from 'react-bootstrap'
import axios from 'axios'
import FormUpdate from '../../../components/FormUpdate'

const ListProduct = ({ products, setProducts }) => {
  const [showForm, setShowForm] = useState(false)
  const [productSelected, setProductSelected] = useState({})
  const handleShowForm = (info) => {
    setProductSelected(info)
    setShowForm(true)
  }
  return (
    <Container fluid="md" className="category_product_list">
      {/* <ListFilter /> */}
      {products.map((item, index) => {
        if (index % 4 === 0) {
          return (
            <Row key={index}>
              {(products.length - index) > 0 && <Col xs={12} sm={6} md={3}><Product handleShowForm={handleShowForm} info={products[index]} key={index} /></Col>}
              {(products.length - index) > 1 && <Col xs={12} sm={6} md={3}><Product handleShowForm={handleShowForm} info={products[index + 1]} key={index + 1} /></Col>}
              {(products.length - index) > 2 && <Col xs={12} sm={6} md={3}><Product handleShowForm={handleShowForm} info={products[index + 2]} key={index + 2} /></Col>}
              {(products.length - index) > 3 && <Col xs={12} sm={6} md={3}><Product handleShowForm={handleShowForm} info={products[index + 3]} key={index + 3} /></Col>}
            </Row>
          )
        }
      })}
      {/* <PageNumbers /> */}
      {showForm && (
        <>
          <div style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 998,
            backgroundColor: 'rgba(0,0,0,0.8)'
          }}></div>
          <FormUpdate setShowForm={setShowForm} productSelected={productSelected} setProducts={setProducts} />
        </>
      )}
    </Container>
  )
}

export default ListProduct