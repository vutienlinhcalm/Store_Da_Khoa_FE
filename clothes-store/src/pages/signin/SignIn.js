import React from 'react';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import FormInput from '../../common/forminput/FormInput';
import { Container, Row, Col } from 'react-bootstrap';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import FacebookIcon from '@mui/icons-material/Facebook';
import { FcGoogle } from 'react-icons/fc';
import axios from 'axios';
import { message } from 'antd';
const SignIn = ({ setAccountId, setUsername }) => {
  const [values, setValues] = useState({
    username: '',
    password: ''
  })
  const navigate = useNavigate()
  const inputs = [{
    id: 'username',
    name: 'username',
    type: 'text',
    placeholder: 'Username',
    label: 'Username',
    required: true
  },
  {
    id: 'password',
    name: 'password',
    type: 'password',
    placeholder: 'Password',
    label: 'Password',
    required: true
  },
  ]

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData(e.target);
      console.log(Object.fromEntries(data.entries()))
      const response = await axios.post("http://localhost:5001/api/Account/LogIn", {
        username: Object.fromEntries(data.entries()).username,
        password: Object.fromEntries(data.entries()).password,
      })
      const result = await response.data
      const account = result.data
      message.success("Loggin successfully")
      localStorage.setItem("user-id", account.accountId)
      localStorage.setItem("username", account.userName)
      setAccountId(account.accountId)
      setUsername(account.userName)
      navigate("/")
    } catch (error) {
      message.error(error)
      console.log(error)
    }

  }
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  }
  return (

    <Container className='container'>
      <Row className=''>
        <Col xl={6} className='' >
          <h1 className=''>Login</h1>
          <form id='login_form' onSubmit={handleSubmit}>

            <label><AccountCircleIcon /> {inputs[0].label}</label>
            <FormInput key={inputs[0].id}{...inputs[0]} value={values[inputs[0].name]} onChange={onChange} />

            <label><LockIcon /> {inputs[1].label}</label>
            <FormInput key={inputs[1].id}{...inputs[1]} value={values[inputs[1].name]} onChange={onChange} />


            <label className='d-flex justify-content-center'>or continue with</label>
            <div className='d-flex justify-content-center'>

              <button className='container__btn' type='submit'>
                <FcGoogle className='color__google' />
                Google
              </button>
              <button className='container__btn' type='submit'>
                <FacebookIcon className='color__facebook' />
                Facebook
              </button>

            </div>
            <div className='d-flex justify-content-center'>
              <button className='container__signup_btn' >
                Login
              </button>
            </div>

          </form>
        </Col>
      </Row>
    </Container>

  )
}
export default SignIn;