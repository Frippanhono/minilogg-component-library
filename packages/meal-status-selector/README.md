# @minilogg/meal-status-selector

## Syfte

MealStatusSelector används för att snabbt och enkelt rapportera hur en måltid upplevdes, t.ex. i förskola eller skola. Den ger ett tydligt och användarvänligt sätt att samla in feedback kring måltider.

## Användning

```jsx
import { MealStatusSelector } from "@minilogg/meal-status-selector";

<MealStatusSelector
  defaultValue="bra"
  onChange={(value) => console.log(value)}
/>;
```

## Props

| Prop           | Typ                       | Default                | Beskrivning                                               |
| -------------- | ------------------------- | ---------------------- | --------------------------------------------------------- |
| `value`        | `string`                  | –                      | Kontrollerat värde (`"bra"` \| `"okej"` \| `"inte-bra"`). |
| `defaultValue` | `string`                  | –                      | Initialt värde i okontrollerat läge.                      |
| `onChange`     | `(value: string) => void` | –                      | Anropas vid val.                                          |
| `label`        | `string`                  | `"Hur gick måltiden?"` | Synlig etikett för radiogroup.                            |
| `hideLabel`    | `boolean`                 | `false`                | Dölj etiketten visuellt (kvar för skärmläsare).           |
| `size`         | `"sm" \| "md" \| "lg"`    | `"md"`                 | Storlek på knapparna.                                     |
| `disabled`     | `boolean`                 | `false`                | Inaktivera hela kontrollen.                               |
| `options`      | `Array`                   | Bra / Okej / Inte bra  | Anpassa knapparna (`value`, `label`, `icon`, `tone`).     |

## Tillgänglighet

- `role="radiogroup"` med tre `role="radio"`-knappar och `aria-checked`.
- Tangentbord: piltangenter byter val, Home/End hoppar till första/sista.
- Färg är inte enda signalen – ikon, text och stark vald-state används tillsammans.
- Stora touch-ytor (≥ 52px höjd, `md` 64px, `lg` 84px).

## Responsivitet

Komponenten är responsiv och anpassar sig till olika skärmstorlekar. Knapparna är stora och lätta att trycka på även på mobil.

## Storybook

[Se live-exempel i Storybook](../../apps/storybook)

Stories i detta paket:

- `Default`
- `Custom`

## Designval

Designen är enkel och lekfull med tydliga färger, ikoner och stor touch-yta. Färg används tillsammans med ikon och text för att signalera val.

## Återanvändbarhet

MealStatusSelector är generisk och kan användas i olika sammanhang där feedback kring status eller upplevelse behövs. Enkel att utöka med egna alternativ och anpassa med CSS.

## Feedback

Förbättringsförslag, buggrapporter och komponentfeedback för `MealStatusSelector` tas tacksamt emot från användare och teammedlemmar.

- [Lämna komponentfeedback](../../issues/new?template=component_feedback.yml&labels=feedback,meal-status-selector&title=%5BFeedback%5D+meal-status-selector%3A+)
- [Rapportera bugg](../../issues/new?template=bug_report.yml&labels=bug,meal-status-selector&title=%5BBug%5D+meal-status-selector%3A+)
- [Föreslå förbättring](../../issues/new?template=feature_request.yml&labels=enhancement,meal-status-selector&title=%5BFeature%5D+meal-status-selector%3A+)

Pågående diskussioner finns under labeln [`meal-status-selector`](../../issues?q=is%3Aissue+label%3Ameal-status-selector).
