import React, { useState, useEffect } from "react";
import Chart from './chart';
import FeedBacks from './feedBackList';

function Cards() {

  const [numberOfFeed, setNumberOfFeed] = useState([])

  useEffect(()=>{
    fetch('http://41.190.25.21:3001/users/allfeedbacks')
    .then(res => res.json())
    .then(data =>{
        setNumberOfFeed(data.feedbacks)
    })
  }, [])




  const [list] = useState([

    {
        name:"Feed Back Portal",
        color:'bg-danger',
        num: numberOfFeed.length

    },
    {
        name:"Aspiring Politicians",
        color:'bg-primary',
        num: 0
    },
    {
        name:"Registered Stake Holders",
        color:'bg-success',
        num: 0
    },
    {
        name:"Politicians To Watch",
        color:'bg-danger',
        num: 0
    },
    {
        name:"Forencis",
        color:'bg-primary',
        num:0
    },
    {
        name:"E-Voting",
        color:'bg-success',
        num:0
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
    <div className="jumbotron" >

    <section >
    <div className="card-cont">
        { list.map(({name, color, num})=>{

                return(
             <div key={name} className={`cardi ${color}`}>
             <p className='spen'>{name}</p>
             <h4 className='span'>
                    {num}
             </h4>
         </div>
                )
        }) }
        </div>
    </section>




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
