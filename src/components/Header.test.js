import React from "react";
import Header from "./Header";
import { render, cleanup } from "react-testing-library";

afterEach(cleanup);

test("header displays text to the DOM", () => {
	const mockName = "hello";
	const { getByText } = render(<Header name={mockName} />);
	const headerElement = getByText("hello");
	const headerText = headerElement.textContent;
	expect(headerText).toMatch("hello");
	expect(headerText).not.toMatch("Pokemon List");
});
