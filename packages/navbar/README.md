# @minilogg/navbar

## Syfte

Navbar-komponenten används för att ge användaren en tydlig och lättnavigerad väg genom applikationen. Den fungerar både som mobil tab bar och som klassisk toppnavigering på desktop.

## Användning

```jsx
import { Navbar } from "@minilogg/navbar";

// Minimal användning – visar exempelmeny och ikoner direkt
<Navbar />

// Med egna länkar och aktiv länk:
<Navbar
  brand="MiniLogg"
  activeHref="/clara"
  links={[
    { label: "Anmäla frånvaro", href: "/absence", icon: <PhoneIcon /> },
    { label: "Checka in/ut", href: "/checkin", icon: <CheckIcon /> },
    { label: "Clara", href: "/clara", avatar: "/clara.jpg", featured: true },
    { label: "Kontaktlista", href: "/contacts", icon: <ContactsIcon /> },
    { label: "Mer", href: "/more", icon: <MoreIcon /> },
  ]}
  onNavigate={(link) => router.push(link.href)}
/>
```

## Props

| Prop         | Typ                                                  | Default             | Beskrivning                                                                          |
| ------------ | ---------------------------------------------------- | ------------------- | ------------------------------------------------------------------------------------ |
| `brand`      | `ReactNode`                                          | —                   | Logotyp eller varumärkesnamn (visas endast i desktopvy).                             |
| `links`      | `Array<{ label, href?, icon?, avatar?, featured? }>` | `[]`                | Navigeringslänkar. `icon`/`avatar` visas ovanför `label`.                            |
| `actions`    | `ReactNode`                                          | —                   | Åtgärder i desktopvy (döljs på mobil).                                               |
| `activeHref` | `string`                                             | —                   | `href` som ska markeras som aktiv.                                                   |
| `onNavigate` | `(link) => void`                                     | —                   | Om angiven används den i stället för default-länknavigering (förhindrar omladdning). |
| `ariaLabel`  | `string`                                             | `"Huvudnavigering"` | Tillgänglig etikett för `<nav>`-landmarken.                                          |

## Storybook

[Se live-exempel i Storybook](../../apps/storybook)

## Beteende

- **Mobil (≤ 720px):** navbar:en är fast förankrad längst ner i vyn. `brand`
  och `actions` döljs och länkarna fyller raden jämnt.
- **Desktop (> 720px):** samma rad sitter sticky i toppen av sidan tillsammans
  med `brand` och `actions`.
- En länk med `featured: true` framhävs visuellt – tillsammans med `avatar`
  visas en cirkulär bild som lyfter ur raden (lämpligt för t.ex. ett barns
  profilbild).

## Accessibility

Navbar använder semantiska `<nav>`-element och har stöd för ARIA-attribut (t.ex. `aria-label`). Tangentbordsnavigation och tydliga fokusmarkeringar säkerställer att alla användare kan navigera. Ikoner och text används tillsammans för att undvika att färg är enda signal.

## Responsivitet

Navbar är fullt responsiv och anpassar sig automatiskt till mobil, surfplatta och desktop. På mobil visas den längst ner som tab bar, på desktop sticky i toppen.

## Designval

Designen är modern och tydlig med hög kontrast, stora klickytor och visuella markeringar för aktiv länk. Ikoner och avatarer används för att skapa igenkänning och snabb navigering.

## Återanvändbarhet

Navbar är generisk och kan användas i alla typer av applikationer där navigering behövs. Den är enkel att utöka med egna länkar, ikoner och actions samt kan anpassas med CSS.

## Feedback

Förbättringsförslag, buggrapporter och komponentfeedback för `Navbar` tas tacksamt emot från användare och teammedlemmar.

- [Lämna komponentfeedback](../../issues/new?template=component_feedback.yml&labels=feedback,navbar&title=%5BFeedback%5D+navbar%3A+)
- [Rapportera bugg](../../issues/new?template=bug_report.yml&labels=bug,navbar&title=%5BBug%5D+navbar%3A+)
- [Föreslå förbättring](../../issues/new?template=feature_request.yml&labels=enhancement,navbar&title=%5BFeature%5D+navbar%3A+)

Pågående diskussioner finns under labeln [`navbar`](../../issues?q=is%3Aissue+label%3Anavbar).
