/** @format */

import "./Student.css";

function Student(props) {
	function formatDate(dateString) {
        const date = new Date(dateString);
        const formatter = new Intl.DateTimeFormat("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
        });
        return formatter.format(date);
    }

	return (
		<div className="student">
			<img src={props.student.profilePhoto} alt="profilePhoto" />
			<div>
				<strong>
					{props.student.names.preferredName +
						" " +
						props.student.names.middleName[0]}
					. {props.student.names.surname}
				</strong>
				<p>{props.student.username}</p>
				<p>
					<span>Birthday: </span>
					{formatDate(props.student.dob)}
				</p>
				<a href=" ">Show more...</a>
			</div>
		</div>
	);
}

export default Student;
