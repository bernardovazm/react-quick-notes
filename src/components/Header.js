import React from "react";
import { IoMdBulb } from "react-icons/io";

const Header = ({ handleToggleDarkMode }) => {
	return (
		<div className="header">
			<div className="logo">
				<IoMdBulb className="icon" size="2.0em" />
				<h1>Quick Notes</h1>
			</div>
			<button
				onClick={() =>
					handleToggleDarkMode(
						(previousDarkMode) => !previousDarkMode
					)
				}
				className="save"
			>
				Background Claro/Escuro
			</button>
		</div>
	);
};

export default Header;
