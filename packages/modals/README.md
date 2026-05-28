# @minilogg/modals

## Syfte

Modal-komponenten används för att visa dialogrutor som kräver användarens uppmärksamhet, t.ex. bekräftelser, formulär eller viktig information. Den hjälper till att fokusera användarens interaktion på en specifik uppgift.

## Användning

```jsx
import { useState } from "react";
import { Modal } from "@minilogg/modals";
import { Button } from "@minilogg/buttons";

const [open, setOpen] = useState(false);

<Button onClick={() => setOpen(true)}>Öppna</Button>

<Modal
  open={open}
  onClose={() => setOpen(false)}
  title="Bekräfta borttagning"
  footer={
    <>
      <Button variant="ghost" onClick={() => setOpen(false)}>Avbryt</Button>
      <Button variant="danger" onClick={handleDelete}>Ta bort</Button>
    </>
  }
>
  Är du säker på att du vill ta bort posten?
</Modal>
```

## Props

| Prop      | Typ          | Default | Beskrivning                                         |
| --------- | ------------ | ------- | --------------------------------------------------- |
| `open`    | `boolean`    | —       | Styr om dialogen visas.                             |
| `onClose` | `() => void` | —       | Anropas när användaren stänger dialogen.            |
| `title`   | `ReactNode`  | —       | Rubrik. Som sträng används den även som aria-label. |

## Storybook

[Se live-exempel i Storybook](../../apps/storybook)

| `children` | `ReactNode` | — | Dialogens brödinnehåll. |
| `footer` | `ReactNode` | — | Innehåll i footern, t.ex. knappar. |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Bredd på dialogen. |

## Beteende

- Stänger vid klick på bakgrunden eller `Escape`.
- Låser scrollning på `document.body` medan dialogen är öppen.
- Sätter `role="dialog"` och `aria-modal="true"`.

## Accessibility

Modal använder semantiska HTML-element och ARIA-attribut (`role="dialog"`, `aria-modal="true"`, aria-label) för att säkerställa tillgänglighet. Fokus låses i dialogen och tangentbordsnavigation stöds fullt ut. Färg används aldrig som enda signal.

## Responsivitet

Dialogen är responsiv och anpassar sig till olika skärmstorlekar. Den centreras automatiskt och fungerar lika bra på mobil, surfplatta och desktop.

## Designval

Designen är enkel och tydlig med hög kontrast och tydliga fokusmarkeringar. Dialogen har rundade hörn, skuggor och följer bibliotekets färgpalett och typografi.

## Återanvändbarhet

Modal är generisk och kan användas i alla delar av applikationen där en dialogruta behövs. Den är enkel att utöka med egna props och kan kombineras med andra komponenter.

## Feedback

Förbättringsförslag, buggrapporter och komponentfeedback för `Modal` tas tacksamt emot från användare och teammedlemmar.

- [Lämna komponentfeedback](../../issues/new?template=component_feedback.yml&labels=feedback,modals&title=%5BFeedback%5D+modals%3A+)
- [Rapportera bugg](../../issues/new?template=bug_report.yml&labels=bug,modals&title=%5BBug%5D+modals%3A+)
- [Föreslå förbättring](../../issues/new?template=feature_request.yml&labels=enhancement,modals&title=%5BFeature%5D+modals%3A+)

Pågående diskussioner finns under labeln [`modals`](../../issues?q=is%3Aissue+label%3Amodals).
