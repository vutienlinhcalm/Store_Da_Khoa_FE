import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { NavLink, useNavigate } from 'react-router-dom'
import headerLogo from '../../assets/images/logo-header.svg'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutline';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import './Header.css'
const Header = ({ accountId, username, setAccountId, setUsername }) => {
  console.log(localStorage.getItem("user-id"))
  const navigate = useNavigate()
  const handleSignout = () => {
    localStorage.removeItem("user-id")
    localStorage.removeItem("username")
    setAccountId("")
    setUsername("")
    navigate("/signin")
  }
  return (
    <Container className='header' fluid="xxl">
      <Row>
        <Col sm={2}>
          <div className="header_logo">
            <img src={headerLogo} alt="header-logo" />
          </div>
        </Col>
        <Col sm={8}>
          <Row className='header_category' style={{ height: "100%" }}>
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
            {
              accountId === "" && <><Col style={{ display: "grid", placeItems: "center" }}>
                <NavLink to="/signup" className="header_category_link">
                  Sign Up
                </NavLink>
              </Col>
                <Col style={{ display: "grid", placeItems: "center" }}>
                  <NavLink to="/signin" className="header_category_link">
                    Sign in
                  </NavLink>
                </Col></>
            }
          </Row>
        </Col>
        {
          accountId !== "" && <Col className='header_others' sm={2}>
            <ShoppingCartOutlinedIcon style={{ marginLeft: 4, marginRight: 4, cursor: "pointer" }} fontSize="large" onClick={() => navigate("cart")} />
            <PersonOutlinedIcon style={{ cursor: "pointer", marginLeft: 4, marginRight: 4 }} fontSize="large" />
            <h5 style={{ marginBottom: 0 }}>{username}</h5>
            <ExitToAppIcon style={{ cursor: "pointer", marginLeft: 4, marginRight: 4 }} fontSize="large" onClick={handleSignout} />
          </Col>
        }

      </Row>
    </Container>
  )
}

export default Header