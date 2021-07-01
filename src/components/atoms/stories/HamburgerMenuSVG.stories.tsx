import React from "react";

import { Meta, Story } from "@storybook/react";

import { HamburgerMenuSVG } from "../HamburgerMenuSVG";

export default {
  title: "HamburgerMenuIcon",
} as Meta;

const Template: Story = () => <HamburgerMenuSVG />;

export const Default = Template.bind({});
