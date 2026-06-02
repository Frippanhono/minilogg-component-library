# @minilogg/button

Standardknapp med varianter och storlekar.

## Syfte

Button-komponenten används för att utlösa åtgärder i gränssnittet, såsom att spara, skicka eller radera. Den ger användaren en tydlig och konsekvent interaktionspunkt.

## Användning

```jsx
import { Button } from "@minilogg/buttons";

<Button variant="primary" onClick={handleSave}>Spara</Button>
<Button variant="danger" disabled>Ta bort</Button>
```

## Props

| Prop        | Typ                                               | Default     | Beskrivning                                 |
| ----------- | ------------------------------------------------- | ----------- | ------------------------------------------- |
| `children`  | `ReactNode`                                       | —           | Knappens etikett.                           |
| `variant`   | `"primary" \| "secondary" \| "ghost" \| "danger"` | `"primary"` | Visuell stil som signalerar åtgärdens vikt. |
| `size`      | `"sm" \| "md" \| "lg"`                            | `"md"`      | Storlek.                                    |
| `type`      | `"button" \| "submit" \| "reset"`                 | `"button"`  | HTML-knapptyp.                              |
| `disabled`  | `boolean`                                         | `false`     | Inaktiverar knappen.                        |
| `onClick`   | `(e) => void`                                     | —           | Klickhanterare.                             |
| `className` | `string`                                          | `""`        | Extra CSS-klasser.                          |

## Riktlinjer

- Använd `primary` för den primära åtgärden i en vy – endast en per vy.
- Använd `danger` för destruktiva åtgärder (t.ex. radera).
- `ghost` passar för sekundära åtgärder i tät UI (t.ex. toolbars).

## Accessibility

Button-komponenten använder semantiska `<button>`-element och är fullt tillgänglig via tangentbord och skärmläsare. Färg används aldrig som enda signal – text och/eller ikon kompletterar alltid färg. Fokusmarkeringar är tydliga för att underlätta navigering.

## Storybook

[Se live-exempel i Storybook](../../apps/storybook)

Stories i detta paket:

- `Default`
- `Custom`
- `AllVariants`

## Responsivitet

Knappen är responsiv och anpassar sig till olika skärmstorlekar genom flexibla storleksalternativ (`sm`, `md`, `lg`). Den fungerar lika bra på mobil, surfplatta och desktop.

## Designval

Button följer designbibliotekets färgpalett och typografi. Varianter och storlekar är framtagna för att skapa tydliga visuella hierarkier och god kontrast. Rundade hörn och padding ger en modern känsla.

## Återanvändbarhet

Button-komponenten är generisk och kan användas i alla delar av applikationen där en åtgärd behövs. Den är enkel att utöka med egna CSS-klasser och kan kombineras med andra komponenter.

## Feedback

Förbättringsförslag, buggrapporter och komponentfeedback för `Button` tas tacksamt emot från användare och teammedlemmar.

- [Lämna komponentfeedback](../../issues/new?template=component_feedback.yml&labels=feedback,button&title=%5BFeedback%5D+button%3A+)
- [Rapportera bugg](../../issues/new?template=bug_report.yml&labels=bug,button&title=%5BBug%5D+button%3A+)
- [Föreslå förbättring](../../issues/new?template=feature_request.yml&labels=enhancement,button&title=%5BFeature%5D+button%3A+)

Pågående diskussioner finns under labeln [`button`](../../issues?q=is%3Aissue+label%3Abutton).
