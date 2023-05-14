/** @format */

import "./Student.css";
import { useState } from "react";

function Student(props) {
	const [detailVisible, setdetailVisible] = useState(false);

	let porcent = (
		(props.student.codewars.current.total /
			props.student.codewars.goal.total) *
		100
	).toFixed(1);

	function formatDate(dateString) {
		const date = new Date(dateString);
		const formatter = new Intl.DateTimeFormat("en-US", {
			month: "long",
			day: "numeric",
			year: "numeric",
		});
		return formatter.format(date);
	}
	function details(e) {
		e.preventDefault();
		setdetailVisible(!detailVisible);
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
				<a href=" " onClick={details}>
					{detailVisible ? "Show Less..." : "Show more..."}
				</a>

				{detailVisible ? (
					<div className="details">
						<div>
							<p>
								<strong>Codewars</strong>:
							</p>
							<ul>
								<li>
									<p>
										<span>Current Total: </span>
										{props.student.codewars.current.total}
									</p>
								</li>
								<li>
									<p>
										<span>Last Week: </span>
										{
											props.student.codewars.current
												.lastWeek
										}
									</p>
								</li>
								<li>
									<p>
										<span>Goal: </span>
										{props.student.codewars.goal.total}
									</p>
								</li>
								<li>
									<span>Porcent of Goal Achieved: </span>
									<p
										className={
											porcent >= 100
												? "porcentGreen"
												: porcent >= 50
												? "porcentYellow"
												: "porcentRed"
										}>
										{porcent}%
									</p>
								</li>
							</ul>
						</div>
						<div>
							<p>
								<strong>Scores</strong>:
							</p>
							<ul>
								<li>
									<p>
										<span>Assignments: </span>
										{props.student.cohort.scores
											.assignments * 100}
										%
									</p>
								</li>
								<li>
									<p>
										<span>Projects: </span>
										{props.student.cohort.scores.projects *
											100}
										%
									</p>
								</li>
								<li>
									<p>
										<span>Assessments: </span>
										{props.student.cohort.scores
											.assessments * 100}
										%
									</p>
								</li>
							</ul>
						</div>
						<div>
							<p>
								<strong>Certifications</strong>:
							</p>
							<ul>
								<li>
									<p>
										<span>Resume: </span>
										{props.student.certifications.resume
											? "✔️"
											: "❌"}
									</p>
								</li>
								<li>
									<p>
										<span>Linkedin: </span>
										{props.student.certifications.linkedin
											? "✔️"
											: "❌"}
									</p>
								</li>
								<li>
									<p>
										<span>Mock Interview: </span>
										{props.student.certifications
											.mockInterview
											? "✔️"
											: "❌"}
									</p>
								</li>
								<li>
									<p>
										<span>GitHub: </span>
										{props.student.certifications.github
											? "✔️"
											: "❌"}
									</p>
								</li>
							</ul>
						</div>
					</div>
				) : (
					<></>
				)}
			</div>
			<div className="leftSpamStudent">
				<span>
					{props.student.certifications.resume &&
					props.student.certifications.linkedin &&
					props.student.certifications.mockInterview &&
					props.student.certifications.github &&
					props.student.codewars.current.total > 600
						? "On Track to Graduate"
						: ""}
				</span>
			</div>
		</div>
	);
}

export default Student;
