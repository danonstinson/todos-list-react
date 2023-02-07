import React from "react";
import "./style.css"

const Tasks = ({ tasks, hideDone, removeTask }) => (
	<ul className="tasks">
		{tasks.map(task => (
			<li
				key={task.id}
				className={`tasks__item${task.done && hideDone
					? " tasks__item--hidden"
					: ""}`
				}>
				<button className=
					"tasks__button tasks__button--done">
					{task.done ? "✓" : ""}
				</button>
				<span className=
					{`task__content${task.done ? " task__content--done" : ""}`
					}>
					{task.content}
				</span>
				<button
					className="tasks__button tasks__button--remove"
					onClick={() => removeTask(task.id)}
				>
					🗑
				</button>
			</li>
		))}
	</ul>
)

export default Tasks;