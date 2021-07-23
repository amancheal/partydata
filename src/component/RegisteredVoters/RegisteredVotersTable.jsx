import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { decipherJwt } from 'decipher-jwt';

function RegisteredVotersTable(){
  const {result} = decipherJwt(localStorage.getItem('token'))
    const [registeredVoters, setRegisteredVoters] = useState([]);

    useEffect(()=> {
      //  https://pdpparty.herokuapp.com
        axios
        .get("https://pdpparty.herokuapp.com/allVoters", {
             headers:{
            "Content-Type": "application/json",
             Authorization: `Bearer ${localStorage.getItem("token")}`,
            }
        })
        .then(response =>{
          setRegisteredVoters(response.data.voters)
        })
    }, [])
    const myStyle = {
      paddingTop: "2em",
      marginLeft: "10em",
      color: "rgb(255, 7, 2)",
    };

    return (
            <React.Fragment>
                 <div className="container">
               <div className='jumbotron'>
                   <div className="py-3">
        <Link
          style={{
            textDecoration: "none",
            fontSize: "1.2rem",
            fontWeight: "600",
          }}
          className="text-success"
          to="/dashboard"
        >
          {" "}
          <i
            style={{ fontWeight: "bold" }}
            className="fa fa-chevron-left mx-1 text-success "
            aria-hidden="true"
          ></i>{" "}
          Back
        </Link>
      </div>
      <div className="table-responsive">
        <table className="table">
              <thead>
            <tr>
              <th>Name</th>
              <th>Email </th>
              <th>L.G.A</th>
              <th>P-Unit</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
          {
            registeredVoters.length > 0 ?(
              registeredVoters.map(({
                _id,
                firstname,
                lga,
                poolingunit,
                email,

              }) =>{
                return (
                  <tr key={_id}>
                      <td>{firstname}</td>
                      <td> {email} </td>
                      <td>{lga} </td>
                      <td>{poolingunit} </td>
                      <td>{result.age} </td>
                  </tr>
                )
              })
            ): (
              <tr
              style={myStyle}
              className="  d-flex justify-content-center align-items-center"
            >
              <td>
              <i className="fad fa-spinner-third fa-spin fa-pulse fa-5x  colo"></i>
              </td>
            </tr>
            )
          }

        </tbody>

        </table>
        </div>
    </div>
    </div>
            </React.Fragment>
    )
}

export default RegisteredVotersTable;
