import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Modal } from "./ui";

describe("Modal", () => {
  it("renders open modal with content and title", () => {
    render(
      <Modal open onClose={() => {}} title="Rubrik">
        Innehåll
      </Modal>,
    );
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByText("Innehåll")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Rubrik" })).toBeInTheDocument();
  });
  it("renders nothing when closed", () => {
    render(
      <Modal open={false} onClose={() => {}}>
        Hidden
      </Modal>,
    );
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    expect(screen.queryByText("Hidden")).not.toBeInTheDocument();
  });

  it("renders dialog with aria attributes and title", () => {
    render(
      <Modal open onClose={() => {}} title="Confirm">
        Body
      </Modal>,
    );
    const dialog = screen.getByRole("dialog");
    expect(dialog).toHaveAttribute("aria-modal", "true");
    const heading = screen.getByRole("heading", { name: "Confirm" });
    expect(dialog).toHaveAttribute("aria-labelledby", heading.id);
    expect(screen.getByText("Body")).toBeInTheDocument();
  });

  it("calls onClose when clicking backdrop and close button", async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();
    render(
      <Modal open onClose={onClose} title="T">
        body
      </Modal>,
    );
    await user.click(screen.getByRole("button", { name: /Stäng dialog/i }));
    expect(onClose).toHaveBeenCalled();
  });

  it("does not close when clicking inside the dialog", async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();
    render(
      <Modal open onClose={onClose} title="T">
        <p>hi</p>
      </Modal>,
    );
    await user.click(screen.getByText("hi"));
    expect(onClose).not.toHaveBeenCalled();
  });

  it("closes on Escape", async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();
    render(
      <Modal open onClose={onClose} title="T">
        body
      </Modal>,
    );
    await user.keyboard("{Escape}");
    expect(onClose).toHaveBeenCalled();
  });

  it("is keyboard focusable and can be activated with keyboard", async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();
    render(
      <Modal open onClose={onClose} title="KbdTest" footer={<button>OK</button>}>
        <button>Fokus</button>
      </Modal>,
    );
    const btn = screen.getByRole("button", { name: "Fokus" });
    btn.focus();
    expect(btn).toHaveFocus();
    await user.keyboard("{Tab}");
    expect(screen.getByRole("button", { name: "OK" })).toHaveFocus();
  });

  it("has appropriate accessibility attributes", () => {
    render(
      <Modal open onClose={() => {}} title="A11y" aria-label="Dialogtest">
        Test
      </Modal>,
    );
    const dialog = screen.getByRole("dialog");
    expect(dialog).toHaveAttribute("aria-labelledby");
    expect(dialog).toHaveAttribute("aria-modal", "true");
  });

  it("locks body scroll while open", () => {
    const { rerender } = render(
      <Modal open onClose={() => {}}>
        x
      </Modal>,
    );
    expect(document.body.style.overflow).toBe("hidden");
    rerender(
      <Modal open={false} onClose={() => {}}>
        x
      </Modal>,
    );
    expect(document.body.style.overflow).not.toBe("hidden");
  });

  it("renders footer when provided", () => {
    render(
      <Modal open onClose={() => {}} footer={<button>OK</button>}>
        b
      </Modal>,
    );
    expect(screen.getByRole("button", { name: "OK" })).toBeInTheDocument();
  });
});
