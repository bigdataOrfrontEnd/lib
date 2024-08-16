import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Button, { ButtonProps } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: "primary",
  size: "middle",
  children: "Primary Button",
};

export const Loading = Template.bind({});
Loading.args = {
  type: "danger",
  size: "middle",
  loading: true,
  children: "Loading Button",
};

export const Disabled = Template.bind({});
Disabled.args = {
  type: "default",
  size: "small",
  disabled: true,
  children: "Disabled Button",
};
