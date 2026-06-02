import React from "react";
import { Input, Textarea } from "./ui/index.jsx";

const InputStory = ({
  componentType,
  label,
  placeholder,
  hint,
  error,
  type,
  rows,
}) => {
  if (componentType === "textarea") {
    return (
      <Textarea
        label={label}
        placeholder={placeholder}
        hint={hint}
        error={error}
        rows={rows}
      />
    );
  }

  return (
    <Input
      label={label}
      placeholder={placeholder}
      hint={hint}
      error={error}
      type={type}
    />
  );
};

export default {
  title: "Components/Inputs",
  component: InputStory,

  args: {
    componentType: "input",
    label: "Namn",
    placeholder: "Skriv ditt namn",
    hint: "",
    error: "",
    type: "text",
    rows: 4,
  },

  argTypes: {
    componentType: {
      control: { type: "select" },
      options: ["input", "textarea"],
      description: "Vilken komponent som ska visas",
    },
    label: {
      control: "text",
    },
    placeholder: {
      control: "text",
    },
    hint: {
      control: "text",
    },
    error: {
      control: "text",
    },
    type: {
      control: { type: "select" },
      options: ["text", "email", "password"],
    },
    rows: {
      control: { type: "number", min: 2, max: 10 },
    },
  },
};

export const Default = {
  render: (args) => <InputStory {...args} />,
  args: {
    componentType: "input",
    label: "Namn",
    placeholder: "Skriv ditt namn",
  },
};

export const Custom = {
  render: (args) => <InputStory {...args} />,
  args: {
    componentType: "textarea",
    label: "Beskrivning",
    placeholder: "Skriv här...",
    hint: "Max 500 tecken",
    rows: 6,
  },
};
