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
    <div >
      <div className="row ">
                    { list.map(({name, color})=>{

                        return(
               <div key={name} className={`col-lg-3 col-md-4  px-5  mx-2 d-flex justify-content-center  rounded-3  ${color} my-2  py-5 `}>

                <div className=" bord card-body   text-center">

                  <h6 className=" card-title text-white">{name}</h6>

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
