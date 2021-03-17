import React, { useState } from "react";

export function ToDo() {
	const [userInput, setUserInput] = useState("");
	const [task, setTask] = useState([
		"Comer",
		"Estudiar",
		"Hacer bien mis tareas de React"
	]);

	const handleInfo = () => {
		if (userInput != "") {
			let newArray = [...task, userInput];
			setTask(newArray);
			setUserInput("");
		}
	};
	//solucion public support
	// const deleteTask = id => {
	// 	let newTasks = [...task];
	// 	newTasks.splice(id, 1);
	// 	setTask(newTasks);
	// };

	// mi solucion
	const deleteTask = id => {
		task.splice(id, 1);
		setTask([...task]);
	};

	return (
		<div className="card" id="mainCard">
			<div className="card-body"></div>
			<h1 className="card-header">Todo List</h1>
			<input
				className="mb-2"
				type="text"
				required
				value={userInput}
				onChange={e => setUserInput(e.target.value)}
				onKeyPress={e => (e.key === "Enter" ? handleInfo() : "")}
			/>
			{task.map((final, id) => (
				<span className="card-subtitle mb-3" key={id}>
					{final}
					<button onClick={() => deleteTask(id)}>Delete</button>
				</span>
			))}
		</div>
	);
}
