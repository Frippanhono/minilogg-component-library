import React from "react";
import TeacherCard from "./ui/index.jsx";

export default {
  title: "Components/TeacherCard",
  component: TeacherCard,
};

const Template = (args) => <TeacherCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  // Lägg till default props här om det behövs
  name: "Anna Andersson",
  subject: "Matematik",
  avatarUrl: "https://randomuser.me/api/portraits/women/44.jpg",
};
