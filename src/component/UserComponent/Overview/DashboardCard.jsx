import React from "react";
import Chart from "./Chart";
import { useHistory } from "react-router-dom";
import '../../../asset/css/overview.css';

function DashboardCards({ dashBoardDisplay }) {
  const history = useHistory();


  const url = () => {
    history.push(`/electionDashboard`);
  };



  return (
    <div className="jumbotron">
      <section>
        <div className="columns">
                <div  className={`column py-3  `}>
                <div className='card crdcol'>
                  <div className="card-content">
                      <div className="content">
                     <h4 className='mx-2 text-nowrap mx-6 h4'>Aspiring Politicians</h4>
                      <i className="fas fa-spinner fa-spin my-3 ico"></i>
                  </div>
                  </div>

                 </div>
                </div>
                  <div  className={`column py-3  `}>
                <div onClick={url} className='card crdcol1'>
                  <div className="card-content">
                      <div className="content">
                     <h4 className=' h5 text-nowrap'>E-Voting</h4>
                      <i className="fas fa-spinner fa-spin my-3 icon1"></i>
                  </div>
                  </div>

                 </div>
                </div>
        </div>

         <div className="columns">
                <div  className={`column py-3  `}>
                <div className='card crdfor'>
                  <div className="card-content">
                      <div className="content">
                     <h4 className='text-nowrap fore'> Forencis</h4>
                      <i className="fas fa-spinner fa-spin my-3 icofore"></i>
                  </div>
                  </div>

                 </div>
                </div>
                  <div  className={`column py-3  `}>
                <div className='card crdpol'>
                  <div className="card-content">
                      <div className="content">
                     <h4 className=' pol text-nowrap'>Politicians To Watch</h4>
                      <i className="fas fa-spinner fa-spin my-3 icon1"></i>
                  </div>
                  </div>

                 </div>
                </div>
        </div>
      </section>
      <div className="my-2"> <Chart /> </div>
    </div>

  );
}


export default DashboardCards;
