//react
import { useState } from "react";

import Dates from "./components/Dates";
import Students from "./components/Students";

import data from "./data/data.json";

import "./App.css";

function App() {
	let cohorts={}
	data.forEach((element)=>{
		if(!cohorts[element.cohort.cohortCode]){
			cohorts[element.cohort.cohortCode]=[]
		}
		cohorts[element.cohort.cohortCode].push(element)
	})

	let [filter, setfilter] = useState("All Students");

	return (
		<>
			<header>
				<h1>Student Dashboard</h1>
			</header>
			<main>
				<Dates cohorts={cohorts} setfilter={setfilter}></Dates>
				<Students
					filter={filter}
					cohorts={cohorts}
					data={data}></Students>
			</main>
		</>
	);
}

export default App;
