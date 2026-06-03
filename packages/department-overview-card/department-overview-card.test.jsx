import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { DepartmentOverviewCard } from "./ui";

describe("DepartmentOverviewCard", () => {
  it("renders department name, stats and theme", () => {
    render(
      <DepartmentOverviewCard
        data-testid="dept"
        name="Snäckan"
        childrenCount={16}
        teachersCount={3}
        theme="Färger och former"
      />,
    );

    const el = screen.getByTestId("dept");
    expect(el).toHaveClass("fc-card--department-overview");

    expect(screen.getByRole("heading", { level: 1, name: "Snäckan" })).toBeInTheDocument();
    expect(screen.getByText("16 inskrivna barn")).toBeInTheDocument();
    expect(screen.getByText("3 pedagoger")).toBeInTheDocument();
    expect(screen.getByText(/Tema arbete:/)).toBeInTheDocument();
    expect(screen.getByText("Färger och former")).toBeInTheDocument();
  });

  it("uses singular forms for count of 1", () => {
    render(
      <DepartmentOverviewCard
        name="Myran"
        childrenCount={1}
        teachersCount={1}
      />,
    );
    expect(screen.getByText("1 inskrivet barn")).toBeInTheDocument();
    expect(screen.getByText("1 pedagog")).toBeInTheDocument();
  });

  it("omits stats row and theme when not provided", () => {
    const { container } = render(<DepartmentOverviewCard name="Tomt" />);
    expect(container.querySelector(".fc-card__department-stats")).toBeNull();
    expect(container.querySelector(".fc-card__department-theme")).toBeNull();
  });

  it("supports click events if onClick is provided", async () => {
    const user = require("@testing-library/user-event").default.setup();
    const handleClick = vi.fn();
    render(
      <DepartmentOverviewCard name="Klickbar" onClick={handleClick} data-testid="clickable" />,
    );
    const el = screen.getByTestId("clickable");
    await user.click(el);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("is keyboard focusable and can be activated with keyboard", async () => {
    const user = require("@testing-library/user-event").default.setup();
    const handleClick = vi.fn();
    render(
      <DepartmentOverviewCard name="Klara" onClick={handleClick} data-testid="kbd" />,
    );
    const el = screen.getByTestId("kbd");
    await user.click(el);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("has appropriate accessibility attributes", () => {
    render(
      <DepartmentOverviewCard aria-label="Avdelningskort" data-testid="a11y" name="A" />,
    );
    const el = screen.getByTestId("a11y");
    expect(el).toHaveAttribute("aria-label", "Avdelningskort");
  });
});
