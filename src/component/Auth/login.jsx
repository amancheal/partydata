import React, {useState} from 'react';
import Header from '../Headers/signInHeader';


function Login(){

    const [stateValue, setStateValue] = useState({

        
        email:'',
        password:'',
    
    });

        const [load, setLoad] = useState(false)
        const [err, setErr] = useState('')
        const onChane = (e)=>{
            let {name, value } = e.target;

             setStateValue({...stateValue, [name]:value} )
        }

        const submit = (e)=>{
             setLoad(true)
            e.preventDefault();
            const newUser = {
                email: stateValue.email,
                password: stateValue.password

            }
            if(stateValue.password === stateValue.confirmPassword){

                   fetch('http://41.190.25.21:3001/usermanager/newuser', {

                        method:'POST',
                        headers:{
                            'content-type':'application/json'
                        },
                        body: JSON.stringify(newUser)
                    })
                    .then(res =>{
                        console.log(res)
                        return res.json()

                    }
                         )

                    .then(data => {
                        console.log(data)
                         if(data.status === 'success'){
                        console.log(data)

                        setLoad(false)
                        setErr(data.message)
                    }
                    setStateValue({...stateValue,
                       
                        email:'',
                        password:'',
                     
                    })
                    window.location = '/sigUp';
                }
                   )


            }else{
                setErr('Password do no match')
            }

        }

        const myStyle ={
            paddingTop:'3em',
            margin: 'auto',
            color: 'rgb(250, 20, 0)',
        }

        const wrap = {
            backgroundcolor:'green',
        }

    return(
        <React.Fragment>
        <div>
        <Header />
        </div>
         
               <div>

                { load ?  <div  >
                    <div style={myStyle}  className='fa-5x   d-flex justify-content-center align-items-center'>
                    <i className="fas fa-spinner fa-spin"></i>
                    </div>

                </div> :   <div className='container'>
                <div className='m-2 m-lg-4 p-1 py-lg-0 '>
                    <h4>Sign In</h4>
                    <p>Sign into your account</p>
                </div>
                <div className='container w-80 p-4'> 
                    <button className='btn btn-success btn-sm p-2 m-2 col-md-3 text-center'><i class="fa fa-google" aria-hidden="true"></i> Google</button>
                    <button className='btn btn-success btn-sm p-2 m-2  col-md-3 text-center'> <i class="fa fa-facebook" aria-hidden="true"></i> Facebook</button>
                    </div>
                        
                    {err ?   <div className="alert py-4 alert-success alert-dismissible fade show" role="alert">
                                    <b > {err} </b>
                                    <button type="button" className="close btn " data-dismiss="alert" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div> : <span></span> }
                    <form onSubmit={submit} >

                         <div className='border h-50 w-50'>
                        <div className='row'>
                       
                            <div className='col-6 col-lg-3 col-md-3 form-group w-20'>
                                <label htmlFor="Email" className='text p-2'>Email-Address</label> <br/>
                                <input type="email" onChange={onChane} name="email" value={stateValue.email} className='form-control' required placeholder='zikii@gmail.com'/>
                            </div>
                           
                            <div className='col-6 col-lg-3 col-md-3 form-group w-20'>
                                <label htmlFor="password" className='text p-2'>Password</label><br/>
                                <input type="password" onChange={onChane} value={stateValue.password} name="password" className='form-control' required placeholder='*****'/>
                            </div>
                            
                        </div>

                         </div>
                         <div className=' d-flex justify-content-center align-items-center my-3 '>

                                <div className='mx-lg-4 mx-4' >
                                <label htmlFor="check" className='form-check-label  '>
                                    <input type="checkbox" required className='form-check-input p-2   bg-success' /> Remember me
                                </label>
                                </div>
                                <div><a href="#" className="text">Forgot password?</a>
                                </div>
                                <div  className='mx-2  mx-lg-4 '>
                                <input type="submit"  value='Sign In' className=' px-lg-3 bg-success btn btn-success' />
                                </div>
                                

                            </div>
                    </form>
                    
                                <div className=''>yet to register?<a href="#" className="text">Sign Up</a>
                                </div>
                                
                </div> }

            </div>

        </React.Fragment>
    )
}

export default Login
