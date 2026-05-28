# @minilogg/child-card

## Syfte

ChildCard används för att presentera information om ett barn i pedagogiska sammanhang, t.ex. i förskole- eller skolplattformar. Den visar namn, avdelning, status, avatar och vårdnadshavare på ett tydligt och samlat sätt.

Bygger på `@minilogg/cards`.

## Props

| Prop         | Typ             | Beskrivning                               |
| ------------ | --------------- | ----------------------------------------- |
| `name`       | `string`        | Barnets namn.                             |
| `department` | `string`        | Avdelningens namn.                        |
| `status`     | `string`/objekt | Statusnyckel eller objekt med label/tone. |
| `guardians`  | `string[]`      | Lista med vårdnadshavares namn.           |
| `avatar`     | `string`        | (Valfritt) Bild-URL för barnets avatar.   |
| `className`  | `string`        | (Valfritt) Extra CSS-klasser.             |

```jsx
import { ChildCard, CHILD_STATUS_PRESETS } from "@minilogg/child-card";

<ChildCard
  name="Adam Persson"
  department="Solrosen"
  status="present"
  guardians={["Anja Persson", "Peter Persson"]}
/>;
```

Statusnycklar: `present`, `absent`, `sick`, `leave`, `arriving`, `pickedup`. Skicka in `{ label, tone }` för egen status.

## Accessibility

ChildCard använder semantiska HTML-element och är tillgänglig för skärmläsare. Statusindikatorer kompletteras alltid med text/ikon, inte bara färg. Fokusmarkeringar och tangentbordsstöd finns för interaktiva delar.

## Storybook

[Se live-exempel i Storybook](../../apps/storybook)

## Responsivitet

Komponenten är responsiv och anpassar sig till olika skärmstorlekar. Layouten fungerar bra både i listor och som fristående kort på mobil, surfplatta och desktop.

## Designval

Designen är tydlig och barnvänlig med mjuka former, tydliga färger och enkel typografi. Statusar har distinkta färger och ikoner för att snabbt signalera barnets närvaro eller frånvaro.

## Återanvändbarhet

ChildCard är generisk och kan användas i olika vyer där barninformation behöver presenteras. Den är enkel att utöka med fler fält eller anpassa med egna CSS-klasser.

## Feedback

Förbättringsförslag, buggrapporter och komponentfeedback för `ChildCard` tas tacksamt emot från användare och teammedlemmar.

- [Lämna komponentfeedback](../../issues/new?template=component_feedback.yml&labels=feedback,child-card&title=%5BFeedback%5D+child-card%3A+)
- [Rapportera bugg](../../issues/new?template=bug_report.yml&labels=bug,child-card&title=%5BBug%5D+child-card%3A+)
- [Föreslå förbättring](../../issues/new?template=feature_request.yml&labels=enhancement,child-card&title=%5BFeature%5D+child-card%3A+)

Pågående diskussioner finns under labeln [`child-card`](../../issues?q=is%3Aissue+label%3Achild-card).
