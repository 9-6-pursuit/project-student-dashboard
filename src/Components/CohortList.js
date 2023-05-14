export default function CohortList({getCohortList}) {
    
   

  return (
    <div className="CohortList">
      <h1>Choose a Class by Start Date.</h1>
      <h2 onClick={() => getCohortList("AllStudents")}>All Students</h2>
        <hr></hr>
      <h2 onClick={() => getCohortList("Winter2026")}>Winter 2026</h2>
        <hr></hr>
      <h2 onClick={() => getCohortList("Fall2026")}>Fall 2026</h2>
        <hr></hr>
      <h2 onClick={() => getCohortList("Summer2026")}>Summer 2026</h2>
        <hr></hr>
      <h2 onClick={() => getCohortList("Spring2026")}>Spring 2026</h2>
        <hr></hr>
      <h2 onClick={() => getCohortList("Winter2025")}>Winter 2025</h2>
        <hr></hr>
      <h2 onClick={() => getCohortList("Fall2025")}>Fall 2025</h2>
        <hr></hr>
      <h2 onClick={() => getCohortList("Summer2025")}>Summer 2025</h2>
        <hr></hr>
      <h2 onClick={() => getCohortList("Spring2025")}>Spring 2025</h2>
        <hr></hr>
    </div>
  );
}
