import React from "react";
import { useState } from "react";
import Header from "./data/components/Header";
import ClassList from "./data/components/ClassList";
import Students from "./data/components/Students";
import studentData from "./data/data.json"


function App() {

  const [displayTheseStudents, setDisplayTheseStudents] = useState(studentData)
// NOTE: JOHN CALLED THIS displayedStudents, setDisplayedStudents


//How do we tell the program what cohort classes to list on the left?
/*
  Create a function (in this case, getCohorts). 
  It will take in a list of (students) and
  we will create and empty object called cohortCounter. 
  We will go through each of the students one by one and any time it is true that that student has a value in student.cohort.cohortCode --which should be all of them--, then what/how?
*/
  // const getCohorts = (students) => {
  //   let cohortCounter = {};
  //   students.forEach(student => {
  //     cohortCounter[student.cohort.cohortCode] = true
  //   })
  //   return Object.keys(cohortCounter)
  // }

  const getCohorts = (students) => {
    let cohortCounter = {}
    studentData.forEach(student => {
      cohortCounter[student.cohort.cohortCode] = true
    })
    return Object.keys(cohortCounter)
  }


/*  ========= FUNCTION: WHICH STUDENTS BELONG TO WHICH COHORT?  ===================
   We want to create a function that will filter all the students by what class they are in (use cohort instead of class so it doesn't get confused with className etc.). We are looking to filter the data with regards to a cohortCode of our choosing. The filter method is boolean. It returns true or false. We are asking: in looking through the data of each student, is that student's cohortCode the same as the one we are looking for?  
        We make the variable filteredList and 
          make it equal to filtering the student data
          as we go through each student
            we return ONLY the student/s that have the cohort code that is equal to the cohortCode that we refernce in the anonymous function.
*/

  const filterStudentsByCohort = (cohortCode) => {
    let filteredList = studentData.filter(student => {
      return student.cohort.cohortCode === cohortCode
    })
    setDisplayTheseStudents(filteredList); 
    return filteredList();
  }


/*
  In addition to returning the filteredList as we see at the end of the filteredStudentsByCohort, we also want to update the state >>>> that is, update setDisplayTheseStudents with the filteredList <<<<
*/


  return (
    <div className="container-fluid">
      <Header />
      <div className = "row">
        <div className="col-4">
          <ClassList 
          students={displayTheseStudents}
          studentData={studentData} 
          cohorts={getCohorts(studentData)} 
          filterStudentsByCohort={filterStudentsByCohort} />
        </div>
        <div className="col-8">
          <Students students={displayTheseStudents}/>
        </div>
      </div>
    </div>
  );
}

export default App;

/*  ==============  MORE NOTES ===============
students={studentData} changes to students={displayTheseStudents} because we only ever want to display the students that the user is interested in and anyway, the default value for displayTheseStudents is the same information is studentData.

*/
