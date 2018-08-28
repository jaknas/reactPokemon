import React, { Component } from "react";

export default class Pagination extends Component {
	handleClick = e => {
		console.log(e.target.text);
	};

	render() {
		return (
			<nav>
				<ul className="pagination pagination-lg justify-content-center">
					<li className="page-item">
						<a className="page-link" href="#" onClick={this.handleClick}>
							1
						</a>
					</li>
					<li className="page-item">
						<a className="page-link" href="#" onClick={this.handleClick}>
							2
						</a>
					</li>
					<li className="page-item">
						<a className="page-link" href="#" onClick={this.handleClick}>
							3
						</a>
					</li>
				</ul>
			</nav>
		);
	}
}
