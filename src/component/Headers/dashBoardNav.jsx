import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {  withRouter } from "react-router-dom";
import {
  FEED_BACK_PORTAL,
  DASH_BOARD,
  MANAGE_STAKE_HOLDERS,
  ALL_STAKE_HOLDERS,
} from "../../action/types";
import { updateNav } from "../../action/actions/nav_actions";

function DashBoardNav({ history, changeShow, whattoshow }) {
  useEffect(() => {
    switch (history.location.pathname) {
      case "/dashboard":
        return changeShow(DASH_BOARD);
      case "/allStakeHolders":
        return changeShow(ALL_STAKE_HOLDERS);
      case "/manageAllStakeHolders":
        return changeShow(MANAGE_STAKE_HOLDERS);
      case "/feedBack":
        return changeShow(FEED_BACK_PORTAL);
      default:
        return changeShow(DASH_BOARD);
    }
  }, []);

  let openNav = () => {
    let el = document.getElementById("wrapper");
    el.classList.toggle("toggled");
  };

  return (
    <React.Fragment>
      <div id="page-content-wrapper  ">
        <nav className="navbar  navbar-expand-lg  bg-transparent navbar-light py-4 px-4 ">
          <div className="d-flex align-items-center">
            <i
              style={{ fontSize: "30px", cursor: "pointer" }}
              onClick={openNav}
              className="far fa-bars  primary-text fs-4 me-3"
              id="menu-toggle"
            ></i>
            <span className="dash navbar-brand "> {whattoshow} </span>
          </div>
        </nav>
      </div>
    </React.Fragment>
  );  
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeShow: (val) => dispatch(updateNav(val)),
  };
};

const mapStateToProps = (state) => {
  return {
    whattoshow: state.nav,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(DashBoardNav));
