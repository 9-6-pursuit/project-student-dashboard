/** @format */

import "./Students.css";
import Student from "./Student";

function Students(props) {
	return (
		<div className="students">
			<h2 className="cohort-title">
				{props.filter === "All Students"
					? props.filter
					: props.filter.replace(
							props.filter.slice(
								props.filter.length - 4,
								props.filter.length
							),
							" " +
								props.filter.slice(
									props.filter.length - 4,
									props.filter.length
								)
					  )}
			</h2>

			<p>
				Total Students:
				<span>
					{props.filter === "All Students"
						? props.data.length
						: props.cohorts[props.filter].length}
				</span>
			</p>
			{props.filter === "All Students"
				? props.data.map((element) => {
						return (
							<Student
								key={element.id}
								student={element}></Student>
						);
				  })
				: props.cohorts[props.filter].map((element) => {
						return (
							<Student
								student={element}
								key={element.id}></Student>
						);
				  })}
		</div>
	);
}

export default Students;
