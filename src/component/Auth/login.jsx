import React, {useState, useEffect} from 'react';
import Head from '../Headers/signUpHeader';
import Header from '../Headers/Header';
//import axios from 'axios';
import { Options } from 'react-naija-states'
import 'react-naija-states/dist/index.css'

function Login(){

    const [stateValue, setStateValue] = useState({
        phoneNumber:'',
        password:'',
    });

        const [load, setLoad] = useState(false)
        const [err, setErr] = useState('')
        const onChange = (e)=>{
            let {name, value } = e.target;

             setStateValue({...stateValue, [name]:value} )
        }

        const submit = (e)=>{
            e.preventDefault();
            const newUser = {
               
                phoneNumber: stateValue.phoneNumber,
                password: stateValue.password,
            }
            if(stateValue.password === stateValue.confirmPassword){
                console.log(newUser)

                setStateValue({...stateValue,
                    phoneNumber:'',
                    password:'',
                                    })
            }else{
                setErr('Invalid Login Details.')
            }

        }

        const myStyle ={
            paddingTop:'2em',
            margin: 'auto',
            color: 'rgb(250, 20, 0)',
        }




    return(
        <React.Fragment>
            <div>
            <Header />
            </div>
               <div>


                { load ?  <div  >
                    <div style={myStyle}  className='fa-5x   d-flex justify-content-center align-items-center'>
                    <i class="fas fa-spinner fa-spin"></i>
                    </div>

                </div> :   <div className='container-sm'>
                <div className='m-2 m-lg-4 p-1 py-lg-0'>
                    <h4>Sign In</h4>
                    <p>sign in to your account.</p>
                </div>
                <div  className='fa-5x   d-flex justify-content-center align-items-center'>
                <a class="btn btn-primary m-3 bg-success text-white" href="#" role="button">Sign In with Google</a>
                <a class="btn btn-primary m-3 bg-success text-white" href="#" role="button">Sign In with Facebook</a>
                </div>
                    {err ?   <div className="alert py-4 alert-danger alert-dismissible fade show" role="alert">
                                    <b > {err} </b>
                                    <button type="button" className="close btn " data-dismiss="alert" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>

                        
                            
                            </div> : <span></span> }
                                <div className="container justify-content-center align-items-center">
                                    <form onSubmit={submit} >

                                    <div class="container p-3  my-3 border w-50 h-50">
                                    <label htmlFor="email" className='text p-2'>Email Address
                                    <br/>
                                <input type="number" onChange={onChange} name="phoneNumber" value={stateValue.Email} className='form-control' required placeholder='joy@g.c'input className="col-xs-4" />
                                </label>
                                    <br/>
                                   
                                    <label htmlFor="password" className='text p-2'>Password
                                    <br/>
                                <input type="password" onChange={onChange} name="password" value={stateValue.password} className='form-control' required placeholder='input password'input className="col-md-12"/>
                                </label>
                                 </div>
                                
                         <div className=' d-flex justify-content-between align-items-center my-3 '>

                                <div className='mx-lg-4 mx-2' >
                                <label htmlFor="forget-password" className='forget-password'>
                                    <input type="text" required className='form-check-input p-2   bg-success' /> Remember Me
                                </label>
                                </div>
                               
                                <div className='mx-lg-4 mx-2 text-right' >
                               <h4>Forgot Password?</h4>
                                
                                </div>

                                <div  className='mx-2  mx-lg-4 '>
                                <input type="submit"  value='Sign Up' className=' px-3 p-1 p-2 px-lg-5 bg-success btn btn-success' />
                                </div>
                            </div>
                            <div className='mx-lg-4 mx-2 text-center' >
                               <h4>Yet to Register?Sign Up</h4>
                               </div>
                                    </form>
                                </div>
                                
                </div> }

           
            </div>
        </React.Fragment>
    )
}

export default Login