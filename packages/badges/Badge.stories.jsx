import { Badge } from "./ui";

export default {
  title: "Components/Badge",
  component: Badge,

  args: {
    children: "Badge",
    variant: "neutral",
    size: "md",
  },

  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["neutral", "info", "success", "warning", "danger"],
    },

    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },

    children: {
      control: "text",
    },
  },
};

export const Default = {
  args: {
    children: "Aktiv",
    variant: "success",
    size: "md",
  },
};

export const Custom = {
  args: {
    children: "Anpassad badge",
    variant: "info",
    size: "md",
  },
};

export const AllVariants = {
  render: () => (
    <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
      <Badge variant="neutral">Neutral</Badge>
      <Badge variant="info">Info</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="danger">Danger</Badge>
    </div>
  ),
};
