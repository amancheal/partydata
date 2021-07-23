import React, {useState} from 'react';
import axios from 'axios';
import Head from '../Headers/signInHeader';
import Footer from '../Headers/footer';
import { Form, FormGroup, Label, Input} from 'reactstrap';
import '../../asset/css/login.css';


function Login({location}){


    const [stateValue, setStateValue] = useState({

        email:'',
        password:'',

    });
        const [errCol, setErr] = useState(false);
        const [mesg, setMesg] = useState('');
        const [loading, setLoading] = useState(false);
         const [noti, setNoti] = useState(false);
            const dele =()=>{
                    setNoti(true)

                  }

        const onChane = (e)=>{
            let {name, value } = e.target;

             setStateValue({...stateValue, [name]:value} )
        }

        const submit = (e)=>{
             setLoading(true);
            e.preventDefault();
            const loginUser = {
                email: stateValue.email,
                password: stateValue.password
            }
            // https://pdpparty.herokuapp.com
            axios.post("https://pdpparty.herokuapp.com/login", loginUser)
            .then((res) => {
              if (res.data.token) {
                   setLoading(false);
                    console.log(res)
                    setMesg(res.data.message);
                    setNoti(false);
                localStorage.setItem("token", res.data.token);
                window.open('/overview', '_self');
              } else {
                  console.log(res)
                   setLoading(false);
                console.log('Something went wrong')

              }
            })
            .catch(err => {
              if(err){
                console.log(err.response)
               setLoading(false);
               setErr(true);
               setMesg(err.response.data.message);
              }

            })

        }

        // const success = response =>{
        //   console.log(response)
        //     axios({
        //       method: 'POST',
        //       url:'https://quiet-temple-20315.herokuapp.com/googleLogin',
        //       data: {tokenId: response.tokenId}
        //     })

        //   .then(res =>{
        //     localStorage.setItem("token", res.data.token);
        //     window.location = '/dashboard';
        //   })
        // }
        // const fail = response =>{
        //   console.log(response)
        //   setErr('Incorrect login or network Error')
        // }
        // const responseFacebook = response =>{
        //   console.log(response)
        //   axios({
        //     method: 'POST',
        //     url:'https://quiet-temple-20315.herokuapp.com/facebookLogin',
        //     data: {accessToken: response.accessToken, userID: response.userID}
        //   })

        // .then(res =>{
        //   console.log(res.data)
        //   localStorage.setItem("token", res.data.token);
        //   window.location = '/dashboard';
        // })
        // .catch(err =>{
        //  console.log('an error has occured')
        // })
        // }


    return(
        <React.Fragment>
          <div>
            <Head />

                    <section className='section is-hidden-mobile has-shadow '>
                         { mesg !== ''? <div className={`${noti === true ? 'remove': 'notification'} errdis ${errCol === false ? 'is-primary ': 'is-danger' } ${mesg !== ''? 'my-3': ''}`}>
                                <button onClick={dele} className="delete"></button>
                                            { mesg  }
                                </div> : <span></span>
                                    }
                                                {
                                                    loading === true ? <div className="modal is-active">
                                                    <div className="modal-background spinn"></div>
                                                    {/* <i style={{color:'white'}} className="fas fa-circle-notch fa-spin fa-7x "></i> */}
                                                        <i className="fad fa-spinner-third fa-spin fa-pulse fa-5x  colo"></i>

                                                  </div> : <span></span>
                                                }
                     <div className='signin'>
                  <h4 style={{fontWeight:'bold'}} className='mx-n2 is-size-3'>Sign In</h4>
                   <p  className='mx-n2'>Sign into your account</p>
                   </div>
                      <Form className={`jumbotron jumb my-5`} onSubmit={submit}>
                        <div className='row'>
                          <div className='col-12 '>
                          <FormGroup>
                            <Label for="email"  > <em className='labe'> Email </em></Label>
                            <Input type='text'  value={stateValue.email} name='email' onChange={onChane}/>
                           </FormGroup>
                          </div>
                          <div className='col-12'>
                          <FormGroup>
                            <Label for="Password"> <em className='labe'>Password </em> </Label>
                            <Input type='password' value={stateValue.password} name='password' onChange={onChane}/>
                           </FormGroup>
                         </div>
                          <div className="col-4">
                            <FormGroup>
                            <Input type="submit" value='Submit' className='btn btn-success ' />
                            </FormGroup>
                            </div>
                        </div>
                       </Form>
                     </section>


              <Footer />
            </div>
        </React.Fragment>
    )
}

export default Login
