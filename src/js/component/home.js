import React, { useState } from "react";

//create your first component
export function ToDo() {
	const [userInput, setUserInput] = useState("");
	const [task, setTask] = useState([]);

	const handleInfo = () => {
		if (userInput != null) {
			let newArray = [...task, userInput];
			setTask(newArray);
			setUserInput("");
		}
	};

	const deleteTask = id => {
		task.splice(id, 1);
		setTask([...task]);
	};

	return (
		<div>
			<div className="container"></div>
			<input
				type="text"
				required
				value={userInput}
				onChange={e => setUserInput(e.target.value)}
				onKeyPress={e => (e.key === "Enter" ? handleInfo() : "")}
			/>
			{task.map((final, id) => (
				<p onClick={deleteTask} key={id}>
					{final}
					<button onClick={() => deleteTask()}>Delete</button>
				</p>
			))}
		</div>
	);
}
