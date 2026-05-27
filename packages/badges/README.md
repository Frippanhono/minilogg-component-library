# @minilogg/badges


## Syfte

Badge-komponenten används för att visa status, kategorier eller räknare på ett tydligt och kompakt sätt. Den hjälper användaren att snabbt uppfatta viktig information eller statusindikatorer i gränssnittet.

## Användning

```jsx
import { Badge } from "@minilogg/badges";

<Badge variant="success">Aktiv</Badge>
<Badge variant="warning" size="sm">3</Badge>
```

## Props

| Prop        | Typ                                                         | Default     | Beskrivning                           |
| ----------- | ----------------------------------------------------------- | ----------- | ------------------------------------- |
| `children`  | `ReactNode`                                                 | —           | Innehåll i etiketten.                 |
| `variant`   | `"neutral" \| "info" \| "success" \| "warning" \| "danger"` | `"neutral"` | Färgvariant som signalerar betydelse. |
| `size`      | `"sm" \| "md" \| "lg"`                                      | `"md"`      | Storlek på etiketten.                 |
| `className` | `string`                                                    | `""`        | Extra CSS-klasser.                    |

Övriga props vidarebefordras till det underliggande `<span>`-elementet.

## Accessibility

Badge-komponenten är utformad för att vara tillgänglig för alla användare. Den använder semantiska HTML-element och kan läsas av skärmläsare. Färg används aldrig som enda informationsbärare – text och/eller ikon kompletterar alltid färgsignaler.

## Responsivitet

Komponenten är responsiv och anpassar sig till olika skärmstorlekar genom flexibla storleksalternativ (`sm`, `md`, `lg`). Den fungerar lika bra på mobil, surfplatta och desktop.

## Designval

Badge har en enkel och tydlig design med hög kontrast för att säkerställa god läsbarhet. Färgvarianter signalerar olika betydelser (t.ex. "success", "warning") och följer designbibliotekets färgpalett.

## Återanvändbarhet

Badge-komponenten är generisk och kan användas i många olika sammanhang, t.ex. i listor, tabeller, kort eller knappar. Den är enkel att utöka med egna CSS-klasser och kan kombineras med andra komponenter i biblioteket.
