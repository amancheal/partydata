import React, { useState } from "react";

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

  return (
    <div className="jumbotron my-2" >
      <div className=" card-columns   ">
                    { list.map(({name, color})=>{

                        return(
               <div key={name} className={`card    rounded-4  ${color} my-2  py-5 `}>

                <div className=" card-body  text-center">

                  <h6 className=" card-title  text-center text-white">{name}</h6>

                <div className=''>

                    </div>
                </div>
                </div>
                        )
                    }) }




      </div>
    </div>
  );
}

export default Cards;
