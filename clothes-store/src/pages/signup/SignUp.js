import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom'
import FormInput from '../../common/forminput/FormInput';
import{Container,Row,Col} from 'react-bootstrap';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import FacebookIcon from '@mui/icons-material/Facebook';
import { FcGoogle} from 'react-icons/fc';
import './SignUp.css'

const  SignUp = ()=>{
    
  const [values,setValues] = useState({
    username:'',
    email:'',
    phone:'',
    password:'',
    confirmpassword:''
  })

 
  const inputs = [{
    id:'username',
    name:'username',
    type:'text',
    placeholder:'Username',
    label:'Username',
    errormessage:"Username should be 3-16 characters and shouldn't include any special characters!",
    pattern:"^[a-zA-Z0-9]{3,16}$",
    required:true
  },
  {
    id:'email',
    name:'email',
    type:'email',
    placeholder:'Email',
    label:'Email',
    errormessage:"It should be a valid email address",
    required:true
  },
  {
    id:'phone',
    name:'phone',
    type:'text',
    placeholder:'Phone',
    label:'Phone',
    pattern:`^0[0-9]{9}$`,
    errormessage:'It should start with 0 with 10 number characters',
    required:true
  },
  {
    id:'password',
    name:'password',
    type:'password',
    placeholder:'Password',
    label:'Password',
    pattern:`(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,}).*$`,
    errormessage:'Password should be least 8 characters and include at least 1 number and 1 lowercase and 1 uppercase',
    required:true
  },
  {
    id:'confirmpassword',
    name:'confirmpassword',
    type:'password',
    placeholder:'Confirm Password',
    label:'Confirm Password',
    errormessage:" Password don't match",
    pattern:values.password,
    required:true
  }
]

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(Object.fromEntries(data.entries()))
  }
  const onChange = (e)=>{
    setValues({...values,[e.target.name]: e.target.value});
  }
    return(
        
            <Container className='container'>
            <Row className='container__row'>
               <Col xl={6} className='container__col' >
                <div className="container__header">
                    <h1 className='d-flex justify-content-center'>Register</h1>
                    <p className="d-flex justify-content-center">Already registered ? <NavLink className="login__link" to="/signin">  Sign In</NavLink></p>
                </div>
                    
                    <form id='login_form' onSubmit={handleSubmit}>  
                            
                            <label><AccountCircleIcon /> {inputs[0].label}</label>
                            <FormInput key={inputs[0].id}{...inputs[0]} value = {values[inputs[0].name]} onChange={onChange} />

                            <label><EmailIcon/> {inputs[1].label}</label>
                            <FormInput key={inputs[1].id}{...inputs[1]} value = {values[inputs[1].name]} onChange={onChange} />

                            <label><SmartphoneIcon/> {inputs[2].label}</label>
                            <FormInput key={inputs[2].id}{...inputs[2]} value = {values[inputs[2].name]} onChange={onChange} />

                            <label><LockIcon/> {inputs[3].label}</label>
                            <FormInput key={inputs[3].id}{...inputs[3]} value = {values[inputs[3].name]} onChange={onChange} />

                            <label><LockIcon/> {inputs[4].label}</label>
                            <FormInput key={inputs[4].id}{...inputs[4]} value = {values[inputs[4].name]} onChange={onChange} />

                        
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
                            Sign Up
                        </button> 
                        </div>
                                     
                    </form>
                </Col>
            </Row>
        </Container>
    
        
    
    )
}

export default SignUp;