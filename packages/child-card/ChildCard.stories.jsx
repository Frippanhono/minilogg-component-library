import { ChildCard, CHILD_STATUS_PRESETS } from "./ui";

export default {
  title: "Components/ChildCard",
  component: ChildCard,
  argTypes: {
    status: {
      control: { type: "select" },
      options: [undefined, ...Object.keys(CHILD_STATUS_PRESETS)],
    },
    selected: { control: "boolean" },
  },
};

export const Default = {
  args: {
    name: "Alma Lindberg",
    department: "Snäckan",
    status: "present",
  },
};

export const WithGuardians = {
  args: {
    name: "Noah Karlsson",
    department: "Måsen",
    status: "arriving",
    guardians: ["Sara Karlsson", "Johan Karlsson"],
  },
};

export const WithAvatarImage = {
  args: {
    name: "Liv Bergström",
    department: "Delfinen",
    status: "present",
    avatar: "/images/card-default.svg",
    avatarAlt: "Porträtt av Liv",
  },
};

export const StatusAbsent = {
  args: {
    name: "Elias Holm",
    department: "Krabban",
    status: "absent",
  },
};

export const StatusSick = {
  args: {
    name: "Maja Sundberg",
    department: "Sjöstjärnan",
    status: "sick",
  },
};

export const StatusLeave = {
  args: {
    name: "Vidar Ek",
    department: "Ekorren",
    status: "leave",
  },
};

export const StatusPickedUp = {
  args: {
    name: "Selma Norén",
    department: "Solrosen",
    status: "pickedup",
  },
};

export const CustomStatus = {
  args: {
    name: "Hugo Lind",
    department: "Regnbågen",
    status: { label: "Vilar", tone: "info" },
  },
};

export const WithBodyAndFooter = {
  args: {
    name: "Ines Falk",
    department: "Snäckan",
    status: "present",
    guardians: ["Eva Falk"],
    children: "Allergier: nötter. Vill gärna ha närhet vid lämning.",
    footer: "Senast incheckad 08:12",
  },
};

export const Selected = {
  args: {
    name: "Theo Ahl",
    department: "Måsen",
    status: "present",
    selected: true,
    onClick: () => {},
  },
};

export const NoDepartment = {
  args: {
    name: "Wilma",
    status: "present",
  },
};

export const Grid = {
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: 12,
      }}
    >
      <ChildCard name="Alma Lindberg" department="Snäckan" status="present" />
      <ChildCard name="Noah Karlsson" department="Snäckan" status="arriving" />
      <ChildCard name="Maja Sundberg" department="Snäckan" status="sick" />
      <ChildCard name="Elias Holm" department="Snäckan" status="absent" />
      <ChildCard name="Vidar Ek" department="Snäckan" status="leave" />
      <ChildCard name="Selma Norén" department="Snäckan" status="pickedup" />
    </div>
  ),
};
