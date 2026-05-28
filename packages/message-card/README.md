# @minilogg/message-card

## Syfte

MessageCard och NoticeCard används för att visa meddelanden, aviseringar eller notiser i ett tydligt och strukturerat format. De hjälper användaren att snabbt ta del av viktig information eller kommunikation.

Bygger på `@minilogg/cards`.

## Props

| Prop        | Typ      | Beskrivning                         |
| ----------- | -------- | ----------------------------------- |
| `sender`    | `object` | Avsändare (namn, roll).             |
| `recipient` | `object` | Mottagare (namn, roll).             |
| `subject`   | `string` | Ämnesrad för meddelandet.           |
| `preview`   | `string` | Förhandsvisning av meddelandet.     |
| `timestamp` | `string` | Tidpunkt för meddelandet.           |
| `unread`    | `bool`   | Markerar om meddelandet är oläst.   |
| `role`      | `string` | Rollnyckel för avsändare/mottagare. |
| `className` | `string` | (Valfritt) Extra CSS-klasser.       |

```jsx
import {
  MessageCard,
  NoticeCard,
  MESSAGE_ROLE_PRESETS,
} from "@minilogg/message-card";

<MessageCard
  sender={{ name: "Anna Lärare", role: "teacher" }}
  recipient={{ name: "Per Persson", role: "guardian" }}
  subject="Utvecklingssamtal"
  preview="Hej Per! Vill du boka tid nästa vecka?"
  timestamp="09:42"
  unread
/>;
```

Rollnycklar: `teacher`, `guardian`, `child`, `admin`, `system`.

## Accessibility

Komponenterna använder semantiska HTML-element och är tillgängliga för skärmläsare. Viktig information presenteras alltid med text och/eller ikon, inte bara färg. Fokusmarkeringar och tangentbordsstöd finns för interaktiva delar.

## Responsivitet

MessageCard och NoticeCard är responsiva och anpassar sig till olika skärmstorlekar. Layouten fungerar bra i listor, grid eller som fristående kort på mobil, surfplatta och desktop.

## Designval

Designen är tydlig och modern med fokus på läsbarhet och snabb överblick. Färg, typografi och ikoner används för att signalera roll och status. Visuellt anpassad för att passa ihop med övriga kort i biblioteket.

## Återanvändbarhet

Komponenterna är generiska och kan användas i olika vyer där meddelanden eller notiser behöver presenteras. De är enkla att utöka med fler fält eller anpassa med egna CSS-klasser.

## Feedback

Förbättringsförslag, buggrapporter och komponentfeedback för `MessageCard` tas tacksamt emot från användare och teammedlemmar.

- [Lämna komponentfeedback](../../issues/new?template=component_feedback.yml&labels=feedback,message-card&title=%5BFeedback%5D+message-card%3A+)
- [Rapportera bugg](../../issues/new?template=bug_report.yml&labels=bug,message-card&title=%5BBug%5D+message-card%3A+)
- [Föreslå förbättring](../../issues/new?template=feature_request.yml&labels=enhancement,message-card&title=%5BFeature%5D+message-card%3A+)

Pågående diskussioner finns under labeln [`message-card`](../../issues?q=is%3Aissue+label%3Amessage-card).
