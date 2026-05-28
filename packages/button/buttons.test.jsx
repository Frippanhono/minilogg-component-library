import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "@minilogg/buttons";

describe("Button", () => {
  it("renders button with all main props", () => {
    render(<Button variant="secondary" size="sm">Test</Button>);
    const btn = screen.getByRole("button", { name: "Test" });
    expect(btn).toBeInTheDocument();
    expect(btn).toHaveClass("fc-btn--secondary", "fc-btn--sm");
  });

  it("is keyboard focusable and can be activated with Enter/Space", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Kbd</Button>);
    const btn = screen.getByRole("button", { name: "Kbd" });
    btn.focus();
    expect(btn).toHaveFocus();
    await user.keyboard("{Enter}");
    await user.keyboard(" ");
    expect(onClick).toHaveBeenCalledTimes(2);
  });

  it("has appropriate accessibility attributes", () => {
    render(<Button aria-label="A11yBtn">A</Button>);
    const btn = screen.getByRole("button", { name: "A11yBtn" });
    expect(btn).toHaveAttribute("type");
    expect(btn).not.toHaveAttribute("aria-disabled");
    render(<Button disabled aria-label="A11yBtn2">B</Button>);
    const btn2 = screen.getByRole("button", { name: "A11yBtn2" });
    expect(btn2).toBeDisabled();
  });
  it("renders children with default variant and size classes", () => {
    render(<Button>Save</Button>);
    const btn = screen.getByRole("button", { name: "Save" });
    expect(btn).toBeInTheDocument();
    expect(btn).toHaveClass("fc-btn", "fc-btn--primary", "fc-btn--md");
    expect(btn).toHaveAttribute("type", "button");
  });

  it("applies variant, size and extra className", () => {
    render(
      <Button variant="danger" size="lg" className="extra">
        X
      </Button>,
    );
    const btn = screen.getByRole("button", { name: "X" });
    expect(btn).toHaveClass("fc-btn--danger", "fc-btn--lg", "extra");
  });

  it("calls onClick when clicked", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Go</Button>);
    await user.click(screen.getByRole("button", { name: "Go" }));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("does not fire onClick when disabled", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(
      <Button disabled onClick={onClick}>
        Nope
      </Button>,
    );
    const btn = screen.getByRole("button", { name: "Nope" });
    expect(btn).toBeDisabled();
    await user.click(btn);
    expect(onClick).not.toHaveBeenCalled();
  });

  it("forwards rest props (e.g. type=submit, aria-label)", () => {
    render(
      <Button type="submit" aria-label="submit-form">
        S
      </Button>,
    );
    const btn = screen.getByRole("button", { name: "submit-form" });
    expect(btn).toHaveAttribute("type", "submit");
  });
});
