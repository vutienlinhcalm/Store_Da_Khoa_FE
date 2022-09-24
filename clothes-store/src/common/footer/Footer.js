import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import footerLogo from '../../assets/images/logo-footer.svg'
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <Container className='footer'>
      <Row>
        <Col>
          <div className="footer_logo">
            <img src={footerLogo} alt="logo-footer" />
          </div>
          <div className="footer_social">
            <FacebookIcon htmlColor='blue' />
            <span className="footer_social_name">Facebook</span>
          </div>
          <div className="footer_social">
            <YouTubeIcon htmlColor='red' />
            <span className="footer_social_name">Youtube</span>           
          </div>
          <div className="footer_social">
            <TelegramIcon htmlColor='blue' />
            <span className="footer_social_name">Telegram</span>
          </div>
          <div className="footer_social">
            <TwitterIcon htmlColor="blue" />
            <span className="footer_social_name">Twitter</span>
          </div>
        </Col>
        <Col>
          <h4>Getting started</h4>
          <span>Realease Notes</span> <br />
          <span>Upgrade Guide</span> <br />
          <span>Browser Support</span> <br />
          <span>Dark Mode</span>
        </Col>
        <Col>
          <h4>Explore</h4>
          <span>Prototyping</span> <br />
          <span>Design Systems</span> <br />
          <span>Pricing</span> <br />
          <span>Security</span>
        </Col>
        <Col>
          <h4>Resources</h4>
          <span>Best Practices</span> <br />
          <span>Support</span> <br />
          <span>Developers</span> <br />
          <span>Learn Design</span>
        </Col>
        <Col>
          <h4>Community</h4>
          <span>Discussion Forums</span> <br />
          <span>Code of Product</span> <br />
          <span>Contributing</span> <br />
          <span>API Reference</span>
        </Col>
      </Row>
    </Container>
  )
}

export default Footer