import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import LinhAva from '../../../assets/images/linh-ava.jpg'
import KhangAva from '../../../assets/images/khang-ava.png'
import MinhAva from '../../../assets/images/minh-ava.png'
import VyAva from '../../../assets/images/vy-ava.jpg'

import './ContactPage.css'

function ContactPage() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Contact us
      </Button>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Our Members</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col xs={6} md={6}>
                <img className="contactImg" src={LinhAva} alt="VuTienLinh" />
              </Col>
              <Col xs={6} md={6}>
                <img className="contactImg" src={KhangAva} alt="PhamHoangKhang" />
              </Col>
            </Row>
            <Row>
              <Col xs={6} md={6}>
                <img className="contactImg" src={MinhAva} alt="NguyenDangMinh" />
              </Col>
              <Col xs={6} md={6}>
                <img className="contactImg" src={VyAva} alt="VoThiTuongVy" />
              </Col>
            </Row>
          </Container>

          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Your email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Your question</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ContactPage