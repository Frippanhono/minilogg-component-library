import { useState } from "react";
import { MealStatusSelector } from "./ui";

export default {
  title: "Components/MealStatusSelector",
  component: MealStatusSelector,
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    value: {
      control: { type: "select" },
      options: [undefined, "bra", "okej", "inte-bra"],
    },
    disabled: { control: "boolean" },
    hideLabel: { control: "boolean" },
    label: { control: "text" },
    onChange: { action: "changed" },
  },
};

export const Default = {
  args: {
    label: "Hur gick måltiden?",
  },
};

export const WithDefaultValue = {
  args: {
    label: "Hur gick måltiden?",
    defaultValue: "bra",
  },
};

export const Small = {
  args: {
    label: "Hur gick måltiden?",
    defaultValue: "okej",
    size: "sm",
  },
};

export const Large = {
  args: {
    label: "Hur gick måltiden?",
    defaultValue: "inte-bra",
    size: "lg",
  },
};

export const Disabled = {
  args: {
    label: "Hur gick måltiden?",
    defaultValue: "okej",
    disabled: true,
  },
};

export const HiddenLabel = {
  args: {
    label: "Hur gick måltiden?",
    hideLabel: true,
  },
};

export const CustomOptions = {
  args: {
    label: "Hur mår du idag?",
    options: [
      { value: "glad", label: "Glad", icon: "😀", tone: "good" },
      { value: "sådär", label: "Sådär", icon: "😐", tone: "ok" },
      { value: "ledsen", label: "Ledsen", icon: "😢", tone: "bad" },
    ],
  },
};

export const Controlled = {
  render: (args) => {
    const [value, setValue] = useState("bra");
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        <MealStatusSelector {...args} value={value} onChange={setValue} />
        <p style={{ margin: 0 }}>
          Valt värde: <strong>{value}</strong>
        </p>
      </div>
    );
  },
  args: {
    label: "Hur gick måltiden?",
  },
};
