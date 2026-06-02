import React from "react";
import { TeacherCard, TEACHER_TITLE_PRESETS } from "./ui";

export default {
  title: "Components/TeacherCard",
  component: TeacherCard,

  args: {
    name: "Anna Andersson",
    title: "forskollarare",
    department: "Solstrålen",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },

  argTypes: {
    name: {
      control: "text",
      description: "Lärarens namn",
    },
    title: {
      control: { type: "select" },
      options: ["", ...Object.keys(TEACHER_TITLE_PRESETS)],
      description: "Rolltitel eller preset-nyckel",
    },
    department: {
      control: "text",
      description: "Avdelning",
    },
    avatar: {
      control: "text",
      description: "URL till profilbild",
    },
  },
};

export const Default = {
  args: {
    name: "Anna Andersson",
    title: "forskollarare",
    department: "Solstrålen",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
};

export const Custom = {
  args: {
    name: "Valfritt namn",
    title: "specialpedagog",
    department: "Valfri avdelning",
    avatar: "",
  },
};
