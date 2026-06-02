import React from "react";
import { MessageCard } from "./ui/index.jsx";

const defaultActions = (
  <>
    <button
      style={{
        marginRight: 8,
        borderRadius: 8,
        border: "1px solid #222",
        padding: "6px 16px",
        background: "#fff",
      }}
    >
      Markera läst
    </button>
    <button
      style={{
        borderRadius: 8,
        background: "#008060",
        color: "#fff",
        border: "none",
        padding: "6px 16px",
      }}
    >
      Svara
    </button>
  </>
);

export default {
  title: "Components/MessageCard",
  component: MessageCard,

  args: {
    sender: {
      name: "Anna Lärare",
      role: "teacher",
    },
    recipient: {
      name: "Per Persson",
      role: "guardian",
    },
    subject: "Utvecklingssamtal v.24",
    preview:
      "Hej Per! Vill du boka tid för utvecklingssamtal nästa vecka? Jag har tider tisdag eftermiddag och torsdag förmiddag.",
    attachments: 1,
    timestamp: "09:42",
    unread: true,
    actions: defaultActions,
  },

  argTypes: {
    sender: {
      control: "object",
      description: "Avsändare",
    },
    recipient: {
      control: "object",
      description: "Mottagare",
    },
    subject: {
      control: "text",
      description: "Ämne",
    },
    preview: {
      control: "text",
      description: "Förhandsvisning av meddelandet",
    },
    attachments: {
      control: "number",
      description: "Antal bilagor",
    },
    timestamp: {
      control: "text",
      description: "Tidpunkt",
    },
    unread: {
      control: "boolean",
      description: "Oläst meddelande",
    },
    actions: {
      control: false,
    },
  },
};

export const Default = {
  args: {
    sender: {
      name: "Anna Lärare",
      role: "teacher",
    },
    recipient: {
      name: "Per Persson",
      role: "guardian",
    },
    subject: "Utvecklingssamtal v.24",
    preview:
      "Hej Per! Vill du boka tid för utvecklingssamtal nästa vecka? Jag har tider tisdag eftermiddag och torsdag förmiddag.",
    attachments: 1,
    timestamp: "09:42",
    unread: true,
    actions: defaultActions,
  },
};

export const Custom = {
  args: {
    sender: {
      name: "Valfri avsändare",
      role: "teacher",
    },
    recipient: {
      name: "Valfri mottagare",
      role: "guardian",
    },
    subject: "Valfritt ämne",
    preview: "Skriv valfritt meddelande här...",
    attachments: 0,
    timestamp: "12:00",
    unread: false,
    actions: defaultActions,
  },
};
