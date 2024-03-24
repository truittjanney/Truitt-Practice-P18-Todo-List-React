import React, { useState } from 'react';

// New Component
const Home = () => {
	const [tasks, setTasks] = useState([]);
	const [inputValue, setInputValue] = useState("");

const addTask = () => {
	if(inputValue.trim() !== "") {
		setTasks([...tasks, inputValue]);
		setInputValue("");
	}
};

const removeTask = (index) => {
	const updatedTasks = tasks.filter((_, i) => i !== index);
	setTasks(updatedTasks);
};

return (
	<div>
		<h1>To-Do List:</h1>
		<input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}
		placeholder="Enter a task..."/>
		<button onClick={addTask}>Add Task</button>
		<ul>
			{tasks.map((task, index) => (
				<li key={index}>
					{task}
					<button onClick={() => removeTask(index)}>Remove</button>
				</li>
			))}
		</ul>
	</div>
);
			};

export default Home;
