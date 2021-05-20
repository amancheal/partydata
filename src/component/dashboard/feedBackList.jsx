import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {  withRouter } from "react-router-dom";
import display from '../../action/actions/display';

function FeedBackList({dashBoardDisplay}) {


  return (
    <div className="feeds my-2 table-responsive" >

        <table className='table '>
            <thead className='text-secondary border border-2 border-dark mx-3'>
                <tr>
                    <th>REPORT TITLE</th>
                    <th>FROM</th>
                    <th>TYPE</th>
                    <th>STATUS</th>
                </tr>
            </thead>
            <tbody className='text-secondary'>
            {

         dashBoardDisplay.length > 0 ? dashBoardDisplay[0].feedbacks.map((data)=>{
                return (
                <tr key={data._id} >
                <td> {data.title.toUpperCase()} </td>
                <td> {data.username.toUpperCase()} </td>
                <td> {data.complaintype.toUpperCase()} </td>
                <td> {data.status.toUpperCase()} </td>
                </tr>
                )
            }) : ''
        }
            </tbody>
        </table>


    </div>
  );
}

const mapStateToProps =(state)=>{
    return {
        dashBoardDisplay: state.dis
    }
}


export default connect(mapStateToProps, null)(withRouter(FeedBackList));
