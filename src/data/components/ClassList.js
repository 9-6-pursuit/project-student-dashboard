
 function ClassList({cohorts, filterStudentsByCohort}) {


  return (
    <>
{/* 
{cohorts.map((cohort)=> {
    return (
        {<li key={cohort} onClick={()=> { filterStudentsByCohort(cohort)
        }}
             cohort.substring(0, cohort.length - 4) + " " + cohort.substring(cohort.length - 4, cohort.length)}
    )
})
 } */}

<ul>
    <li>Number of cohorts: {cohorts.length}</li>
    {cohorts.map((cohort)=> {
        return (
            <li key={cohort}>{cohort}</li>
        )
    })}
</ul>

    <div className="container">      
        <table className="table table-hover">
            <thead>
                <tr>
                  <th>Choose a Class by Start Date</th>
                </tr>
            </thead>

{/* Since each of these <tr>s each have exactly one <td>, the entire row is also a cell. I(f there were two <td>s, then there would be two columns. */}

            <tbody>
                <tr>
                  <td>All Students</td>
                </tr>

                {cohorts.map((cohort)=>{
                    return (
                        <tr className="table" key={cohort}><td>{cohort}</td></tr>
                    )})} 

            </tbody>
        </table>
    </div>

    </>
  )
}

export default ClassList

/* Code I didn't use:


        <div className="table table-responsive table-striped table-bordered table-hover">
        
            <table className="table table-bordered align-middle">
                <thead className="title">
                    <tr>
                        <td>Choose a Class by Start Date</td>
                    </tr>
                </thead>
                <tbody>
                    <tr><td><u>All Students</u></td></tr>
                    <tr><td>Map through class dates somehow</td></tr>
                    <tr className="align-bottom"><td>Map through class dates somehow</td></tr>
                </tbody>
            </table>
        </div>






<div className="container">   
  <div className="row">
    <div className="col">
        One of three columns
    </div>
    <div className="col">
        Two of three columns
    </div>
    <div className="col">
        Three of three columns
    </div>
  </div>
</div>



                {/* <tr> {cohorts.map((cohort)=>{
                    return (
                        <td key={cohort}>{cohort}</td>
                    )})} 
                </tr> 



*/
