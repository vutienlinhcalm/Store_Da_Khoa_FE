import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Col, Container, Row } from 'react-bootstrap'
import Product from '../../../common/product/Product'
import ListFilter from '../filter/ListFilter'
import './Category.css'
import PageNumbers from '../pageNumber/PageNumbers'

const CategoryPage = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const getAllProducts = async () => {
      const response = await axios.get("http://localhost:5001/api/Product/GetListProduct")
      const products = await response.data
      setProducts(products.data)
      console.log(products.data)
    }
    getAllProducts()
  }, [])
  return (
    <Container fluid="md" className="category_product_list">
      <ListFilter setProducts={setProducts} />
      {products?.map((item, index) => {
        if (index % 4 === 0) {
          return (
            <Row key={index}>
              {(products.length - index) > 0 && <Col xs={12} sm={6} md={3}><Product info={products[index]} key={index} /></Col>}
              {(products.length - index) > 1 && <Col xs={12} sm={6} md={3}><Product info={products[index + 1]} key={index + 1} /></Col>}
              {(products.length - index) > 2 && <Col xs={12} sm={6} md={3}><Product info={products[index + 2]} key={index + 2} /></Col>}
              {(products.length - index) > 3 && <Col xs={12} sm={6} md={3}><Product info={products[index + 3]} key={index + 3} /></Col>}
            </Row>
          )
        }
      })}
    </Container>
  )
}

export default CategoryPage