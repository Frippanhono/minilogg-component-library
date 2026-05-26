import { DepartmentOverviewCard } from "./ui";

export default {
  title: "Components/DepartmentOverviewCard",
  component: DepartmentOverviewCard,
};

export const Default = {
  args: {
    name: "Snäckan",
    childrenCount: 16,
    teachersCount: 3,
    theme: "Färger och former",
  },
};

export const OnlyName = {
  args: {
    name: "Regnbågen",
  },
};

export const WithoutTheme = {
  args: {
    name: "Måsen",
    childrenCount: 12,
    teachersCount: 2,
  },
};

export const WithoutStats = {
  args: {
    name: "Delfinen",
    theme: "Havet och dess invånare",
  },
};

export const SingularCounts = {
  args: {
    name: "Lilla gruppen",
    childrenCount: 1,
    teachersCount: 1,
    theme: "Introduktion",
  },
};

export const OnlyChildren = {
  args: {
    name: "Krabban",
    childrenCount: 18,
    theme: "Skogen",
  },
};

export const OnlyTeachers = {
  args: {
    name: "Sjöstjärnan",
    teachersCount: 4,
    theme: "Planering",
  },
};

export const CustomLabels = {
  args: {
    name: "Ekorren",
    childrenCount: 20,
    teachersCount: 3,
    childrenLabel: "20 barn (15 heltid, 5 deltid)",
    teachersLabel: "3 pedagoger + 1 vikarie",
    theme: "Naturen runt oss",
    themeLabel: "Pågående projekt",
  },
};

export const LongTheme = {
  args: {
    name: "Solrosen",
    childrenCount: 22,
    teachersCount: 4,
    theme:
      "Hållbar utveckling – vi utforskar återvinning, kompostering och hur vi kan ta hand om vår närmiljö tillsammans",
  },
};
