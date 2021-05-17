import React, { useState, useEffect } from "react";


function FeedBackList() {

    const [list, setList] = useState([])

    useEffect(()=>{
        fetch('http://41.190.25.21:3001/users/allfeedbacks')
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
            list.map((data)=>{
                return (
                <tr key={data._id} >
                <td> {data.title.toUpperCase()} </td>
                <td> {data.username.toUpperCase()} </td>
                <td> {data.complaintype.toUpperCase()} </td>
                <td> {data.status.toUpperCase()} </td>
                </tr>
                )
            })
        }
            </tbody>
        </table>


    </div>
  );
}

export default FeedBackList;
