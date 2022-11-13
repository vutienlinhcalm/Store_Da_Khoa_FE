import React from 'react';
import { useState } from 'react';
import FormInput from '../../common/forminput/FormInput';
import{Container,Row,Col} from 'react-bootstrap';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import FacebookIcon from '@mui/icons-material/Facebook';
import { FcGoogle} from 'react-icons/fc';
const SignIn = ()=>{
    const [values,setValues] = useState({
        username:'',
        password:''
      })
      const inputs = [{
        id:'username',
        name:'username',
        type:'text',
        placeholder:'Username',
        label:'Username',
        required:true
      },
      {
        id:'password',
        name:'password',
        type:'password',
        placeholder:'Password',
        label:'Password',
        required:true
      },
    ]
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        console.log(Object.fromEntries(data.entries()))
      }
      const onChange = (e)=>{
        setValues({...values,[e.target.name]: e.target.value});
      }
    return (
                
                    <Container className='container'>
                    <Row className='container__row'>
                       <Col xl={6} className='container__col' >
                            <h1 className='d-flex justify-content-center'>Login</h1>
                            <form id='login_form' onSubmit={handleSubmit}>  
                                    
                                    <label><AccountCircleIcon /> {inputs[0].label}</label>
                                    <FormInput key={inputs[0].id}{...inputs[0]} value = {values[inputs[0].name]} onChange={onChange} />

                                    <label><LockIcon/> {inputs[1].label}</label>
                                    <FormInput key={inputs[1].id}{...inputs[1]} value = {values[inputs[1].name]} onChange={onChange} />
        
                                
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