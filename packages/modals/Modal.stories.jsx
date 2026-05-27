import React from "react";
import { Modal } from "@minilogg/modals";
import { Button } from "@minilogg/buttons";

export default {
  title: "Components/Modal",
  component: Modal,
};

export const Default = (args) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      <Button onClick={() => setOpen(true)}>{args.openButtonText || "Open Modal"}</Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="Exempelmodal"
        footer={<Button onClick={() => setOpen(false)}>Stäng</Button>}
      >
        <p>Detta är en modal från modals-paketet.</p>
      </Modal>
    </div>
  );
};

Default.args = {
  openButtonText: "Open Modal",
};

Default.argTypes = {
  openButtonText: { control: "text", name: "Text på öppna-knapp" },
};
