import React from "react";
import { Button } from "@chakra-ui/react";

export default {
  title: "Chakra/Button",
  component: Button,
  argTypes: {
    colorScheme: { type: "text" },
    control: { type: "text" },
    variantColor: {}
  },
};

const Template = (args) => <Button {...args} />;

export const Success = () => <Button colorScheme="green">Success</Button>;
Success.args = {
  colorScheme: "green",
  children: "Success",
};

export const Warning = () => <Button colorScheme="yellow">Warning</Button>;
export const Danger = () => <Button colorScheme="red">Danger</Button>;
