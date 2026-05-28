# @minilogg/teacher-card

## Syfte

TeacherCard används för att presentera information om en pedagog eller personal i pedagogiska sammanhang. Den visar namn, titel, avdelning och avatar på ett tydligt och samlat sätt.

Bygger på `@minilogg/cards`.

## Props

| Prop         | Typ             | Beskrivning                        |
| ------------ | --------------- | ---------------------------------- |
| `name`       | `string`        | Namn på pedagogen/personalen.      |
| `title`      | `string`/objekt | Titel eller objekt med label/tone. |
| `department` | `string`        | Avdelningens namn.                 |
| `avatar`     | `string`        | (Valfritt) Bild-URL för avatar.    |
| `className`  | `string`        | (Valfritt) Extra CSS-klasser.      |

```jsx
import { TeacherCard, TEACHER_TITLE_PRESETS } from "@minilogg/teacher-card";

<TeacherCard
  name="Anja Jansson"
  title="forskollarare"
  department="Solrosen"
  avatar="/avatars/anja.jpg"
/>;
```

Titel-presets: `forskollarare`, `barnskotare`, `specialpedagog`, `vikarie`, `rektor`, `kock`.
Skicka in en fri sträng eller `{ label, tone }` för egen titel.

## Accessibility

TeacherCard använder semantiska HTML-element och är tillgänglig för skärmläsare. Titel och status kompletteras alltid med text/ikon, inte bara färg. Fokusmarkeringar och tangentbordsstöd finns för interaktiva delar.

## Responsivitet

Komponenten är responsiv och anpassar sig till olika skärmstorlekar. Layouten fungerar bra både i listor och som fristående kort på mobil, surfplatta och desktop.

## Storybook

[Se live-exempel i Storybook](../../apps/storybook)

## Designval

Designen är tydlig och professionell med mjuka former, tydliga färger och enkel typografi. Titlar har distinkta färger och ikoner för att snabbt signalera roll eller funktion.

## Återanvändbarhet

TeacherCard är generisk och kan användas i olika vyer där personalinformation behöver presenteras. Den är enkel att utöka med fler fält eller anpassa med egna CSS-klasser.

## Feedback

Förbättringsförslag, buggrapporter och komponentfeedback för `TeacherCard` tas tacksamt emot från användare och teammedlemmar.

- [Lämna komponentfeedback](../../issues/new?template=component_feedback.yml&labels=feedback,teacher-card&title=%5BFeedback%5D+teacher-card%3A+)
- [Rapportera bugg](../../issues/new?template=bug_report.yml&labels=bug,teacher-card&title=%5BBug%5D+teacher-card%3A+)
- [Föreslå förbättring](../../issues/new?template=feature_request.yml&labels=enhancement,teacher-card&title=%5BFeature%5D+teacher-card%3A+)

Pågående diskussioner finns under labeln [`teacher-card`](../../issues?q=is%3Aissue+label%3Ateacher-card).
