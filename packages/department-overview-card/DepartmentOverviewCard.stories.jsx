import { DepartmentOverviewCard } from "./ui";

export default {
  title: "Components/DepartmentOverviewCard",
  component: DepartmentOverviewCard,

  args: {
    name: "Snäckan",
    childrenCount: 16,
    teachersCount: 3,
    theme: "Färger och former",
  },

  argTypes: {
    name: {
      control: "text",
      description: "Avdelningens namn",
    },
    childrenCount: {
      control: "number",
      description: "Antal barn",
    },
    teachersCount: {
      control: "number",
      description: "Antal pedagoger",
    },
    theme: {
      control: "text",
      description: "Tema eller projekt",
    },
    childrenLabel: {
      control: "text",
      description: "Anpassad text för barn",
    },
    teachersLabel: {
      control: "text",
      description: "Anpassad text för pedagoger",
    },
    themeLabel: {
      control: "text",
      description: "Anpassad etikett för tema",
    },
  },
};

export const Default = {
  args: {
    name: "Snäckan",
    childrenCount: 16,
    teachersCount: 3,
    theme: "Färger och former",
  },
};

export const Custom = {
  args: {
    name: "Ekorren",
    childrenCount: 20,
    teachersCount: 3,
    childrenLabel: "20 barn (15 heltid, 5 deltid)",
    teachersLabel: "3 pedagoger + 1 vikarie",
    theme: "Naturen runt oss",
    themeLabel: "Pågående projekt",
  },
};
