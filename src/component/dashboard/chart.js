import React, { useState } from "react";
import { Line } from 'react-chartjs-2';

function Chart() {

    const [stateData] = useState({

        labels:['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets:[
            {
                label:'',
                data: [
                    4000,
                    800,
                    1600,
                    700,
                    200,
                    1000,
                    200
                ],
             backgroundColor: "rgba(250, 110, 40,0.7)",
                fill: true,


            }
        ]
    })

  return (
    <div   className=" py-3 m-3 chart" >

            <Line data={stateData} options={{
                responsive:true,
                elements:{
                    point:{
                        radius:0,
                    },
                    line:{
                        fill:false,
                        tension:0.3,
                        backgroundColor:"rgba(90, 190, 250,0.7)",
                        borderColor:"rgba(90, 190, 250,0.7)",
                    }
                }

            }} />
    </div>
  );
}

export default Chart;
