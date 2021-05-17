import React, { useState, useEffect } from "react";


function FeedBackList() {

    const [list, setList] = useState([])

    useEffect(()=>{
        fetch('http://41.190.25.21:3001/users/allfeedbacks?_limit=3')
        .then(res => res.json())
        .then(data =>{
            if(data.feedbacks.length > 0){
                setList(
                    data.feedbacks.slice(0, 5)
                    )
            }
        })
    }, [])


  return (
    <div className="feeds my-2" >
        {
            list.map((data)=>{
                return (
                <div key={data._id} >
                <h3> {data.status} </h3>
                </div>
                )
            })
        }
    </div>
  );
}

export default FeedBackList;
