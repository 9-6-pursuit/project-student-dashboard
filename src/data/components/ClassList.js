
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
                  <td className="table border-bottom border-success border-2" onClick= { () => {filterStudentsByCohort()}}>All Students</td>
                </tr>

                {cohorts.map((cohort)=>{
                    return (
                        <tr className="table border-bottom border-success border-2" key={cohort} onClick={ ()=> {filterStudentsByCohort(cohort)}}><td>  {cohort.substring(0, cohort.length - 4) + " " + cohort.substring(cohort.length - 4, cohort.length)}</td></tr>
                    )})} 

            </tbody>
        </table>
    </div>

    </>
  )
}

export default ClassList

/* Code I didn't use:


        <div className="table table-responsive table-striped table-bordered table-hover border-bottom border border-success border-2">
        
            <table className="table table-bordered align-middle border-bottom border border-success border-2">
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
