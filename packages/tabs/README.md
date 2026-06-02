# @minilogg/tabs

## Syfte

Tabs-komponenten används för att dela upp innehåll i olika sektioner som användaren kan växla mellan. Den gör det enkelt att organisera och navigera större mängder information utan att byta sida.

## Användning

```jsx
import { Tabs } from "@minilogg/tabs";

<Tabs
  defaultIndex={0}
  onChange={(i) => console.log("Aktiv flik:", i)}
  tabs={[
    { label: "Översikt", content: <p>Sammanfattning…</p> },
    { label: "Detaljer", content: <p>Mer information…</p> },
    { label: "Historik", content: <p>Tidigare händelser…</p> },
  ]}
/>;
```

## Props

| Prop           | Typ                         | Default | Beskrivning                        |
| -------------- | --------------------------- | ------- | ---------------------------------- |
| `tabs`         | `Array<{ label, content }>` | `[]`    | Flikar att visa.                   |
| `defaultIndex` | `number`                    | `0`     | Index på flik som visas initialt.  |
| `onChange`     | `(index: number) => void`   | —       | Anropas när användaren byter flik. |

## Tillgänglighet

Komponenten använder `role="tablist"`, `role="tab"`, `role="tabpanel"` och `aria-selected`.

## Responsivitet

Tabs är responsiv och anpassar sig till olika skärmstorlekar. Flikarna kan scrollas horisontellt på mindre skärmar och layouten fungerar lika bra på mobil, surfplatta och desktop.

## Storybook

[Se live-exempel i Storybook](../../apps/storybook)

Stories i detta paket:

- `Default`
- `Custom`

## Designval

Designen är enkel och tydlig med hög kontrast och tydliga markeringar för aktiv flik. Färg och typografi följer bibliotekets riktlinjer. Flikarna är stora och lätta att klicka på även på mobil.

## Återanvändbarhet

Tabs är generisk och kan användas i alla sammanhang där innehåll behöver delas upp i sektioner. Den är enkel att utöka med egna props och kan kombineras med andra komponenter.

## Feedback

Förbättringsförslag, buggrapporter och komponentfeedback för `Tabs` tas tacksamt emot från användare och teammedlemmar.

- [Lämna komponentfeedback](../../issues/new?template=component_feedback.yml&labels=feedback,tabs&title=%5BFeedback%5D+tabs%3A+)
- [Rapportera bugg](../../issues/new?template=bug_report.yml&labels=bug,tabs&title=%5BBug%5D+tabs%3A+)
- [Föreslå förbättring](../../issues/new?template=feature_request.yml&labels=enhancement,tabs&title=%5BFeature%5D+tabs%3A+)

Pågående diskussioner finns under labeln [`tabs`](../../issues?q=is%3Aissue+label%3Atabs).
