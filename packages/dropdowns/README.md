# @minilogg/dropdowns

## Syfte

Dropdown-komponenten används för att visa en lista med valbara alternativ i en meny som öppnas vid klick. Den hjälper till att spara utrymme och skapa ett mer fokuserat gränssnitt när många valmöjligheter finns.

## Användning

```jsx
import { Dropdown } from "@minilogg/dropdowns";

<Dropdown
  label="Välj språk"
  align="right"
  items={[
    { label: "Svenska", value: "sv" },
    { label: "English", value: "en" },
    { label: "Norsk", value: "no", disabled: true },
  ]}
  onSelect={(item) => setLang(item.value)}
/>;
```

## Props

| Prop           | Typ                                   | Default  | Beskrivning                                      |
| -------------- | ------------------------------------- | -------- | ------------------------------------------------ |
| `label`        | `React.ReactNode`                     | `"Menu"` | Innehåll på utlösarknappen.                      |
| `items`        | `Array<{ label, value?, disabled? }>` | `[]`     | Menyalternativ.                                  |
| `onSelect`     | `(item) => void`                      | —        | Anropas när ett alternativ väljs.                |
| `align`        | `"left" \| "right"`                   | `"left"` | Justering av menyn relativt utlösaren.           |
| `disabled`     | `boolean`                             | `false`  | Inaktiverar utlösaren.                           |
| `open`         | `boolean`                             | —        | Kontrollerat öppet-läge (kräver `onOpenChange`). |
| `defaultOpen`  | `boolean`                             | `false`  | Startvärde i okontrollerat läge.                 |
| `onOpenChange` | `(open: boolean) => void`             | —        | Anropas när menyn öppnas eller stängs.           |

## Beteende

- Stänger automatiskt vid pekartryck utanför eller `Escape`.
- Stöder både okontrollerat och kontrollerat läge via `open` + `onOpenChange`.

## Storybook

[Se live-exempel i Storybook](../../apps/storybook)
- Sätter `aria-haspopup`, `aria-expanded` och använder `role="menu"`/`menuitem` för tillgänglighet.
- Tangentbord: ↑/↓ navigerar, Home/End hoppar, Enter/Space väljer, Esc stänger, Tab stänger utan att flytta fokus tillbaka.
- Typeahead: skriv en bokstav för att hoppa till nästa alternativ som börjar med tecknet.
- Inaktiverade items kan inte väljas och hoppas över vid tangentbordsnavigering.

## Accessibility

Dropdown använder semantiska HTML-element och ARIA-attribut (`aria-haspopup`, `aria-expanded`, `role="menu"`, `role="menuitem"`) för att säkerställa tillgänglighet. Tangentbordsnavigation och typeahead-stöd finns, och färg används aldrig som enda signal.

## Responsivitet

Dropdown är responsiv och anpassar sig till olika skärmstorlekar. Menyn positioneras automatiskt och fungerar lika bra på mobil, surfplatta och desktop.

## Designval

Designen är enkel och tydlig med hög kontrast och tydliga markeringar för valda och inaktiverade alternativ. Menyn följer bibliotekets färgpalett och typografi.

## Återanvändbarhet

Dropdown är generisk och kan användas i många olika sammanhang där en lista med val behövs. Den är enkel att utöka med egna props och kan kombineras med andra komponenter.

## Feedback

Förbättringsförslag, buggrapporter och komponentfeedback för `Dropdown` tas tacksamt emot från användare och teammedlemmar.

- [Lämna komponentfeedback](../../issues/new?template=component_feedback.yml&labels=feedback,dropdowns&title=%5BFeedback%5D+dropdowns%3A+)
- [Rapportera bugg](../../issues/new?template=bug_report.yml&labels=bug,dropdowns&title=%5BBug%5D+dropdowns%3A+)
- [Föreslå förbättring](../../issues/new?template=feature_request.yml&labels=enhancement,dropdowns&title=%5BFeature%5D+dropdowns%3A+)

Pågående diskussioner finns under labeln [`dropdowns`](../../issues?q=is%3Aissue+label%3Adropdowns).
