import React from 'react';
import { EyeOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import { useNavigate } from 'react-router-dom';
const { Meta } = Card;
const Product = ({ info, handleShowForm }) => {
  const navigate = useNavigate()
  return (
    <Card
      style={{
        width: 300,
        margin: '10px 0',
      }}
      cover={
        <img
          alt="example"
          src={info.mainImage}
          style={
            {
              width: '100%',
              height: '300px',
              objectFit: 'cover'
            }
          }
        />
      }
      actions={[
        <EyeOutlined key="eye" onClick={() => navigate(`/product-detail/${info.productId}`)} />,
        <EditOutlined key="edit" onClick={() => handleShowForm(info)} />,
        <DeleteOutlined key="delete" />,
      ]}
    >
      <Meta
        // avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
        title={info.productName}
        description={
          <p
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 4,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {info.description}
          </p>
        }

      />
    </Card >
  );
}
export default Product;
