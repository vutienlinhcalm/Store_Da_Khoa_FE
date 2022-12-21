import { Button, message, Upload } from 'antd'
import { UploadOutlined, PlusCircleOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ListProduct from './components/ListProduct'
import './ProductPage.css'
import * as xlsx from 'xlsx';
import { Container } from 'react-bootstrap';

const ProductPage = () => {
  const [size, setSize] = useState('large')
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

  const handleUpload = async (e) => {
    console.log(e.target.files)
    if (e.target.files) {
      const reader = new FileReader()
      reader.onload = async (evt) => {
        const data = evt.target.result;
        const workbook = xlsx.read(data, { type: 'array' })
        const sheetName = workbook.SheetNames[0]
        const workSheet = workbook.Sheets[sheetName]
        const json = xlsx.utils.sheet_to_json(workSheet)
        const insertIntoDB = async () => {
          try {
            const response = await axios.post("http://localhost:5001/api/Product/CreateListProduct", json)
            const data = await response.data
            if (data.success === 1) {
              setProducts([...products, ...data.data])
              message.success("File upload succesfully")
            } else {
              message.error("File upload failed")
            }

          } catch (error) {
            message.error("File upload failed")
            console.log(error)

          }
        }
        insertIntoDB()
        console.log(json)
      }
      reader.readAsArrayBuffer(e.target.files[0])
    }
  }

  return (
    <div id='page'>
      <div className="product_page_header">
        <Container fluid="md" className="product_page_header_button">
          <Button type="primary" icon={<UploadOutlined />} size={size} style={{ display: 'flex', alignItems: 'center', marginRight: 20 }}>
            <label htmlFor='CSV' style={{ cursor: 'pointer', marginLeft: 7 }}>
              Upload CSV
            </label>
          </Button>
          <input type="file" id="CSV" name="CSV" onChange={(e) => handleUpload(e)} />
          {/* <Button type="primary" icon={<PlusCircleOutlined />} size={size} style={{ display: 'flex', alignItems: 'center' }}>
            Add New
          </Button> */}
        </Container>
      </div>
      <div className="product_page_content">
        <ListProduct products={products} setProducts={setProducts} />
      </div>
    </div>
  )
}

export default ProductPage