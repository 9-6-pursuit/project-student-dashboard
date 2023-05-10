/** @format */

import "./Dates.css";

function Dates(props) {
	let cohorts = Object.keys(props.cohorts);

	cohorts.sort(
		(a, b) =>
			parseInt(a.slice(a.length - 4, a.length)) -
			parseInt(b.slice(a.length - 4, a.length))
	);

	function changeFilter(filter) {
		props.setfilter(filter);
	}

	return (
		<div className="dates">
			<h2>Choose a Class by Start Date</h2>
			<ul>
				<li>
					<button
						onClick={() => {
							changeFilter("All Students");
						}}>
						All Students
					</button>
				</li>
				{cohorts.map((element) => {
					return (
						<li key={element}>
							<button
								onClick={() => {
									changeFilter(element);
								}}>
								{element.replace(
									element.slice(
										element.length - 4,
										element.length
									),
									" " +
										element.slice(
											element.length - 4,
											element.length
										)
								)}
							</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default Dates;
