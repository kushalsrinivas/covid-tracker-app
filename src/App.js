import react from "react";
import LeftBox from "./componets/LeftBox";
import Header from "./componets/Header";
import Graph from "./componets/Graph";
import {ErrorBoundary} from 'react-error-boundary'
import { logDOM } from "@testing-library/react";
const App = ()=>{
    const [text, setText] = react.useState("");
    const [query,setQuery] = react.useState();
    const [historical, setHistorical] = react.useState({});
    const [info, setInfo] = react.useState({});
    const [avail, setAvail] = react.useState(false);
    
    
    function ErrorFallback({error, resetErrorBoundary}) {
      return (
        <div role="alert">
          <p>Something went wrong:</p>
          <pre>{error.message}</pre>
          <button onClick={resetErrorBoundary}>Try again</button>
        </div>
      )
    }
    
    const HandleChange=(e)=>{
        const {value}=  e.target;
        setText(`${value.charAt(0).toUpperCase()}${value.slice(1)}`);
    }
    const getHistory = async()=>{
         await fetch(`https://disease.sh/v3/covid-19/historical/${text}?lastdays=365`)
         .then(res=>res.json())
         .then(data=>{
             setHistorical(data);

         })
    }
    const getInfo= async()=>{
await fetch(`https://disease.sh/v3/covid-19/countries/${text}`)
.then(res => res.json())
.then(data => {
    setInfo(data);

    setAvail(true);
})




    }



    const HandleSubmit = (e)=>{

        getInfo();
        getHistory();

    }

    


    return(
        <div>
            <div className="header-box">
                <Header/>
                    <div className="input-box">
                        <input placeholder="Country name" value={text} onChange={HandleChange}/>
                        <button onClick={HandleSubmit}>Search</button>
                    </div>
            </div>
            <div className="container">

            <div className="left-box">
            {avail &&
            <LeftBox info={info} avail={avail}/>
            }
            </div>
            <div className="center-box">

<ErrorBoundary 
fallback={ErrorFallback}
onReset={()=>{
getHistory();
}}>

                {
                    avail &&
                    <Graph data={historical?.timeline}/>
                }
</ErrorBoundary>

            </div>
            </div>
        </div>
    )
}

export default App;