import React, { useState } from "react";

//create your first component
export function ToDo() {
	const [task, setTask] = useState("");

	return (
		<>
			<div className="container"></div>
			<input
				type="text"
				required
				value={task}
				onChange={e => setTask(e.target.value)}
			/>
			<p>{task}</p>
		</>
	);
}
