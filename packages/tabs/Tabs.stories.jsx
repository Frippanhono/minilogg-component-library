import { Tabs } from "./ui/index.jsx";

const defaultTabs = [
  {
    label: "Översikt",
    icon: "🌼",
    content: (
      <div>
        <h3>Veckans översikt</h3>
        <p>Snabb överblick över barn, närvaro och aktuella aktiviteter.</p>
      </div>
    ),
  },
  {
    label: "Aktiviteter",
    icon: "🎨",
    content: (
      <ul>
        <li>08:30 Morgonsamling</li>
        <li>09:15 Utflykt till skogen</li>
        <li>11:30 Lunch och vila</li>
      </ul>
    ),
  },
  {
    label: "Inställningar",
    icon: "⚙️",
    content: (
      <div>
        <h3>Visa och anpassa</h3>
        <p>
          Tabs stöder valfri startflik och kan användas med eget innehåll i
          varje panel.
        </p>
      </div>
    ),
  },
];

export default {
  title: "Components/Tabs",
  component: Tabs,

  args: {
    tabs: defaultTabs,
    defaultIndex: 0,
  },

  argTypes: {
    tabs: {
      control: "object",
      description: "Array med flikar som innehåller label, icon och content.",
    },
    defaultIndex: {
      control: { type: "number", min: 0, step: 1 },
      description: "Vilken flik som ska vara aktiv från start.",
    },
    onChange: {
      action: "changed",
    },
  },
};

export const Default = {
  render: (args) => <Tabs {...args} />,
  args: {
    tabs: defaultTabs,
    defaultIndex: 0,
  },
};

export const Custom = {
  render: (args) => <Tabs {...args} />,
  args: {
    tabs: [
      {
        label: "Första fliken",
        icon: "⭐",
        content: "Valfritt innehåll",
      },
      {
        label: "Andra fliken",
        icon: "📚",
        content: "Mer innehåll",
      },
      {
        label: "Tredje fliken",
        icon: "⚙️",
        content: "Ännu mer innehåll",
      },
    ],
    defaultIndex: 0,
  },
};
