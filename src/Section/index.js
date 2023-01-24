import React from "react";
import "./style.css";

const Section = ({ title, body, extraHeaderContent }) => (
	<section className="section">
		<header className="section__tools">
			<h2 className="section__header">{title}</h2>
			{extraHeaderContent}
		</header>
		<div className="section__paragraph">
			{body}
		</div>
	</section>
);

export default Section;