import React from "react";
import "./style.css";

const Form = () => (
	<form className="form">
		<input
			id="input"
			className="input"
			placeholder="Co jest do zrobienia?"
			autoFocus
		/>
		<button
			id="button"
			className="form__button">Dodaj zadanie
		</button>
	</form >
)

export default Form;