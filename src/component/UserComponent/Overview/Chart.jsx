import React, { useState } from "react";
import { Bar } from 'react-chartjs-2';

function OverviewChart() {

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
             backgroundColor: "rgba(252, 253, 10, 0.412712)",
                fill: true,


            }
        ]
    })

  return (
    <div   className=" py-3 m-3 chart" >

            <Bar data={stateData} options={{
                responsive:true,
                elements:{
                    point:{
                        radius:0,
                    },
                    line:{
                        fill:false,
                        tension:0.3,
                        backgroundColor:'rgba(230, 200, 9, 0.6)',
                        borderColor:'rgba(200, 205, 10, 0.6)'
                    }
                }

            }} />
    </div>
  );
}

export default OverviewChart;
