import React, { useState } from "react";
import Chart from "./chart";
import FeedBacks from "./feedBackList";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

function DashboardCards({ dashBoardDisplay }) {
  const history = useHistory();
  const [list] = useState([
    {
      name: "Feed Back Portal",
      color: "bg-danger",
      url: "https://quiet-temple-20315.herokuapp.com/feedback"
    },
    {
      name: "Aspiring Politicians",
      color: "bg-primary",
    },
    {
      name: "Registered Stake Holders",
      color: "bg-success",
      url: "https://quiet-temple-20315.herokuapp.com/allStakeHolders"
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

  const setUri = (url) => {
    history.push(`${url}`);
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
          {list.map(({ name, color, url }, index) => {
          console.log(dashBoardDisplay)

              return (
                <div onClick={() => setUri(url)} key={name} className={`cardi ${color}`}>
                  <p className="spen">{name}</p>
                  <h4 className="span">
                    {dashBoardDisplay.length > 0 ? (
                      dashBoardDisplay[0].feedbacks.length
                    ) : (
                      <i className="fas fa-spinner fa-spin"></i>
                    )}
                  </h4>
                </div>
              )
          })}
        </div>
      </section>
      <div className="my-2"> <Chart /> </div>
    </div>
    
  );
}


export default DashboardCards;
