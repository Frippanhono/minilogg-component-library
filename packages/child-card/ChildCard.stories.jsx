import { ChildCard, CHILD_STATUS_PRESETS } from "./ui";

export default {
  title: "Components/ChildCard",
  component: ChildCard,

  args: {
    name: "Alma Lindberg",
    department: "Snäckan",
    status: "present",
    selected: false,
  },

  argTypes: {
    name: {
      control: "text",
      description: "Barnets namn",
    },

    department: {
      control: "text",
      description: "Avdelning",
    },

    status: {
      control: { type: "select" },
      options: [undefined, ...Object.keys(CHILD_STATUS_PRESETS)],
      description: "Barnets status",
    },

    guardians: {
      control: "object",
      description: "Vårdnadshavare",
    },

    avatar: {
      control: "text",
      description: "URL till profilbild",
    },

    avatarAlt: {
      control: "text",
      description: "Alt-text för profilbild",
    },

    children: {
      control: "text",
      description: "Extra information",
    },

    footer: {
      control: "text",
      description: "Footer-text",
    },

    selected: {
      control: "boolean",
      description: "Markerad",
    },

    onClick: {
      action: "clicked",
    },
  },
};

export const Default = {
  args: {
    name: "Alma Lindberg",
    department: "Snäckan",
    status: "present",
  },
};

export const Custom = {
  args: {
    name: "Noah Karlsson",
    department: "Måsen",
    status: "arriving",
    guardians: ["Sara Karlsson", "Johan Karlsson"],
    children: "Allergier: nötter. Vill gärna ha närhet vid lämning.",
    footer: "Senast incheckad 08:12",
    selected: false,
  },
};
