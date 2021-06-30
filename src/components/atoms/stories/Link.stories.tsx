import React from 'react'
import { Meta, Story } from "@storybook/react";

import { Link, LinkProps } from '../Link'


export default {
    title: 'atoms/Link',
} as Meta<LinkProps>

const Template: Story<LinkProps> = ({ ...args }) => <Link {...args} />

export const Home = Template.bind({})
Home.args = {
    name: 'Home',
    href: '/'
}