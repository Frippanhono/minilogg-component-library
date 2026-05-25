import React, { useState } from "react";
import { Navbar } from "./ui";

// Ikoner för stories
function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
      <line x1="18" y1="3" x2="18" y2="9" />
      <line x1="15" y1="6" x2="21" y2="6" />
    </svg>
  );
}
function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <polyline points="9 14 11 16 15 12" />
    </svg>
  );
}
function ContactsIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <circle cx="12" cy="10" r="3" />
      <path d="M7 18c1-2.5 3-4 5-4s4 1.5 5 4" />
      <line x1="2" y1="8" x2="4" y2="8" />
      <line x1="2" y1="12" x2="4" y2="12" />
      <line x1="2" y1="16" x2="4" y2="16" />
    </svg>
  );
}
function MoreIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <circle cx="5" cy="12" r="2" />
      <circle cx="12" cy="12" r="2" />
      <circle cx="19" cy="12" r="2" />
    </svg>
  );
}
function HomeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 12 12 3l9 9" />
      <path d="M5 10v10h14V10" />
    </svg>
  );
}

const CLARA_AVATAR =
  "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%20viewBox%3D%270%200%2064%2064%27%3E%3Crect%20width%3D%2764%27%20height%3D%2764%27%20fill%3D%27%23f1c27d%27/%3E%3Ccircle%20cx%3D%2732%27%20cy%3D%2726%27%20r%3D%2712%27%20fill%3D%27%23ffd9a8%27/%3E%3Cpath%20d%3D%27M10%2064c2-12%2010-20%2022-20s20%208%2022%2020z%27%20fill%3D%27%23ffd9a8%27/%3E%3C/svg%3E";

const DEFAULT_LINKS = [
  { label: "Anmäla frånvaro", href: "/absence", icon: <PhoneIcon /> },
  { label: "Checka in/ut", href: "/checkin", icon: <CheckIcon /> },
  { label: "Clara", href: "/clara", avatar: CLARA_AVATAR, featured: true },
  { label: "Kontaktlista", href: "/contacts", icon: <ContactsIcon /> },
  { label: "Mer", href: "/more", icon: <MoreIcon /> },
];

export default {
  title: "Components/Navbar",
  component: Navbar,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    ariaLabel: { control: "text" },
    activeHref: { control: "text" },
    onNavigate: { action: "navigate" },
    links: { control: false },
    brand: { control: false },
    actions: { control: false },
  },
};

export const Default = {
  args: {
    links: DEFAULT_LINKS,
    activeHref: "/clara",
  },
};

export const WithBrand = {
  args: {
    brand: <strong>Minilogg</strong>,
    links: DEFAULT_LINKS,
    activeHref: "/checkin",
  },
};

export const WithActions = {
  args: {
    brand: <strong>Minilogg</strong>,
    links: DEFAULT_LINKS,
    activeHref: "/clara",
    actions: (
      <button
        type="button"
        style={{
          padding: "0.5rem 0.9rem",
          borderRadius: "999px",
          border: "1px solid #d0d5dd",
          background: "#fff",
          cursor: "pointer",
        }}
      >
        Logga ut
      </button>
    ),
  },
};

export const WithoutFeatured = {
  args: {
    links: [
      { label: "Hem", href: "/", icon: <HomeIcon /> },
      { label: "Anmäla frånvaro", href: "/absence", icon: <PhoneIcon /> },
      { label: "Checka in/ut", href: "/checkin", icon: <CheckIcon /> },
      { label: "Kontaktlista", href: "/contacts", icon: <ContactsIcon /> },
      { label: "Mer", href: "/more", icon: <MoreIcon /> },
    ],
    activeHref: "/checkin",
  },
};

export const ThreeLinks = {
  args: {
    links: [
      { label: "Hem", href: "/", icon: <HomeIcon /> },
      { label: "Checka in/ut", href: "/checkin", icon: <CheckIcon /> },
      { label: "Mer", href: "/more", icon: <MoreIcon /> },
    ],
    activeHref: "/",
  },
};

export const Controlled = {
  render: (args) => {
    const [active, setActive] = useState("/clara");
    return (
      <Navbar
        {...args}
        activeHref={active}
        onNavigate={(link) => setActive(link.href)}
      />
    );
  },
  args: {
    brand: <strong>Minilogg</strong>,
    links: DEFAULT_LINKS,
  },
};

export const UsingDefaults = {
  args: {},
};

/**
 * Story där varje länks etikett kan ändras via Controls-panelen.
 * Använd t.ex. fältet `featuredLabel` för att byta ut "Clara" mot ett
 * annat barns namn.
 */
export const EditableLabels = {
  argTypes: {
    absenceLabel: { control: "text" },
    checkinLabel: { control: "text" },
    featuredLabel: { control: "text" },
    contactsLabel: { control: "text" },
    moreLabel: { control: "text" },
    brandLabel: { control: "text" },
    // Dölj props som inte är relevanta för denna story
    links: { table: { disable: true } },
    brand: { table: { disable: true } },
    actions: { table: { disable: true } },
  },
  args: {
    absenceLabel: "Anmäla frånvaro",
    checkinLabel: "Checka in/ut",
    featuredLabel: "Clara",
    contactsLabel: "Kontaktlista",
    moreLabel: "Mer",
    brandLabel: "Minilogg",
    activeHref: "/clara",
  },
  render: ({
    absenceLabel,
    checkinLabel,
    featuredLabel,
    contactsLabel,
    moreLabel,
    brandLabel,
    ...args
  }) => (
    <Navbar
      {...args}
      brand={brandLabel ? <strong>{brandLabel}</strong> : undefined}
      links={[
        { label: absenceLabel, href: "/absence", icon: <PhoneIcon /> },
        { label: checkinLabel, href: "/checkin", icon: <CheckIcon /> },
        {
          label: featuredLabel,
          href: "/featured",
          avatar: CLARA_AVATAR,
          featured: true,
        },
        { label: contactsLabel, href: "/contacts", icon: <ContactsIcon /> },
        { label: moreLabel, href: "/more", icon: <MoreIcon /> },
      ]}
    />
  ),
};
