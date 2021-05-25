import React, { useState } from "react";
import Chart from "./chart";
import FeedBacks from "./feedBackList";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

function Cards({ dashBoardDisplay }) {
  const history = useHistory();
  const [list] = useState([
    {
      name: "Feed Back Portal",
      color: "bg-danger",
    },
    {
      name: "Aspiring Politicians",
      color: "bg-primary",
    },
    {
      name: "Registered Stake Holders",
      color: "bg-success",
      num: 0,
    },
    {
      name: "Politicians To Watch",
      color: "bg-success",
    },
    {
      name: "Forencis",
      color: "bg-danger",
    },
    {
      name: "E-Voting",
      color: "bg-primary",
    },
  ]);

  const feds = () => {
    history.push("/feedback");
  };

  const [tab, setTab] = useState("chart");
  const [show, setShow] = useState(true);

  const feeds = (e) => {
    setTab("feedbacks");
    setShow(false);
  };
  const chart = (e) => {
    setTab("chart");
    setShow(true);
  };

  return (
    <div className="jumbotron">
      <section>
        <div className="card-cont">
          {list.map(({ name, color }, index) => {
            if (index === 0) {
              return (
                <div onClick={feds} key={name} className={`cardi ${color}`}>
                  <p className="spen">{name}</p>
                  <h4 className="span">
                    {dashBoardDisplay.length > 0 ? (
                      dashBoardDisplay[0].feedbacks.length
                    ) : (
                      <i className="fas fa-spinner fa-spin"></i>
                    )}
                  </h4>
                </div>
              );
            }
            return (
              <div key={name} className={`cardi ${color}`}>
                <p className="spen">{name}</p>
                <h4 className="span">
                  <i className="fas fa-spinner fa-spin"></i>
                </h4>
              </div>
            );
          })}
        </div>
      </section>

      <div className="bg-white my-3 py-1 border-4 rounded">
        <span
          className="mx-3"
          style={
            tab !== "chart"
              ? { color: "gray", fontWeight: "500" }
              : {
                  color: "red",
                  borderBottom: "2px solid red",
                  fontWeight: "500",
                }
          }
          onClick={chart}
        >
          Chart
        </span>{" "}
        <span
          style={
            tab !== "feedbacks"
              ? { color: "gray", fontWeight: "500" }
              : {
                  color: "red",
                  borderBottom: "2px solid red",
                  fontWeight: "500",
                }
          }
          onClick={feeds}
          className="mx-3"
        >
          Recent Feedback
        </span>
      </div>
      <div className="my-2">{show ? <Chart /> : <FeedBacks />}</div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    dashBoardDisplay: state.dis,
  };
};

export default connect(mapStateToProps, null)(Cards);
