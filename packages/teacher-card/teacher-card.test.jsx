import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
  TeacherCard,
  TEACHER_TITLE_PRESETS,
} from "./ui";

describe("TeacherCard", () => {
  it("renders all main elements", () => {
    render(
      <TeacherCard name="Test Testsson" title="forskollarare" department="Testavd" />,
    );
    expect(screen.getByRole("heading", { name: "Test Testsson" })).toBeInTheDocument();
    expect(screen.getByText("Testavd")).toBeInTheDocument();
    expect(screen.getByText(TEACHER_TITLE_PRESETS.forskollarare.label)).toBeInTheDocument();
  });

  it("is keyboard focusable and can be activated with Enter/Space", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(
      <TeacherCard data-testid="teacher" name="Klara K" onClick={onClick} />,
    );
    const el = screen.getByTestId("teacher");
    el.focus();
    expect(el).toHaveFocus();
    await user.keyboard("{Enter}");
    await user.keyboard(" ");
    expect(onClick).toHaveBeenCalledTimes(2);
  });

  it("has appropriate accessibility attributes", () => {
    render(
      <TeacherCard name="A11y" title="forskollarare" department="A" />,
    );
    const heading = screen.getByRole("heading", { name: "A11y" });
    expect(heading).toBeInTheDocument();
    // Card should be focusable if interactive
    render(
      <TeacherCard name="A11y2" onClick={() => {}} />,
    );
    const card = screen.getByText("A11y2").closest(".fc-card");
    expect(card).toHaveAttribute("tabindex", "0");
    // Should have role if interactive
    expect(card).toHaveAttribute("role", "button");
  });
  it("renders name, title preset and department", () => {
    render(
      <TeacherCard
        data-testid="teacher"
        name="Anja Jansson"
        title="forskollarare"
        department="Solrosen"
      />,
    );
    const el = screen.getByTestId("teacher");
    expect(el).toHaveClass("fc-card", "fc-card--teacher");
    expect(
      screen.getByRole("heading", { level: 3, name: "Anja Jansson" }),
    ).toBeInTheDocument();
    const titleEl = screen.getByText(
      TEACHER_TITLE_PRESETS.forskollarare.label,
    );
    expect(titleEl).toHaveClass(
      "fc-card__teacher-title",
      "fc-card__teacher-title--primary",
    );
    expect(screen.getByText("Solrosen")).toHaveClass(
      "fc-card__teacher-department",
    );
  });

  it("falls back to initials when no avatar is provided", () => {
    render(<TeacherCard name="Lena Johansson" />);
    expect(screen.getByText("LJ")).toHaveClass(
      "fc-card__teacher-avatar-initials",
    );
  });

  it("renders an image avatar from a string src", () => {
    render(
      <TeacherCard
        name="Tove Karlsson"
        avatar="/avatars/tove.png"
        avatarAlt="Foto av Tove"
      />,
    );
    const img = screen.getByAltText("Foto av Tove");
    expect(img.tagName).toBe("IMG");
    expect(img).toHaveAttribute("src", "/avatars/tove.png");
    expect(img).toHaveClass("fc-card__teacher-avatar-img");
  });

  it("accepts a free-text title with neutral tone", () => {
    render(<TeacherCard name="Sven Sköld" title="Praktikant" />);
    const titleEl = screen.getByText("Praktikant");
    expect(titleEl).toHaveClass("fc-card__teacher-title--neutral");
  });

  it("accepts a custom title object", () => {
    render(
      <TeacherCard
        name="Maja Mo"
        title={{ label: "Tf. rektor", tone: "info" }}
      />,
    );
    expect(screen.getByText("Tf. rektor")).toHaveClass(
      "fc-card__teacher-title--info",
    );
  });

  it("becomes interactive when onClick is provided", () => {
    const onClick = vi.fn();
    render(
      <TeacherCard data-testid="teacher" name="Eli Ek" onClick={onClick} />,
    );
    const el = screen.getByTestId("teacher");
    expect(el).toHaveClass("fc-card--interactive");
    fireEvent.click(el);
    fireEvent.keyDown(el, { key: "Enter" });
    expect(onClick).toHaveBeenCalledTimes(2);
  });

  it("renders a P role badge", () => {
    render(<TeacherCard name="Anja Jansson" title="forskollarare" />);
    const badge = screen
      .getAllByText("P")
      .find((el) => el.classList.contains("fc-card__role-badge--teacher"));
    expect(badge).toBeTruthy();
  });
});
