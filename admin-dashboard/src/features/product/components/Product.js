import React from 'react';
import { EyeOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import { useNavigate } from 'react-router-dom';
const { Meta } = Card;
const Product = () => {
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
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      }
      actions={[
        <EyeOutlined key="eye" onClick={() => navigate("/product-detail/1")} />,
        <EditOutlined key="edit" />,
        <DeleteOutlined key="delete" />,
      ]}
    >
      <Meta
        avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
        title="Card title"
        description={
          <p
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 4,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, sint dolores, eligendi labore, obcaecati ipsam neque at animi similique natus laudantium cum ut tenetur repudiandae nobis. Optio nesciunt eius rem nemo perferendis doloribus ducimus saepe pariatur nisi, necessitatibus laborum soluta?
          </p>
        }

      />
    </Card >
  );
}
export default Product;
