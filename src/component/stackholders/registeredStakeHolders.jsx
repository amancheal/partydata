import React from "react";
import { useLocation } from "react-router-dom";
import Profile from "../dashboard/profile";
import DashBoardNav from "../Headers/dashBoardNav";
import Top from "./displayedStakeHolders";

function RegisteredStakeHolders() {
  const location = useLocation();
  const {  name, wards } = location.state;
  return (
    <React.Fragment>
      <DashBoardNav />
      <div className="d-flex" id="wrapper">
        <Profile  />
        <div className="container">
          <div className="jumbotron">
            {console.log(wards)}
            <Top name={name} destination='/allStakeHolders' />

            <div className="bg-white py-2 border border-2 rounded">
              <p style={{fontSize:'1.2rem', fontWeight:'600'}} className=" mx-3">
                {" "}
                {wards.length} Registered Stake-Holders
              </p>
            </div>
            <div className="table-responsive">
              <table className="table ">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Ward</th>
                    <th>Pooling Unit</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {wards.length > 0
                    ? wards.map(({ _id, name, polling_units }) => {
                          return(
                            <tr key={_id}>
                            <td> {name} </td>
                            <td> Ward </td>

                             <td >{polling_units.length } </td>

                             <td className="float-right"><button type="button" className="btn btn-success  mx-1 float-right">More info</button></td>
                            </tr>
                          );

                      })
                    : console.log("nothing in array")}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default RegisteredStakeHolders;
