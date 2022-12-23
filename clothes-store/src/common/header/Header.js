import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { NavLink, useNavigate } from 'react-router-dom'
import headerLogo from '../../assets/images/logo-header.svg'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import './Header.css'
const Header = () => {
  const navigate = useNavigate()
  return (
    <Container className='header' fluid="xxl">
      <Row>
        <Col sm={2}>
          <div className="header_logo">
            <img src={headerLogo} alt="header-logo" />
          </div>
        </Col>
        <Col sm={8}>
          <Row className='header_category'>
            <Col style={{ display: "grid", placeItems: "center" }}>
              <NavLink to="/" className="header_category_link">
                Home
              </NavLink>
            </Col>
            <Col style={{ display: "grid", placeItems: "center" }}>
              <NavLink to="/about" className="header_category_link">
                About
              </NavLink>
            </Col>
            <Col style={{ display: "grid", placeItems: "center" }}>
              <NavLink to="/category" className="header_category_link">
                Category
              </NavLink>
            </Col>
            <Col style={{ display: "grid", placeItems: "center" }}>
              <NavLink to="/signup" className="header_category_link">
                Sign Up
              </NavLink>
            </Col>
            <Col style={{ display: "grid", placeItems: "center" }}>
              <NavLink to="/signin" className="header_category_link">
                Sign in
              </NavLink>
            </Col>
          </Row>
        </Col>
        <Col className='header_others' sm={2}>
          <SearchOutlinedIcon style={{ marginLeft: 4, marginRight: 4, cursor: "pointer" }} fontSize="large" />
          <PersonOutlinedIcon style={{ marginLeft: 4, marginRight: 4, curosr: "pointer" }} fontSize="large" />
          <ShoppingCartOutlinedIcon style={{ marginLeft: 4, marginRight: 4, cursor: "pointer" }} fontSize="large" onClick={() => navigate("cart")} />
        </Col>

      </Row>
    </Container>
  )
}

export default Header