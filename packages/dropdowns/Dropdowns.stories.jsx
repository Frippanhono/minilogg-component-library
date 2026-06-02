import React from "react";
import { Dropdown } from "./ui/index.jsx";

const defaultItems = [
  { label: "Edit", value: "edit" },
  { label: "Duplicate", value: "duplicate" },
  { label: "Archive", value: "archive" },
  { label: "Delete", value: "delete", disabled: true },
];

export default {
  title: "Components/Dropdown",
  component: Dropdown,

  args: {
    items: defaultItems,
    label: "Choose action",
  },

  argTypes: {
    items: {
      control: "object",
      description: "Array med dropdown-alternativ",
    },
    label: {
      control: "text",
      description: "Text på dropdown-knappen",
    },
  },
};

export const Default = {
  args: {
    items: defaultItems,
    label: "Choose action",
  },
};

export const Custom = {
  args: {
    items: [
      { label: "First", value: "first" },
      { label: "Second", value: "second" },
      { label: "Third", value: "third" },
      { label: "Fourth", value: "fourth" },
    ],
    label: "Custom label",
  },
};
