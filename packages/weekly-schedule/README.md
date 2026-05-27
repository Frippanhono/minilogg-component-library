# @minilogg/weekly-schedule


## Syfte

WeeklySchedule används för att visa en överskådlig veckovy med händelser, tider och layout. Den hjälper användaren att snabbt få en överblick över planerade aktiviteter utan att behöva navigera i ett komplext kalendersystem.

## Användning

```jsx
import { WeeklySchedule } from "@minilogg/weekly-schedule";

<WeeklySchedule
  title="Vecka 19"
  events={[
    { day: "mon", start: "09:00", end: "10:30", title: "Samling", tone: "info" },
    { day: "wed", start: "14:00", title: "Skapande verkstad", tone: "success" },
    { day: "fri", start: "11:30", title: "Lunch & vila" },
  ]}
/>;
```

## Komponenter

| Komponent         | Beskrivning                                                |
| ----------------- | ---------------------------------------------------------- |
| `WeeklySchedule`  | Container som visar dagar i en grid och händelser per dag. |
| `ScheduleEvent`   | Ett enskilt händelsekort (tid, titel, beskrivning, ton).   |
| `WEEKDAYS_SV`     | Standarduppsättning veckodagar mån–sön på svenska.         |

## Props – `WeeklySchedule`

| Prop         | Typ                                                            | Default                    | Beskrivning                                              |
| ------------ | -------------------------------------------------------------- | -------------------------- | -------------------------------------------------------- |
| `days`       | `Array<{ key, short, label }>`                                 | `WEEKDAYS_SV.slice(0, 5)`  | Dagar som ska visas (mån–fre som standard).              |
| `events`     | `Array<Event>`                                                 | `[]`                       | Händelser där `day` matchar någon `days[i].key`.         |
| `title`      | `ReactNode`                                                    | –                          | Valfri rubrik ovanför schemat.                           |
| `emptyLabel` | `ReactNode`                                                    | `"Inga händelser"`         | Text som visas i dagar utan händelser.                   |

### Event-objekt

| Fält          | Typ                                                              | Beskrivning                              |
| ------------- | ---------------------------------------------------------------- | ---------------------------------------- |
| `day`         | `string`                                                         | Måste matcha `days[i].key`.              |
| `title`       | `ReactNode`                                                      | Händelsens rubrik.                       |
| `start`       | `string`                                                         | T.ex. `"09:00"` (sortering sker på den). |
| `end`         | `string`                                                         | T.ex. `"10:30"`.                         |
| `description` | `ReactNode`                                                      | Valfri beskrivning.                      |
| `tone`        | `"neutral" \| "info" \| "success" \| "warning" \| "danger"`      | Färgton på kortet.                       |
| `onClick`     | `(e) => void`                                                    | Gör kortet klickbart (Enter/Space).      |

## Responsivitet

- Bred skärm: en kolumn per dag (CSS-grid med `repeat(N, 1fr)`).
- Smal skärm (≤ 720 px): staplas till en kolumn. Då visas fullt dagsnamn
  (`label`) som rubrik i stället för den korta etiketten (`short`).

## Accessibility

WeeklySchedule använder semantiska HTML-element och är tillgänglig för skärmläsare. Händelser och dagar presenteras alltid med text och/eller ikon, inte bara färg. Tangentbordsstöd finns för klickbara händelser.

## Designval

Designen är enkel och tydlig med fokus på överskådlighet. Färg, typografi och grid-layout används för att skapa struktur och snabb överblick. Färgtoner signalerar typ av händelse.

## Återanvändbarhet

WeeklySchedule är generisk och kan användas i alla sammanhang där en veckovy behövs. Den är enkel att utöka med fler fält, anpassa med egna CSS-klasser och kombinera med andra komponenter.
