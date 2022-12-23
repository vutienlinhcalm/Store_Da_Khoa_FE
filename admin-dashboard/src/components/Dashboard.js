import React, { useState } from 'react'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  EditOutlined
} from '@ant-design/icons';
import { Button } from 'antd'
import LocalMallIcon from '@mui/icons-material/LocalMall';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Layout, Menu } from 'antd';
import Logo from '../assets/logo-clothes-store.png'
import ProductPage from '../features/product/ProductPage'
import OrderPage from '../features/order/OrderPage'
import ProductDetail from '../features/product/components/ProductDetail'
import { Route, Outlet, Routes, useNavigate, Navigate, useLocation } from 'react-router-dom'
import FormUpdate from './FormUpdate';
const { Header, Sider, Content } = Layout;


const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [size, setSize] = useState('large')
  const navigate = useNavigate()
  const location = useLocation()


  return (
    <Layout hasSider>
      <Sider trigger={null} collapsible collapsed={collapsed} width="250">
        <div className="logo" style={{ marginBottom: 20 }}>
          <img src={Logo} alt="mylogo" style={{ width: "100%", height: "100%" }} />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={location.pathname.includes("/product") ? ['1'] : ['2']}
          items={[
            {
              key: '1',
              icon: <LocalMallIcon />,
              label: 'Product Management',
              onClick: () => { navigate("products") }
            },
            {
              key: '2',
              icon: <AssignmentIcon />,
              label: 'Order Management',
              onClick: () => { navigate("orders") }
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
            backgroundColor: 'white',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
            style: {
              color: 'black',
              fontSize: '1.7rem',
              marginRight: 10
            }
          })}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
            <h3 style={{ marginBottom: 0 }}>{location.pathname === "/products" ? "List Product" : location.pathname.includes("/product-detail") ? "Product Detail" : location.pathname.includes("/order-detail") ? "Order Detail" : location.pathname === "/orders" ? "List Order" : "Not Found"}</h3>
            {/* {(location.pathname.includes("/product-detail") || location.pathname.includes("/order-detail")) && <Button type="primary" icon={<EditOutlined />} size={size} style={{ display: 'flex', alignItems: 'center', marginRight: 10 }} onClick={() => setShowForm(true)}>
              Update
            </Button>} */}
          </div>
        </Header>
        <Content
          style={{
            // margin: '24px 16px 0',
            overflowY: 'auto',
          }}>

          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 280,
            }}
          >
            <Routes>
              <Route path="/products" element={<ProductPage />} />
              <Route path="/product-detail/:id" element={<ProductDetail />} />
              <Route path="/orders" element={<OrderPage />}></Route>
              <Route path="/order-detail/:id" />
              <Route path="/*" element={<Navigate to="/products" replace />} />
            </Routes>
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  )
}

export default Dashboard