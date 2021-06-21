import React, {useState} from 'react';
import axios from 'axios';
import Head from '../Headers/signInHeader';

import {useHistory} from 'react-router'; 



function Login(){

  const history = useHistory()

    const [stateValue, setStateValue] = useState({

        email:'',
        password:'',

    });


        const [load, setLoad] = useState(false)
        const [err, setErr] = useState(null)
        const onChane = (e)=>{
            let {name, value } = e.target;

             setStateValue({...stateValue, [name]:value} )
        }

        const submit = (e)=>{
             setLoad(true)
            e.preventDefault();
            const loginUser = {
                email: stateValue.email,
                password: stateValue.password
            }

            axios.post("https://quiet-temple-20315.herokuapp.com/login", loginUser)
            .then((res) => {
              if (res.data.token) {
                localStorage.setItem("token", res.data.token);
                history.push = '/dashboard';
              } else {
                history.push = '/';

                console.log('Something went wrong')
              
              }
            })
            .catch(err => {
              if(err){
                console.log(err)
                setLoad(false)
                setErr('Incorrect login or network Error')
              }

            })

        }

        const myStyle ={
            paddingTop:'0em',
            margin: 'auto',
            color: 'rgb(250, 20, 0)',
        }

        const cans = ()=>{
          setErr(null);
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
          </div>
            <div className="container py-4">
                {load ? (
          <div>
            <div
              style={myStyle}
              className="fa-5x  d-flex justify-content-center align-items-center"
            >
              <i className="fas fa-spinner fa-spin"></i>
            </div>
          </div>
        ):
        <div>
               {err ? (
              <div
                className="alert  alert-danger  mx-n2 alert-dismissible fade show"
                role="alert"
              >
                <b className='text-nowrap'> {err} </b>
                <button
                  type="button"
                  className="close btn "
                  data-dismiss="alert"
                  aria-label="Close"
                >
                  <span onClick={cans} aria-hidden="true">&times;</span>
                </button>
              </div>
            ) : (
              <span></span>
            )}  
            <div className=' mx-5'>
                  <h4 style={{fontWeight:'bold'}} className='mx-n2'>Sign In</h4>
                 <p  className='mx-n2'>Sign into your account</p>
                 

                <div className='clearfix '>
                <form className='' onSubmit={submit}>
                    <div  className=" fom  p-4 ">
                    <div className="row">
                    <div className="col-12  form-group ">
                      <label htmlFor="Email" className="text ">
                        Email-Address
                      </label>{" "}
                      <br />
                      <input
                        type="email"
                        onChange={onChane}
                        name="email"
                        value={stateValue.email}
                        className="form-control"
                        required
                        placeholder="zikii@gmail.com"
                      />
                    </div>

                    <div className="col-12 form-group ">
                      <label htmlFor="password" className="text ">
                        Password
                      </label>
                      <br />
                      <input
                        type="password"
                        onChange={onChane}
                        value={stateValue.password}
                        name="password"
                        className="form-control"
                        required
                        placeholder="*****"
                      />
                    </div>
                    <div className=" col-12 d-lg-none d-md-none  d-block  form-group">
                  <input
                    type="submit"
                    value="Sign Up"
                    className=" px-3 p-2 px-lg-5 bg-success btn btn-success form-control"
                  />
                </div>
                  </div>
                    </div>
                    <div className=' d-flex justify-content-between align-items-center my-3 text-nowrap'>
                    <div className=' mx-2'>
                    <label htmlFor="check" className="reme form-check-label  ">
                    <input
                      type="checkbox"
                      className="form-check-input p-2   bg-success"
                    />{" "}
                    Remember me
                  </label>
                       </div>
                       <div  className='passwrd d-lg-flex d-md-flex d-sm-none d-none '>
                  <a href="/forgot" className=" pass text-success deco-none">
                    Forgot password?
                  </a>
                </div>
                    </div>
                    <div className="sign d-lg-flex d-md-flex d-sm-none d-none">
                  <input
                    type="submit"
                    value="Sign In"
                    className="sig px-3 bg-success btn btn-success"
                  />
                </div>

                </form>
                </div>
            </div>
        </div>
        }
            </div>

        </React.Fragment>
    )
}

export default Login