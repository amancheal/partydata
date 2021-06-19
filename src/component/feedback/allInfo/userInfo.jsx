import React from "react";
import { useLocation, Link, useHistory } from "react-router-dom";
import DashBoardNav from "../../Headers/dashBoardNav";
import Profile from "../../dashboard/profile";
import axios from "axios";

function AllInfo() {
  const history = useHistory();
  const location = useLocation();
  const {
    _id,
    title,
    complaintype,
    status,
    localgovernment,
    PoolingUnit,
    ward,
    number,
    feedback,
    username,
  } = location.state;

  const treat = async(id) => {
   await axios
      .post(`http://192.168.6.100:3000/users/allfeedbacks/${id}`,"", {
        headers:{
          "Content-Type": "application/json",
           Authorization: `Bearer ${localStorage.getItem("token")}`,
          }
      })
      .then((res) => {
        const status = 'IN-PROGRESS';
        //console.log(res.data.feeds._id)
        console.log(res)
        history.push('/feedbackinfo', {
          _id,
          title,
          complaintype,
          status,
          localgovernment,
          PoolingUnit,
          ward,
          number,
          feedback,
          username,
        });
      });
  };

  const closeCase = (id) => {
    axios
      .post(`http://192.168.6.100:3000/users/allfeedbacks/${id}/close`, "",{
        headers:{
          "Content-Type": "application/json",
           Authorization: `Bearer ${localStorage.getItem("token")}`,
          }
      })
      .then((res) => {
        const status = 'CLOSED';
        history.push("/feedbackinfo", {
          _id,
          title,
          complaintype,
          status,
          localgovernment,
          PoolingUnit,
          ward,
          number,
          feedback,
          username,
        });
      });
  };

  return (
    <React.Fragment>
      <DashBoardNav />
      <div className="d-flex" id="wrapper">
        <Profile />
        <div className="container">
          <div className="py-3">
            <Link
              style={{
                textDecoration: "none",
                fontSize: "1.2rem",
                fontWeight: "600",
              }}
              className="text-success"
              to="/feedback"
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
          <div className="jumbotron">
            <div className="float-right">
              {status === "OPEN" ? (
                <button onClick={() => treat(_id)} className="btn btn-success">
                  Treat
                </button>
              ) : status === "IN-PROGRESS" ? (
                <button
                  onClick={() => closeCase(_id)}
                  className="btn btn-success"
                >
                  Close
                </button>
              ) : status === "CLOSED" ? (
                "TREATED"
              ) : (
                <div className="fa-4x   d-flex justify-content-center align-items-center">
                  <i className="fas fa-spinner fa-spin"></i>
                </div>
              )}
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-6 col-6 my-5">
                {" "}
                <h5 className="text-danger mx-md-0 mx-lg-0 mx-sm-0 mx-n3 ">Party Information</h5>{" "}
              </div>
              <div className="col-md-6 col-lg-6 px-4 col-6 mx-lg-n3 my-5">
                {" "}
                <h6>
                  {" "}
                  <b>Ward :</b> <span> {ward} </span>{" "}
                </h6>
                <h6>
                  {" "}
                  <b>L.G.A :</b> <span> {localgovernment} </span>{" "}
                </h6>
                <h6>
                  {" "}
                  <b>Polling-Unit:</b> <span> {PoolingUnit} </span>{" "}
                </h6>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-6 col-6  my-1">
                {" "}
                <h5 className="text-danger">Contact Information</h5>{" "}
              </div>
              <div className="col-md-6 col-lg-6 col-6   mx-lg-n5 my-1">
                {" "}
                <h6>
                  {" "}
                  <b>Phone-Number :</b>{" "}
                  <span> {number ? "+234" + number : ""} </span>{" "}
                </h6>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-6 col-6   my-2">
                {" "}
                <h5 className="text-danger ">Sender's Information</h5>{" "}
              </div>
              <div className="col-md-6 col-lg-6 col-6   mx-lg-n5 my-2">
                {" "}
                <h6>
                  {" "}
                  <b>From :</b> <span> {username} </span>{" "}
                </h6>
                <h6>
                  {" "}
                  <b>Report-Title :</b> <span> {title} </span>{" "}
                </h6>
                <h6>
                  {" "}
                  <b>Type:</b> <span> {complaintype} </span>{" "}
                </h6>
                <h6>
                  {" "}
                  <b>Status:</b> <span> {status} </span>{" "}
                </h6>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-6 col-6   my-1">
                {" "}
                <h5 className="text-danger ">Feedback Content</h5>{" "}
              </div>
              <div className="col-md-6 col-lg-6 col-6   mx-lg-n5 my-1">
                {" "}
                <h6>
                  {" "}
                  <b>Message :</b> <span> {feedback} </span>{" "}
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default AllInfo;
