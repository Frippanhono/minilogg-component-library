import React from "react";
import { ToastProvider, useToast } from "@minilogg/toasts";
import { Button } from "@minilogg/buttons";

const ToastDemo = ({ variant, message, buttonText }) => {
  const toast = useToast();

  const handleClick = () => {
    toast.show(message, { variant });
  };

  return (
    <Button variant={variant} onClick={handleClick}>
      {buttonText}
    </Button>
  );
};

export default {
  title: "Components/Toasts",
  component: ToastDemo,

  decorators: [
    (Story) => (
      <ToastProvider position="top-right">
        <Story />
      </ToastProvider>
    ),
  ],

  args: {
    variant: "success",
    message: "Ändringarna har sparats",
    buttonText: "Visa toast",
  },

  argTypes: {
    variant: {
      control: "select",
      options: ["success", "warning", "error"],
      description: "Toast-variant",
    },
    message: {
      control: "text",
      description: "Text som visas i toasten",
    },
    buttonText: {
      control: "text",
      description: "Text på knappen",
    },
  },
};

export const Default = {
  args: {
    variant: "success",
    message: "Ändringarna har sparats",
    buttonText: "Visa toast",
  },
};

export const Custom = {
  args: {
    variant: "warning",
    message: "Skriv valfri text här",
    buttonText: "Testa toast",
  },
};
