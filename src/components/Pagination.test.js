import React from "react";
import { Provider } from "react-redux";
import Pagination from "./Pagination";
import { render, cleanup, fireEvent } from "react-testing-library";
import store from "../store";

afterEach(cleanup);

test("plus button on pagination component adds new page", () => {
	const { getByText, container } = render(
		<Provider store={store}>
			<Pagination />
		</Provider>
	);

	const plusButton = getByText("+");
	fireEvent.click(plusButton);
	expect(container.querySelectorAll("li")).toHaveLength(6);
	fireEvent.click(plusButton);
	expect(container.querySelectorAll("li")).toHaveLength(7);
	fireEvent.click(plusButton);
	fireEvent.click(plusButton);
	expect(container.querySelectorAll("li")).toHaveLength(8);
});
