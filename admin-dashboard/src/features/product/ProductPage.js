import { Button } from 'antd'
import { UploadOutlined, PlusCircleOutlined } from '@ant-design/icons';
import React, { useState } from 'react'
import ListProduct from './components/ListProduct'
import './ProductPage.css'
import { Container } from 'react-bootstrap';

const ProductPage = () => {
  const [size, setSize] = useState('large')
  return (
    <div id='page'>
      <div className="product_page_header">
        <Container fluid="md" className="product_page_header_button">
          <Button type="primary" icon={<UploadOutlined />} size={size} style={{ display: 'flex', alignItems: 'center', marginRight: 20 }}>
            <label htmlFor='CSV' style={{ cursor: 'pointer', marginLeft: 7 }}>
              Upload CSV
            </label>
          </Button>
          <input type="file" id="CSV" name="CSV" />
          <Button type="primary" icon={<PlusCircleOutlined />} size={size} style={{ display: 'flex', alignItems: 'center' }}>
            Add New
          </Button>
        </Container>
      </div>
      <div className="product_page_content">
        <ListProduct />
      </div>
    </div>
  )
}

export default ProductPage