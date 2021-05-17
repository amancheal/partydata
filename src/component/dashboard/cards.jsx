import React, { useState } from "react";
import Chart from './chart';
import FeedBacks from './feedBackList';

function Cards() {

  const [list] = useState([

    {
        name:"Feed Back Portal",
        color:'bg-danger'
    },
    {
        name:"Aspiring Politicians",
        color:'bg-primary'
    },
    {
        name:"Registered Stake Holders",
        color:'bg-success'
    },
    {
        name:"Politicians To Watch",
        color:'bg-danger'
    },
    {
        name:"Forencis",
        color:'bg-primary'
    },
    {
        name:"E-Voting",
        color:'bg-success'
    }

  ]);

  const [tab, setTab] = useState('chart');
   const [show, setShow] = useState(true);

    const feeds =(e)=>{
      setTab('feedbacks');
      setShow(false);
    }
    const chart =(e)=>{
      setTab('chart');
      setShow(true);
    }

  return (
    <div className="jumbotron my-2" >
      <div className=" card-columns   ">
                    { list.map(({name, color})=>{

                        return(
               <div key={name} className={`card  rounded-4  ${color} my-2  py-5 `}>

                <div className="crd card-body text-justify text-nowrap  text-center">

                  <h6 className=" card-title  text-center text-white">{name}</h6>


                </div>
                </div>
                        )
                    }) }
      </div>
      <div className='bg-white my-3 py-1 border-4 rounded'>
      <span className='mx-3' style={tab !== 'chart' ?{color:'gray', fontWeight:'500'} :{color:'red', borderBottom:'2px solid red', fontWeight:'500'}} onClick={chart}>Chart</span>   <span style={tab !== 'feedbacks' ?{color:'gray', fontWeight:'500'} :{color:'red', borderBottom:'2px solid red', fontWeight:'500'}} onClick={feeds} className='mx-3'>Recent Feedback</span>
      </div>
      <div className='my-2'>

      {show ? < Chart />  : <FeedBacks />}

      </div>
    </div>
  );
}

export default Cards;
