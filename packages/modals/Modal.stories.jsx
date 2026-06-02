import React from "react";
import { Modal } from "@minilogg/modals";
import { Button } from "@minilogg/buttons";

const ModalStory = ({ openButtonText, title, content, closeButtonText }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>{openButtonText}</Button>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title={title}
        footer={
          <Button onClick={() => setOpen(false)}>{closeButtonText}</Button>
        }
      >
        <p>{content}</p>
      </Modal>
    </>
  );
};

export default {
  title: "Components/Modal",
  component: ModalStory,

  args: {
    openButtonText: "Öppna modal",
    title: "Exempelmodal",
    content: "Detta är en modal från modals-paketet.",
    closeButtonText: "Stäng",
  },

  argTypes: {
    openButtonText: {
      control: "text",
      description: "Text på knappen som öppnar modalen",
    },
    title: {
      control: "text",
      description: "Modalens rubrik",
    },
    content: {
      control: "text",
      description: "Innehåll i modalen",
    },
    closeButtonText: {
      control: "text",
      description: "Text på stäng-knappen",
    },
  },
};

export const Default = {
  render: (args) => <ModalStory {...args} />,
};

export const Custom = {
  render: (args) => <ModalStory {...args} />,
  args: {
    openButtonText: "Visa information",
    title: "Anpassad modal",
    content: "Här kan du skriva valfritt innehåll.",
    closeButtonText: "Stäng fönster",
  },
};
