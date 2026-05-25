import { Badge } from "./ui";

export default {
  title: "Components/Badge",
  component: Badge,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["neutral", "info", "success", "warning", "danger"],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    children: { control: "text" },
  },
};

export const Neutral = {
  args: {
    children: "Neutral",
    variant: "neutral",
  },
};

export const Info = {
  args: {
    children: "Info",
    variant: "info",
  },
};

export const Success = {
  args: {
    children: "Aktiv",
    variant: "success",
  },
};

export const Warning = {
  args: {
    children: "Varning",
    variant: "warning",
  },
};

export const Danger = {
  args: {
    children: "Fel",
    variant: "danger",
  },
};

export const Small = {
  args: {
    children: "Small",
    variant: "info",
    size: "sm",
  },
};

export const Medium = {
  args: {
    children: "Medium",
    variant: "info",
    size: "md",
  },
};

export const Large = {
  args: {
    children: "Large",
    variant: "info",
    size: "lg",
  },
};

export const Counter = {
  args: {
    children: "12",
    variant: "danger",
    size: "sm",
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
