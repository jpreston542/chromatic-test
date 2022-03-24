---
to: src/components/atoms/<%= name %>/<%= name %>.stories.js
---
import React from "react";
import <%= name %> from "./<%= name %>";

const Story = {
    title: "Atoms/<%= name %>",
    component: <%= name %>
};

export default Story;

const Template = (args) => <<%= name %> {...args} />;

export const Primary = Template.bind({});
Primary.args = {

};
