# @minilogg/toasts

## Syfte

Toasts-komponenten används för att visa tillfälliga notifieringar och feedback till användaren, t.ex. vid sparande, fel eller annan viktig information. Den hjälper till att snabbt kommunicera status utan att störa användarens arbetsflöde.

## Användning

Wrappa applikationen i `ToastProvider` och anropa `useToast()` där du behöver visa meddelanden.

```jsx
import { ToastProvider, useToast } from "@minilogg/toasts";

function Root() {
  return (
    <ToastProvider position="top-right">
      <App />
    </ToastProvider>
  );
}

function SaveButton() {
  const toast = useToast();
  return <button onClick={() => toast.success("Sparat!")}>Spara</button>;
}
```

## `ToastProvider`

| Prop       | Typ                                                            | Default       | Beskrivning          |
| ---------- | -------------------------------------------------------------- | ------------- | -------------------- |
| `children` | `ReactNode`                                                    | —             | Applikationsträdet.  |
| `position` | `"top-right" \| "top-left" \| "bottom-right" \| "bottom-left"` | `"top-right"` | Position på skärmen. |

## `useToast()`

Returnerar ett objekt med följande metoder:

| Metod                     | Beskrivning                                                  |
| ------------------------- | ------------------------------------------------------------ |
| `show(message, options?)` | Visa en toast. Returnerar id som kan användas med `dismiss`. |
| `success(message, opts?)` | Genväg med `variant: "success"`.                             |
| `error(message, opts?)`   | Genväg med `variant: "error"`.                               |
| `info(message, opts?)`    | Genväg med `variant: "info"`.                                |
| `warning(message, opts?)` | Genväg med `variant: "warning"`.                             |
| `dismiss(id)`             | Stäng en specifik toast i förtid.                            |

`options`:

| Fält       | Typ                                           | Default  | Beskrivning                                                         |
| ---------- | --------------------------------------------- | -------- | ------------------------------------------------------------------- |
| `variant`  | `"info" \| "success" \| "warning" \| "error"` | `"info"` | Färgvariant.                                                        |
| `duration` | `number`                                      | `3500`   | Millisekunder innan toasten stängs. Sätt `0` för manuell stängning. |

> `useToast()` måste anropas inuti `<ToastProvider>` – annars kastas ett fel.

## Accessibility

Toasts använder semantiska HTML-element och ARIA-attribut för att säkerställa att notifieringar kan uppfattas av skärmläsare. Färg används aldrig som enda signal – ikon och text kompletterar alltid färg. Fokus flyttas inte automatiskt, men toasten kan nås med hjälpmedel.

## Responsivitet

Toasts är responsiva och positioneras automatiskt beroende på skärmstorlek och valt hörn. De fungerar lika bra på mobil, surfplatta och desktop.

## Designval

Designen är enkel och tydlig med hög kontrast, tydliga färgvarianter och ikon för att snabbt signalera typ av meddelande. Typografi och färg följer bibliotekets riktlinjer.

## Återanvändbarhet

Toasts är generiska och kan användas i alla delar av applikationen där notifieringar behövs. De är enkla att utöka med egna varianter och kan kombineras med andra komponenter.

## Feedback

Förbättringsförslag, buggrapporter och komponentfeedback för `Toasts` tas tacksamt emot från användare och teammedlemmar.

- [Lämna komponentfeedback](../../issues/new?template=component_feedback.yml&labels=feedback,toasts&title=%5BFeedback%5D+toasts%3A+)
- [Rapportera bugg](../../issues/new?template=bug_report.yml&labels=bug,toasts&title=%5BBug%5D+toasts%3A+)
- [Föreslå förbättring](../../issues/new?template=feature_request.yml&labels=enhancement,toasts&title=%5BFeature%5D+toasts%3A+)

Pågående diskussioner finns under labeln [`toasts`](../../issues?q=is%3Aissue+label%3Atoasts).
