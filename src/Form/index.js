import React, { useState, useRef } from "react";
import "./style.css";

const Form = ({ addNewTask }) => {
	const [newTaskContent, setNewTaskContent] = useState("");

	const onFormSubmit = (event) => {
		event.preventDefault();

		if (newTaskContent.trim() !== "")
			addNewTask(newTaskContent.trim());
		setNewTaskContent("");
	};

	const inputRef = useRef(null);

	const focusInput = () => {
		inputRef.current.focus();
	};

	return (
		<form
			className="form"
			onSubmit={onFormSubmit}
		>
			<input
				value={newTaskContent}
				className="input"
				placeholder="Co jest do zrobienia?"
				onChange={({ target }) => setNewTaskContent(target.value)}
				ref={inputRef}
			/>
			<button
				className="form__button"
				onClick={focusInput}
			>Dodaj zadanie
			</button>
		</form >
	);
};

export default Form;