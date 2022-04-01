import React from "react";
import Button from "./Button";

const Story = {
  title: "Atoms/Button",
  component: Button,
  argTypes: { onClick: { action: "clicked" } },
};

export default Story;

const Template = (args) => <Button {...args}>Click Me</Button>;

export const Primary = Template.bind({});
Primary.args = {};
export const Secondary = Template.bind({});
Secondary.args = { color: "secondary" };
export const Outlined = Template.bind({});
Outlined.args = { variant: "outlined" };
export const Text = Template.bind({});
Text.args = { variant: "text" };
export const Small = Template.bind({});
Small.args = { size: "small" };
export const Medium = Template.bind({});
Medium.args = { size: "medium" };
export const Large = Template.bind({});
Large.args = { size: "large" };
export const Link = Template.bind({});
Link.args = { href: "https://www.google.com/" };
export const Disabled = Template.bind({});
Disabled.args = { disabled: true };
