
import ContactPage from './contact/ContactPage'
import { Container, Col, Row } from 'react-bootstrap'
import React from 'react';

import './AboutPage.css'
const AboutPage = () => {
  return (
    <Container>
      <Row>
        <Col sm={3}>
         <h1>Nhóm chúng tôi là gì ?</h1>
        </Col>
        <Col sm={9}>
          Vào một ngày đẹp trời tại lớp học Framework, Giảng Viên đã cho chúng tôi chọn nhóm để thực hiện đồ án môn học
          và lúc đó từ những sinh viên chưa quen biết nhau lần nào, chúng tôi đã gom lại với nhau và tạo ra một nhóm với
          cái tên thực sự là rất thú vị. Đa Khoa chính là tên của nhóm chúng tôi, ý của cái tên đó không phải nói về bệnh 
          viện đa khoa và là vì mỗi thành viên trong nhóm của chúng tôi đến từ những nhóm khác nhau. 
          <br />
          Đồ án của nhóm chúng tôi thực hiện là một shop bán quần áo, nếu bạn có bất kỳ thắc mắc nào về chúng tôi thì hãy để 
          lại lời nhắn bên dưới, chúng tôi sẽ liên hệ sớm nhất đến với bạn.
        </Col>
      </Row>
      <Row>
        <Col sm={3}>
        <ContactPage />
        </Col>
      </Row>
      
    </Container>
  )
}

export default AboutPage