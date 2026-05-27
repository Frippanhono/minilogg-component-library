# @minilogg/dropdowns

Tillgänglig meny som öppnas vid klick.

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
- Sätter `aria-haspopup`, `aria-expanded` och använder `role="menu"`/`menuitem` för tillgänglighet.
- Tangentbord: ↑/↓ navigerar, Home/End hoppar, Enter/Space väljer, Esc stänger, Tab stänger utan att flytta fokus tillbaka.
- Typeahead: skriv en bokstav för att hoppa till nästa alternativ som börjar med tecknet.
- Inaktiverade items kan inte väljas och hoppas över vid tangentbordsnavigering.
