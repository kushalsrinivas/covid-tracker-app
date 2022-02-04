const LeftBox= (props)=>{
    const {
        country,
        cases,
        activePerOneMillion,
        casesPerOneMillion,
        critical,
        criticalPerOneMillion,
        deaths,
        deathsPerOneMillion,
        oneCasePerPeople,
        oneDeathPerPeople,
        oneTestPerPeople,
        population,
        recovered,
        recoveredPerOneMillion,
        tests,
        testsPerOneMillion,
        active

    
    
    } = props.info;


if(!props){
    return <div></div>
}
    return(
        <div className="left-box">
        {
             props.avail && 
            (

            <>
            <h1>{country}{props.flagEmo}</h1>
            <div className="content">

            <h3>population :{population}</h3>
            <h3>cases :{cases}</h3>
            <h3>critical:{critical}</h3>
            <h3>deaths :{deaths}</h3>
            <h3>recovered :{recovered}</h3>
            <h3>active :{active}</h3>
            <h3>tests :{tests}</h3>
            <h3>cases per million :{casesPerOneMillion}</h3>
            <h3>active per million:{activePerOneMillion}</h3>
            <h3>critical per million:{criticalPerOneMillion}</h3>
            <h3>recovered per million :{recoveredPerOneMillion}</h3>
            <h3>deaths per million:{deathsPerOneMillion}</h3>
            <h3>tests per million :{testsPerOneMillion}</h3>
            <h3>cases per people :{oneCasePerPeople}</h3>
            <h3>deaths per people :{oneDeathPerPeople}</h3>
            <h3>tests per people :{oneTestPerPeople}</h3>
            </div>
            
            </>
            )
     
        }



        </div>
    )
}

export default LeftBox;