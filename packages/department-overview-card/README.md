# @minilogg/department-overview-card

## Syfte

DepartmentOverviewCard används för att presentera en översikt av en avdelning i pedagogiska plattformar. Den visar namn, antal barn, antal pedagoger och aktuellt tema på ett tydligt och samlat sätt.

Bygger på `@minilogg/cards`.

## Props

| Prop            | Typ      | Beskrivning                    |
| --------------- | -------- | ------------------------------ |
| `name`          | `string` | Avdelningens namn.             |
| `childrenCount` | `number` | Antal inskrivna barn.          |
| `teachersCount` | `number` | Antal pedagoger.               |
| `theme`         | `string` | Aktuellt tema för avdelningen. |
| `className`     | `string` | (Valfritt) Extra CSS-klasser.  |

```jsx
import { DepartmentOverviewCard } from "@minilogg/department-overview-card";

<DepartmentOverviewCard
  name="Snäckan"
  childrenCount={16}
  teachersCount={3}
  theme="Färger och former"
/>;
```

Passar visuellt ihop med `ChildCard`, `TeacherCard`, `WeeklySchedule`, `MealStatusSelector` och `MessageCard`.

## Accessibility

Komponenten använder semantiska HTML-element och är tillgänglig för skärmläsare. Viktig information presenteras alltid med text, inte bara färg. Fokusmarkeringar och tangentbordsstöd finns för interaktiva delar.

## Responsivitet

DepartmentOverviewCard är responsiv och anpassar sig till olika skärmstorlekar. Layouten fungerar bra både i grid och som fristående kort på mobil, surfplatta och desktop.

## Designval

Designen är tydlig och modern med fokus på överskådlighet. Färg, typografi och ikoner används för att snabbt signalera avdelningens status och tema. Visuellt anpassad för att passa ihop med övriga kort i biblioteket.

## Återanvändbarhet

Komponenten är generisk och kan användas i olika vyer där avdelningsinformation behöver presenteras. Enkel att utöka med fler fält eller anpassa med egna CSS-klasser.

## Feedback

Förbättringsförslag, buggrapporter och komponentfeedback för `DepartmentOverviewCard` tas tacksamt emot från användare och teammedlemmar.

- [Lämna komponentfeedback](../../issues/new?template=component_feedback.yml&labels=feedback,department-overview-card&title=%5BFeedback%5D+department-overview-card%3A+)
- [Rapportera bugg](../../issues/new?template=bug_report.yml&labels=bug,department-overview-card&title=%5BBug%5D+department-overview-card%3A+)
- [Föreslå förbättring](../../issues/new?template=feature_request.yml&labels=enhancement,department-overview-card&title=%5BFeature%5D+department-overview-card%3A+)

Pågående diskussioner finns under labeln [`department-overview-card`](../../issues?q=is%3Aissue+label%3Adepartment-overview-card).
