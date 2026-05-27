import React from "react";
import { ToastProvider, useToast } from "@minilogg/toasts";
import { Button } from "@minilogg/buttons";

const variantMessages = {
  success: "Saved!",
  warning: "Heads up!",
  error: "Something failed",
};

export default {
  title: "Components/Toasts",
  decorators: [
    (Story) => (
      <ToastProvider position="top-right">
        <Story />
      </ToastProvider>
    ),
  ],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["success", "warning", "error"],
      description: "Toast-variant",
    },
  },
};

export const Default = (args) => {
  const toast = useToast();
  const handleClick = () => {
    toast.show(variantMessages[args.variant] || "", { variant: args.variant });
  };
  return (
    <Button variant={args.variant} onClick={handleClick}>
      {`Toast: ${args.variant || "success"}`}
    </Button>
  );
};

Default.args = {
  variant: "success",
};
