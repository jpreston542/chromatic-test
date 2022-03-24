---
to: src/components/templates/<%= name %>/<%= name %>.test.js
---
/**
 * @jest-environment jsdom
 */
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, cleanup } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";
import * as stories from "./<%= name %>.stories";

const { Primary } = composeStories(stories);

describe("<%= name %> component", () => {
  afterEach(cleanup);
  it("should render a component", () => {
    render(<Primary />);
    const element = screen.getByLabelText("<%= name %>-root");
    expect(element).toBeInTheDocument();
  });
});