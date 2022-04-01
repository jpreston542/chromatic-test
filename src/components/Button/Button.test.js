/**
 * @jest-environment jsdom
 */
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, cleanup } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";
import userEvent from "@testing-library/user-event";
import createCustomTheme from "@theme/index";
import * as stories from "./Button.stories";

const { palette } = createCustomTheme();
const { Primary, Secondary, Disabled } = composeStories(stories);

describe("button component", () => {
  afterEach(cleanup);
  it("should render a component", () => {
    expect.assertions(2);
    render(<Primary />);
    const button = screen.getByTestId("Button-root");
    expect(button).toBeInTheDocument();
    expect(button).not.toBeDisabled();
  });
  it("should call the provided click handler when button is clicked", () => {
    expect.assertions(1);
    const onClick = jest.fn();
    render(<Primary onClick={onClick} />);
    const button = screen.getByTestId("Button-root");
    userEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
  it("should render a button the color of color prop provided", () => {
    expect.assertions(1);
    render(<Secondary />);
    const { color } = Secondary.args;
    const button = screen.getByTestId("Button-root");
    expect(button).toHaveStyle(`background-color: ${palette[color].main}`);
  });
  it("should render a button with primary color if no color prop is provided", () => {
    expect.assertions(1);
    render(<Primary />);
    const button = screen.getByTestId("Button-root");
    expect(button).toHaveStyle(`background-color: ${palette.primary.main}`);
  });
  it("should render a disabled button when disabled prop is true", () => {
    expect.assertions(1);
    render(<Disabled />);
    const button = screen.getByTestId("Button-root");
    expect(button).toBeDisabled();
  });
});
