# @minilogg/inputs

## Syfte

Input- och Textarea-komponenterna används för att samla in information från användaren på ett tydligt och tillgängligt sätt. De erbjuder inbyggd etikett, hjälptext och felhantering för att skapa användarvänliga formulär.

## Användning

```jsx
import { Input, Textarea } from "@minilogg/inputs";

<Input
  label="E-post"
  type="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  hint="Vi delar aldrig din adress"
  error={emailError}
/>

<Textarea label="Beskrivning" rows={6} />
```

## Komponenter

### `Input`

| Prop        | Typ         | Default  | Beskrivning                                      |
| ----------- | ----------- | -------- | ------------------------------------------------ |
| `label`     | `ReactNode` | —        | Etikett ovanför fältet.                          |
| `hint`      | `ReactNode` | —        | Hjälptext (göms när `error` visas).              |
| `error`     | `ReactNode` | —        | Felmeddelande; markerar fältet som ogiltigt.     |
| `type`      | `string`    | `"text"` | HTML input-typ (`text`, `email`, `password`, …). |
| `id`        | `string`    | auto     | Valfritt id; annars genereras ett unikt.         |
| `className` | `string`    | `""`     | Extra CSS-klasser på wrappern.                   |

Övriga props (`value`, `onChange`, `placeholder`, …) vidarebefordras till `<input>`.

### `Textarea`

Samma props som `Input` förutom `type`, plus:

| Prop   | Typ      | Default | Beskrivning              |
| ------ | -------- | ------- | ------------------------ |
| `rows` | `number` | `4`     | Antal synliga textrader. |

## Tillgänglighet

- `label` kopplas till fältet via `htmlFor`/`id`.
- `aria-invalid` och `aria-describedby` sätts automatiskt baserat på `error`/`hint`.

## Responsivitet

Komponenterna är responsiva och anpassar sig till olika skärmstorlekar. Layout och storlek fungerar bra på både mobil, surfplatta och desktop.

## Designval

Designen är enkel och tydlig med fokus på läsbarhet och användarvänlighet. Färg och typografi följer bibliotekets riktlinjer. Felmeddelanden och hjälptexter är tydligt separerade för att minska förvirring.

## Återanvändbarhet

Input och Textarea är generiska och kan användas i alla typer av formulär. De är enkla att utöka med egna props och CSS-klasser samt kan kombineras med andra komponenter.
