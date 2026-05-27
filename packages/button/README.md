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

## Responsivitet

Knappen är responsiv och anpassar sig till olika skärmstorlekar genom flexibla storleksalternativ (`sm`, `md`, `lg`). Den fungerar lika bra på mobil, surfplatta och desktop.

## Designval

Button följer designbibliotekets färgpalett och typografi. Varianter och storlekar är framtagna för att skapa tydliga visuella hierarkier och god kontrast. Rundade hörn och padding ger en modern känsla.

## Återanvändbarhet

Button-komponenten är generisk och kan användas i alla delar av applikationen där en åtgärd behövs. Den är enkel att utöka med egna CSS-klasser och kan kombineras med andra komponenter.
