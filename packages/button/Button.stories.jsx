import { Button } from "./ui";

export default {
  title: "Components/Button",
  component: Button,
};

export const Primary = {
  args: {
    children: "Primary",
    variant: "primary",
  },
};

export const Secondary = {
  args: {
    children: "Secondary",
    variant: "secondary",
  },
};

export const Danger = {
  args: {
    children: "Danger",
    variant: "danger",
  },
};

export const Ghost = {
  args: {
    children: "Ghost",
    variant: "ghost",
  },
};

export const Loading = {
  args: {
    children: "Laddar...",
    loading: true,
  },
};
