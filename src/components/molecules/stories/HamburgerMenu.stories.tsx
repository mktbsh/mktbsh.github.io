import React from "react";

import { Meta, Story } from "@storybook/react";

import { HamburgerMenu, Props } from "../HamburgerMenu";

export default {
  title: "HamburgerMenu",
} as Meta<Props>;

const Template: Story<Props> = ({ ...args }) => <HamburgerMenu {...args} />;

export const Default = Template.bind({});
Default.args = {
  onClick: () => {
    console.log("メニュー開閉");
  },
};
