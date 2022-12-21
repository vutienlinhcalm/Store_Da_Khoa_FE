import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  Checkbox,
  Upload,
  message,
} from 'antd';
import axios from 'axios'
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const FormUpdate = ({ setShowForm, productSelected, setProducts }) => {

  const [name, setName] = useState(productSelected.productName)
  const [description, setDescription] = useState(productSelected.description)
  const [disabled, setDisabled] = useState(false)
  const [price, setPrice] = useState(productSelected.price)
  const [files, setFiles] = useState([
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: productSelected.mainImage,
    },
    {
      uid: '-2',
      name: 'image.png',
      status: 'done',
      url: productSelected.subImage1,
    },
    {
      uid: '-3',
      name: 'image.png',
      status: 'done',
      url: productSelected.subImage2,
    },
  ])

  const handleSubmit = async () => {
    console.log({ name, description, disabled, price, files })
    const response = await axios.put(`http://localhost:5001/api/Product/UpdateProduct/${productSelected.productId}`, {
      "brand": productSelected.brand,
      "productId": productSelected.productId,
      "productName": name,
      "description": description,
      "mainImage": files[0].url ? files[0].url : files[0].originFileObj.url,
      "subImage1": files[1].url ? files[1].url : files[1].originFileObj.url,
      "subImage2": files[2].url ? files[2].url : files[2].originFileObj.url,
      "price": price,
      "storeQuantity": productSelected.storeQuantity,
      "gender": productSelected.gender,
      "category": productSelected.category
    })
    const result = await response.data
    message.success("Update successfully!")
    setShowForm(false)
    setProducts((prev) => {
      return prev.map(product => {
        if (product.productId === result.data.productId) {
          return result.data
        }
        return product
      })
    })
  }

  const handleCustomerRequest = async (options) => {
    try {
      const imageData = new FormData()
      imageData.append('api_key', '711435673899525')
      imageData.append('file', options.file);
      imageData.append('upload_preset', 'socialnetwork');
      imageData.append('cloud_name', 'wjbucloud');
      const url = (
        await axios.post('https://api.cloudinary.com/v1_1/wjbucloud/image/upload', imageData, {
          headers: {
            'content-type': 'multipart/form-data',
          },
        })
      ).data.url;
      options.onSuccess("OK")
      options.file.url = url
    } catch (error) {
      console.log(error)
      options.onError(error)
    }
  }


  return (
    <div style={{
      position: "absolute",
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: '999',
      backgroundColor: 'white',
      width: '60%',
      height: '80%',
      display: 'grid',
      placeItems: 'center',
      borderRadius: '15px',
    }}>
      {/* <Checkbox
        checked={componentDisabled}
        onChange={(e) => setComponentDisabled(e.target.checked)}
      >
        Form disabled
      </Checkbox> */}
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 18,
        }}
        layout="horizontal"
        colon="true"
        style={{ width: '100%' }}
      >
        <Form.Item label="Name">
          <Input value={name} onChange={(e) => setName(e.target.value)} />
        </Form.Item>
        <Form.Item label="Price">
          <InputNumber value={price} onChange={(e) => setPrice(e.valueOf())} />
        </Form.Item>
        <Form.Item label="Description">
          <TextArea rows={5} value={description} onChange={(e) => setDescription(e.target.value)} />
        </Form.Item>
        <Form.Item label="Disabled" valuePropName="checked">
          <Switch checked={disabled} onClick={() => setDisabled(!disabled)} />
        </Form.Item>
        <Form.Item label="Images" valuePropName="fileList">
          <Upload listType="picture-card" onChange={(info) => setFiles(info.fileList)} fileList={files} customRequest={(options) => handleCustomerRequest(options)}>
            <div>
              <PlusOutlined />
              <div
                style={{
                  marginTop: 8,
                }}
              >
                Upload
              </div>
            </div>
          </Upload>
        </Form.Item>
        <div style={{
          display: 'flex',
          justifyContent: 'right'
        }}>
          <Button onClick={() => setShowForm(false)} type="primary">Cancel</Button>
          <Button style={{ marginRight: '30px', marginLeft: '20px' }} type='primary' onClick={handleSubmit}>Submit</Button>
        </div>
      </Form>
    </div>
  );
};
export default FormUpdate
