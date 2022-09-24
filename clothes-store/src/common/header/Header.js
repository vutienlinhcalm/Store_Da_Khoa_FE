import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import headerLogo from '../../assets/images/logo-header.svg'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import './Header.css'
const Header = () => {
  return (
    <Container className='header' fluid="xxl">
      <Row>
        <Col sm={3}>
          <div className="header_logo">
            <img src={headerLogo} alt="header-logo" />
          </div>
        </Col>
        <Col sm={6}>
          <Row className='header_category'>
          <Col>
            <NavLink to="/" className="header_category_link">
            Home
            </NavLink>
          </Col>
          <Col>
            <NavLink to="/blogs" className="header_category_link">
            Blog
            </NavLink>
          </Col>
          <Col>
            <NavLink to="/cart" className="header_category_link">
            Cart
            </NavLink>
          </Col>
        </Row>
        </Col>
        <Col className='header_others' sm={3}>
          <SearchOutlinedIcon style={{marginLeft: 4, marginRight: 4 }} fontSize="large"/>
          <PersonOutlinedIcon style={{marginLeft: 4, marginRight: 4 }} fontSize="large"/>
          <ShoppingCartOutlinedIcon style={{marginLeft: 4, marginRight: 4 }} fontSize="large"/>
        </Col>
      </Row>
    </Container>
  )
}

export default Header