import React from "react";
import { WeeklySchedule } from "./ui/index.jsx";

export default {
  title: "Components/WeeklySchedule",
  component: WeeklySchedule,
};

import { useState } from "react";

const Template = (args) => {
  const [week, setWeek] = useState(args.week || 22);
  // Synka week-nummer med Storybook Controls
  const handleWeekChange = (e) => setWeek(Number(e.target.value));
  return (
    <div>
      <label style={{ display: "block", marginBottom: 8 }}>
        Vecka:
        <input
          type="number"
          min={1}
          max={53}
          value={week}
          onChange={handleWeekChange}
          style={{ marginLeft: 8, width: 60 }}
        />
      </label>
      <WeeklySchedule {...args} title={`Vecka ${week}`} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  week: 22,
  events: [
    { day: "mon", start: "08:00", end: "09:00", title: "Samling", tone: "info" },
    { day: "mon", start: "09:30", end: "10:00", title: "Läsning", tone: "success" },
    { day: "tue", start: "10:00", end: "11:00", title: "Idrott", tone: "warning" },
    { day: "wed", start: "13:00", end: "14:00", title: "Skapande", tone: "success" },
    { day: "thu", start: "08:00", end: "09:00", title: "Utflykt", tone: "info" },
    { day: "fri", start: "12:00", end: "13:00", title: "Fredagsmys", tone: "danger" },
  ],
};
