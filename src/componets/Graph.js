import React from "react";
import {Line} from "react-chartjs-2";
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart }            from 'react-chartjs-2'
const Graph=(props)=>{


React.useEffect(()=>{
    console.log(props?.data);
   
    

},[props?.data]);





const cases ={  labels: Object.keys(props?.data?.cases),
    
    datasets: [{
      label: 'cases',
      data: Object.values(props?.data?.cases),
      fill: false,
      borderColor: 'orange',
      tension: 0,
      borderJoinStyle:'bevel'
    }
 ]
}

const deaths ={  labels: Object.keys(props?.data?.deaths),
    
    datasets: [{
      label: 'deaths',
      data: Object.values(props?.data?.deaths),
      fill: false,
      borderColor: 'red',
      tension: 0
    }
 ]
}
    return(
        <div>


     <Line
     height={400}
     width={500}
     data={cases}     
     ></Line>



     <Line
          height={400}
     width={500}
     data={deaths}
     />

        </div>
    )
}

export default Graph;