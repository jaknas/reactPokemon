import React from "react";

export default ({ name }) => {
	return (
		<h1 className="display-3" style={{ textAlign: "center" }} id="header">
			{name}
		</h1>
	);
};
