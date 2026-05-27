import React from "react";
import { MessageCard } from "./ui/index.jsx";

export default {
  title: "Components/MessageCard",
  component: MessageCard,
  argTypes: {
    senderName: { control: "text", name: "Avsändare namn" },
    senderRole: { control: { type: "select", options: ["teacher", "guardian", "child", "admin", "system"] }, name: "Avsändare roll" },
    recipientName: { control: "text", name: "Mottagare namn" },
    recipientRole: { control: { type: "select", options: ["teacher", "guardian", "child", "admin", "system"] }, name: "Mottagare roll" },
    subject: { control: "text", name: "Ämne" },
    preview: { control: "text", name: "Meddelande" },
    attachments: { control: "number", name: "Bilagor" },
    timestamp: { control: "text", name: "Tid" },
    unread: { control: "boolean", name: "Oläst" },
    actions: { control: false },
  },
};

const Template = (args) => <MessageCard {...args} />;

export const Default = Template.bind({});

Default.args = {
  sender: { name: "Anna Lärare", role: "teacher" },
  recipient: { name: "Per Persson", role: "guardian" },
  subject: "Utvecklingssamtal v.24",
  preview: "Hej Per! Vill du boka tid för utvecklingssamtal nästa vecka? Jag har tider tisdag eftermiddag och torsdag förmiddag.",
  attachments: 1,
  timestamp: "09:42",
  unread: true,
  actions: (
    <>
      <button style={{ marginRight: 8, borderRadius: 8, border: '1px solid #222', padding: '6px 16px', background: '#fff' }}>Markera läst</button>
      <button style={{ borderRadius: 8, background: '#008060', color: '#fff', border: 'none', padding: '6px 16px' }}>Svara</button>
    </>
  ),
};

export const Playground = Template.bind({});
Playground.args = {
  sender: { name: "Anna Lärare", role: "teacher" },
  recipient: { name: "Per Persson", role: "guardian" },
  subject: "Utvecklingssamtal v.24",
  preview: "Hej Per! Vill du boka tid för utvecklingssamtal nästa vecka? Jag har tider tisdag eftermiddag och torsdag förmiddag.",
  attachments: 1,
  timestamp: "09:42",
  unread: true,
  actions: (
    <>
      <button style={{ marginRight: 8, borderRadius: 8, border: '1px solid #222', padding: '6px 16px', background: '#fff' }}>Markera läst</button>
      <button style={{ borderRadius: 8, background: '#008060', color: '#fff', border: 'none', padding: '6px 16px' }}>Svara</button>
    </>
  ),
};
Playground.argTypes = {
  sender: { control: 'object', name: 'Avsändare' },
  recipient: { control: 'object', name: 'Mottagare' },
  subject: { control: 'text', name: 'Ämne' },
  preview: { control: 'text', name: 'Meddelande' },
  attachments: { control: 'number', name: 'Bilagor' },
  timestamp: { control: 'text', name: 'Tid' },
  unread: { control: 'boolean', name: 'Oläst' },
  actions: { control: false },
};
