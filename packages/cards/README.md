# @minilogg/cards

## Syfte

Card-komponenterna används för att gruppera och presentera relaterat innehåll på ett strukturerat och visuellt tilltalande sätt. De fungerar som byggblock för mer komplexa UI-element och används ofta för att lyfta fram information, samla åtgärder eller skapa tydliga sektioner.

Domänspecifika kort (`StatCard`, `ChildCard`, `MessageCard`) ligger i egna paket och bygger ovanpå dessa.

## Användning

```jsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardSubtitle,
  CardMedia,
  CardMeta,
  CardActions,
  CardBody,
  CardFooter,
} from "@minilogg/cards";
import { Button } from "@minilogg/buttons";

<Card>
  <CardHeader>
    <CardTitle>Profil</CardTitle>
  </CardHeader>
  <CardBody>Namn, e-post och inställningar.</CardBody>
  <CardFooter>
    <Button>Redigera</Button>
  </CardFooter>
</Card>;
```

## Komponenter

| Komponent      | Beskrivning                                                            |
| -------------- | ---------------------------------------------------------------------- |
| `Card`         | Yttre container. Stödjer `variant`, `tone`, `interactive`, `selected`. |
| `CardHeader`   | Övre sektion (rubrik, media, meta, åtgärder).                          |
| `CardTitle`    | Semantisk rubrik (`<h3>` som default, byts med `as`).                  |
| `CardSubtitle` | Sekundär etikett under rubriken.                                       |
| `CardMedia`    | Plats för avatar, ikon eller bild.                                     |
| `CardMeta`     | Diskret metadata, t.ex. tidsstämpel.                                   |
| `CardActions`  | Grupp av knappar/länkar.                                               |
| `CardBody`     | Huvudinnehåll.                                                         |
| `CardFooter`   | Nedre sektion, ofta knappar eller metadata.                            |
| `getInitials`  | Helper som returnerar 1–2 versaler från ett namn.                      |

Alla komponenter tar `children` och `className` och vidarebefordrar övriga props till det underliggande elementet.

### Props på `Card`

| Prop          | Typ                                                         | Default     | Beskrivning                               |
| ------------- | ----------------------------------------------------------- | ----------- | ----------------------------------------- |
| `variant`     | `"default" \| "elevated" \| "outline" \| "ghost"`           | `"default"` | Visuell stil.                             |
| `tone`        | `"neutral" \| "info" \| "success" \| "warning" \| "danger"` | `"neutral"` | Accentfärg på vänsterkanten.              |
| `interactive` | `boolean`                                                   | `false`     | Klickbart kort med fokus och tangentbord. |
| `selected`    | `boolean`                                                   | `false`     | Visuell markering för valt/aktivt kort.   |
| `as`          | `keyof JSX.IntrinsicElements`                               | `"div"`     | Underliggande element.                    |
| `onClick`     | `(e) => void`                                               | –           | Aktiverar tangentbordsstöd (Enter/Space). |

## Accessibility

Card-komponenterna är byggda med semantiska HTML-element och stödjer tangentbordsnavigation samt skärmläsare. Interaktiva kort har tydliga fokusmarkeringar och använder aldrig enbart färg för att signalera status eller val.

## Responsivitet

Kort är responsiva och anpassar sig till olika skärmstorlekar med hjälp av flexibla layouter och CSS. De fungerar lika bra i grid, listor eller som fristående element på mobil, surfplatta och desktop.

## Designval

Designen är enkel, modern och följer bibliotekets färgpalett och typografi. Varianter och toner används för att skapa visuell hierarki och tydlighet. Rundade hörn, skuggor och accentfärger används för att särskilja olika typer av kort.

## Återanvändbarhet

Card-komponenterna är generiska och kan användas i många olika sammanhang. De är enkla att utöka med egna props, CSS-klasser och kan kombineras med andra komponenter för att bygga mer avancerade UI-lösningar.

## Domänkort

Färdiga kort som bygger på primitiverna i det här paketet finns som egna paket:

- [`@minilogg/stat-card`](../stat-card) – `StatCard`, nyckeltal för dashboards.
- [`@minilogg/child-card`](../child-card) – `ChildCard` med status, vårdnadshavare och avatar.
- [`@minilogg/message-card`](../message-card) – `MessageCard` / `NoticeCard` för meddelanden och aviseringar.

## Delad design

`Card` exponerar även basklassen `.fc-card__role-badge` (samt modifierare
för `--guardian`, `--child`, `--teacher`, `--admin`, `--system`). Den
används av domänkort för att rendera färgade rollmarkörer med ett
konsekvent utseende.

## Feedback

Förbättringsförslag, buggrapporter och komponentfeedback för `Card` tas tacksamt emot från användare och teammedlemmar.

- [Lämna komponentfeedback](../../issues/new?template=component_feedback.yml&labels=feedback,cards&title=%5BFeedback%5D+cards%3A+)
- [Rapportera bugg](../../issues/new?template=bug_report.yml&labels=bug,cards&title=%5BBug%5D+cards%3A+)
- [Föreslå förbättring](../../issues/new?template=feature_request.yml&labels=enhancement,cards&title=%5BFeature%5D+cards%3A+)

Pågående diskussioner finns under labeln [`cards`](../../issues?q=is%3Aissue+label%3Acards).
