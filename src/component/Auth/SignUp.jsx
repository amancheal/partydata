import React, {useState, useEffect} from 'react';
import Head from '../Headers/signUpHeader';
import axios from 'axios';
import { Options } from 'react-naija-states'
import 'react-naija-states/dist/index.css'

function SignUp(){

    const [stateValue, setStateValue] = useState({

        firstname:'',
        lastname:'',
        email:'',
        phoneNumber:'',
        state:'',
        localGovernment:'',
        ward:'',
        district:'',
        religion:'',
        date:'',
        password:'',
        confirmPassword:''
    });

        const [load, setLoad] = useState(false)
        const [err, setErr] = useState('')
        const onChane = (e)=>{
            let {name, value } = e.target;

             setStateValue({...stateValue, [name]:value} )
        }

        const submit = (e)=>{
            e.preventDefault();
            const newUser = {
                firstName: stateValue.firstName,
                lastName: stateValue.lastName,
                email: stateValue.email,
                phoneNumber: stateValue.phoneNumber,
                state: stateValue.state,
                localGovernment: stateValue.localGovernment,
                ward: stateValue.ward,
                district: stateValue.district,
                religion: stateValue.religion,
                date: stateValue.date,
                password: stateValue.password,
                confirmPassword: stateValue.confirmPassword
            }
            if(stateValue.password === stateValue.confirmPassword){
                axios.post('http://41.190.25.21:3001/usermanager/newuser', newUser)
                .then(res =>{

                    if(res.data.status === 201){
                        console.log(res.data)
                        setLoad(false)
                        setErr(res.data.message)
                    }
                    setStateValue({...stateValue,
                        firstname:'',
                        lastname:'',
                        email:'',
                        phone:'',
                        state:'',
                        localGovernment:'',
                        ward:'',
                        district:'',
                        religion:'',
                        date:'',
                        password:'',
                        confirmPassword:''
                    })
                })
                .catch(err => console.log(err))

            }else{
                setErr('Password do no match')
            }

        }

        const myStyle ={
            paddingTop:'2em',
            margin: 'auto',
            color: 'rgb(250, 20, 0)',
        }

        const sub =()=>{
           // setLoad(true)
        }




    return(
        <React.Fragment>
            <div>
            <Head />
            </div>
               <div>

                { load ?  <div  >
                    <div style={myStyle}  className='fa-5x   d-flex justify-content-center align-items-center'>
                    <i className="fas fa-spinner fa-spin"></i>
                    </div>

                </div> :   <div className='container'>
                <div className='m-2 m-lg-4 p-1 py-lg-0'>
                    <h4>Create an Account</h4>
                    <p>Create an account and start a career as a Politian or Stakeholder.</p>
                </div>
                    {err ?   <div className="alert py-4 alert-danger alert-dismissible fade show" role="alert">
                                    <b > {err} </b>
                                    <button type="button" className="close btn " data-dismiss="alert" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div> : <span></span> }
                    <form onSubmit={submit} >
                         <div className=' border mx-2 px-4 mx-lg-4'>
                        <div className='row'>
                            <div className='col-12 col-lg-6 col-md-6 form-group '>
                                <label htmlFor="FirstName" className='text p-2' >First-Name</label>
                                <input type="text" onChange={onChane} name="firstName" value={stateValue.firstName} className='form-control' required placeholder='First-Name'/>
                            </div>
                            <div className='col-12 col-lg-6 col-md-6 form-group '>
                                <label htmlFor="LastName" className='text p-2'>Last-Name</label>
                                <input type="text" onChange={onChane} name="lastName" value={stateValue.lastName} className='form-control' required placeholder='Last-Name'/>
                            </div>
                            <div className='col-12 col-lg-6 col-md-6 form-group '>
                                <label htmlFor="Email" className='text p-2'>Email-Address</label>
                                <input type="email" onChange={onChane} name="email" value={stateValue.email} className='form-control' required placeholder='zikii@gmail.com'/>
                            </div>
                            <div className='col-12 col-lg-6 col-md-6 form-group '>
                                <label htmlFor="Phone" className='text p-2'>Phone-Nmuber</label>
                                <input type="number" onChange={onChane} name="phoneNumber" value={stateValue.phoneNumber} className='form-control' required placeholder='07028292200'/>
                            </div>
                            <div className='col-12 col-lg-6 col-md-6  form-group '>
                            <label htmlFor="State" className='p-2'>State-Of-Origin</label>
                            <select name="state" selected onChange={onChane} value={stateValue.state || ''}   className=' mb-3 form-control' >
                               <Options type='state'/>
                                 </select>
                            </div>
                            <div className='col-12 col-lg-6 col-md-6  form-group '>
                            <label htmlFor="Local-govername" className='p-2'>Local-Government</label>
                            <select name="localGovernment" selected onChange={onChane} value={stateValue.localGovernment || ''}   className=' mb-3 form-control' >
                            <Options type='lga' state={stateValue.state} />
                                 </select>
                            </div>
                            <div className='col-12 col-lg-6 col-md-6 form-group '>
                                <label htmlFor="Ward" className='text p-2'>Ward</label>
                                <input type="text" onChange={onChane} value={stateValue.ward} name="ward" className='form-control' required placeholder='Abijo'/>
                            </div>
                            <div className='col-12 col-lg-6 col-md-6 form-group '>
                                <label htmlFor="district" className='text p-2'>District</label>
                                <input type="text" onChange={onChane} value={stateValue.district} name="district" className='form-control' required placeholder='Abijo'/>
                            </div>
                            <div className='col-12 col-lg-6 col-md-6  form-group '>
                            <label htmlFor="religion" className='p-2'>Select-Religion</label>
                            <select name="religion" value={stateValue.religion} selected onChange={onChane}   className=' mb-3 form-control' >
                                                <option value="Christian">Christain</option>
                                                <option value="Muslim">Muslim</option>
                                                <option value="Traditional-Worshiper">Traditional-Worshiper</option>
                                 </select>
                            </div>
                            <div className='col-12 col-lg-6 col-md-6 form-group '>
                                <label htmlFor="date" className='text p-2'>Date</label>
                                <input type="date" onChange={onChane} value={stateValue.date} name="date" className='form-control' required placeholder='MM/DD/YY'/>
                            </div>
                            <div className='col-12 col-lg-6 col-md-6 form-group '>
                                <label htmlFor="password" className='text p-2'>Password</label>
                                <input type="password" onChange={onChane} value={stateValue.password} name="password" className='form-control' required placeholder='*****'/>
                            </div>
                            <div className='col-12 my-3 my-lg-3 my-md-3 col-lg-6 col-md-6 form-group '>
                                <label htmlFor="confrim-password" className='text p-2'>Confrim-Password</label>
                                <input type="password" onChange={onChane} value={stateValue.confirmPassword} name="confirmPassword"  className='form-control' required placeholder='*****'/>
                            </div>

                        </div>

                         </div>
                         <div className=' d-flex justify-content-between align-items-center my-3 '>

                                <div className='mx-lg-4 mx-2' >
                                <label htmlFor="check" className='form-check-label  '>
                                    <input type="checkbox" required className='form-check-input p-2   bg-success' /> i agree to terms and condition
                                </label>
                                </div>
                                <div  className='mx-2  mx-lg-4 '>
                                <input type="submit" onClick={sub} value='Sign Up' className=' px-3 p-1 p-2 px-lg-5 bg-success btn btn-success' />
                                </div>

                            </div>
                    </form>

                </div> }

            </div>

        </React.Fragment>
    )
}

export default SignUp
