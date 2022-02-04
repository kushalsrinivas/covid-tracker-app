import react from "react";
import Header from "./componets/Header"
import Country from "./componets/Country"
import LeftBox from "./componets/LeftBox";
function App() {
  const [value, setValue]= react.useState("");
  const [info, setInfo]= react.useState({});
  const [stats,setStats ] =react.useState("");
  const [avail, setAvail] = react.useState(false);
  
  const getInfo=()=>{
    fetch(`https://disease.sh/v3/covid-19/countries/${value}`)
            .then(res => res.json())
            .then(result => {
             setInfo(result);
            });



    fetch(`https://restcountries.com/v3.1/name/${value}`)
          .then(res => res.json())
          .then(result => {
            console.log(result);
            setStats(result);
          });
          setAvail(true)

  }




  react.useEffect(()=>{console.log(info);},[info])

  const handleChange = (e)=>{
    const {value} = e.target;
    setValue(value)
  }

  return (
    <>
    <div className="header-box">

   <Header/>
   <div className="input-box">

   <input
   value={value}
   onChange={handleChange}
   placeholder="country name..."
   onSubmit={
    getInfo
   }
   ></input>
   <button onClick={getInfo} className="input-button">Search</button>
   </div>
    </div>
   
    
     <div className="container">

<LeftBox
info= {info}
avail={avail}
flagEmo={stats[0]?.flag}
/>
<Country
img={stats[0]?.coatOfArms.png}
/>
     </div>
      
    
     
   
   
    </>
  );
}

export default App;
