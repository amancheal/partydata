import React, { useState } from "react";
import Head from "../Headers/signUpHeader";

import { Options } from "react-naija-states";
import "react-naija-states/dist/index.css";
import "react-datepicker/dist/react-datepicker.css";
import DatePicer from "react-datepicker";
import axios from 'axios';

function SignUp() {
  const [stateValue, setStateValue] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    state: "",
    lga: "",
    ward: "",
    gender: "",
    religion: "",
    dob: new Date(),
    password: "",
    confirmPassword: "",
  });

  // const [mesg, setMesg] = useState('');
  // const [loading, setLoading] = useState(false);
  //  const [noti, setNoti] = useState(false);
  //     const dele =()=>{
  //             setNoti(true)

  //           }

  const [load, setLoad] = useState(false);
  const [err, setErr] = useState(null);
  const onChane = (e) => {
    let { name, value } = e.target;

    setStateValue({ ...stateValue, [name]: value });
  };

  const submit = async (e) => {
    setLoad(true);
    e.preventDefault();
    const newUser = {
      firstname: stateValue.firstname,
      lastname: stateValue.lastname,
      email: stateValue.email,
      phone: stateValue.phone,
      state: stateValue.state,
      lga: stateValue.lga,
      ward: stateValue.ward,
      gender: stateValue.gender,
      religion: stateValue.religion,
      dob: stateValue.dob,
      password: stateValue.password,
    };
    if (stateValue.password === stateValue.confirmPassword) {
      //   https://pdpparty.herokuapp.com  http://localhost:4001.
       await axios.post('https://pdpparty.herokuapp.com/usermanager/newuser', newUser)
        .then(data =>{
          console.log(data)
          if (data.data.status === "success") {
            setLoad(false);
            setErr(data.message);
          }
          setStateValue({
            ...stateValue,
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            state: "",
            lga: "",
            ward: "",
            gender: "",
            religion: "",
            dob: "",
            password: "",
            confirmPassword: "",
          })
         window.open('/', '_self')
         })
      .catch(err =>{

        setLoad(false);
        console.log(err)

      })
    } else {
        setLoad(false);
      setErr("Password do no match");
    }
  };

  const myStyle = {
    paddingTop: "2em",
    margin: "auto",
    color: "rgb(250, 20, 0)",
  };
  const cans = ()=>{
    setErr(null);
  }

  let onChaneDate = (date) => {
    setStateValue({ ...stateValue, dob: date });
  };

  return (
    <React.Fragment>
      <div>
        <Head />
      </div>
      <div>
        {load ? (
          <div>
            <div
              style={myStyle}
              className=" d-flex justify-content-center align-items-center"
            >
            <i className="fad fa-spinner-third fa-spin fa-pulse fa-5x  colo"></i>
            </div>
          </div>
        ) : (
          <div className="container">
            <div className="m-2 m-lg-4 p-1 py-lg-0">
              <h4 style={{fontWeight:'bold'}} >Create an Account</h4>
              <p style={{fontWeight:'bold'}}>
                Create an account and start a career as a Politian or
                Stakeholder.
              </p>
            </div>
            {err ? (
              <div
                className="alert py-2 alert-success alert-dismissible fade show"
                role="alert"
              >
                <b className='text-nowrap'> {err} </b>
                <button
                  type="button"
                  className="close btn "
                  data-dismiss="alert"
                  aria-label="Close"
                >
                  <span onClick={ cans} aria-hidden="true">&times;</span>
                </button>
              </div>
            ) : (
              <span></span>
            )}
            <form onSubmit={submit}>
              <div className=" border mx-2 px-4 mx-lg-4">
                <div className="row">
                  <div className="col-12 col-lg-6 col-md-6 form-group ">
                    <label htmlFor="FirstName" className="text p-2">
                      First-Name
                    </label>
                    <input
                      type="text"
                      onChange={onChane}
                      name="firstname"
                      value={stateValue.firstname}
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="col-12 col-lg-6 col-md-6 form-group ">
                    <label htmlFor="LastName" className="text p-2">
                      Last-Name
                    </label>
                    <input
                      type="text"
                      onChange={onChane}
                      name="lastname"
                      value={stateValue.lastname}
                      className="form-control"
                      required

                    />
                  </div>
                  <div className="col-12 col-lg-6 col-md-6 form-group ">
                    <label htmlFor="Email" className="text p-2">
                      Email-Address
                    </label>
                    <input
                      type="email"
                      onChange={onChane}
                      name="email"
                      value={stateValue.email}
                      className="form-control"
                      required
                      placeholder="**@gmail.com"
                    />
                  </div>
                  <div className="col-12 col-lg-6 col-md-6 form-group ">
                    <label htmlFor="Phone" className="text p-2">
                      Phone-Nmuber
                    </label>
                    <input
                      type="number"
                      onChange={onChane}
                      name="phone"
                      value={stateValue.phone}
                      className="form-control"
                      required
                      placeholder="070xxxxxxxx"
                    />
                  </div>
                  <div className="col-12 col-lg-6 col-md-6  form-group ">
                    <label htmlFor="State" className="p-2">
                      State-Of-Origin
                    </label>
                    <select
                      name="state"
                      selected
                      onChange={onChane}
                      value={stateValue.state || ""}
                      className=" mb-3 form-control"
                    >
                      <Options type="state" />
                    </select>
                  </div>
                  <div className="col-12 col-lg-6 col-md-6  form-group ">
                    <label htmlFor="Local-govername" className="p-2">
                      Local-Government
                    </label>
                    <select
                      name="lga"
                      selected
                      onChange={onChane}
                      value={stateValue.lga || ""}
                      className=" mb-3 form-control"
                    >
                      <Options type="lga" state={stateValue.state} />
                    </select>
                  </div>
                  <div className="col-12 col-lg-6 col-md-6 form-group ">
                    <label htmlFor="Ward" className="text p-2">
                      Ward
                    </label>
                    <input
                      type="text"
                      onChange={onChane}
                      value={stateValue.ward}
                      name="ward"
                      className="form-control"
                      required

                    />
                  </div>
                  <div className="col-12 col-lg-6 col-md-6  form-group ">
                    <label htmlFor="gender" className="p-2">
                      Gender
                    </label>
                    <select
                      name="gender"
                      value={stateValue.gender}
                      selected
                      onChange={onChane}
                      className=" mb-3 form-control"
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Others">Others</option>
                    </select>
                  </div>
                  <div className="col-12 col-lg-6 col-md-6  form-group ">
                    <label htmlFor="religion" className="p-2">
                      Select-Religion
                    </label>
                    <select
                      name="religion"
                      value={stateValue.religion}
                      selected
                      onChange={onChane}
                      className=" mb-3 form-control"
                    >
                      <option value="Christian">Christiain</option>
                      <option value="Muslim">Muslim</option>
                      <option value="Traditional-Worshiper">
                        Traditional-Worshiper
                      </option>
                    </select>
                  </div>
                  <div className="col-12 col-lg-6 col-md-6 form-group ">
                    <label htmlFor="date" className="text p-2">
                      Date of Birth
                    </label>
                    <div>
                      <DatePicer
                        selected={stateValue.dob}
                        className="form-control"
                        style={{ gridColumn: "5/10", gridRow: "2/4" }}
                        onChange={onChaneDate}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-lg-6 col-md-6 form-group ">
                    <label htmlFor="password" className="text p-2">
                      Password
                    </label>
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
                  <div className="col-12 my-3 my-lg-3 my-md-3 col-lg-6 col-md-6 form-group ">
                    <label htmlFor="confrim-password" className="text p-2">
                      Confrim-Password
                    </label>
                    <input
                      type="password"
                      onChange={onChane}
                      value={stateValue.confirmPassword}
                      name="confirmPassword"
                      className="form-control"
                      required
                      placeholder="*****"
                    />
                  </div>
                  <div className="mx-2 col-12 d-lg-none d-md-none d-sm-block d-block mx-lg-4 form-group">
                  <input
                    type="submit"
                    value="Sign Up"
                    className=" px-3 p-2 px-lg-5 bg-success btn btn-success form-control"
                  />
                </div>
                </div>
              </div>
              <div className=" d-flex justify-content-between align-items-center my-3 ">
                <div className="mx-lg-5 mx-4">
                  <label htmlFor="check" className="form-check-label  ">
                    <input
                      type="checkbox"
                      required
                      className="form-check-input p-2   bg-success"
                    />{" "}
                    i agree to terms and condition
                  </label>
                </div>
                <div className="mx-2 d-lg-flex d-md-flex d-sm-none d-none mx-lg-4 ">
                  <input
                    type="submit"
                    value="Sign Up"
                    className=" px-3 p-2 px-lg-5 bg-success btn btn-success"
                  />
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </React.Fragment>
  );
}

export default SignUp;
