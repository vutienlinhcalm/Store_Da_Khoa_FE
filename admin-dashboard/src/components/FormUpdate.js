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
} from 'antd';
import { borderRadius, width } from '@mui/system';
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const FormUpdate = ({ setShowForm }) => {

  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [disabled, setDisabled] = useState(false)
  const [price, setPrice] = useState(0)
  const [files, setFiles] = useState([])

  const handleSubmit = () => {
    console.log({ name, description, disabled, price, files })
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
          <Upload listType="picture-card" onChange={(info) => setFiles(info.fileList)}>
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
