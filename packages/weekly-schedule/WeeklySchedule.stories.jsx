import React from "react";
import { WeeklySchedule } from "./ui/index.jsx";

const defaultEvents = [
  { day: "mon", start: "08:00", end: "09:00", title: "Samling", tone: "info" },
  {
    day: "mon",
    start: "09:30",
    end: "10:00",
    title: "Läsning",
    tone: "success",
  },
  {
    day: "tue",
    start: "10:00",
    end: "11:00",
    title: "Idrott",
    tone: "warning",
  },
  {
    day: "wed",
    start: "13:00",
    end: "14:00",
    title: "Skapande",
    tone: "success",
  },
  { day: "thu", start: "08:00", end: "09:00", title: "Utflykt", tone: "info" },
  {
    day: "fri",
    start: "12:00",
    end: "13:00",
    title: "Fredagsmys",
    tone: "danger",
  },
];

export default {
  title: "Components/WeeklySchedule",
  component: WeeklySchedule,

  args: {
    title: "Vecka 22",
    week: 22,
    events: defaultEvents,
  },

  argTypes: {
    title: {
      control: "text",
      description: "Rubriken som visas över schemat",
    },
    week: {
      control: { type: "number", min: 1, max: 53 },
      description: "Veckonummer",
    },
    events: {
      control: "object",
      description: "Lista med schemahändelser",
    },
  },
};

export const Default = {
  name: "Default",
  args: {
    title: "Vecka 22",
    week: 22,
    events: defaultEvents,
  },
};

export const Custom = {
  name: "Custom",
  args: {
    title: "Mitt anpassade schema",
    week: 22,
    events: [
      {
        day: "mon",
        start: "08:00",
        end: "09:00",
        title: "Egen aktivitet",
        tone: "info",
      },
    ],
  },
};
