import React from "react";

function Timeout() {

  const cust = {
    fontSize: "2em",
    color: "rgb(100, 200, 60)",
    marginLeft:"9em"
  };



  return (
    <div >
      <div  className="section py-6">
        <div style={cust} className="my-6">
          <h1 className='' > Error 404..!!!!!  &#128526;</h1>
          <h1 className=''> Service Timed Out.. Visit the right page</h1>
        </div>
      </div>
    </div>
  );
}

export default Timeout;
