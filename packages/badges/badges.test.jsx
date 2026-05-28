import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Badge } from "./ui";

describe("Badge", () => {
  it("renders children with default classes", () => {
    render(<Badge>New</Badge>);
    const el = screen.getByText("New");
    expect(el.tagName).toBe("SPAN");
    expect(el).toHaveClass("fc-badge", "fc-badge--neutral", "fc-badge--md");
  });

  it("applies variant and size", () => {
    render(
      <Badge variant="success" size="lg">
        Ok
      </Badge>,
    );
    const el = screen.getByText("Ok");
    expect(el).toHaveClass("fc-badge--success", "fc-badge--lg");
  });

  it("merges custom className and forwards rest props", () => {
    render(
      <Badge className="extra" data-testid="b" title="hi">
        Hi
      </Badge>,
    );
    const el = screen.getByTestId("b");
    expect(el).toHaveClass("extra");
    expect(el).toHaveAttribute("title", "hi");
  });

  it("supports click events if onClick is provided", async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    render(<Badge onClick={handleClick}>Clickable</Badge>);
    const el = screen.getByText("Clickable");
    await user.click(el);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("is focusable and supports keyboard activation if tabIndex and onClick are set", async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    render(
      <Badge tabIndex={0} onClick={handleClick} data-testid="kbd">
        Focus me
      </Badge>,
    );
    const el = screen.getByTestId("kbd");
    el.focus();
    expect(el).toHaveFocus();
    await user.keyboard("{Enter}");
    expect(handleClick).toHaveBeenCalled();
  });

  it("has appropriate accessibility attributes", () => {
    render(<Badge aria-label="Status: aktiv">A</Badge>);
    const el = screen.getByLabelText("Status: aktiv");
    expect(el).toBeInTheDocument();
  });
});
