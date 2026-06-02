import { Button } from "./ui";

export default {
  title: "Components/Button",
  component: Button,

  args: {
    children: "Klicka här",
    variant: "primary",
    loading: false,
    disabled: false,
  },

  argTypes: {
    children: {
      control: "text",
      description: "Text på knappen",
    },

    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "danger", "ghost"],
      description: "Knappens variant",
    },

    loading: {
      control: "boolean",
      description: "Visar laddningsläge",
    },

    disabled: {
      control: "boolean",
      description: "Inaktiverar knappen",
    },

    onClick: {
      action: "clicked",
    },
  },
};

export const Default = {
  args: {
    children: "Klicka här",
    variant: "primary",
  },
};

export const Custom = {
  args: {
    children: "Anpassad knapp",
    variant: "secondary",
    loading: false,
    disabled: false,
  },
};

export const AllVariants = {
  render: () => (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        flexWrap: "wrap",
        alignItems: "center",
      }}
    >
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="ghost">Ghost</Button>
      <Button disabled>Disabled</Button>
    </div>
  ),
};
