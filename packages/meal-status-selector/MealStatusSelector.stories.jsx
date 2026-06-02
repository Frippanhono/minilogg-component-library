import { MealStatusSelector } from "./ui";

export default {
  title: "Components/MealStatusSelector",
  component: MealStatusSelector,

  args: {
    label: "Hur gick måltiden?",
    defaultValue: undefined,
    value: undefined,
    size: "md",
    disabled: false,
    hideLabel: false,
  },

  argTypes: {
    label: {
      control: "text",
      description: "Texten som visas som label",
    },
    defaultValue: {
      control: { type: "select" },
      options: [undefined, "bra", "okej", "inte-bra"],
      description: "Förvalt värde",
    },
    value: {
      control: { type: "select" },
      options: [undefined, "bra", "okej", "inte-bra"],
      description: "Kontrollerat värde",
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
      description: "Storlek på komponenten",
    },
    disabled: {
      control: "boolean",
      description: "Inaktiverar komponenten",
    },
    hideLabel: {
      control: "boolean",
      description: "Döljer label visuellt",
    },
    onChange: {
      action: "changed",
    },
  },
};

export const Default = {
  args: {
    label: "Hur gick måltiden?",
  },
};

export const Custom = {
  args: {
    label: "Hur gick måltiden?",
    defaultValue: "okej",
    size: "md",
    disabled: false,
    hideLabel: false,
  },
};
