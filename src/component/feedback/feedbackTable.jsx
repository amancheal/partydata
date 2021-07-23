import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { USER_INFO } from "../../action/types";
import { updateNav } from "../../action/actions/nav_actions";
import { connect } from "react-redux";
function FeedBackTable({ getwhattoshow }) {
  const [feedList, setFeedList] = useState([]);

  useEffect(() => {
    axios
      .get("https://partyydata.herokuapp.com/users/allfeedbacks", {
        headers:{
            "Content-Type": "application/json",
             Authorization: `Bearer ${localStorage.getItem("token")}`,
            }
      })
      .then((response) => {
        setFeedList(response.data.feedbacks);
      });
  }, []);
  const myStyle = {
    paddingTop: "2em",
    marginLeft: "3em",
    color: "rgb(255, 7, 2)",
  };

  return (
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
              <th>From</th>
              <th>Type</th>
              <th>Status</th>
              <th>P-Unit</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {feedList.length > 0 ? (
              feedList.map(
                ({
                  _id,
                  title,
                  status,
                  complaintype,
                  lga,
                  poolingUnit,
                  ward,
                  feedback,
                  number,
                  username,
                }) => {
                  return (
                    <tr key={_id}>
                      <td>{username}</td>
                      <td> {complaintype} </td>
                      <td>{status} </td>
                      <td>{poolingUnit} </td>
                      <td>
                        {" "}
                        <button className="btn btn-success">
                          <Link
                            style={{ textDecoration: "none", color: "white" }}
                            to={{
                              pathname: "/feedbackinfo",
                              state: {
                                _id,
                                title,
                                complaintype,
                                status,
                                lga,
                                poolingUnit,
                                ward,
                                feedback,
                                username,
                                number,
                              },
                            }}
                            onClick={() => getwhattoshow(USER_INFO)}
                            className="text-center"
                          >
                            More Info
                          </Link>{" "}
                        </button>{" "}
                      </td>
                    </tr>
                  );
                }
              )
            ) : (
              <tr
                style={myStyle}
                className="fa-4x   d-flex justify-content-center align-items-center"
              >
                <td>
                <i className="fad fa-spinner-third fa-spin fa-pulse fa-5x  colo"></i>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      </div>
    </div>
  );
}

const mapDispatchToprops = (dispatch) => {
  return {
    getwhattoshow: (val) => dispatch(updateNav(val)),
  };
};

export default connect(null, mapDispatchToprops)(FeedBackTable);
